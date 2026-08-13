export const metadata = {
  title: "About - Zaki ur Rehman",
  description:
    "About Zaki ur Rehman — a design-led developer crafting scalable digital products and polished user experiences.",
};

const tailwindConfigScript = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "primary-fixed": "#f0dbff",
          "on-tertiary": "#003640",
          "surface-bright": "#3a3939",
          "surface-container-high": "#2a2a2a",
          "error-container": "#93000a",
          primary: "#ddb7ff",
          "secondary-container": "#0566d9",
          "on-tertiary-fixed": "#001f26",
          "surface-glass": "rgba(255, 255, 255, 0.03)",
          "surface-container-lowest": "#0e0e0e",
          "secondary-fixed": "#d8e2ff",
          "on-tertiary-container": "#002f38",
          secondary: "#adc6ff",
          "inverse-surface": "#e5e2e1",
          "surface-container": "#201f1f",
          "secondary-fixed-dim": "#adc6ff",
          "surface-tint": "#ddb7ff",
          "surface-container-low": "#1c1b1b",
          "primary-container": "#b76dff",
          "on-primary-fixed-variant": "#6900b3",
          "border-glass": "rgba(255, 255, 255, 0.08)",
          "text-primary": "#FDF7F4",
          "on-primary-fixed": "#2c0051",
          "on-tertiary-fixed-variant": "#004e5c",
          "primary-fixed-dim": "#ddb7ff",
          "on-error-container": "#ffdad6",
          "on-secondary-container": "#e6ecff",
          "tertiary-container": "#009eb9",
          surface: "#131313",
          "outline-variant": "#4d4354",
          "inverse-primary": "#842bd2",
          outline: "#988d9f",
          "on-secondary": "#002e6a",
          "surface-dim": "#131313",
          "surface-container-highest": "#353534",
          "on-error": "#690005",
          "on-surface-variant": "#cfc2d6",
          "on-background": "#e5e2e1",
          "on-surface": "#e5e2e1",
          "on-primary": "#490080",
          "on-primary-container": "#400071",
          "on-secondary-fixed": "#001a42",
          tertiary: "#4cd7f6",
          "text-secondary": "#94A3B8",
          "surface-variant": "#353534",
          "tertiary-fixed": "#acedff",
          error: "#ffb4ab",
          background: "#131313",
          "tertiary-fixed-dim": "#4cd7f6",
          "inverse-on-surface": "#313030",
          "on-secondary-fixed-variant": "#004395",
        },
        borderRadius: {
          DEFAULT: "0.25rem",
          lg: "0.5rem",
          xl: "0.75rem",
          full: "9999px",
        },
        spacing: {
          "margin-desktop": "64px",
          gutter: "24px",
          "container-max": "1200px",
          "margin-mobile": "20px",
          unit: "8px",
        },
        fontFamily: {
          "headline-lg-mobile": ["Geist"],
          "label-md": ["Geist"],
          "body-lg": ["Inter"],
          "display-lg": ["Geist"],
          "headline-lg": ["Geist"],
          "headline-md": ["Geist"],
          code: ["Geist"],
          "body-md": ["Inter"],
        },
        fontSize: {
          "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }],
          "label-md": ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" }],
          "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
          "display-lg": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "700" }],
          "headline-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "600" }],
          "headline-md": ["32px", { lineHeight: "40px", fontWeight: "600" }],
          code: ["14px", { lineHeight: "20px", fontWeight: "400" }],
          "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        },
      },
    },
  };
`;

const customStyles = `
  body {
    background-color: #050505;
    color: #FDF7F4;
    overflow-x: hidden;
  }

  .glass-panel {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .glass-panel:hover {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
  }

  .text-gradient {
    background: linear-gradient(to right, #ddb7ff, #adc6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .bg-gradient-primary {
    background: linear-gradient(135deg, #ddb7ff 0%, #adc6ff 100%);
  }

  .ambient-glow {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80vw;
    height: 80vw;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, rgba(5, 5, 5, 0) 70%);
    z-index: -1;
    pointer-events: none;
  }
`;

export default function About() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfigScript }} />
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />

      <main className="relative overflow-hidden px-4 md:px-8">
        <div className="ambient-glow" aria-hidden="true" />

        <section className="mb-32 mt-16 md:mt-24 max-w-6xl mx-auto">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl leading-relaxed">
            I engineer digital experiences that bridge the gap between complex logic and elegant interfaces. With a profound focus on modern web architectures, I build scalable, high-performance applications tailored for the future.
          </p>
        </section>

        <section className="mb-32 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel rounded-xl p-8 col-span-1 md:col-span-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
                <h2 className="font-headline-md text-headline-md">Philosophy</h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                Design is how it works, not just how it looks. I believe in a holistic approach to software development where robust architecture meets pixel-perfect execution. Every line of code is written with performance, maintainability, and user experience in mind.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                My journey in tech is driven by an insatiable curiosity and a commitment to continuous learning. I thrive in environments that challenge the status quo and demand innovative solutions to intricate problems.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-8 transition-all duration-300 flex flex-col justify-center items-center text-center">
              <image
                className="w-32 h-32 rounded-full object-cover border-2 border-primary mb-4 shadow-[0_0_20px_rgba(221,183,255,0.2)]"
                data-alt="A cinematic, high-contrast portrait silhouette of a software developer working in a dark, atmospheric room illuminated only by the glowing code on multiple monitors. The aesthetic is modern, minimalistic, and tech-focused with subtle deep purple and blue neon accents reflecting off glass surfaces. The mood is focused and intense."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh5_fvw4eVp_2hZkseeuV3QZS4KsHEFd3RVq2AEFY3CGyZl1toOtigZBBEWvWJaweoG2gQTKkXXz4bK-HDNHBDPfI7E1SOpklW4n6n8-OVTfF7ZgMqfU2SlfuEbCFCPoxXSpJI_TFHrbkMyMM80CHl0ucKmIkRekOkmHHkp1DDwfbfkogEDVLsBQQwQwrCWOopD3aCg0ty4NuxuAw9rSGh-RYBAO0Ev3UixZuh1XHPMF9M1MrqdrFZ"
                alt="Profile portrait"
              />
              <h3 className="font-label-md text-label-md font-bold text-primary mb-1">Based In</h3>
              <p className="font-body-md text-body-md text-text-secondary">Earth, Milky Way</p>
            </div>
          </div>
        </section>

        <section className="mb-32 max-w-6xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-12 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">code_blocks</span>
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-panel rounded-xl p-6 hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-label-md text-label-md text-primary mb-4 tracking-widest uppercase">Frontend Core</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">React / Next.js</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">TypeScript</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Tailwind CSS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Framer Motion</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-xl p-6 hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-label-md text-label-md text-primary mb-4 tracking-widest uppercase">Backend &amp; API</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Node.js</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Express / NestJS</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">GraphQL / REST</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-tertiary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">PostgreSQL / MongoDB</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-xl p-6 hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-label-md text-label-md text-primary mb-4 tracking-widest uppercase">DevOps &amp; Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-inverse-primary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Docker</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-inverse-primary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">CI/CD Pipelines</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-inverse-primary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">AWS / Vercel</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-inverse-primary" />
                  <span className="font-body-md text-body-md text-on-surface-variant">Git &amp; Github Actions</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel rounded-xl p-6 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl text-primary mb-2">terminal</span>
                <p className="font-code text-code text-text-secondary">Always exploring the bleeding edge of web technologies.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-6xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-12 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-4xl">history</span>
            Trajectory
          </h2>

          <div className="relative border-l border-border-glass ml-4 md:ml-6 space-y-12 pb-8">
            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -`left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-primary group-hover:bg-primary transition-colors duration-300 shadow-[0_0_10px_rgba(221,183,255,0.5)]" />
              <div className="glass-panel rounded-xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-text-primary">Senior Frontend Engineer</h3>
                    <p className="font-label-md text-label-md text-secondary mt-1">TechNova Solutions</p>
                  </div>
                  <span className="font-code text-code text-outline px-3 py-1 bg-surface-container-high rounded-full w-fit">2021 - Present</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Spearheaded the migration of a legacy monolithic dashboard to a modern Next.js architecture, improving load times by 40%. Led a team of 4 developers in implementing a unified design system using Tailwind CSS and Storybook.
                </p>
              </div>
            </div>

            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -`left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-secondary group-hover:bg-secondary transition-colors duration-300" />
              <div className="glass-panel rounded-xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-text-primary">Full Stack Developer</h3>
                    <p className="font-label-md text-label-md text-secondary mt-1">Creative Nexus</p>
                  </div>
                  <span className="font-code text-code text-outline px-3 py-1 bg-surface-container-high rounded-full w-fit">2018 - 2021</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Developed and maintained RESTful APIs using Node.js and Express. Integrated complex third-party payment gateways and built dynamic React frontends for e-commerce clients, resulting in a 25% increase in conversion rates.
                </p>
              </div>
            </div>

            <div className="relative pl-8 md:pl-12 group">
              <div className="absolute -`left-[9px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-tertiary group-hover:bg-tertiary transition-colors duration-300" />
              <div className="glass-panel rounded-xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-text-primary">UI/UX Developer</h3>
                    <p className="font-label-md text-label-md text-secondary mt-1">Digital Forge Agency</p>
                  </div>
                  <span className="font-code text-code text-outline px-3 py-1 bg-surface-container-high rounded-full w-fit">2016 - 2018</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Bridged the gap between design and engineering. Translated high-fidelity Figma mockups into responsive HTML/CSS/JS templates. Championed accessibility standards across all agency projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}