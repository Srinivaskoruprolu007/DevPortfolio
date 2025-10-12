import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import gsap from "gsap";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    // Slide down animation on mount
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    // Logo animation
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: "power3.out" }
      );
    }

    // Header background on scroll
    const handleScroll = () => {
      if (headerRef.current) {
        const scrolled = window.scrollY > 50;
        gsap.to(headerRef.current, {
          backdropFilter: scrolled ? "blur(16px)" : "blur(10px)",
          backgroundColor: scrolled
            ? "rgba(0, 0, 0, 0.3)"
            : "rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 backdrop-blur-md"
      role="banner"
    >
      <nav
        className="container mx-auto px-4 h-18 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          ref={logoRef}
          className="text-xl font-bold gradient-primary bg-clip-text text-transparent"
        >
          Srinivas Koruprolu
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2" role="menubar">
            {navItems.map((item) => (
              <li key={item.to} role="none">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer transition-all duration-300 font-medium px-4 py-2 rounded-full relative overflow-hidden group ${
                    activeSection === item.to
                      ? "text-primary bg-primary/10 shadow-custom-md border border-primary/20"
                      : "hover:text-primary hover:bg-primary/5 glass"
                  }`}
                  role="menuitem"
                  tabIndex={0}
                  aria-current={activeSection === item.to ? "page" : undefined}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="glass p-2 rounded-full">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <div className="flex items-center gap-4 md:hidden">
            <div className="glass p-2 rounded-full">
              <ThemeToggle />
            </div>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="glass hover:bg-primary/10 transition-all duration-300"
                aria-label="Open navigation menu"
                aria-expanded="false"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent
            className="glass backdrop-blur-xl border-l border-white/10 md:hidden"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col gap-6 mt-12" role="navigation">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                  Navigation
                </h3>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`text-lg cursor-pointer transition-all duration-300 font-medium px-6 py-4 rounded-xl relative overflow-hidden ${
                    activeSection === item.to
                      ? "text-primary bg-primary/10 shadow-custom-md border border-primary/20"
                      : "hover:text-primary hover:bg-primary/5 glass"
                  }`}
                  tabIndex={0}
                  aria-current={activeSection === item.to ? "page" : undefined}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-2xl">
                      {item.name === "About" && "👤"}
                      {item.name === "Skills" && "💪"}
                      {item.name === "Projects" && "🚀"}
                      {item.name === "Contact" && "📧"}
                    </span>
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
