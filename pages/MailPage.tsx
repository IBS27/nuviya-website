import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { TransformationSection } from '../components/TransformationSection';
import { BentoGrid } from '../components/BentoGrid';
import { WorkflowSection } from '../components/WorkflowSection';
import { MemorySection } from '../components/MemorySection';
import { SmartTriage } from '../components/SmartTriage';
import { Manifesto } from '../components/Manifesto';
import { Footer } from '../components/Footer';

export function MailPage() {
  return (
    <div className="min-h-screen text-white selection:bg-[#7B2CBF] selection:text-white">
      <Navbar title="Nuviya Mail" />

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
    </div>
  );
}
