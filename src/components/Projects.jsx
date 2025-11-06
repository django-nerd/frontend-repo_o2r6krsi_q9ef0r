import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Attendance using Face Recognition',
    description: 'Attendance system using Android client and Django backend with real-time face recognition.',
    tags: ['Android', 'Django', 'OpenCV'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Automated Pill Dispenser',
    description: 'Arduino-based smart dispenser with scheduling and alert system for medication adherence.',
    tags: ['Arduino', 'C++', 'IoT'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Resume Parsing with NLP',
    description: 'Extract key info from resumes using spaCy and transformer-based NER.',
    tags: ['Python', 'NLP', 'spaCy'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'VS Code Extension + Chatbot',
    description: 'Developer assistant combining VS Code extension and web chatbot using Together API.',
    tags: ['TypeScript', 'FastAPI', 'Together API'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Multilingual Chatbot with LangChain',
    description: 'Conversational AI supporting multiple languages with LangChain pipelines.',
    tags: ['LangChain', 'LLM', 'FastAPI'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Food Delivery App',
    description: 'Full-stack delivery app demonstrating database design and ordering flows.',
    tags: ['MySQL', 'RDBMS', 'React'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Psychological Mental Health Analysis',
    description: 'Machine learning insights from survey data to support mental health initiatives.',
    tags: ['ML', 'Pandas', 'Visualization'],
    repo: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">A selection of work across AI, ML, and full‑stack development.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group rounded-2xl border border-zinc-200/60 dark:border-zinc-800 overflow-hidden bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md hover:shadow-xl hover:shadow-fuchsia-500/10 transition"
            >
              <div className="aspect-video bg-gradient-to-tr from-indigo-100 via-white to-fuchsia-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/70">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-primary">
                    <Github size={16} /> Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-primary">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
