import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Chatbot"
        className="h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 text-white shadow-lg shadow-fuchsia-500/30 hover:scale-105 transition-transform flex items-center justify-center"
      >
        <MessageCircle size={22} />
      </button>

      {open && (
        <div className="mt-3 w-80 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-4 text-sm shadow-xl">
          <p className="font-semibold">Chat Assistant</p>
          <p className="mt-1 text-zinc-600 dark:text-zinc-400">Hi! How can I help you explore this portfolio?</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">About me</button>
            <button className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">Projects</button>
            <button className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">Contact</button>
            <button className="px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60">Download CV</button>
          </div>
        </div>
      )}
    </div>
  );
}
