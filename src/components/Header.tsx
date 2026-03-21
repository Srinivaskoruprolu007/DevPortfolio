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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, delay: 0.2, ease: "power3.out" }
      );
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-border/70 bg-background/92 shadow-custom-sm"
          : "border-transparent bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto flex h-18 items-center justify-between px-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-64}
          duration={500}
          onSetActive={() => setActiveSection("hero")}
          className="cursor-pointer"
        >
          <div ref={logoRef} className="flex flex-col">
            <span className="text-lg font-semibold text-foreground sm:text-xl">
              Srinivas Koruprolu
            </span>
            <span className="text-xs text-muted-foreground">
              Full-Stack Developer
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1" role="menubar">
            {navItems.map((item) => (
              <li key={item.to} role="none">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer rounded-full px-4 py-2 font-medium transition-all duration-300 ${
                    activeSection === item.to
                      ? "bg-muted text-foreground"
                      : "hover:bg-muted hover:text-foreground"
                  }`}
                  role="menuitem"
                  tabIndex={0}
                  aria-current={activeSection === item.to ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild size="sm" variant="outline" className="rounded-full px-5">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer"
            >
              Let&apos;s talk
            </Link>
          </Button>
          <div className="rounded-full border border-border bg-card p-2">
            <ThemeToggle />
          </div>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <div className="flex items-center gap-4 md:hidden">
            <div className="rounded-full border border-border bg-card p-2">
              <ThemeToggle />
            </div>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="border border-border bg-card transition-all duration-300 hover:bg-muted"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent
            className="border-l border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation menu"
          >
            <nav className="mt-12 flex flex-col gap-4" role="navigation">
              <div className="mb-4 text-left">
                <h3 className="text-xl font-semibold text-foreground">Menu</h3>
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
                  onClick={() => setIsOpen(false)}
                  className={`cursor-pointer rounded-xl border px-6 py-4 text-base font-medium transition-all duration-300 ${
                    activeSection === item.to
                      ? "border-primary/20 bg-primary/10 text-primary"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                  tabIndex={0}
                  aria-current={activeSection === item.to ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="outline" className="mt-2">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer"
                >
                  Start a conversation
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
