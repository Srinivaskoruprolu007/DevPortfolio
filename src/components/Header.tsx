import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      role="banner"
    >
      <nav
        className="container mx-auto px-4 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          Srinivas Koruprolu
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6" role="menubar">
            {navItems.map((item) => (
              <li key={item.to} role="none">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer transition-colors font-medium px-3 py-2 rounded-md ${
                    activeSection === item.to
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary hover:bg-primary/5"
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
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white"
                aria-label="Open navigation menu"
                aria-expanded="false"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent
            className="p-4 bg-background rounded-r-lg md:hidden"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col gap-4 mt-8" role="navigation">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`text-lg cursor-pointer transition-colors font-medium px-3 py-2 rounded-md ${
                    activeSection === item.to
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary hover:bg-primary/5"
                  }`}
                  tabIndex={0}
                  aria-current={activeSection === item.to ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
