"use client";
import Image from "next/image";
import "./globals.css";



import { useEffect } from "react";



export default function Home() {
   useEffect(() => {
  function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);

  setTimeout(reveal, 100);

  return () => {
    window.removeEventListener("scroll", reveal);
  };
}, []);
  return (
    <main className="`flex-grow `pt-[100px]">
{/* <!-- Hero Section --> */}
<section className="min-h-[80vh] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop text-center relative max-w-container-max mx-auto reveal active">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary/30 bg-surface-glass mb-8">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-md text-label-md text-secondary">Available for new projects</span>
</div>
<h1 className="font-display-lg text-[48px] md:text-display-lg text-text-primary mb-6">
                Hi, I'm <br className="md:hidden"/> <span className="text-gradient-primary">Zaki ur Rehman</span>
</h1>
<p className="font-body-lg text-body-lg text-text-secondary max-w-2xl mx-auto mb-12">
                Full-Stack Web Developer engineering digital experiences that merge exceptional design with robust architecture. Building scalable solutions for a global audience.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto `bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg hover-lift flex items-center justify-center gap-2">
                    Hire Me
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button className="w-full sm:w-auto glass-panel text-primary font-label-md text-label-md px-8 py-4 rounded-lg hover-lift flex items-center justify-center gap-2">
                    View Projects
                    <span className="material-symbols-outlined text-[18px]">code</span>
</button>
</div>
</section>
{/* <!-- About Preview --> */}
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
<div className="order-2 md:order-1 glass-panel rounded-xl p-8 relative overflow-hidden group">
{/* <!-- Abstract code decoration --> */}
<div className="absolute -right-10 -top-10 opacity-10 text-[120px] font-code pointer-events-none group-hover:text-primary transition-colors duration-700">
                        {}
                    </div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary mb-6">
                        Architecting the Web.
                    </h2>
<p className="font-body-md text-body-md text-text-secondary mb-6">
                        I specialize in building high-performance, accessible, and deeply interactive web applications. With a focus on modern stacks and cloud-native architecture, I deliver software that scales seamlessly.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 rounded-full border border-tertiary-container/30 bg-surface-glass font-code text-code text-tertiary">React</span>
<span className="px-3 py-1 rounded-full border border-tertiary-container/30 bg-surface-glass font-code text-code text-tertiary">Node.js</span>
<span className="px-3 py-1 rounded-full border border-tertiary-container/30 bg-surface-glass font-code text-code text-tertiary">TypeScript</span>
<span className="px-3 py-1 rounded-full border border-tertiary-container/30 bg-surface-glass font-code text-code text-tertiary">PostgreSQL</span>
</div>
</div>
<div className="order-1 md:order-2 flex justify-center">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-panel flex items-center justify-center relative shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden">
<img className="w-full h-full object-cover mix-blend-luminosity opacity-80" data-alt="A highly stylized, minimalist abstract 3D portrait representing a digital creator in a deep space setting. The aesthetic is dark mode, featuring a sleek obsidian background with subtle translucent glassmorphic shards floating around. Deep indigo and cyan glowing accents illuminate the scene, conveying a futuristic, premium, and sophisticated technical vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhppf8N3xQUuf2h7aqjhgKplsOvtj01Xq-gmuBGtaepoeYR9xpcGj5G0lhA9-MiroCSGbFbRyIjZCeblduXdDrDnX7aBLiSj6hOG-Gw_eEzPpnm-2h18rHKc_NA_PqqRms3-GneB_9SsmFrDSm720tvgrujLaA5cp-V-xLL0MIzYVRvHoiiJ5jY9Qvru9C1VP-pMHonBPXxAo7aC-Y_Z0lUOcf8hogbcD7Z0c2haN3oyCPkd4W2mgN"/>
</div>
</div>
</div>
</section>
{/* <!-- Featured Projects (Bento Grid) --> */}
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal" id="projects">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary mb-2">Featured Work</h2>
<p className="font-body-md text-body-md text-text-secondary">Selected projects from my recent portfolio.</p>
</div>
<a className="hidden md:flex text-primary hover:text-primary-container font-label-md text-label-md items-center gap-1 transition-colors" href="#">
                    View all <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* <!-- Project 1 (Spans 2 columns on desktop) --> */}
<div className="md:col-span-2 glass-panel rounded-xl overflow-hidden hover-lift group relative `h-[400px]">
<div className="absolute inset-0 `bg-gradient-to-t from-surface-container-lowest to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" data-alt="A sleek, modern dashboard UI design showcased on a dark glassmorphism background. The dashboard features intricate data visualizations, glowing cyan and indigo neon accents, and deep obsidian panels. The setting implies a high-end fintech or analytics platform operating in a sophisticated, minimalist deep space aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGGm08pDwUzxm7E809kL2k2YJVOJNWrNr7GnNRh-Gs7mtBz380QHe3T5M-6vGuxf2qRJkRGvkoW7TRYtwFfpFD5qgDZtDhJrxoiS7HsiiZxI2z6T_IIuN1qCAr7ooAY5ELxQdY0qThUPB01m1vOPVXrDGiCyWV1DLNrUvr6wpAnySTs5qDmuA0qfO0ScZwsWY7wS7QqHpojGb-khZEhAsAJanYYgGuOEYeiGAdcgm-q4Ogxi5198-b"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-tertiary font-code text-code mb-2 block">FinTech Platform</span>
<h3 className="font-headline-md text-headline-md text-text-primary">Nexus Analytics</h3>
</div>
<button className="w-10 h-10 rounded-full bg-surface-glass border border-border-glass flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined">north_east</span>
</button>
</div>
</div>
</div>
{/* <!-- Project 2 --> */}
<div className="glass-panel rounded-xl overflow-hidden hover-lift group relative `h-[400px]">
<div className="absolute inset-0 `bg-gradient-to-t from-surface-container-lowest to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" data-alt="A futuristic e-commerce mobile application interface rendered on a sleek, dark background. The design employs a premium dark mode aesthetic with smooth glass-like components floating above an infinite black void. Subtle gradients of primary indigo highlight interactive elements, emphasizing a clean, fast, and modern user experience." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5r3l-Dx7lUJYkddljX0Ef9k6Sww4FiqfRjFe-c14lDN2nUn9xYKViJZnJgSGLGJ6itqJVviRBnzDvQCeNKabQIZTbE3rsq_aQ0Ce1vHNlQRKJ2nr6USRYDVXcKbd00GzHY1dAUd6rd_r-7ZeanT-6VOzCYODRlfqUykdo2e6Nqeh6bLSloVTymVZCEuId6lJxXj8DRyIaq1DJfcl_5GOoBVqAda2kRAAqBoTrADPerZEwbZyuh3VE"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<span className="text-tertiary font-code text-code mb-2 block">E-Commerce App</span>
<h3 className="font-headline-md text-[24px] text-text-primary">Aura Store</h3>
</div>
</div>
</div>
</div>
{/* <!-- Project 3 --> */}
<div className="md:col-span-3 glass-panel rounded-xl p-8 hover-lift flex flex-col md:flex-row gap-8 items-center justify-between">
<div className="max-w-xl">
<span className="text-secondary font-code text-code mb-2 block">Enterprise SaaS</span>
<h3 className="font-headline-md text-headline-md text-text-primary mb-4">CloudFlow Workspace</h3>
<p className="font-body-md text-body-md text-text-secondary">A comprehensive collaborative environment built for remote engineering teams. Features real-time state synchronization, WebRTC communication, and deeply integrated Git workflows.</p>
</div>
<div className="flex gap-4">
<button className="bg-surface-glass border border-border-glass px-6 py-3 rounded-lg font-label-md text-label-md text-primary hover:bg-surface-container-high transition-colors">Case Study</button>
</div>
</div>
</div>
</section>
{/* <!-- Services --> */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface/50 border-y border-border-glass reveal" id="services">
<div className="max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary mb-4">Core Competencies</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="glass-panel p-8 rounded-xl hover-lift">
<div className="w-12 h-12 rounded-lg bg-primary-container/20 flex items-center justify-center text-primary mb-6">
<span className="material-symbols-outlined text-[24px]">terminal</span>
</div>
<h3 className="font-headline-md text-[24px] text-text-primary mb-4">Backend Architecture</h3>
<p className="font-body-md text-body-md text-text-secondary">Designing scalable, secure APIs and microservices using Node.js, Go, and relational/NoSQL databases.</p>
</div>
<div className="glass-panel p-8 rounded-xl hover-lift">
<div className="w-12 h-12 rounded-lg bg-secondary-container/20 flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[24px]">web</span>
</div>
<h3 className="font-headline-md text-[24px] text-text-primary mb-4">Frontend Engineering</h3>
<p className="font-body-md text-body-md text-text-secondary">Crafting responsive, accessible, and highly interactive user interfaces primarily using React and modern CSS.</p>
</div>
<div className="glass-panel p-8 rounded-xl hover-lift">
<div className="w-12 h-12 rounded-lg bg-tertiary-container/20 flex items-center justify-center text-tertiary mb-6">
<span className="material-symbols-outlined text-[24px]">cloud</span>
</div>
<h3 className="font-headline-md text-[24px] text-text-primary mb-4">Cloud &amp; DevOps</h3>
<p className="font-body-md text-body-md text-text-secondary">Deploying and managing infrastructure on AWS/GCP, utilizing Docker, CI/CD pipelines, and infrastructure as code.</p>
</div>
</div>
</div>
</section>
</main>
  );
}
