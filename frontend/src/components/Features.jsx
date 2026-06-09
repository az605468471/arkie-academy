export default function Features() {
  const features = [
    {
      icon: '🔗',
      title: '钱包即身份',
      desc: '无需注册账号，用MetaMask/Trust Wallet连接即开始学习。',
    },
    {
      icon: '📜',
      title: '链上证书',
      desc: '完成课程即铸造NFT证书，永久在链上，不可篡改。',
    },
    {
      icon: '🤖',
      title: '以阿奇AI为核心',
      desc: '全程使用阿奇AI教学，学完即可将AI应用于工作。',
    },
    {
      icon: '💰',
      title: 'BNB支付',
      desc: '用BNB直接购买课程，去中心化支付，无需第三方。',
    },
    {
      icon: '🌐',
      title: '全球可访问',
      desc: '部署在BSC链上，全球任何地方都能访问，无国界限制。',
    },
    {
      icon: '🔒',
      title: '数据上链',
      desc: '学习进度、购买记录全部上链，你拥有自己的数据。',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ark-300 to-ark-500 bg-clip-text text-transparent">
              为什么选择阿奇学院
            </span>
          </h2>
          <p className="text-gray-500">去中心化教育的新范式</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 hover:border-ark-500/30 transition-all group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ark-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
