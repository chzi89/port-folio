
export default function Nav() {
    return (
        <header className="bg-surface-glass text-primary font-label-md text-label-md fixed top-0 w-full backdrop-blur-xl border-b border-border-glass shadow-sm transition-all ease-in-out duration-300 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 `w-full z-50">
<div className="font-headline-md text-headline-md font-bold text-primary">
            Zaki ur Rehman
        </div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-primary font-bold border-b-2 border-primary pb-1 hover:scale-105 transition-transform duration-300" href="#">Home</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 `transition-transform duration-300" href="#about">About</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 `transition-transform duration-300" href="#projects">Projects</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 ``transition-transform duration-300" href="#services">Services</a>
<a className="text-on-surface-variant hover:text-primary transition-colors hover:scale-105 `transition-transform duration-300" href="#contact">Contact</a>
</nav>
<button className="hidden md:block `bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-label-md text-label-md px-6 py-2 rounded-full hover-lift">
            Hire Me
        </button>
{/* <!-- Mobile Menu Toggle (Visual Only) --> */}
<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
  )
}