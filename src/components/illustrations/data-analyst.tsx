import { motion } from "framer-motion";

export function DataAnalystIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto"
    >
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        alt="Data Analysis Illustration"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </motion.div>
  );
}