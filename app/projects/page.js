export const metadata = {
  title: "Zaki ur Rehman - Projects",
  description: "Selected projects and case studies by Zaki ur Rehman.",
};

const tailwindConfig = `
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

const styles = `
  body {
    background-color: #050505;
    color: #FDF7F4;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .glass-card:hover {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
  }

  .text-gradient {
    background: linear-gradient(135deg, #A855F7, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bg-gradient-btn {
    background: linear-gradient(135deg, #A855F7, #3B82F6);
  }

  html {
    scroll-behavior: smooth;
  }
`;

export default function ProjectsPage() {
  const projects = [
    {
      title: "Luxe Cart",
      description:
        "A high-performance e-commerce platform featuring seamless checkout, real-time inventory tracking, and an intuitive admin dashboard.",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGGUrQbjHK8x4JHa_LE5ntX6FYfgaYYS_f1oNrtCdGz402aB-ybkUrQCzGo3gN3B_aAcVsxdiQ9gABR6st2O3bDpDDh0wgLZGPUui_tS7jfw-kEukWHX_9N-iOqTptIbCTopUzEQmo_7DeJ8cSZbHKiUBn6zGQfle5Ez-hVp3RHs4I9dRfj2ZfwHJZEByNUEygXQM7V4pclDjIxvvXZQPwckXReCzkFikJE7b6GDKK1j0Ttomlgfl5",
    },
    {
      title: "Apex Corporate",
      description:
        "A modern corporate identity website with dynamic content management, SEO optimization, and lightning-fast load times.",
      tags: ["React", "Framer Motion", "Sanity CMS"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuABLgXwsm0sreJHbRBa0G7CGWFzSi0wtW4WoTQCwypV4nlAnXdS4EiZdyZI8wlmjAzqF1AxBqW-K8fG09J2ZYoWoVd2M_K7dskQcPPrTnEFP5Adt8veCg9qhX6GgUn0f4FfFn8yNHHiU1J58xRduCrwfXbpxhJP8ydIA4-tFajqWVk6IPn8w5qIhEUtFGxEzVhraPB1QtYPOyq8CaE2_8C__NQ2TYWe8XLqXw80vgZE5wUL6CCe3PeZ",
    },
    {
      title: "Vitality Clinic",
      description:
        "A comprehensive web presence for a homeopathy clinic, featuring an integrated appointment booking system and patient portal.",
      tags: ["Vue.js", "Nuxt", "Firebase"],
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_4fbJniQXvMRbTsjtVdSpatMSz7cgwL6B6jwoo9JIRDyLpIDb-7T0_Hg5sofexw0RiwTaTO8Sw4b26uD4RE43kucqLsNp695OOKBPXTuH2sxl8vjCDssvKoB2t5vjspH0m62id6orC-IWxn-CpGz3KSBMjfdGZqhMbjwR0xhWMDnEpWuhC0FUbE7csoPzEJonS0yNILF5EMTYhCxyEL8oEEmoOYH2zyUyDT59yKgo-I3XTMrBal1H",
    },
  ];

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <main className="mx-auto w-full max-w-container-max px-margin-mobile pb-32 pt-32 md:px-margin-desktop">
        <section className="mb-24 text-center md:text-left">
          <h1 className="mb-6 font-display-lg text-display-lg">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-text-secondary">
            A selection of my recent work showcasing technical expertise, elegant design, and robust architecture across various domains.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass-card group flex flex-col overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <image
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 `bg-gradient-to-t from-surface to-transparent opacity-80" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-[24px] `leading-[32px] font-headline-md text-text-primary">{project.title}</h3>
                <p className="mb-4 `flex-grow font-body-md text-body-md text-text-secondary">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-secondary/20 bg-surface-glass px-3 py-1 text-xs font-code text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-label-md text-label-md transition-colors group-hover:text-primary-container"
                >
                  View Case Study
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
