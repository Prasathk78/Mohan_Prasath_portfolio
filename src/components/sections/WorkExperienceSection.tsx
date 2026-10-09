import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const responsibilities = [
  'Translate institutional business processes into ERP module requirements and solution mappings.',
  'Gain exposure to the ERP implementation lifecycle, including requirement blueprinting, configuration, data migration, cloud deployment, user training, go-live, and support.',
  'Collaborate with product, delivery, and management teams in a software services environment.',
  'Learn SAP functional concepts, particularly Materials Management (MM) and Sales and Distribution (SD), alongside professional responsibilities.',
  'Continue developing practical projects using Python and full-stack web development technologies.',
];

const tags = [
  'ERP Systems', 'Requirement Analysis', 'Business Process Mapping', 'Cloud-Based Software',
  'Technical Communication', 'SAP MM/SD (Learning)', 'Python', 'Full-Stack Development',
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
              <p className="text-lg font-medium text-primary">JD Software Pvt Ltd</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin size={14} />Chennai, Tamil Nadu, India</span>
                <span className="inline-flex items-center gap-1"><Calendar size={14} />July 2026 – Present</span>
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

        <p className="text-foreground/80 leading-relaxed mb-6">
          Working within an enterprise software company on EDUMAAT, a cloud-based Education ERP platform. Gaining hands-on
          understanding of ERP product functionality, configuration, deployment, and support while developing technical
          capabilities and progressing toward software development and SAP-related opportunities.
        </p>

        <h4 className="font-semibold text-foreground mb-3">Key Responsibilities & Learning</h4>
        <ul className="space-y-2 mb-6">
          {responsibilities.map((r) => (
            <li key={r} className="flex gap-3 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{r}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/30">
              {t}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  </section>
);
