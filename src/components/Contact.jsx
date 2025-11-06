import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s build something great</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">I’m open to freelance work, collaborations, and interesting opportunities.</p>
          <a
            href="mailto:you@example.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-primary to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition"
          >
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
        <p className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
