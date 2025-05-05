"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);

      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }

      return acc;
    }, 0);

    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#344e41", // slate-900
    "#171717", // neutral-900
    "#1f2f27", // black
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #3cba8e, #a3b18a)", // Verde Brilhante (primary-700) -> Sage
    "linear-gradient(to bottom right, #768948, #fbfaf8)", // Moss Green (moss_green-500) -> Quase Branco (secondary-100)
    "linear-gradient(to bottom right, #588157, #bdeada)", // Fern Green (primary-500) -> Verde Muito Claro (primary-900)
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      ref={ref}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[40rem] justify-center space-x-20 overflow-y-auto rounded-xl p-10"
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={`${item.title ?? "default-title"}-${index}`} className="my-20">
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-slate-300"
                initial={{
                  opacity: 0,
                }}
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg mt-10 max-w-sm text-secondary-700"
                initial={{
                  opacity: 0,
                }}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md md:block",
          contentClassName
        )}
        style={{ background: backgroundGradient }}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
