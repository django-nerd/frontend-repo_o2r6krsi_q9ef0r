import { motion } from 'framer-motion';

export default function Certifications() {
  const certs = [
    { title: 'AI/ML Certification', org: 'Organization', year: '2024' },
    { title: 'Python Certification', org: 'Organization', year: '2024' },
    { title: 'Web Development Certification', org: 'Organization', year: '2024' },
  ];

  return (
    <section id="certifications" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certs.map((c) => (
              <div key={c.title} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/60 dark:bg-zinc-900/60">
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{c.org}</p>
                <p className="text-xs mt-2 text-zinc-500">{c.year}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
