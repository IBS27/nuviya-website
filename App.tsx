import { Component, ErrorInfo, ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransformationSection } from './components/TransformationSection';
import { BentoGrid } from './components/BentoGrid';
import { WorkflowSection } from './components/WorkflowSection';
import { MemorySection } from './components/MemorySection';
import { SmartTriage } from './components/SmartTriage';
import { Manifesto } from './components/Manifesto';
import { Footer } from './components/Footer';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#030105] text-white">
          <div className="text-center p-8">
            <h1 className="text-2xl font-display font-light mb-4">Something went wrong</h1>
            <p className="text-[#A1A1AA] mb-6">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#7B2CBF] rounded-full text-white hover:bg-[#9D4EDD] transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen text-white selection:bg-[#7B2CBF] selection:text-white">
        <Navbar />

        <main id="main-content">
          <Hero />
          <TransformationSection />
          <BentoGrid />
          <WorkflowSection />
          <MemorySection />
          <SmartTriage />
          <Manifesto />
        </main>

        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </ErrorBoundary>
  );
}

export default App;
