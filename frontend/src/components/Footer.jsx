export default function Footer() {
  return (
    <footer className="glass border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-ark-400 to-ark-600 flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span className="font-bold text-lg">Arkie Academy</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              去中心化AI教育平台，用钱包直接学习，链上证书认证。让每一位学员都能拥有不可篡改的数字凭证。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-300 font-medium mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#courses" className="text-gray-500 hover:text-ark-400 transition-colors">课程中心</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-ark-400 transition-colors">关于阿奇</a></li>
              <li><a href="#certificate" className="text-gray-500 hover:text-ark-400 transition-colors">证书验证</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-ark-400 transition-colors">联系合作</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-300 font-medium mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>📧 Email: arkie@academy.com</li>
              <li>🐦 Twitter: @ArkieAcademy</li>
              <li>💬 Discord: Arkie Academy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 text-sm">
          © 2024 Arkie Academy. Built on BSC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
