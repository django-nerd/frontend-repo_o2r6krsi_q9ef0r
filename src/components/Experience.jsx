import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Internships & Experience</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-semibold">AI Research Intern — Coding Jr</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">June 2025</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800">Remote</span>
              </div>
              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                Worked on an AI Debugger + VS Code Extension integrating a web chatbot using the Together API and FastAPI, improving developer workflows and real-time guidance.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
