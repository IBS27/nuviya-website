import type { FC } from 'react';
import { motion } from 'framer-motion';
import { SUPPORT_CONTENT } from '../../constants';
import { GlassCard } from '../ui/GlassCard';
import { Luggage, Phone, CreditCard, ShoppingBag, ArrowRight } from 'lucide-react';

const iconMap: Record<string, typeof Luggage> = {
  'luggage': Luggage,
  'phone': Phone,
  'credit-card': CreditCard,
  'shopping-bag': ShoppingBag,
};

export const SupportBentoGrid: FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9D4EDD] font-medium">
            {SUPPORT_CONTENT.bentoGrid.label}
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
          {SUPPORT_CONTENT.bentoGrid.headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A1A1AA] text-base md:text-lg text-center max-w-xl mx-auto mb-16"
        >
          {SUPPORT_CONTENT.bentoGrid.description}
        </motion.p>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {SUPPORT_CONTENT.bentoGrid.cases.map((useCase, index) => {
            const Icon = iconMap[useCase.icon] || Luggage;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <GlassCard
                  className="h-full p-0 overflow-hidden group"
                  hoverEffect={false}
                >
                  <div className="flex flex-col h-full relative">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-[#7B2CBF]/0 group-hover:bg-[#7B2CBF]/5 transition-colors duration-500 pointer-events-none" />

                    {/* Content */}
                    <div className="p-6 md:p-8 relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-2xl bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 flex items-center justify-center mb-5 group-hover:border-[#7B2CBF]/40 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon size={22} className="text-[#9D4EDD]" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-medium text-white mb-3">
                        {useCase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#A1A1AA] text-sm leading-relaxed flex-grow">
                        {useCase.description}
                      </p>

                      {/* Action hint */}
                      <button
                        onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-6 flex items-center gap-2 text-[#9D4EDD] cursor-pointer hover:text-[#9D4EDD]/80 transition-colors"
                      >
                        <span className="text-xs font-medium">Delegate this issue</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* And more text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center text-sm text-[#9D4EDD]/60"
        >
          And more...
        </motion.p>
      </div>
    </section>
  );
};
