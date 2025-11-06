import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-10"
          >
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I’m a BCA student specializing in AI & ML at Presidency University, Bangalore. I enjoy building intelligent systems,
              automating real-world problems, and learning new technologies.
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I love exploring NLP, computer vision, and full‑stack development to bring research concepts to practical products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-10"
          >
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              {[
                { name: 'Python', level: 90 },
                { name: 'Java', level: 75 },
                { name: 'HTML/CSS', level: 85 },
                { name: 'Arduino', level: 70 },
                { name: 'Machine Learning', level: 80 },
                { name: 'NLP', level: 70 },
                { name: 'React', level: 75 },
                { name: 'Flask/FastAPI', level: 70 },
              ].map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-zinc-500">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-zinc-200/70 dark:bg-zinc-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
