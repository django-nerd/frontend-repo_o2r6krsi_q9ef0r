import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-10"
        >
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            I’m a developer focused on creating delightful user interfaces with a strong eye for detail and performance. 
            I enjoy blending design and engineering to craft experiences that feel fast, polished, and accessible.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="font-semibold">Expertise</p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">React, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="font-semibold">Approach</p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">Design systems, accessibility, performance</p>
            </div>
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4">
              <p className="font-semibold">Interests</p>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">3D on the web, playful interactions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
