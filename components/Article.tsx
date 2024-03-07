import { Heart, ShoppingBasket } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
  title: string;
  price: number;
  image: string;
  isDiscounted?: boolean | false;
  discountPrice?: number;
}

const Article = ({
  title,
  price,
  image,
  isDiscounted = false,
  discountPrice = 0,
}: ArticleProps) => {
  return (
    <article className="flex flex-col items-center gap-1 ">
      <div className="group w-full aspect-[9/11] relative article-img overflow-hidden">
        <Image
          src={image}
          fill
          className="object-cover  object-top hover:scale-110 transition-transform duration-300 ease-in-out grayscale hover:grayscale-0"
          alt={title}
        />
        <button className="absolute -bottom-10 left-[10%] flex items-center gap-4 justify-center uppercase text-xs font-semibold bg-white p-2 w-[80%] text-center active:scale-95 hover:bg-neutral-100 group-hover:bottom-5 transition-all duration-300 ease-in-out">
          <span>Add to cart</span>
          <ShoppingBasket size={20} />
        </button>
        <button
          className="absolute top-4 right-4 text-rose-300 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out
        active:scale-95 transform origin-center active:text-rose-500"
        >
          <Heart size={22} />
        </button>
      </div>
      <Link
        href={`/article`}
        className="text-[15px] main-color font-semibold tracking-wide mt-4"
      >
        {title}
      </Link>
      <div className="flex items-center gap-4">
        <p
          className={` text-sm font-black ${
            isDiscounted ? "line-through main-color/70" : "main-color"
          }`}
        >
          {price} €
        </p>
        {isDiscounted && (
          <p className="text-rose-500 text-sm font-black">{discountPrice} €</p>
        )}
      </div>
    </article>
  );
};

export const ArticlesWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-x-2 gap-y-8 w-full  my-10  max-w-screen-2xl mx-auto">
      {children}
    </div>
  );
};

export default Article;
