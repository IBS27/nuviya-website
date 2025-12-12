import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Mail, FileText, CheckCircle2, ArrowRight, Zap, Bot } from 'lucide-react';

export const WorkflowSection: FC = () => {
  return (
    <section id="agents" className="py-24 md:py-32 px-4 relative overflow-hidden scroll-mt-24">
      {/* Background Ambience - Local glow to supplement global */}
      {/* Fixed opacity-05 typo to opacity-5 to reduce intensity */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#7B2CBF] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-[#9D4EDD] uppercase">Modular Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-4 md:mb-6">
            Design your perfect <br className="hidden sm:inline" /> <span className="text-[#A1A1AA]">digital workforce.</span>
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Create custom agents for specific senders or topics. Connect triggers to actions with a visual builder that adapts to your mental model.
          </p>
        </div>

        {/* Workflow Diagram */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Vertical stack on mobile, horizontal on desktop */}
          <div className="pb-8 md:pb-12 px-4">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-8 relative items-stretch md:items-center">

                {/* Mobile: Single continuous dotted line behind all nodes */}
                <div className="md:hidden absolute left-1/2 top-[60px] bottom-[60px] -translate-x-1/2 z-0 pointer-events-none">
                  {/* Dotted line */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-white/10" />
                  {/* Animated dot 1 */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#9D4EDD] shadow-[0_0_8px_#9D4EDD] animate-flow-down" />
                  {/* Animated dot 2 - offset */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#9D4EDD] shadow-[0_0_8px_#9D4EDD] animate-flow-down-delayed" />
                </div>

                {/* Connecting Lines (SVG Layer) - Hidden on mobile */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(123, 44, 191, 0)" />
                      <stop offset="50%" stopColor="rgba(123, 44, 191, 0.5)" />
                      <stop offset="100%" stopColor="rgba(123, 44, 191, 0)" />
                    </linearGradient>
                  </defs>

                  {/* Path 1: Trigger to Agent */}
                  <path d="M28,50 C33,50 36,50 39,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                  <motion.circle r="0.4" fill="#9D4EDD">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M28,50 C33,50 36,50 39,50" />
                  </motion.circle>

                  {/* Path 2: Agent to Action */}
                  <path d="M61,50 C66,50 69,50 72,50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
                  <motion.circle r="0.4" fill="#9D4EDD">
                    <animateMotion dur="2s" repeatCount="indefinite" path="M61,50 C66,50 69,50 72,50" />
                  </motion.circle>
                </svg>

                {/* Node 1: Trigger */}
                <div className="relative z-10">
                  <div>
                    <div className="text-xs font-mono text-[#A1A1AA] mb-2 md:mb-3 uppercase tracking-wider pl-1">Trigger</div>
                    <GlassCard className="p-5 border-[#7B2CBF]/30 bg-[#0a0510]/80 shadow-[0_0_30px_rgba(123,44,191,0.1)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center text-[#9D4EDD]">
                          <Mail size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">New Email</div>
                          <div className="text-xs text-[#A1A1AA]">from @client.com</div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded p-3 text-xs text-[#A1A1AA] border border-white/5 font-mono">
                        Subject: "Project Budget V2"
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {/* Node 2: The Agent */}
                <div className="relative z-10">
                  <div>
                    <div className="text-xs font-mono text-[#9D4EDD] mb-2 md:mb-3 uppercase tracking-wider pl-1 flex items-center gap-2">
                       <Bot size={12} />
                       Active Agent
                    </div>
                    <GlassCard className="p-0 overflow-hidden border-[#9D4EDD]/50 shadow-[0_0_50px_rgba(123,44,191,0.15)] bg-[#130822]/90">
                      {/* Agent Header */}
                      <div className="bg-gradient-to-r from-[#7B2CBF]/20 to-transparent p-4 border-b border-white/10">
                         <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-white">Budget Analyzer</span>
                            <div className="flex gap-1">
                               <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                               <span className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-50" />
                            </div>
                         </div>
                      </div>
                      
                      {/* Agent Logic */}
                      <div className="p-5 space-y-4">
                         <div className="flex gap-3">
                            <div className="mt-1 w-6 h-6 rounded bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                               <FileText size={12} className="text-[#A1A1AA]" />
                            </div>
                            <div>
                               <div className="text-xs text-[#A1A1AA] mb-1">Step 1: Analysis</div>
                               <div className="text-sm text-white">Extract PDF attachments and compare with Q4_Budget.csv</div>
                            </div>
                         </div>
                         
                         <div className="h-4 w-0.5 bg-white/10 ml-3" />

                         <div className="flex gap-3">
                             <div className="mt-1 w-6 h-6 rounded bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                               <Zap size={12} className="text-[#9D4EDD]" />
                            </div>
                            <div>
                               <div className="text-xs text-[#A1A1AA] mb-1">Step 2: Reasoning</div>
                               <div className="text-sm text-white">If variance {'>'} 10%, flag for review. Else, auto-approve.</div>
                            </div>
                         </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {/* Node 3: Output */}
                <div className="relative z-10">
                  <div>
                    <div className="text-xs font-mono text-[#A1A1AA] mb-2 md:mb-3 uppercase tracking-wider pl-1">Action</div>
                    <GlassCard className="p-5 border-white/10 bg-[#0a0510]/80">
                       <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                          <CheckCircle2 size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Draft Reply</div>
                          <div className="text-xs text-[#A1A1AA]">Awaiting confirmation</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-white/10 to-transparent rounded-lg p-3 border border-white/5">
                         <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-[#A1A1AA] uppercase">Generated Draft</span>
                            <ArrowRight size={10} className="text-[#A1A1AA]" />
                         </div>
                         <p className="text-xs text-white/80 italic leading-relaxed">
                            "Thanks for sending. I've reviewed the budget variance and it falls within our approved range..."
                         </p>
                      </div>
                    </GlassCard>
                  </div>
                </div>

            </div>
          </div>
        </div>

        {/* Feature List Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 max-w-4xl mx-auto px-4">
           {[
              { title: "Natural Language", desc: "Describe the workflow in plain English. Nuviya builds the logic nodes for you." },
              { title: "Secure Context", desc: "Agents run locally or in a private cloud. Your data never trains public models." },
              { title: "Multi-Modal", desc: "Process text, PDFs, spreadsheets, and calendar invites seamlessly." }
           ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                 <h4 className="text-white font-medium mb-1 md:mb-2">{item.title}</h4>
                 <p className="text-sm text-[#A1A1AA]">{item.desc}</p>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};