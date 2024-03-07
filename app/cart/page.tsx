"use client";

import { CreditCard, Trash } from "lucide-react";

import Quantity from "@/components/quantity";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-20">
      <div className="flex flex-col items-start gap-4 justify-start">
        <div className="flex items-center justify-between w-full relative gap-10">
          <h1 className="text-4xl font-bold text-neutral-700 mb-6">
            Warenkorb
          </h1>
          <Link href={"/"} className="text-md text-neutral-500 underline">
            Continue Shopping
          </Link>
        </div>
        <table className="w-full">
          <thead className="border-b border-neutral-200 pb-4">
            <tr className="">
              <th className="text-left uppercase text-xs text-neutral-500 py-4">
                Product
              </th>
              <th className=" uppercase text-xs text-neutral-500 py-4">
                Quantity
              </th>
              <th className="text-right uppercase text-xs text-neutral-500 py-4">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>
        <div className="flex flex-col items-end w-full justify-end gap-2 border-t border-neutral-200 pt-16">
          <div className="flex items-baseline justify-between w-fit gap-4">
            <h3 className="text-md font-semibold text-neutral-500">Subtotal</h3>
            <p className="text-2xl font-semibold text-neutral-700">7,200 €</p>
          </div>
          <p className="text-sm  text-neutral-500">
            Taxes and shipping calculated at checkout
          </p>
          <button className="mt-4 hover:bg-neutral-700 transition-all duration-200 ease-in-out w-fit text-center bg-black flex items-center justify-between backdrop-blur-md text-white  h-12 ">
            <span className="text-sm uppercase font-semibold flex-1 leading-none px-10">
              Proceed to checkout
            </span>
            <span className="w-12 h-12 bg-yellow-500  flex items-center justify-center">
              <CreditCard size={22} className="text-white " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CartItem = () => {
  return (
    <tr>
      <td className="flex items-start gap-4 py-4">
        <div className="w-28 h-32 rounded-md relative overflow-hidden">
          <Image
            fill
            src="/1.jpg"
            alt="Picture of the author"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start ml-4 gap-1 py-2">
          <h2 className="text-neutral-700 font-semibold text-md">
            Caesar Statue Gypsum
          </h2>
          <p className="text-neutral-500 text-md">1,200 €</p>
        </div>
      </td>
      <td className="text-neutral-700 ">
        <div className="flex items-center gap-6">
          <Quantity onChange={() => {}} />
          <button className="text-neutral-700 text-xs">
            <Trash size={16} />
          </button>
        </div>
      </td>
      <td className="text-neutral-800 text-right">1,200 €</td>
    </tr>
  );
};

export default page;
