import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Info, XCircle } from "lucide-react";

interface FeedbackBannerProps {
  type: "success" | "error" | "info";
  message: string;
  isVisible: boolean;
  onDismiss?: () => void;
  className?: string;
}

export function FeedbackBanner({
  type,
  message,
  isVisible,
  onDismiss,
  className,
}: FeedbackBannerProps) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info,
  };

  const styles = {
    success:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200",
    error:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200",
    info: "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
  };

  const Icon = icons[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "flex items-center gap-3 p-4 border rounded-lg shadow-sm",
            styles[type],
            className
          )}
          role="alert"
          aria-live="polite"
        >
          <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <span className="flex-1">{message}</span>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-current hover:opacity-70 transition-opacity"
              aria-label="Dismiss notification"
            >
              <XCircle className="h-4 w-4" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
