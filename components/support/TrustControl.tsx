import type { FC } from 'react';
import { motion } from 'framer-motion';
import { SUPPORT_CONTENT } from '../../constants';
import { Eye, ShieldCheck, Lock } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const iconMap: Record<string, typeof Eye> = {
  'eye': Eye,
  'shield-check': ShieldCheck,
  'lock': Lock,
};

export const TrustControl: FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9D4EDD] font-medium">
            {SUPPORT_CONTENT.trustControl.label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white text-center mb-16"
        >
          {SUPPORT_CONTENT.trustControl.headline}
        </motion.h2>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUPPORT_CONTENT.trustControl.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon] || Eye;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              >
                <GlassCard className="h-full p-6 md:p-8 text-center hover:border-[#7B2CBF]/30 transition-colors" hoverEffect={false}>
                  {/* Icon with glow effect */}
                  <div className="relative inline-flex mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 flex items-center justify-center"
                      whileHover={{
                        borderColor: 'rgba(157, 78, 221, 0.5)',
                        boxShadow: '0 0 30px rgba(123, 44, 191, 0.2)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={28} className="text-[#9D4EDD]" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium text-white mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">
                    {pillar.description}
                  </p>

                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance text */}
        <motion.p
          className="mt-12 text-center text-sm text-[#52525B]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Your representative works for you. Not around you.
        </motion.p>
      </div>
    </section>
  );
};
