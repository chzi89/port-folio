"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className="flex-grow pt-28">
      <section id="home" className="section-shell reveal active">
        <div className="grid min-h-[72vh] items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm border rounded-full border-violet-400/30 bg-violet-500/10 text-violet-200">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Available for select projects
            </div>

            <h1 className="text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-gradient-primary">Zaki ur Rehman</span>
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-slate-300 lg:mx-0">
              Full-stack web developer building elegant digital products that combine sharp design,
              clean code, and reliable performance.
            </p>

            <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-sky-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(99,102,241,0.4)] transition hover:-translate-y-0.5"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-violet-300/60 hover:bg-violet-500/10"
              >
                View Projects
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-slate-300 lg:justify-start">
              <div>
                <span className="block text-2xl font-bold text-white">6+</span>
                Years experience
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">24</span>
                Launches delivered
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">99%</span>
                Client satisfaction
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="glass-card soft-ring relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 p-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio</span>
                </div>

                <div className="overflow-hidden rounded-[1.25rem] border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                    alt="Professional developer desktop workspace"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-slate-300">
                  <div className="p-3 border rounded-2xl border-white/10 bg-slate-800/80">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Focus</p>
                    <p className="mt-2 font-semibold text-white">Product Design</p>
                  </div>
                  <div className="p-3 border rounded-2xl border-white/10 bg-slate-800/80">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Stack</p>
                    <p className="mt-2 font-semibold text-white">Next.js + React</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 reveal">
        <div className="grid items-center gap-10 section-shell lg:grid-cols-2">
          <div className="glass-card rounded-[1.75rem] p-8 md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-sky-300">About</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Architecting robust digital experiences.</h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              I design and build modern web platforms that feel premium, load fast, and perform at scale.
              From APIs and databases to UI polish and deployment, I help businesses turn ideas into reliable products.
            </p>

            <div className="flex flex-wrap gap-2 mt-7">
              {['React', 'Node.js', 'TypeScript', 'Next.js', 'PostgreSQL', 'AWS'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-violet-400/20 bg-violet-500/5 px-3 py-1.5 text-sm text-violet-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.7)]">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-sky-500/10 to-transparent" />
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
                alt="Portrait of Zaki ur Rehman"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 reveal">
        <div className="section-shell">
          <div className="flex flex-col gap-4 mb-12 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Projects</p>
              <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Featured work</h2>
            </div>
            <a href="#contact" className="text-sm font-medium transition text-sky-300 hover:text-white">
              Let&apos;s build something together →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="glass-card group overflow-hidden rounded-[1.75rem] md:col-span-2">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional business website concept"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-200">Business Site</p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">Shakeel Intl</h3>
                  <a
                    href="https://shakeelintl.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm font-medium transition text-sky-300 hover:text-white"
                  >
                    Visit website →
                  </a>
                </div>
              </div>
            </article>

            <article className="glass-card group overflow-hidden rounded-[1.75rem]">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80"
                  alt="Personal brand website concept"
                  className="object-cover w-full h-full transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-sm uppercase tracking-[0.2em] text-violet-200">Personal Brand</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Usman Janjua</h3>
                  <a
                    href="https://usmanjanjua.tech"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-sm font-medium transition text-sky-300 hover:text-white"
                  >
                    Visit website →
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="glass-card mt-6 rounded-[1.75rem] p-8 md:p-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Healthcare Website</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">Dr. Amanullah Homeopathic Clinic</h3>
              </div>
              <a
                href="https://dramanullah-homeopathic.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-sm font-medium transition text-violet-200 hover:text-white"
              >
                View website →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
