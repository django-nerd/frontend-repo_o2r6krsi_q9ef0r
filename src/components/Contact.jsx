import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s Build Something Amazing Together</h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">I’m open to internships, collaborations, and projects in AI, ML, and software engineering.</p>

              <div className="mt-6 flex items-center gap-3">
                <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white/60 dark:bg-zinc-900/60">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input type="text" required className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input type="email" required className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm mb-1">Message</label>
                  <textarea required rows="4" className="w-full rounded-lg border border-zinc-200 dark:border-zinc-800 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-primary to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">
                <MessageCircle size={18} /> Send Message
              </button>
            </form>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-xs text-zinc-500">© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
      </div>
    </section>
  );
}
