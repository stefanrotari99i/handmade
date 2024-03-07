"use client";

import SectionTitle from "@/components/SectionTitle";
import Slider from "react-slick";

const Testimonials = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="w-full  flex items-center justify-center min-h-[70dvh]">
      <div className="flex flex-col items-center justify-center relative">
        <SectionTitle title="Was unsere Kunden sagen" subtitle="Testimonials" />
        <Slider {...settings} className="max-w-screen-2xl mx-auto text-center">
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </Slider>
      </div>
    </div>
  );
};

const TestimonialItem = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center mx-20 my-10">
      <p className="text-neutral-700 text-center leading-6">
        &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.&quot;
      </p>
      <p className="text-neutral-700/70 text-center italic">Ida J. - CEO</p>
    </div>
  );
};

export default Testimonials;
