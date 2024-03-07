"use client";

import { caveat } from "@/components/fonts";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  return (
    <main className="max-w-screen-2xl mx-auto my-20">
      <div className="flex flex-col items-start gap-1 my-10">
        <h2 className="text-6xl font-semibold text-neutral-700">FAQ</h2>
        <p
          className={`${caveat.className} text-3xl  font-semibold text-emerald-800/70`}
        >
          Frequently Asked Questions
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FaqItem
          question="What is the material of the statue?"
          answer="The statue is made of gypsum."
        />
        <FaqItem
          question="How long does it take to deliver?"
          answer="It takes 3-5 days to deliver."
        />
        <FaqItem
          question="Can I return the statue?"
          answer="Yes, you can return the statue within 30 days."
        />
        <FaqItem
          question="What is the material of the statue?"
          answer="The statue is made of gypsum."
        />
        <FaqItem
          question="How long does it take to deliver?"
          answer="It takes 3-5 days to deliver."
        />
      </div>
    </main>
  );
};

export const FaqItem = ({
  question,
  answer,
  size,
}: {
  question: string;
  answer: string;
  size?: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="border-b-2 border-neutral-200 flex items-center w-full justify-between gap-8 my-2 p-2"
      role="button"
      onClick={handleOpen}
    >
      <div className="flex flex-col items-start gap-1">
        <h3
          className={`${size} font-semibold text-neutral-700 tracking-wide mb-2 uppercase`}
        >
          {question}
        </h3>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.5 }}
          className="text-md font-medium text-neutral-600 overflow-hidden"
        >
          {answer}
        </motion.div>
      </div>
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Plus size={26} />
      </motion.div>
    </div>
  );
};

export default FAQ;
