import { useState } from 'react';

// 模拟课程数据（后续将从链上读取）
const COURSES = [
  {
    id: 1,
    name: '阿奇AI入门 - 你的第一个AI助手',
    description: '从零开始学会使用阿奇AI，掌握对话、写作、分析三大核心能力。',
    category: '入门',
    lessons: 8,
    price: '0.01 BNB',
    priceUSD: '$6',
    students: 128,
    level: '🟢 入门',
    color: 'from-green-500/20 to-emerald-600/20',
    borderColor: 'border-green-500/30',
  },
  {
    id: 2,
    name: '提示词工程 - 让AI听懂你的话',
    description: '学习Prompt Engineering技巧，用精准的提示词获得高质量输出。',
    category: '核心技能',
    lessons: 12,
    price: '0.02 BNB',
    priceUSD: '$12',
    students: 89,
    level: '🟡 进阶',
    color: 'from-yellow-500/20 to-amber-600/20',
    borderColor: 'border-yellow-500/30',
  },
  {
    id: 3,
    name: 'AI文案写作 - 10倍提升内容产出',
    description: '用AI写公众号文章、产品文案、营销邮件，效率提升10倍。',
    category: '应用实战',
    lessons: 10,
    price: '0.02 BNB',
    priceUSD: '$12',
    students: 67,
    level: '🟡 进阶',
    color: 'from-blue-500/20 to-cyan-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 4,
    name: 'AI数据分析师 - 从Excel到智能报表',
    description: '用AI处理数据、生成图表、撰写分析报告，变身数据达人。',
    category: '应用实战',
    lessons: 14,
    price: '0.03 BNB',
    priceUSD: '$18',
    students: 45,
    level: '🟡 进阶',
    color: 'from-purple-500/20 to-violet-600/20',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 5,
    name: 'AI自媒体运营 - 全平台内容矩阵',
    description: 'AI辅助脚本写作、视频剪辑、图文创作，打造自媒体矩阵。',
    category: '商业变现',
    lessons: 16,
    price: '0.03 BNB',
    priceUSD: '$18',
    students: 34,
    level: '🔴 高级',
    color: 'from-red-500/20 to-rose-600/20',
    borderColor: 'border-red-500/30',
  },
  {
    id: 6,
    name: 'AI商业实战 - 从工具到变现',
    description: '用AI搭建自动化工作流，实现被动收入，打造AI驱动的商业模式。',
    category: '商业变现',
    lessons: 20,
    price: '0.05 BNB',
    priceUSD: '$30',
    students: 22,
    level: '🔴 高级',
    color: 'from-orange-500/20 to-red-600/20',
    borderColor: 'border-orange-500/30',
  },
];

export default function CourseList() {
  const [filter, setFilter] = useState('全部');
  const categories = ['全部', '入门', '核心技能', '应用实战', '商业变现'];

  const filtered = filter === '全部' ? COURSES : COURSES.filter(c => c.category === filter);

  return (
    <section id="courses" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ark-300 to-ark-500 bg-clip-text text-transparent">
              课程中心
            </span>
          </h2>
          <p className="text-gray-500">连接钱包，购买课程，开始你的AI学习之旅</p>
        </div>

        {/* 分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-ark-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 课程网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <div
              key={course.id}
              className={`glass rounded-2xl overflow-hidden border ${course.borderColor} hover:scale-[1.02] transition-all duration-300 cursor-pointer group`}
            >
              {/* 课程封面 */}
              <div className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center relative`}>
                <span className="text-5xl opacity-30 group-hover:opacity-50 transition-opacity">
                  {course.level.split(' ')[0]}
                </span>
                <div className="absolute top-3 left-3">
                  <span className="text-xs glass px-3 py-1 rounded-full text-gray-300">{course.level}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="text-xs glass px-3 py-1 rounded-full text-gray-300">{course.lessons} 课时</span>
                </div>
              </div>

              {/* 课程信息 */}
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-ark-400 transition-colors">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-ark-400">{course.price}</span>
                    <span className="text-xs text-gray-600 ml-2">({course.priceUSD})</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    {course.students} 人已学
                  </div>
                </div>

                <button className="w-full mt-4 py-2.5 rounded-xl bg-ark-500/20 text-ark-400 font-medium hover:bg-ark-500 hover:text-white transition-all border border-ark-500/30">
                  连接钱包购买
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
