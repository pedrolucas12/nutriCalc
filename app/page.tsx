"use client";

import BentoCards from "@/components/landingPage/bentoSection/bentoGrid";
import FAQs from "@/components/landingPage/faqs/faqs";
import Hero from "@/components/landingPage/hero/hero";
import Steps from "@/components/landingPage/steps/steps";
import NutriMindModal from "@/components/landingPage/testArea/NutriCalcModal";
import TestArea from "@/components/landingPage/testArea/testArea";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-16 md:gap-24">
        <Hero onOpen={handleOpen} />
        <BentoCards onOpen={handleOpen}/>
        <Steps />
        <TestArea />
        <FAQs />
      </section>

      <NutriMindModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
}