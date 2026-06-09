export default function Hero() {
  const stats = [
    { label: 'AI 课程', value: '12+' },
    { label: '链上学员', value: '500+' },
    { label: '颁发证书', value: '200+' },
  ];

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-ark-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* 标签 */}
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-ark-400 animate-pulse"></span>
          <span className="text-sm text-gray-400">基于 BSC 区块链 · 钱包即身份</span>
        </div>

        {/* 标题 */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            学 AI，用
          </span>
          <br />
          <span className="bg-gradient-to-r from-ark-300 to-ark-500 bg-clip-text text-transparent glow-text">
            阿奇 AI
          </span>
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {' '}改变未来
          </span>
        </h1>

        {/* 副标题 */}
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          零门槛入门 AI 工具，完成课程即获链上 NFT 证书，不可篡改、永久可查。
          用钱包连接，开启你的 AI 学习之旅。
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#courses" className="px-8 py-3 rounded-full bg-gradient-to-r from-ark-500 to-ark-600 text-white font-medium hover:from-ark-400 hover:to-ark-500 transition-all glow-green text-center">
            开始学习 →
          </a>
          <a href="#about" className="px-8 py-3 rounded-full glass text-gray-300 font-medium hover:text-white hover:border-gray-600 transition-all text-center">
            了解更多
          </a>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-ark-400 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
