import type { FC } from 'react';
import { motion } from 'framer-motion';
import { SUPPORT_CONTENT } from '../../constants';
import { Brain, Layers, Clock, TrendingUp } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const iconMap: Record<string, typeof Brain> = {
  'brain': Brain,
  'layers': Layers,
  'clock': Clock,
  'trending-up': TrendingUp,
};

export const AgentBehavior: FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9D4EDD] font-medium">
            {SUPPORT_CONTENT.agentBehavior.label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white text-center mb-4"
        >
          {SUPPORT_CONTENT.agentBehavior.headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A1A1AA] text-base md:text-lg text-center max-w-2xl mx-auto mb-16"
        >
          {SUPPORT_CONTENT.agentBehavior.description}
        </motion.p>

        {/* Behavior Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SUPPORT_CONTENT.agentBehavior.behaviors.map((behavior, index) => {
            const Icon = iconMap[behavior.icon] || Brain;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <GlassCard className="h-full p-6 hover:border-[#7B2CBF]/30 transition-colors" hoverEffect={true}>
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1, borderColor: 'rgba(157, 78, 221, 0.4)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={22} className="text-[#9D4EDD]" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-white mb-3">
                    {behavior.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {behavior.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Visual connection element */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <motion.div
              className="w-2 h-2 rounded-full bg-[#9D4EDD]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">
              Working on your behalf
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-[#9D4EDD]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
