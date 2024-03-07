"use client";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { MoveLeft, MoveRight } from "lucide-react";

import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Collections = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <SectionTitle
        title="Kollektionen"
        subtitle="Entdecken Sie unsere neuesten Kollektionen"
      />
      <div className="w-full max-w-screen-2xl mx-auto">
        <Slider {...settings} className="w-full ">
          <CollectionItem
            title="
            Weihnachtskollektion
  "
            count={8}
            image="/coll1.webp"
          />
          <CollectionItem
            title="
            Osterkollektion
  "
            count={12}
            image="/coll2.jpg"
          />
          <CollectionItem
            title="
            Halloween-Kollektion
  "
            count={16}
            image="/coll3.jpg"
          />
        </Slider>
      </div>
    </>
  );
};

export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 left-0 transform -translate-y-1/2`}
      style={{ ...style, left: "-40px" }}
      onClick={onClick}
    >
      <MoveLeft size={24} className="main-color" />
    </div>
  );
};

export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/3 right-0 transform -translate-y-1/3`}
      style={{ ...style, right: "-40px" }}
      onClick={onClick}
    >
      <MoveRight size={24} className="main-color" />
    </div>
  );
};

export const CollectionItem = ({
  title,
  count,
  image,
}: {
  title: string;
  count: number;
  image: string;
}) => {
  return (
    <article className="w-full px-2">
      <div className="w-full aspect-video relative article-img">
        <Image
          src={image}
          fill
          className="object-cover brightness-75 grayscale"
          alt={title}
        />
      </div>
      <div className="flex items-center justify-between gap-4 mt-4">
        <Link
          href={"#"}
          className="text-lg main-color font-medium tracking-wide "
        >
          {title}
        </Link>
        <p className="text-md  font-medium main-color coll-line relative">
          {count}
        </p>
      </div>
    </article>
  );
};

export default Collections;
