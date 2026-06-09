export default function Certificate() {
  return (
    <section id="certificate" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-ark-300 to-ark-500 bg-clip-text text-transparent">
              链上 NFT 证书
            </span>
          </h2>
          <p className="text-gray-500">完成课程，获得不可篡改的数字凭证</p>
        </div>

        {/* 证书预览 */}
        <div className="glass rounded-3xl p-8 sm:p-12 border border-ark-500/20 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ark-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px]"></div>

          <div className="relative z-10">
            {/* 证书卡片 */}
            <div className="glass rounded-2xl p-8 border border-ark-500/30 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ark-400 to-ark-600 flex items-center justify-center font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Arkie Academy</h3>
                    <p className="text-xs text-gray-500">Certificate of Completion</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">NFT #00001</div>
                  <div className="text-xs text-ark-400">BSC Network</div>
                </div>
              </div>

              <div className="text-center py-8">
                <p className="text-sm text-gray-400 mb-2">特此证明</p>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-ark-300 to-ark-500 bg-clip-text text-transparent mb-2">
                  您的地址 0x...xxxx
                </h4>
                <p className="text-gray-400 mb-6">已成功完成以下课程学习</p>
                <h5 className="text-xl font-bold mb-1">阿奇AI入门 - 你的第一个AI助手</h5>
                <p className="text-sm text-gray-500">共 8 课时 · 完成日期: 2024.xx.xx</p>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600 border-t border-gray-800 pt-4">
                <span>🔗 链上验证: 已确认</span>
                <span>📜 合约: 0x...</span>
                <span>⛽ BSC Mainnet</span>
              </div>
            </div>

            {/* 特性说明 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🔒', title: '不可篡改', desc: '链上存储，永久有效' },
                { icon: '🌐', title: '全球可查', desc: '任何人都可验证' },
                { icon: '💼', title: '简历加分', desc: '展示你的AI技能' },
              ].map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
