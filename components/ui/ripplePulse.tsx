import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Ripple } from "../magicui/ripple";

export function RipplePulse() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Start the pulsing animation
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full bg-primary-500/20"
          animate={{
            scale: isActive ? [1, 1.5, 1.2] : [1.2, 1, 1.3],
            opacity: isActive ? [0.2, 0.3, 0.2] : [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-primary-400/10"
          animate={{
            scale: isActive ? [1.2, 1, 1.3] : [1, 1.5, 1.2],
            opacity: isActive ? [0.1, 0.3, 0.1] : [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-primary-300/5"
          animate={{
            scale: isActive ? [1, 1.2, 1] : [1.1, 0.9, 1.1],
            opacity: isActive ? [0.05, 0.1, 0.05] : [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>
      <Ripple color="var(--primary-500)" />
    </section>
  );
}
