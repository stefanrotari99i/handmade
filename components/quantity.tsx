"use client";

import { Minus, Plus } from "lucide-react";

import { useState } from "react";

const Quantity = ({ onChange }: { onChange: (quantity: number) => void }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onChange(quantity - 1);
    }
  };

  return (
    <div
      className="flex items-center gap-8 border rounded-md border-neutral-200 w-fit py-2 px-6"
      role="input"
    >
      <button
        className="text-neutral-700/70 disabled:text-neutral-200 disabled:cursor-not-allowed"
        onClick={handleDecrement}
        disabled={quantity === 1}
      >
        <Minus size={16} />
      </button>
      <p className="text-neutral-700/80 text-md">{quantity}</p>
      <button className="text-neutral-700/70" onClick={handleIncrement}>
        <Plus size={16} />
      </button>
    </div>
  );
};

export default Quantity;
