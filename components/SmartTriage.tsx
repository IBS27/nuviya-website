import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Archive, Clock } from 'lucide-react';

const actions = [
  { key: 'E', label: 'Archive', icon: <Archive size={16} /> },
  { key: 'H', label: 'Snooze', icon: <Clock size={16} /> },
  { key: '#', label: 'Delete', icon: <Trash2 size={16} /> },
];

const emails = [
  {
    sender: 'Sarah Miller',
    role: 'Product Design Lead',
    subject: 'Q4 Roadmap Review',
    preview: 'Hey team, I\'ve updated the Figma file with the latest components. Please take a look before the standup...',
    time: 'Just now',
    avatarGradient: 'linear-gradient(to bottom right, #3b82f6, #a855f7)',
  },
  {
    sender: 'David Chen',
    role: 'Engineering Manager',
    subject: 'Re: API Migration Timeline',
    preview: 'Following up on our discussion yesterday. Can we sync tomorrow at 2pm to finalize the deployment schedule?',
    time: '10 min ago',
    avatarGradient: 'linear-gradient(to bottom right, #10b981, #14b8a6)',
  },
  {
    sender: 'Newsletter Bot',
    role: 'noreply@updates.com',
    subject: '🎉 Your Weekly Digest is Here!',
    preview: 'You have 47 unread articles waiting for you. Click here to catch up on the latest trends in tech...',
    time: '1 hour ago',
    avatarGradient: 'linear-gradient(to bottom right, #f97316, #ef4444)',
  },
];

export const SmartTriage: React.FC = () => {
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-cycle animation for demo
  useEffect(() => {
    // Step 1: Card is visible, no overlay
    setActiveAction(null);
    setIsAnimating(false);

    // Step 2: After 1000ms, show the overlay
    const overlayTimeout = setTimeout(() => {
      setActiveAction(actions[currentIndex].key);
    }, 1000);

    // Step 3: After overlay shows for 600ms, trigger swipe
    const swipeTimeout = setTimeout(() => {
      setIsAnimating(true);
    }, 1600);

    // Step 4: After swipe completes, move to next
    const resetTimeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % actions.length);
    }, 2200);

    return () => {
      clearTimeout(overlayTimeout);
      clearTimeout(swipeTimeout);
      clearTimeout(resetTimeout);
    };
  }, [currentIndex]);

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white mb-4 md:mb-6">Keyboard First.<br/>Mouse Optional.</h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg mb-6 md:mb-8 leading-relaxed">
            Blaze through your morning triage. Custom keybinds allow you to dispatch dozens of emails in seconds without your fingers leaving the home row.
          </p>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {actions.map((action) => (
              <div
                key={action.key}
                className={`
                  flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-white/10 bg-white/5
                  transition-all duration-300
                  ${activeAction === action.key ? 'border-[#7B2CBF] bg-[#7B2CBF]/10 shadow-[0_0_15px_rgba(123,44,191,0.3)]' : ''}
                `}
              >
                <span className={`
                  w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded font-mono text-sm
                  transition-all duration-300
                  ${activeAction === action.key ? 'bg-[#7B2CBF] text-white' : 'bg-white/10 text-white'}
                `}>
                  {action.key}
                </span>
                <span className="text-[#A1A1AA] text-xs sm:text-sm font-medium">{action.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Demo */}
        <div className="order-1 lg:order-2 relative h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center">
          <div className="relative w-full max-w-md [perspective:1000px]">
             {/* Active Card */}
             <motion.div
                key={currentIndex}
                initial={{ x: -20, opacity: 0, scale: 0.95 }}
                animate={isAnimating
                  ? { x: 400, opacity: 0, rotate: 10, scale: 1 }
                  : { x: 0, opacity: 1, rotate: 0, scale: 1 }
                }
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative bg-[#0e0716] border border-white/10 rounded-xl p-6 shadow-2xl z-10 overflow-hidden"
             >
                   {/* Email Content */}
                   <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full" style={{ background: emails[currentIndex].avatarGradient }} />
                        <div>
                          <div className="text-white font-medium">{emails[currentIndex].sender}</div>
                          <div className="text-xs text-[#A1A1AA]">{emails[currentIndex].role}</div>
                        </div>
                      </div>
                      <div className="text-xs text-[#A1A1AA]">{emails[currentIndex].time}</div>
                   </div>
                   <h4 className="text-white font-medium mb-2">{emails[currentIndex].subject}</h4>
                   <p className="text-[#A1A1AA] text-sm line-clamp-2">
                     {emails[currentIndex].preview}
                   </p>

                   {/* Action Feedback Overlay - Inside card */}
                   <AnimatePresence>
                     {activeAction && (
                       <motion.div
                         initial={{ opacity: 0, scale: 0.5 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0 }}
                         className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none bg-[#0e0716]/80 backdrop-blur-sm"
                       >
                          <div className="bg-[#7B2CBF] text-white px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                            {actions.find(a => a.key === activeAction)?.icon}
                            {actions.find(a => a.key === activeAction)?.label} Executed
                          </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
             </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};