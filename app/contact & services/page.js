export const metadata = {
  title: "Zaki ur Rehman - Services & Contact",
  description: "Services and contact offerings by Zaki ur Rehman.",
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
    background-image:
      radial-gradient(circle at 15% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 85% 30%, rgba(56, 189, 248, 0.05) 0%, transparent 50%);
    color: #FDF7F4;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .glass-panel {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }

  .glass-panel-hover:hover {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
    transform: translateY(-4px);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .gradient-text {
    background: linear-gradient(135deg, #ddb7ff 0%, #adc6ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn-primary {
    background: linear-gradient(135deg, #842bd2 0%, #0566d9 100%);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .btn-primary:hover {
    transform: scale(1.05);
  }

  .input-field {
    background-color: #050505;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: border-bottom-color 0.3s ease;
  }

  .input-field:focus {
    outline: none;
    border-bottom: 1px solid #ddb7ff;
    box-shadow: 0 1px 0 0 #ddb7ff;
  }

  main {
    flex: 1;
    padding-top: 100px;
  }
`;

export default function ServicesAndContactPage() {
  const services = [
    {
      title: "Web Development",
      icon: "code",
      text: "Building robust, scalable, and high-performance web applications using modern frameworks like React, Next.js, and complex backend integrations.",
      tags: ["React", "Node.js"],
      tone: "text-primary",
    },
    {
      title: "UI/UX Design",
      icon: "design_services",
      text: "Designing intuitive, user-centric interfaces with a focus on premium aesthetics, seamless interactions, and functional minimalism.",
      tags: ["Figma", "Prototyping"],
      tone: "text-tertiary",
    },
    {
      title: "E-commerce Solutions",
      icon: "shopping_cart",
      text: "Creating end-to-end digital storefronts optimized for conversion, featuring secure payment gateways and custom inventory management.",
      tags: ["Shopify", "Stripe"],
      tone: "text-primary-container",
    },
    {
      title: "App Development",
      icon: "smartphone",
      text: "Developing cross-platform mobile applications that deliver native-like performance and a cohesive brand experience across devices.",
      tags: ["React Native", "iOS/Android"],
      tone: "text-secondary",
    },
  ];

  const contacts = [
    { label: "Email", value: "chzaki2125@gmail.com", icon: "mail" },
    { label: "WhatsApp", value: "+92 346 8668121", icon: "forum" },
  ];

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <main className="mx-auto w-full max-w-container-max px-margin-mobile pb-32 md:px-margin-desktop">
        <section className="mt-20 md:mt-32">
          <div className="mb-16 text-center md:mb-24">
            <h1 className="mb-6 font-display-lg text-display-lg gradient-text">Expertise &amp; Offerings</h1>
            <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-text-secondary">
              Crafting digital experiences with precision and cutting-edge technology. Tailored solutions designed to elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="glass-panel glass-panel-hover rounded-xl p-8 flex flex-col h-full">
                <div className="mb-6 h-12 w-12 rounded-lg bg-surface-glass border border-border-glass flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-text-primary mb-4">{service.title}</h3>
                <p className="font-body-md text-body-md text-text-secondary `flex-grow">{service.text}</p>
                <div className="mt-8 flex gap-2 flex-wrap">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-label-md bg-secondary/10 border border-secondary/20 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-32 md:mt-40">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-text-primary">Let&apos;s Collaborate</h2>
            <p className="font-body-lg text-body-lg text-text-secondary">Ready to start your next project? Get in touch below.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter lg:gap-16 items-start">
            <div className="lg:col-span-1 space-y-6">
              {contacts.map((item) => (
                <div
                  key={item.label}
                  className="glass-panel rounded-xl p-6 flex items-center gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-surface-glass border border-border-glass flex items-center justify-center text-text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-text-secondary mb-1">{item.label}</h4>
                    <a href="#" className="font-body-md text-body-md text-text-primary hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 pt-4">
                <a href="#" className="h-12 w-12 rounded-full glass-panel flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-all">
                  <span className="material-symbols-outlined">code_blocks</span>
                </a>
                <a href="#" className="h-12 w-12 rounded-full glass-panel flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-all">
                  <span className="material-symbols-outlined">work</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 glass-panel rounded-xl p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-label-md text-label-md text-text-secondary mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="input-field w-full font-body-md text-body-md text-text-primary py-2 bg-transparent"
                      id="name"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-text-secondary mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="input-field w-full font-body-md text-body-md text-text-primary py-2 bg-transparent"
                      id="email"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-text-secondary mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="input-field w-full font-body-md text-body-md text-text-primary py-2 bg-transparent resize-none"
                    id="message"
                    placeholder="Tell me about your project..."
                    rows="4"
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    className="btn-primary text-text-primary px-8 py-3 rounded-full font-label-md text-label-md flex items-center gap-2"
                    type="button"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
