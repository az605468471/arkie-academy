import { WalletProvider } from './utils/wallet';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CourseList from './components/CourseList';
import Certificate from './components/Certificate';
import Footer from './components/Footer';

function App() {
  return (
    <WalletProvider>
      <div className="gradient-bg min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <CourseList />
          <Certificate />
        </main>
        <Footer />
      </div>
    </WalletProvider>
  );
}

export default App;
