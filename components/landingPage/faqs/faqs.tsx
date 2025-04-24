"use client";

import AccordionFaqs from "./accordionFaqs";
import FaqHero from "./heroFaqs";

export default function FAQs() {
  return (
    <section
      className=" bg-primary-700 dark:bg-primary-900/30
    container mx-auto  text-center flex flex-col w-full rounded-xl gap-4 p-4
    "
    >
      <FaqHero />

      <AccordionFaqs />
    </section>
  );
}
