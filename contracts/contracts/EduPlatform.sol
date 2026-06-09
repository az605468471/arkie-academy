// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title EduPlatform - Arkie Academy 教育平台合约
 * @notice 课程管理 + 支付 + 进度记录 + 证书NFT
 * @dev 部署在BSC链上，Gas费低
 */
contract EduPlatform {
    // ============ 数据结构 ============

    struct Course {
        uint256 id;
        string name;            // 课程名称
        string description;     // 课程描述
        string thumbnail;       // 封面图片 (IPFS hash)
        uint256 price;          // 价格 (USDT, 6位小数)
        address instructor;     // 讲师钱包
        uint256 totalLessons;   // 总课时数
        bool isActive;          // 是否上架
        uint256 createdAt;      // 创建时间
        uint256 totalStudents;  // 总学员数
    }

    struct Purchase {
        uint256 courseId;
        uint256 purchasedAt;
        uint256 progress;       // 进度百分比 0-100
        bool completed;
        uint256 certificateId;  // 证书NFT tokenId
    }

    // ============ 状态变量 ============

    address public owner;
    string public platformName = "Arkie Academy";
    uint256 public platformFee = 10; // 平台抽成 10%

    uint256 public nextCourseId = 1;
    uint256 public nextCertificateId = 1;

    mapping(uint256 => Course) public courses;
    // user => courseId => Purchase
    mapping(address => mapping(uint256 => Purchase)) public purchases;
    // 用户已购买的课程列表
    mapping(address => uint256[]) public userCourses;
    // 课程的学员列表
    mapping(uint256 => address[]) public courseStudents;
    // 学员是否已购买课程
    mapping(address => mapping(uint256 => bool)) public hasPurchased;

    // ============ 事件 ============

    event CourseCreated(uint256 indexed courseId, string name, address instructor, uint256 price);
    event CourseUpdated(uint256 indexed courseId, string name, uint256 price);
    event CourseToggled(uint256 indexed courseId, bool isActive);
    event CoursePurchased(uint256 indexed courseId, address indexed student, uint256 price);
    event LessonCompleted(uint256 indexed courseId, address indexed student, uint256 lessonNumber);
    event CourseCompleted(uint256 indexed courseId, address indexed student, uint256 certificateId);
    event CertificateMinted(uint256 indexed certificateId, address indexed student, uint256 courseId);
    event FundsWithdrawn(address indexed to, uint256 amount);

    // ============ 修饰符 ============

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    // ============ 构造函数 ============

    constructor() {
        owner = msg.sender;
    }

    // ============ 课程管理 (仅 Owner) ============

    /**
     * @notice 创建课程
     */
    function createCourse(
        string memory _name,
        string memory _description,
        string memory _thumbnail,
        uint256 _price,
        address _instructor,
        uint256 _totalLessons
    ) external onlyOwner returns (uint256) {
        require(bytes(_name).length > 0, "Name required");
        require(_price > 0, "Price must > 0");
        require(_instructor != address(0), "Invalid instructor");

        uint256 courseId = nextCourseId++;

        courses[courseId] = Course({
            id: courseId,
            name: _name,
            description: _description,
            thumbnail: _thumbnail,
            price: _price,
            instructor: _instructor,
            totalLessons: _totalLessons,
            isActive: true,
            createdAt: block.timestamp,
            totalStudents: 0
        });

        emit CourseCreated(courseId, _name, _instructor, _price);
        return courseId;
    }

    /**
     * @notice 更新课程信息
     */
    function updateCourse(
        uint256 _courseId,
        string memory _name,
        string memory _description,
        string memory _thumbnail,
        uint256 _price,
        uint256 _totalLessons
    ) external onlyOwner {
        require(courses[_courseId].id > 0, "Course not found");

        Course storage course = courses[_courseId];
        course.name = _name;
        course.description = _description;
        course.thumbnail = _thumbnail;
        course.price = _price;
        course.totalLessons = _totalLessons;

        emit CourseUpdated(_courseId, _name, _price);
    }

    /**
     * @notice 上架/下架课程
     */
    function toggleCourse(uint256 _courseId) external onlyOwner {
        require(courses[_courseId].id > 0, "Course not found");
        courses[_courseId].isActive = !courses[_courseId].isActive;
        emit CourseToggled(_courseId, courses[_courseId].isActive);
    }

    // ============ 购买课程 ============

    /**
     * @notice 购买课程 (用户支付USDT)
     * @dev 前端调用前需要先 approve 本合约的USDT花费额度
     */
    function purchaseCourse(uint256 _courseId) external {
        Course storage course = courses[_courseId];
        require(course.id > 0, "Course not found");
        require(course.isActive, "Course not active");
        require(!hasPurchased[msg.sender][_courseId], "Already purchased");

        // 计算金额
        uint256 instructorAmount = course.price * (100 - platformFee) / 100;
        uint256 platformAmount = course.price - instructorAmount;

        // 转账（简化版：直接用 BNB，正式版可用 USDT）
        // 正式版需要集成 IERC20 transferFrom
        require(msg.value >= course.price, "Insufficient payment");

        // 记录购买
        hasPurchased[msg.sender][_courseId] = true;
        purchases[msg.sender][_courseId] = Purchase({
            courseId: _courseId,
            purchasedAt: block.timestamp,
            progress: 0,
            completed: false,
            certificateId: 0
        });

        userCourses[msg.sender].push(_courseId);
        courseStudents[_courseId].push(msg.sender);
        course.totalStudents++;

        emit CoursePurchased(_courseId, msg.sender, course.price);

        // 转账给讲师
        if (instructorAmount > 0) {
            payable(course.instructor).transfer(instructorAmount);
        }
        if (platformAmount > 0) {
            payable(owner).transfer(platformAmount);
        }
    }

    // ============ 学习进度 ============

    /**
     * @notice 完成某一课时
     */
    function completeLesson(uint256 _courseId, uint256 _lessonNumber) external {
        require(hasPurchased[msg.sender][_courseId], "Not purchased");
        require(_lessonNumber > 0, "Invalid lesson");

        Purchase storage purchase = purchases[msg.sender][_courseId];
        Course storage course = courses[_courseId];

        // 计算进度百分比
        purchase.progress = (_lessonNumber * 100) / course.totalLessons;

        emit LessonCompleted(_courseId, msg.sender, _lessonNumber);

        // 如果完成所有课时，铸造证书
        if (purchase.progress >= 100 && !purchase.completed) {
            purchase.completed = true;
            uint256 certId = nextCertificateId++;
            purchase.certificateId = certId;

            emit CertificateMinted(certId, msg.sender, _courseId);
            emit CourseCompleted(_courseId, msg.sender, certId);
        }
    }

    // ============ 查询函数 ============

    /**
     * @notice 获取课程详情
     */
    function getCourse(uint256 _courseId) external view returns (Course memory) {
        require(courses[_courseId].id > 0, "Course not found");
        return courses[_courseId];
    }

    /**
     * @notice 获取用户购买记录
     */
    function getPurchase(address _user, uint256 _courseId) external view returns (Purchase memory) {
        require(hasPurchased[_user][_courseId], "Not purchased");
        return purchases[_user][_courseId];
    }

    /**
     * @notice 获取用户所有课程ID
     */
    function getUserCourses(address _user) external view returns (uint256[] memory) {
        return userCourses[_user];
    }

    /**
     * @notice 获取课程学员数
     */
    function getStudentCount(uint256 _courseId) external view returns (uint256) {
        return courseStudents[_courseId].length;
    }

    /**
     * @notice 验证证书
     */
    function verifyCertificate(address _student, uint256 _courseId) external view returns (bool) {
        return purchases[_student][_courseId].completed;
    }

    // ============ 资金管理 ============

    /**
     * @notice 提取平台资金
     */
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance");
        payable(owner).transfer(balance);
        emit FundsWithdrawn(owner, balance);
    }
}
