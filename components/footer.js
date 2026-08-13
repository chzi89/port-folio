export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-white/10 bg-slate-950/80">
      <div className="section-shell flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-violet-300">Available for work</p>
          <h3 className="text-2xl font-semibold text-white">Zaki ur Rehman</h3>
        </div>

        <div className="text-sm text-slate-300">
          <p>© 2026 Zaki ur Rehman.</p>
          <p>Designing thoughtful digital experiences.</p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          <a href="https://github.com/chzi89" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="mailto:chzaki2125@gmail.com" className="transition hover:text-white">
            Email
          </a>
          <a href="https://wa.me/923468668121" target="_blank" rel="noreferrer" className="transition hover:text-white">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
