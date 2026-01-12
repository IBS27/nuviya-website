import { Component, ErrorInfo, ReactNode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { HomePage } from './pages/HomePage';
import { MailPage } from './pages/MailPage';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mail" element={<MailPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
}

export default App;
