import type { FC } from 'react';
import { motion } from 'framer-motion';
import { SUPPORT_CONTENT } from '../../constants';

export const ProblemMaze: FC = () => {
  const timeline = SUPPORT_CONTENT.problemMaze.timeline;

  return (
    <section id="problem-maze" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-[#9D4EDD] font-medium">
            {SUPPORT_CONTENT.problemMaze.label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-light text-white text-center mb-6"
        >
          {SUPPORT_CONTENT.problemMaze.headline}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#A1A1AA] text-base md:text-lg text-center max-w-2xl mx-auto mb-16"
        >
          {SUPPORT_CONTENT.problemMaze.description}
        </motion.p>

        {/* Timeline of Pain */}
        <div className="relative">
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block">
            {/* Connecting Line */}
            <motion.div
              className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />

            {/* Timeline Nodes */}
            <div className="flex justify-between items-start">
              {timeline.map((item, index) => {
                const isLast = index === timeline.length - 1;

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center flex-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {/* Node */}
                    <motion.div
                      className={`w-3 h-3 rounded-full mb-4 ${
                        isLast
                          ? 'bg-[#9D4EDD] shadow-[0_0_12px_rgba(157,78,221,0.6)]'
                          : 'bg-white/20'
                      }`}
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Day Label */}
                    <span className={`text-xs font-medium mb-2 ${
                      isLast ? 'text-[#9D4EDD]' : 'text-[#52525B]'
                    }`}>
                      {item.day}
                    </span>

                    {/* Event Text */}
                    <span className={`text-sm max-w-[120px] ${
                      isLast ? 'text-white font-medium' : 'text-[#A1A1AA]'
                    }`}>
                      {item.event}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Timeline */}
          <div className="md:hidden">
            <div className="relative pl-8">
              {/* Vertical Line */}
              <motion.div
                className="absolute left-[5px] top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{ originY: 0 }}
              />

              {/* Timeline Items */}
              <div className="space-y-6">
                {timeline.map((item, index) => {
                  const isLast = index === timeline.length - 1;

                  return (
                    <motion.div
                      key={index}
                      className="relative flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {/* Node */}
                      <div
                        className={`absolute left-[-27px] w-3 h-3 rounded-full ${
                          isLast
                            ? 'bg-[#9D4EDD] shadow-[0_0_12px_rgba(157,78,221,0.6)]'
                            : 'bg-white/20'
                        }`}
                      />

                      {/* Content */}
                      <div>
                        <span className={`text-xs font-medium block mb-1 ${
                          isLast ? 'text-[#9D4EDD]' : 'text-[#52525B]'
                        }`}>
                          {item.day}
                        </span>
                        <span className={`text-sm ${
                          isLast ? 'text-white font-medium' : 'text-[#A1A1AA]'
                        }`}>
                          {item.event}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Insight line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-lg md:text-xl text-[#9D4EDD] font-medium mt-16"
        >
          {SUPPORT_CONTENT.problemMaze.insight}
        </motion.p>
      </div>
    </section>
  );
};
