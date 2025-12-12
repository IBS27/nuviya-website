import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { Calendar, Bot, Share2, Layers, Check, Slack, Github } from 'lucide-react';
import { Logo } from './Logo';

export const BentoGrid: FC = () => {
  return (
    <section className="py-16 md:py-32 px-4 w-full max-w-7xl mx-auto" id="features">
      <div className="mb-10 md:mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white mb-4 md:mb-6">Built for the Agentic Age</h2>
        <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">Traditional email clients display messages. Nuviya acts on them.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[340px]">
        
        {/* Card 1: Automator (Large) - Spans 2 cols */}
        <GlassCard className="md:col-span-2 md:row-span-1 p-0 relative group overflow-hidden">
           {/* Inner layout wrapper to enforce height and flex */}
           <div className="flex flex-col md:flex-row h-full">
             {/* Left Content */}
             <div className="p-6 md:p-8 relative z-20 flex flex-col justify-between w-full md:w-[45%] bg-gradient-to-r from-[#030105]/50 to-transparent">
                <div>
                    <div className="w-10 h-10 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center mb-4 text-[#9D4EDD]">
                    <Calendar size={20} />
                    </div>
                    <h3 className="text-2xl text-white font-medium mb-2">Calendar Aware</h3>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">Nuviya negotiates time slots and updates your calendar without you leaving the inbox.</p>
                </div>
                
                {/* Status Indicator */}
                <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-[#9D4EDD] text-xs font-medium w-fit">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD] animate-pulse" />
                   <span>Sync Active</span>
                </div>
             </div>

             {/* Right Visualization: Mini Calendar UI */}
             <div className="relative w-full md:w-[55%] bg-[#0a0510]/30 md:border-l border-white/5 h-64 md:h-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                {/* Calendar Header */}
                <div className="absolute top-0 left-0 right-0 flex justify-between px-6 py-4 border-b border-white/5 text-[10px] text-[#52525B] font-mono uppercase tracking-wider bg-[#030105]/50 backdrop-blur-sm z-10">
                   <span>Mon 24</span>
                   <span>Tue 25</span>
                   <span>Wed 26</span>
                </div>

                {/* Events Grid */}
                <div className="relative h-full pt-16 px-4 grid grid-cols-3 gap-4">
                   {/* Column 1 */}
                   <div className="relative h-full">
                       <div className="absolute top-8 w-full h-24 rounded bg-white/5 border border-white/5 p-2 flex flex-col gap-2">
                          <div className="w-8 h-1 bg-white/20 rounded-full" />
                          <div className="w-12 h-1 bg-white/10 rounded-full" />
                       </div>
                   </div>

                   {/* Column 2 (Active) */}
                   <div className="relative h-full">
                       {/* The Proposal (Ghost) */}
                       <div className="absolute top-20 w-full h-20 rounded border border-dashed border-[#9D4EDD]/30 p-2 opacity-50">
                       </div>

                       {/* The Confirmed Event */}
                       <div className="absolute top-20 w-full h-20 rounded bg-[#7B2CBF]/20 border border-[#7B2CBF] p-3 shadow-[0_0_20px_rgba(123,44,191,0.15)] flex flex-col justify-between group-hover:scale-105 transition-transform duration-500 origin-top">
                          <div className="flex justify-between items-start">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#9D4EDD]" />
                             <Check size={10} className="text-[#9D4EDD]" />
                          </div>
                          <div className="space-y-1.5">
                             <div className="w-full h-1.5 bg-[#9D4EDD] rounded-full" />
                             <div className="w-1/2 h-1.5 bg-[#9D4EDD]/40 rounded-full" />
                          </div>
                       </div>
                   </div>

                   {/* Column 3 */}
                   <div className="relative h-full">
                      <div className="absolute top-32 w-full h-16 rounded bg-white/5 border border-white/5 p-2">
                          <div className="w-8 h-1 bg-white/20 rounded-full" />
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </GlassCard>

        {/* Card 2: Summarizer (Tall) - Spans 2 rows */}
        <GlassCard className="md:col-span-1 md:row-span-2 p-0 relative overflow-hidden group">
           {/* Background Grid - Consistent with other cards */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:25px_25px] opacity-20 pointer-events-none" />
           <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#7B2CBF]/10 to-transparent blur-2xl" />

          <div className="flex flex-col h-full relative z-10 pointer-events-none">
            <div className="p-8 pb-0 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center mb-4 text-[#9D4EDD]">
                <Bot size={20} />
              </div>
              <h3 className="text-2xl text-white font-medium mb-2">Instant Synthesis</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Chaos into clarity. Nuviya turns messy threads into clear summaries.</p>
            </div>

            {/* Visual: Elegant Flow */}
            <div className="flex-1 relative flex flex-col items-center justify-center py-8">
               
               {/* 1. The Stack (Input) - Disorganized Threads */}
               <div className="relative w-full h-40 flex justify-center items-center mb-2 z-10">
                  
                  {/* Thread 1: Far Left, Tilted */}
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [-12, -15, -12], x: [-60, -55, -60] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-32 sm:w-40 md:w-44 h-20 sm:h-24 md:h-28 bg-[#0a0510] border border-white/10 rounded-xl p-3 md:p-4 shadow-xl origin-bottom-right flex flex-col justify-center"
                    style={{ x: -50, rotate: -12 }}
                  >
                     <div className="space-y-2 opacity-60">
                         <div className="h-1.5 w-full bg-white/20 rounded-full" />
                         <div className="h-1.5 w-2/3 bg-white/20 rounded-full" />
                     </div>
                  </motion.div>

                  {/* Thread 2: Far Right, Opposing Tilt */}
                  <motion.div
                    animate={{ y: [0, 8, 0], rotate: [10, 15, 10], x: [50, 45, 50] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="absolute w-32 sm:w-40 md:w-44 h-20 sm:h-24 md:h-28 bg-[#0a0510] border border-white/10 rounded-xl p-3 md:p-4 shadow-xl origin-bottom-left flex flex-col justify-center"
                    style={{ x: 50, rotate: 10 }}
                  >
                      <div className="space-y-2 opacity-60">
                         <div className="h-1.5 w-3/4 bg-white/20 rounded-full" />
                         <div className="h-1.5 w-full bg-white/20 rounded-full" />
                         <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
                     </div>
                  </motion.div>

                   {/* Thread 3: Background Center, Slight Tilt */}
                  <motion.div
                    animate={{ y: [0, -4, 0], rotate: [-5, 0, -5] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute w-32 sm:w-40 md:w-44 h-20 sm:h-24 md:h-28 bg-[#0a0510] border border-white/10 rounded-xl p-3 md:p-4 shadow-xl -z-10 flex flex-col justify-center"
                    style={{ y: -20, rotate: -5 }}
                  >
                      <div className="space-y-2 opacity-50">
                         <div className="h-1.5 w-full bg-white/20 rounded-full" />
                         <div className="h-1.5 w-full bg-white/20 rounded-full" />
                     </div>
                  </motion.div>
                  
                  {/* Focus Card (Top of the messy pile) */}
                  <motion.div
                    animate={{ y: [0, 3, 0], rotate: [2, 4, 2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-32 sm:w-40 md:w-44 h-20 sm:h-24 md:h-28 bg-[#0a0510] border border-white/10 rounded-xl p-3 md:p-4 shadow-xl z-10 flex flex-col justify-center"
                    style={{ rotate: 2 }}
                  >
                      <div className="flex items-center gap-2 mb-3">
                         <div className="w-6 h-6 rounded-full bg-white/10" />
                         <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                      </div>
                      <div className="space-y-1.5">
                         <div className="h-1.5 w-full bg-white/5 rounded-full" />
                         <div className="h-1.5 w-[85%] bg-white/5 rounded-full" />
                         <div className="h-1.5 w-[90%] bg-white/5 rounded-full" />
                      </div>
                  </motion.div>
               </div>

               {/* 2. The Transformation - Merging Data Streams */}
               <div className="relative h-40 w-full mt-[-60px] mb-[-20px] z-0 pointer-events-none">
                   <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                      {/* Left Stream */}
                      <path 
                        d="M35,0 C35,40 50,40 50,100" 
                        stroke="#9D4EDD" 
                        strokeWidth="1.5" 
                        fill="none" 
                        opacity="0.4" 
                        vectorEffect="non-scaling-stroke" 
                      />

                      {/* Right Stream */}
                      <path 
                        d="M65,0 C65,40 50,40 50,100" 
                        stroke="#9D4EDD" 
                        strokeWidth="1.5" 
                        fill="none" 
                        opacity="0.4" 
                        vectorEffect="non-scaling-stroke" 
                      />

                      {/* Center Beam */}
                      <line 
                        x1="50" y1="0" x2="50" y2="100" 
                        stroke="#9D4EDD" 
                        strokeWidth="1.5" 
                        opacity="0.4" 
                        vectorEffect="non-scaling-stroke" 
                      />
                   </svg>
               </div>

               {/* 3. The Output (Result) - Clean & Focused */}
               <motion.div 
                 initial={{ y: 5, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 className="relative w-[85%] bg-[#130822] border border-[#7B2CBF]/20 rounded-xl p-5 shadow-2xl z-20"
               >
                  {/* Subtle top highlight */}
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#9D4EDD]/30 to-transparent" />
                  
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[10px] font-medium text-[#9D4EDD] tracking-wider uppercase">Summary</span>
                  </div>
                  
                  <div className="space-y-2.5">
                     <div className="h-1.5 w-full bg-white/20 rounded-full" />
                     <div className="h-1.5 w-[94%] bg-white/10 rounded-full" />
                     <div className="h-1.5 w-[88%] bg-white/10 rounded-full" />
                  </div>
               </motion.div>

            </div>
          </div>
        </GlassCard>

        {/* Card 3: Delegator (Standard) */}
        <GlassCard className="md:col-span-1 md:row-span-1 p-0 group relative overflow-hidden">
          {/* Expanded Grid Background - Covers entire card */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:30px_30px] opacity-40 pointer-events-none" />

          <div className="flex flex-col h-full p-8 relative z-10">
            <div className="relative z-20">
               <div className="w-10 h-10 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center mb-4 text-[#9D4EDD]">
                <Share2 size={20} />
              </div>
              <h3 className="text-2xl text-white font-medium mb-2">Delegate to AI</h3>
              <p className="text-[#A1A1AA] text-sm">Assign tasks to specialized agents.</p>
            </div>
              
            {/* Visualization: Multi-Input Handoff */}
            <div className="flex-1 relative mt-6 min-h-[140px]">
               
               {/* SVG Layer for Connections */}
               <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="delegate-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.5)" />
                    </linearGradient>
                  </defs>
                  
                  {/* Top Line */}
                  <path d="M40,13 C55,13 65,50 85,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <motion.circle r="0.5" fill="none" stroke="#9D4EDD" strokeWidth="4" vectorEffect="non-scaling-stroke">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M40,13 C55,13 65,50 85,50" calcMode="linear" />
                  </motion.circle>

                  {/* Middle Line - Straight */}
                  <path d="M40,50 L85,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <motion.circle r="0.5" fill="none" stroke="#9D4EDD" strokeWidth="4" vectorEffect="non-scaling-stroke">
                    <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M40,50 L85,50" calcMode="linear" />
                  </motion.circle>

                  {/* Bottom Line */}
                  <path d="M40,87 C55,87 65,50 85,50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
                  <motion.circle r="0.5" fill="none" stroke="#9D4EDD" strokeWidth="4" vectorEffect="non-scaling-stroke">
                    <animateMotion dur="3s" begin="2s" repeatCount="indefinite" path="M40,87 C55,87 65,50 85,50" calcMode="linear" />
                  </motion.circle>
               </svg>

               {/* Tasks Column (Left) */}
               <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-1 w-[40%]">
                  {/* Task 1 */}
                  <div className="bg-white/5 border border-white/10 px-2 py-1.5 rounded flex items-center gap-2 shadow-sm z-10 backdrop-blur-md w-full">
                      <div className="w-1 h-1 rounded-full bg-white/50" />
                      <span className="text-[9px] text-white/80 font-medium whitespace-nowrap">Market Analysis</span>
                  </div>

                  {/* Task 2 */}
                  <div className="bg-white/5 border border-white/10 px-2 py-1.5 rounded flex items-center gap-2 shadow-sm z-10 backdrop-blur-md w-full">
                      <div className="w-1 h-1 rounded-full bg-white/50" />
                      <span className="text-[9px] text-white/80 font-medium whitespace-nowrap">Draft Contract</span>
                  </div>

                  {/* Task 3 */}
                  <div className="bg-white/5 border border-white/10 px-2 py-1.5 rounded flex items-center gap-2 shadow-sm z-10 backdrop-blur-md w-full">
                      <div className="w-1 h-1 rounded-full bg-white/50" />
                      <span className="text-[9px] text-white/80 font-medium whitespace-nowrap">Q3 Projections</span>
                  </div>
               </div>

               {/* Agent Node (Right) */}
               <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[20%] flex justify-center">
                   <div className="relative w-12 h-12 rounded-full bg-[#1A0B2E] border border-[#7B2CBF]/20 flex items-center justify-center shadow-[0_0_15px_rgba(123,44,191,0.2)]">
                      <Bot size={20} className="text-[#9D4EDD] relative z-10" />
                      {/* Inner Ring */}
                      <div className="absolute inset-1 rounded-full border border-white/5" />
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 rounded-full bg-[#7B2CBF]/10 animate-pulse" />
                   </div>
               </div>
            </div>
          </div>
        </GlassCard>

        {/* Card 4: Integration (Standard) - Heartbeat Sync Animation */}
        <GlassCard className="md:col-span-1 md:row-span-1 p-0 overflow-hidden relative group min-h-[340px]">
           {/* Background Grid - Faint */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 pointer-events-none" />

           <div className="p-8 z-20 relative pointer-events-none">
             <div className="w-10 h-10 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center mb-4 text-[#9D4EDD]">
              <Layers size={20} />
            </div>
            <h3 className="text-2xl text-white font-medium mb-2">Connected</h3>
            <p className="text-[#A1A1AA] text-sm">Your tools, deeply integrated.</p>
          </div>

           {/* Keyframe styles for heartbeat sync - 5s cycle for slower pulsing */}
           <style>{`
             @keyframes heartbeat {
               0%, 100% { transform: translate(-50%, -50%) scale(1); }
               50% { transform: translate(-50%, -50%) scale(1.06); }
             }
             @keyframes hub-glow {
               0%, 100% { box-shadow: 0 0 20px rgba(123,44,191,0.3), 0 0 40px rgba(123,44,191,0.1); }
               50% { box-shadow: 0 0 35px rgba(123,44,191,0.5), 0 0 70px rgba(123,44,191,0.25); }
             }
             @keyframes pulse-ring {
               0% { transform: scale(1); opacity: 0.4; }
               100% { transform: scale(2.8); opacity: 0; }
             }
             @keyframes node-respond {
               0%, 55%, 85%, 100% { box-shadow: 0 0 0 rgba(157,78,221,0); border-color: rgba(255,255,255,0.1); }
               70% { box-shadow: 0 0 12px rgba(157,78,221,0.4); border-color: rgba(157,78,221,0.4); }
             }
             @keyframes line-pulse {
               0% { stroke-dashoffset: 50; opacity: 0; }
               50% { opacity: 0.7; }
               100% { stroke-dashoffset: -50; opacity: 0; }
             }
           `}</style>

           {/* Connected Web Visualization */}
           <div className="absolute inset-0 z-10 pointer-events-none">
              {/* Central Hub (55, 62) - The Heartbeat */}
              <div
                className="absolute top-[62%] left-[55%] z-20"
                style={{ animation: 'heartbeat 5s ease-in-out infinite' }}
              >
                 <div
                   className="w-14 h-14 rounded-full bg-[#1A0B2E] border border-[#7B2CBF]/50 flex items-center justify-center"
                   style={{ animation: 'hub-glow 5s ease-in-out infinite' }}
                 >
                    <Logo className="w-7 h-7 text-white relative z-10" />
                 </div>
                 {/* Pulse rings emanating outward */}
                 <div
                   className="absolute inset-0 rounded-full border-2 border-[#9D4EDD]/30"
                   style={{ animation: 'pulse-ring 5s ease-out infinite' }}
                 />
                 <div
                   className="absolute inset-0 rounded-full border border-[#9D4EDD]/20"
                   style={{ animation: 'pulse-ring 5s ease-out infinite 0.8s' }}
                 />
              </div>

              {/* App Nodes - Respond to heartbeat */}

              {/* Notion - Top Right (80, 35) */}
              <div
                className="absolute top-[35%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center backdrop-blur-sm z-20"
                style={{ animation: 'node-respond 5s ease-in-out infinite 0.5s' }}
              >
                 <svg role="img" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/50">
                    <title>Notion</title>
                    <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="#030105"/>
                 </svg>
              </div>

              {/* GitHub - Right (88, 62) */}
              <div
                className="absolute top-[62%] left-[88%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center backdrop-blur-sm z-20"
                style={{ animation: 'node-respond 5s ease-in-out infinite 0.7s' }}
              >
                 <Github size={16} className="text-white/50" />
              </div>

              {/* Linear - Bottom Right (75, 88) */}
              <div
                className="absolute top-[88%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center backdrop-blur-sm z-20"
                style={{ animation: 'node-respond 5s ease-in-out infinite 0.9s' }}
              >
                 <svg role="img" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/50">
                    <title>Linear</title>
                    <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5765C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5765-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1846-1.5765L8.21917 24.3918c-.48979-.4527-1.24833-.3676-1.57645.1846-.99132 1.6684-1.88843 3.3994-2.68399 5.1855l.25765.9335ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"/>
                 </svg>
              </div>

              {/* Slack - Bottom Left (30, 82) */}
              <div
                className="absolute top-[82%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center backdrop-blur-sm z-20"
                style={{ animation: 'node-respond 5s ease-in-out infinite 1.1s' }}
              >
                 <Slack size={16} className="text-white/50" />
              </div>

              {/* Google Drive - Left (20, 55) */}
              <div
                className="absolute top-[55%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#1e1e24] border border-white/10 flex items-center justify-center backdrop-blur-sm z-20"
                style={{ animation: 'node-respond 5s ease-in-out infinite 0.6s' }}
              >
                 <svg role="img" viewBox="0 0 87.3 78" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white/50">
                    <title>Google Drive</title>
                    <path d="M6.6 66.85L14.25 78l28.8-50.1-7.65-13.35z"/>
                    <path d="M57.95 27.9L29.15 78H72.6l28.65-50.1z"/>
                    <path d="M43.65 0L14.85 50.1h57.6L43.65 0z"/>
                 </svg>
              </div>

              {/* Connection Lines with pulse animation */}
              <svg className="absolute inset-0 w-full h-full overflow-visible z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <defs>
                   {/* Individual gradients oriented along each line direction */}
                   {/* Notion: 55,62 → 80,35 */}
                   <linearGradient id="grad-notion" x1="55" y1="62" x2="80" y2="35" gradientUnits="userSpaceOnUse">
                     <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0" />
                     <stop offset="50%" stopColor="#9D4EDD" stopOpacity="1" />
                     <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0" />
                   </linearGradient>
                   {/* Github: 55,62 → 88,62 (horizontal) */}
                   <linearGradient id="grad-github" x1="55" y1="62" x2="88" y2="62" gradientUnits="userSpaceOnUse">
                     <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0" />
                     <stop offset="50%" stopColor="#9D4EDD" stopOpacity="1" />
                     <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0" />
                   </linearGradient>
                   {/* Linear: 55,62 → 75,88 */}
                   <linearGradient id="grad-linear" x1="55" y1="62" x2="75" y2="88" gradientUnits="userSpaceOnUse">
                     <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0" />
                     <stop offset="50%" stopColor="#9D4EDD" stopOpacity="1" />
                     <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0" />
                   </linearGradient>
                   {/* Slack: 55,62 → 30,82 */}
                   <linearGradient id="grad-slack" x1="55" y1="62" x2="30" y2="82" gradientUnits="userSpaceOnUse">
                     <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0" />
                     <stop offset="50%" stopColor="#9D4EDD" stopOpacity="1" />
                     <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0" />
                   </linearGradient>
                   {/* Drive: 55,62 → 20,55 */}
                   <linearGradient id="grad-drive" x1="55" y1="62" x2="20" y2="55" gradientUnits="userSpaceOnUse">
                     <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0" />
                     <stop offset="50%" stopColor="#9D4EDD" stopOpacity="1" />
                     <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0" />
                   </linearGradient>
                 </defs>

                 {/* Hub Center is at 55, 62 */}

                 {/* Notion Line (80, 35) */}
                 <path d="M55,62 L80,35" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                 <path d="M55,62 L80,35" stroke="url(#grad-notion)" strokeWidth="1.5" strokeDasharray="50" style={{ animation: 'line-pulse 5s ease-in-out infinite 0.5s' }} />

                 {/* Github Line (88, 62) */}
                 <path d="M55,62 L88,62" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                 <path d="M55,62 L88,62" stroke="url(#grad-github)" strokeWidth="1.5" strokeDasharray="50" style={{ animation: 'line-pulse 5s ease-in-out infinite 0.7s' }} />

                 {/* Linear Line (75, 88) */}
                 <path d="M55,62 L75,88" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                 <path d="M55,62 L75,88" stroke="url(#grad-linear)" strokeWidth="1.5" strokeDasharray="50" style={{ animation: 'line-pulse 5s ease-in-out infinite 0.9s' }} />

                 {/* Slack Line (30, 82) */}
                 <path d="M55,62 L30,82" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                 <path d="M55,62 L30,82" stroke="url(#grad-slack)" strokeWidth="1.5" strokeDasharray="50" style={{ animation: 'line-pulse 5s ease-in-out infinite 1.1s' }} />

                 {/* Drive Line (20, 55) */}
                 <path d="M55,62 L20,55" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                 <path d="M55,62 L20,55" stroke="url(#grad-drive)" strokeWidth="1.5" strokeDasharray="50" style={{ animation: 'line-pulse 5s ease-in-out infinite 0.6s' }} />

              </svg>
           </div>
        </GlassCard>

      </div>
    </section>
  );
};