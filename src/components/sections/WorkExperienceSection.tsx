import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const contributions = [
  'Handled 150+ leads from schools and colleges, qualifying each one and following up on time.',
  'Demonstrated a 34+ module cloud ERP, explaining workflows and features in simple terms.',
  'Gathered requirements on 10+ client visits and passed issues and enhancement requests to the development team.',
  'Kept CRM records and quotations accurate, and escalated high-value and partnership leads to senior management.',
];

export const WorkExperienceSection = () => (
  <section id="experience" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Work Experience
        </h2>
        <p className="text-lg text-foreground/80">My current professional role</p>
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative bg-accent/50 backdrop-blur-sm rounded-xl border border-border shadow-lg p-6 md:p-8 border-l-4 border-l-primary"
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
          <div className="flex gap-4">
            <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 items-center justify-center text-primary">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Tech Sales Specialist</h3>
              <p className="text-lg font-medium text-primary">JD Software Pvt Ltd – EDUMAAT</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin size={14} />Chennai</span>
                <span className="inline-flex items-center gap-1"><Calendar size={14} />Jul 2026 – Present</span>
              </div>
            </div>
          </div>
          <span className="self-start inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Currently Working
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {contributions.map((contribution) => (
            <li key={contribution} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{contribution}</span>
            </li>
          ))}
        </ul>

        <p className="text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">What I learned: </span>
          requirement gathering, ERP/SaaS product knowledge, client communication, and working with a CRM.
        </p>
      </motion.article>
    </div>
  </section>
);
