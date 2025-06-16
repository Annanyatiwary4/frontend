"use client";

import React, { useRef } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useInView } from "motion/react";
import { motion } from "motion/react";
import { templateList } from "@/lib/TemplateList"; // adjust the path if needed

export function Templates() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const cards = templateList.map((template, index) => (
    <Card key={template.id} card={template} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-amber-50">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-7xl pl-4 mx-auto text-3xl lg:text-9xl sm:text-4xl md:text-6xl font-bold text-neutral-500 dark:text-neutral-200 font-sans"
      >
        Explore our templates
      </motion.h2>

      <Carousel items={cards} />
    </div>
  );
}
