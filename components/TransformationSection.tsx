import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Email {
  id: number;
  sender: string;
  initials: string;
  subject: string;
  preview: string;
  time: string;
  isImportant: boolean;
  avatarColor: string;
}

// Realistic email data - mix of important and unimportant
const allEmails: Email[] = [
  // Important emails (these survive the filter)
  {
    id: 1,
    sender: "Sarah Chen",
    initials: "SC",
    subject: "Q4 Budget Approval Needed",
    preview: "Hi, the finance team needs your sign-off on the Q4 projections by EOD...",
    time: "9:42 AM",
    isImportant: true,
    avatarColor: "bg-[#7B2CBF]"
  },
  {
    id: 2,
    sender: "Michael Torres",
    initials: "MT",
    subject: "Urgent: Server Down in Production",
    preview: "The main API server is returning 503 errors. Customer reports coming in...",
    time: "9:38 AM",
    isImportant: true,
    avatarColor: "bg-[#9D4EDD]"
  },
  {
    id: 3,
    sender: "Dr. Emily Watson",
    initials: "EW",
    subject: "Your Test Results Are Ready",
    preview: "Your recent lab work has been processed. Please schedule a follow-up...",
    time: "9:15 AM",
    isImportant: true,
    avatarColor: "bg-emerald-500"
  },
  {
    id: 4,
    sender: "David Kim",
    initials: "DK",
    subject: "Contract Renewal - Action Required",
    preview: "The annual service agreement expires in 3 days. Attached is the renewal...",
    time: "8:52 AM",
    isImportant: true,
    avatarColor: "bg-blue-500"
  },
  {
    id: 5,
    sender: "Mom",
    initials: "M",
    subject: "Dad's Surprise Party This Weekend",
    preview: "Don't forget! Saturday at 6pm. Can you bring the cake from...",
    time: "8:30 AM",
    isImportant: true,
    avatarColor: "bg-pink-500"
  },
  // Unimportant emails (these get filtered out)
  {
    id: 6,
    sender: "LinkedIn",
    initials: "in",
    subject: "You appeared in 12 searches this week",
    preview: "See who's looking at your profile and expand your network...",
    time: "9:41 AM",
    isImportant: false,
    avatarColor: "bg-blue-700"
  },
  {
    id: 7,
    sender: "DealMart",
    initials: "DM",
    subject: "🔥 FLASH SALE: 70% OFF Everything!",
    preview: "Limited time only! Don't miss these incredible savings on...",
    time: "9:35 AM",
    isImportant: false,
    avatarColor: "bg-orange-500"
  },
  {
    id: 8,
    sender: "Newsletter Weekly",
    initials: "NW",
    subject: "Top 10 Productivity Hacks You Need",
    preview: "This week's roundup of articles, tips, and must-read stories...",
    time: "9:20 AM",
    isImportant: false,
    avatarColor: "bg-gray-500"
  },
  {
    id: 9,
    sender: "Twitter",
    initials: "X",
    subject: "Your highlights for the week",
    preview: "You have 3 new followers and 15 likes on your recent posts...",
    time: "9:10 AM",
    isImportant: false,
    avatarColor: "bg-gray-700"
  },
  {
    id: 10,
    sender: "CryptoAlerts",
    initials: "₿",
    subject: "Bitcoin Just Hit $100K! Act Now!",
    preview: "The market is moving fast. Don't miss your chance to...",
    time: "9:05 AM",
    isImportant: false,
    avatarColor: "bg-yellow-600"
  },
  {
    id: 11,
    sender: "Spotify",
    initials: "S",
    subject: "Your 2024 Wrapped is here!",
    preview: "See your top songs, artists, and listening habits from...",
    time: "8:45 AM",
    isImportant: false,
    avatarColor: "bg-green-600"
  },
  {
    id: 12,
    sender: "PrimeDeals",
    initials: "P",
    subject: "Items in your cart are selling fast!",
    preview: "Complete your purchase before these items sell out...",
    time: "8:22 AM",
    isImportant: false,
    avatarColor: "bg-orange-600"
  }
];

// Seeded random for consistent positions
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

export const TransformationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Transform opacity and position based on scroll
  const chaosOpacity = useTransform(smoothProgress, [0.05, 0.5], [1, 0]);
  const orderOpacity = useTransform(smoothProgress, [0.5, 0.95], [0, 1]);
  const scanLineTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Manually defined positions for full container coverage
  const chaosPositions = useMemo(() => {
    const positions = [
      { top: 5,  left: 5,  rotate: -12 },   // top-left
      { top: 8,  left: 45, rotate: 8 },     // top-center
      { top: 3,  left: 70, rotate: -5 },    // top-right
      { top: 30, left: -2, rotate: 15 },    // middle-left
      { top: 35, left: 35, rotate: -8 },    // center
      { top: 28, left: 65, rotate: 12 },    // middle-right
      { top: 55, left: 8,  rotate: -10 },   // lower-left
      { top: 50, left: 50, rotate: 6 },     // lower-center
      { top: 58, left: 72, rotate: -15 },   // lower-right
      { top: 75, left: 0,  rotate: 10 },    // bottom-left
      { top: 72, left: 38, rotate: -6 },    // bottom-center
      { top: 78, left: 62, rotate: 8 },     // bottom-right
    ];

    return positions.map((pos, i) => ({
      ...pos,
      x: seededRandom(i * 1) * 30 - 15,
      y: seededRandom(i * 2) * 30 - 15,
      driftX: [seededRandom(i * 6) * 18, seededRandom(i * 7) * -18, seededRandom(i * 8) * 18],
      driftY: [seededRandom(i * 9) * 18, seededRandom(i * 10) * -18, seededRandom(i * 11) * 18],
      duration: 3 + seededRandom(i * 12) * 2,
    }));
  }, []);

  const importantEmails = allEmails.filter(e => e.isImportant);

  return (
    <section ref={containerRef} className="relative h-[180vh] sm:h-[200vh] md:h-[250vh] w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pt-24 px-4">
        
        {/* Text Header - Now part of the flow to ensure proper spacing */}
        <div className="relative z-30 text-center w-full max-w-4xl mb-6 md:mb-10 min-h-[80px] md:min-h-[100px] flex flex-col justify-end">
           <motion.h2
             style={{ opacity: orderOpacity }}
             className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white mb-3 md:mb-4"
           >
             Order from Chaos
           </motion.h2>
           <motion.p
             style={{ opacity: orderOpacity }}
             className="text-[#A1A1AA] max-w-xl mx-auto text-base sm:text-lg"
           >
             Nuviya automatically categorizes and prioritizes your stream.
           </motion.p>
        </div>

        <div className="relative w-full max-w-4xl h-[450px] sm:h-[520px] md:h-[620px] border border-white/10 rounded-2xl md:rounded-3xl bg-[#0a0510]/80 overflow-hidden shadow-2xl shrink-0 backdrop-blur-sm">
          
          {/* CHAOS STATE */}
          <motion.div
            style={{ opacity: chaosOpacity }}
            className="absolute inset-0 p-8"
          >
            {allEmails.map((email, i) => {
              const pos = chaosPositions[i];
              const borderColor = email.isImportant
                ? 'border-[#7B2CBF]/40'
                : 'border-red-500/30';
              const shadowColor = email.isImportant
                ? 'shadow-[0_0_15px_rgba(123,44,191,0.15)]'
                : 'shadow-[0_0_15px_rgba(239,68,68,0.1)]';

              return (
                <motion.div
                  key={`chaos-${email.id}`}
                  initial={{
                    x: pos.x,
                    y: pos.y,
                    rotate: pos.rotate
                  }}
                  animate={{
                    x: pos.driftX,
                    y: pos.driftY,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: pos.duration,
                    ease: "easeInOut"
                  }}
                  className={`absolute w-48 sm:w-60 md:w-72 bg-white/5 ${borderColor} border rounded-lg backdrop-blur-sm ${shadowColor} overflow-hidden`}
                  style={{
                    top: `${pos.top}%`,
                    left: `${pos.left}%`
                  }}
                >
                  <div className="flex items-start p-2 sm:p-3 gap-2 sm:gap-3">
                    {/* Avatar */}
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full ${email.avatarColor} flex items-center justify-center text-white text-[10px] sm:text-xs font-semibold shrink-0`}>
                      {email.initials}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-1 sm:gap-2">
                        <span className="text-white/90 text-xs sm:text-sm font-medium truncate">{email.sender}</span>
                        <span className="text-white/30 text-[10px] sm:text-xs shrink-0 hidden sm:inline">{email.time}</span>
                      </div>
                      <p className="text-white/70 text-[10px] sm:text-xs font-medium truncate mt-0.5">{email.subject}</p>
                      <p className="text-white/40 text-[10px] sm:text-xs truncate mt-0.5 hidden sm:block">{email.preview}</p>
                    </div>
                  </div>

                  {/* Spam indicator for unimportant emails */}
                  {!email.isImportant && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500/60" />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* SCAN LINE */}
          <motion.div 
            style={{ top: scanLineTop }}
            className="absolute left-0 right-0 h-1 bg-[#9D4EDD] shadow-[0_0_50px_#9D4EDD] z-20"
          />

          {/* ORDER STATE */}
          <motion.div
            style={{ opacity: orderOpacity }}
            className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col pt-12 sm:pt-16 md:pt-20"
          >
            <div className="flex justify-between items-center mb-3 md:mb-4 px-1 sm:px-2">
              <span className="text-[10px] sm:text-xs font-medium tracking-wider text-[#9D4EDD] uppercase">Priority Inbox</span>
              <span className="text-[10px] sm:text-xs text-white/30">{importantEmails.length} Items</span>
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              {importantEmails.map((email, i) => (
                <motion.div
                  key={`order-${email.id}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full bg-white/5 border border-[#7B2CBF]/30 rounded-lg hover:bg-white/10 hover:border-[#7B2CBF]/50 transition-all flex items-center px-3 sm:px-4 md:px-5 py-2 sm:py-3 gap-2 sm:gap-3 md:gap-4 group"
                >
                  {/* Priority indicator */}
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#9D4EDD] shadow-[0_0_10px_#9D4EDD] shrink-0" />

                  {/* Avatar */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full ${email.avatarColor} flex items-center justify-center text-white text-xs sm:text-sm font-semibold shrink-0`}>
                    {email.initials}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium text-xs sm:text-sm">{email.sender}</span>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm truncate">{email.subject}</p>
                    <p className="text-white/40 text-[10px] sm:text-xs truncate hidden sm:block">{email.preview}</p>
                  </div>

                  {/* Time */}
                  <div className="text-[10px] sm:text-xs text-white/40 font-mono shrink-0 hidden sm:block">{email.time}</div>
                </motion.div>
              ))}
            </div>

            {/* Filtered out indicator */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-white/20 text-[10px] sm:text-xs">
              <div className="w-4 h-px bg-white/10" />
              <span>{allEmails.length - importantEmails.length} low-priority emails filtered</span>
              <div className="w-4 h-px bg-white/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};