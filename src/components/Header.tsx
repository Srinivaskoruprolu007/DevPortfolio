import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold"
        >
          Srinivas Koruprolu
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="cursor-pointer hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
          </div>
          <SheetContent
            className="p-4 bg-background rounded-r-lg md:hidden"
          >
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  className="text-lg cursor-pointer hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
