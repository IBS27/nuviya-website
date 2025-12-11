import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TransformationSection } from './components/TransformationSection';
import { BentoGrid } from './components/BentoGrid';
import { WorkflowSection } from './components/WorkflowSection';
import { SmartTriage } from './components/SmartTriage';
// import { SocialProof } from './components/SocialProof';
import { Manifesto } from './components/Manifesto';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-[#7B2CBF] selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <TransformationSection />
        <BentoGrid />
        <WorkflowSection />
        <SmartTriage />
        <Manifesto />
        {/* <SocialProof /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;