import { motion } from "framer-motion";

export function FrontendDevIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
        alt="Frontend Development Illustration"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </motion.div>
  );
}