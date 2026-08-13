export const metadata = {
  title: "Zaki ur Rehman - Services & Contact",
  description: "Services and contact offerings by Zaki ur Rehman.",
};

import Script from "next/script";
import ContactForm from "../../components/ContactForm";

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
    transform: translateY(-4px) scale(1.01);
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

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
    animation: fadeInUp 0.5s ease both;
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
      <Script id="tailwind-config" strategy="beforeInteractive">
        {tailwindConfig}
      </Script>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <main className="w-full pb-32 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <section className="mt-20 md:mt-32">
          <div className="mb-16 text-center md:mb-24">
            <h1 className="mb-6 font-display-lg text-display-lg gradient-text">Expertise &amp; Offerings</h1>
            <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-text-secondary">
              Crafting digital experiences with precision and cutting-edge technology. Tailored solutions designed to elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="flex flex-col h-full p-8 glass-panel glass-panel-hover rounded-xl animate-fade-in"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 border rounded-lg bg-surface-glass border-border-glass text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="mb-4 font-headline-md text-headline-md text-text-primary">{service.title}</h3>
                <p className="font-body-md text-body-md text-text-secondary flex-grow">{service.text}</p>
                <div className="flex flex-wrap gap-2 mt-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs border rounded-full font-label-md bg-secondary/10 border-secondary/20 text-secondary"
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
            <h2 className="mb-4 font-headline-lg text-headline-lg text-text-primary">Let&apos;s Collaborate</h2>
            <p className="font-body-lg text-body-lg text-text-secondary">Ready to start your next project? Get in touch below.</p>
          </div>

          <div className="grid items-start grid-cols-1 lg:grid-cols-3 gap-gutter lg:gap-16">
            <div className="space-y-6 lg:col-span-1">
              {contacts.map((item, idx) => {
                const href = item.label === "Email" ? `mailto:${item.value}` : `https://wa.me/${item.value.replace(/[^0-9]/g, "")}`;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-6 transition-colors glass-panel rounded-xl hover:border-primary/50 animate-fade-in"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-surface-glass border-border-glass text-text-primary">
                      <span className="material-symbols-outlined">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="mb-1 font-label-md text-label-md text-text-secondary">{item.label}</h4>
                      <a href={href} className="transition-colors font-body-md text-body-md text-text-primary hover:text-primary">
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}

              <div className="flex gap-4 pt-4">
                <a href="#" className="flex items-center justify-center w-12 h-12 transition-all rounded-full glass-panel text-text-secondary hover:text-primary hover:border-primary/50">
                  <span className="material-symbols-outlined">code_blocks</span>
                </a>
                <a href="#" className="flex items-center justify-center w-12 h-12 transition-all rounded-full glass-panel text-text-secondary hover:text-primary hover:border-primary/50">
                  <span className="material-symbols-outlined">work</span>
                </a>
              </div>
            </div>

            <div className="p-8 lg:col-span-2 glass-panel rounded-xl md:p-12 animate-fade-in" style={{ animationDelay: `160ms` }}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
