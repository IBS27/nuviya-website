import type { FC } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { User, Building2, MessageSquare, Calendar, ListTodo, Search, ArrowRight } from 'lucide-react';

// Knowledge graph nodes - organic force-directed style layout
// Search: "who discussed the Q4 budget?"
// Results: Sarah Miller (Product Lead), David Chen (Engineering Manager)
const graphNodes = [
  // Central topic - Q4 Budget (highlighted, slightly off-center)
  { id: 'topic1', x: 42, y: 42, type: 'topic', label: 'Q4 Budget', highlighted: true },

  // Sarah Miller - upper left
  { id: 'person1', x: 20, y: 26, type: 'person', label: 'Sarah Miller' },
  // David Chen - right side
  { id: 'person2', x: 78, y: 38, type: 'person', label: 'David Chen' },

  // Their teams/orgs - near their people
  { id: 'org1', x: 8, y: 48, type: 'org', label: 'Product Team' },
  { id: 'org2', x: 88, y: 58, type: 'org', label: 'Engineering' },

  // Budget-related events - scattered
  { id: 'event1', x: 35, y: 15, type: 'event', label: 'Q4 Planning' },
  { id: 'event2', x: 72, y: 72, type: 'event', label: 'Budget Review' },

  // Budget-related tasks - lower area, staggered
  { id: 'task1', x: 28, y: 72, type: 'task', label: 'Approve Allocations' },
  { id: 'task2', x: 52, y: 68, type: 'task', label: 'Update Projections' },

  // Related topic - upper right
  { id: 'topic2', x: 65, y: 12, type: 'topic', label: 'Headcount' },
];

// Connections - all relate to Q4 Budget context
const connections = [
  // Q4 Budget is central - connects to people who discussed it
  { from: 'topic1', to: 'person1' },  // Sarah discussed budget
  { from: 'topic1', to: 'person2' },  // David discussed budget
  { from: 'topic1', to: 'event1' },   // Q4 Planning meeting
  { from: 'topic1', to: 'task2' },    // Update projections task

  // Sarah's connections
  { from: 'person1', to: 'org1' },    // Sarah leads Product Team
  { from: 'person1', to: 'event1' },  // Sarah attended Q4 Planning
  { from: 'person1', to: 'task1' },   // Sarah needs to approve allocations

  // David's connections
  { from: 'person2', to: 'org2' },    // David manages Engineering
  { from: 'person2', to: 'event2' },  // David in Budget Review
  { from: 'person2', to: 'topic2' },  // David discussed headcount

  // Other logical connections
  { from: 'org1', to: 'task1' },      // Product team allocation
  { from: 'org2', to: 'task2' },      // Engineering projections
  { from: 'event2', to: 'task2' },    // Review meeting about projections
  { from: 'topic2', to: 'event1' },   // Headcount discussed at Q4 Planning
];

const getNodeStyle = (type: string, highlighted?: boolean) => {
  const base = (() => {
    switch (type) {
      case 'person':
        return { bg: 'bg-[#1e3a5f]', border: 'border-blue-400/40', text: 'text-blue-300' };
      case 'org':
        return { bg: 'bg-[#2d1b4e]', border: 'border-purple-400/40', text: 'text-purple-300' };
      case 'topic':
        return { bg: 'bg-[#1a3d2e]', border: 'border-emerald-400/40', text: 'text-emerald-300' };
      case 'task':
        return { bg: 'bg-[#4a2c1a]', border: 'border-orange-400/40', text: 'text-orange-300' };
      case 'event':
        return { bg: 'bg-[#1a3d4a]', border: 'border-cyan-400/40', text: 'text-cyan-300' };
      default:
        return { bg: 'bg-white/10', border: 'border-white/20', text: 'text-white' };
    }
  })();

  // Highlighted nodes get stronger styling
  if (highlighted) {
    return {
      ...base,
      border: 'border-emerald-400',
      glow: 'shadow-[0_0_20px_rgba(52,211,153,0.3)]'
    };
  }
  return { ...base, glow: '' };
};

const getNodeIcon = (type: string, size: number = 14) => {
  switch (type) {
    case 'person':
      return <User size={size} />;
    case 'org':
      return <Building2 size={size} />;
    case 'topic':
      return <MessageSquare size={size} />;
    case 'task':
      return <ListTodo size={size} />;
    case 'event':
      return <Calendar size={size} />;
    default:
      return null;
  }
};

// Example search queries and results for the demo
const searchExamples = [
  { query: 'who discussed the Q4 budget?', typing: true },
  { query: 'contacts at TechFlow', typing: false },
  { query: 'upcoming meetings with David', typing: false },
];

const searchResults = [
  { name: 'Sarah Miller', role: 'Product Lead', context: 'Discussed budget allocations in 3 threads', type: 'person' },
  { name: 'David Chen', role: 'Engineering Manager', context: 'Reviewed Q4 projections last week', type: 'person' },
];

export const MemorySection: FC = () => {
  return (
    <section id="memory" className="py-24 md:py-32 px-4 relative overflow-hidden scroll-mt-24">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#7B2CBF] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#9D4EDD] opacity-[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-[#9D4EDD] uppercase">Contextual Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mb-4 md:mb-6">
            Your second brain, <br className="hidden sm:inline" /> <span className="text-[#A1A1AA]">built from every thread.</span>
          </h2>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-2xl mx-auto">
            Nuviya automatically extracts context from your conversations (people, projects, commitments) and surfaces insights when you need them.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side: Knowledge Graph Visualization */}
          <div className="relative">
            <GlassCard className="aspect-square p-0 overflow-hidden" hoverEffect={false}>
              {/* Grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10%_10%]" />

              {/* Subtle float animation */}
              <style>{`
                @keyframes float-subtle {
                  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
                  50% { transform: translate(-50%, -50%) translateY(-3px); }
                }
              `}</style>

              {/* SVG Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {connections.map((conn) => {
                  const fromNode = graphNodes.find(n => n.id === conn.from);
                  const toNode = graphNodes.find(n => n.id === conn.to);
                  if (!fromNode || !toNode) return null;

                  // Highlight lines connected to the central topic
                  const isHighlighted = fromNode.highlighted || toNode.highlighted;

                  return (
                    <line
                      key={`${conn.from}-${conn.to}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={isHighlighted ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.1)"}
                      strokeWidth={isHighlighted ? "0.6" : "0.4"}
                    />
                  );
                })}
              </svg>

              {/* Graph Nodes */}
              <div className="absolute inset-0">
                {graphNodes.map((node, i) => {
                  const style = getNodeStyle(node.type, node.highlighted);
                  const isHighlighted = node.highlighted;

                  return (
                    <div
                      key={node.id}
                      className="absolute"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: 'translate(-50%, -50%)',
                        animation: `float-subtle ${3 + (i % 3)}s ease-in-out infinite ${i * 0.4}s`
                      }}
                    >
                      <div
                        className={`
                          ${isHighlighted ? 'w-12 h-12 md:w-14 md:h-14' : 'w-9 h-9 md:w-11 md:h-11'}
                          rounded-full ${style.bg} ${style.border} border-2 ${style.glow}
                          flex items-center justify-center
                          transition-all duration-300 hover:scale-110 cursor-pointer
                          group relative
                        `}
                      >
                        <div className={style.text}>
                          {getNodeIcon(node.type, isHighlighted ? 18 : 14)}
                        </div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30">
                          <div className="bg-[#0a0510] border border-white/20 rounded-lg px-3 py-1.5 text-xs text-white whitespace-nowrap shadow-xl">
                            {node.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 justify-center">
                {[
                  { label: 'Person', color: 'bg-blue-400' },
                  { label: 'Org', color: 'bg-purple-400' },
                  { label: 'Topic', color: 'bg-emerald-400' },
                  { label: 'Task', color: 'bg-orange-400' },
                  { label: 'Event', color: 'bg-cyan-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full">
                    <div className={`w-2 h-2 rounded-full ${item.color}`} />
                    <span className="text-[10px] text-white/70">{item.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Side: Semantic Search Experience */}
          <div className="space-y-6">

            {/* Search Interface */}
            <div>
              <GlassCard className="p-0 overflow-hidden" hoverEffect={false}>
                {/* Search Header */}
                <div className="px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7B2CBF]/20 flex items-center justify-center text-[#9D4EDD]">
                      <Search size={16} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">Memory Search</h4>
                      <p className="text-[10px] text-[#52525B]">Query your knowledge in natural language</p>
                    </div>
                  </div>
                </div>

                {/* Search Input */}
                <div className="px-6 py-4 border-b border-white/5">
                  <div className="relative">
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                      <Search size={16} className="text-[#52525B]" />
                      <span className="flex items-center text-white/90 text-sm">
                        who discussed the Q4 budget?
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          className="w-0.5 h-4 bg-[#9D4EDD] ml-0.5"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Example queries */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {['contacts at TechFlow', 'pending tasks', 'meetings this week'].map((q) => (
                      <span key={q} className="text-[10px] text-[#52525B] px-2 py-1 bg-white/5 rounded-full border border-white/5">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Search Results */}
                <div className="px-6 py-4 space-y-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-[#9D4EDD] uppercase tracking-wider font-medium">Results from memory</span>
                    <span className="text-[10px] text-[#52525B]">2 found</span>
                  </div>

                  {searchResults.map((result) => (
                    <div
                      key={result.name}
                      className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all cursor-pointer group"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                        <User size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-white font-medium">{result.name}</span>
                          <span className="text-[10px] text-[#52525B]">{result.role}</span>
                        </div>
                        <p className="text-xs text-[#A1A1AA] mt-0.5">{result.context}</p>
                      </div>
                      <ArrowRight size={14} className="text-[#52525B] group-hover:text-[#9D4EDD] transition-colors shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Automatic Learning',
                  desc: 'Extracts insights after every sync. No manual tagging required.'
                },
                {
                  title: 'Relationship Discovery',
                  desc: 'See who works with whom, and which projects connect them.'
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-white text-sm font-medium mb-1">{item.title}</h5>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Privacy note */}
            <div className="flex items-center gap-2 text-xs text-[#52525B]">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Private & secure. Your data never trains public models.</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
