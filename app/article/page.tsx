"use client";

import { FaqItem } from "@/components/faq";
import Quantity from "@/components/quantity";
import { ShoppingBasket } from "lucide-react";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-20">
      <div className="flex items-center justify-center gap-10">
        <div className="w-[40dvw] h-[80dvh] relative box_parent  overflow-hidden ">
          <svg className="flt_svg hidden" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="flt_tag">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="flt_tag"
                />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
              </filter>
            </defs>
          </svg>

          <div className="box overflow-hidden relative w-full h-full">
            <Image
              src="/1.jpg"
              alt="Picture of the author"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col items-start max-w-screen-sm">
          <h1 className="text-3xl font-bold uppercase text-neutral-700 mb-1">
            Caesar Statue Gypsum
          </h1>
          <p className="text-xl font-semibold text-neutral-700">1,200 €</p>
          <p className="text-md text-neutral-500 mt-4 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tincidunt, nunc a lacinia tincidunt, nunc a lacinia
          </p>
          <Quantity onChange={(quantity) => console.log(quantity)} />
          <button className="mt-6 border-2 w-full text-center border-neutral-700 flex items-center justify-between backdrop-blur-md text-neutral-700  h-12 ">
            <span className="text-sm uppercase font-semibold flex-1 leading-none">
              Add to cart
            </span>
            <span className="w-12 h-12 bg-neutral-700  flex items-center justify-center">
              <ShoppingBasket size={22} className="text-white " />
            </span>
          </button>
          <div
            className="flex flex-col gap-2 items-start mt-10 w-full
          "
          >
            <FaqItem
              question="What is the material of the statue?"
              answer="The statue is made of gypsum."
              size={"text-sm"}
            />
            <FaqItem
              question="How long does it take to deliver?"
              answer="It takes 3-5 days to deliver."
              size={"text-sm"}
            />
            <FaqItem
              question="Can I return the statue?"
              answer="Yes, you can return the statue within 30 days."
              size={"text-sm"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
