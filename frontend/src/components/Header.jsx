import { useWallet } from '../utils/wallet';

export default function Header() {
  const { account, isConnected, isConnecting, connectWallet, disconnectWallet } = useWallet();

  const shortAddr = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-ark-400 to-ark-600 flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-ark-300 to-ark-500 bg-clip-text text-transparent">
              Arkie Academy
            </h1>
            <p className="text-[10px] text-gray-500 -mt-0.5">阿奇学院 · 去中心化AI教育</p>
          </div>
        </div>

        {/* 导航 */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm text-gray-400 hover:text-ark-400 transition-colors">课程</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-ark-400 transition-colors">关于</a>
          <a href="#certificate" className="text-sm text-gray-400 hover:text-ark-400 transition-colors">证书</a>
        </nav>

        {/* 钱包按钮 */}
        {isConnected ? (
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 glass px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-ark-400 animate-pulse"></div>
              <span className="text-sm text-gray-300">{shortAddr(account)}</span>
            </div>
            <button
              onClick={disconnectWallet}
              className="text-xs text-gray-500 hover:text-red-400 transition-colors"
            >
              断开
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            disabled={isConnecting}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-ark-500 to-ark-600 text-white text-sm font-medium hover:from-ark-400 hover:to-ark-500 transition-all glow-green disabled:opacity-50"
          >
            {isConnecting ? '连接中...' : '连接钱包'}
          </button>
        )}
      </div>
    </header>
  );
}
