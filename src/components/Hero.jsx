import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="backdrop-blur-sm bg-white/30 dark:bg-zinc-900/30 rounded-2xl p-6 md:p-8 border border-white/20 dark:border-white/10 shadow-xl"
          >
            <p className="text-sm uppercase tracking-widest text-zinc-700/80 dark:text-zinc-300/80">AI Enthusiast | Developer | Innovator</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">[Your Name]</h1>
            <p className="mt-4 text-base md:text-lg text-zinc-700 dark:text-zinc-300">
              BCA (AI & ML) student crafting intelligent, user-centered software.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-fuchsia-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 px-5 py-3 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition">Contact Me</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative h-44 w-44 rounded-full border border-white/20 dark:border-white/10 bg-gradient-to-tr from-indigo-400/60 via-fuchsia-400/50 to-amber-300/50 shadow-2xl">
              <div className="absolute inset-0 rounded-full ring-8 ring-white/20 dark:ring-zinc-900/40" />
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=ai-student"
                alt="Avatar"
                className="absolute inset-1 rounded-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
