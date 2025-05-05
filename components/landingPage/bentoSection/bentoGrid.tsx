import { useState } from "react";
import BentoGridSection from "./bentoGridSection";
import Hero from "./hero";

export default function BentoCards(onOpen: any) {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

  return (
<section className="w-full flex flex-col justify-center items-center gap-8 md:gap-12 py-8 md:py-16">
        <Hero />
      <BentoGridSection onOpen={handleOpen} />
    </section>
  );
}
