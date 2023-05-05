import React from "react";
import Link from "next/link";
import CurrencyFormat from "react-currency-format";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/utils/helper";

type Props = {
  data: Product;
};

const ProductCard = ({ data: { attributes: p, id } }: Props) => {
  return (
    <Link
      className="transform overflow-hidden bg-white duration-[250ms] hover:scale-105"
      href={`/product/${p.slug}`}
    >
      <Image
        src={p?.thumbnail?.data?.attributes?.url}
        width={500}
        height={500}
        alt={p?.name}
      />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p?.name}</h2>

        <div className="flex items-center text-black/[0.5]">
          <h4 className="font-semobold mr-2 text-lg">
            <CurrencyFormat
              value={p?.price}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              thousandSeparator=","
              prefix="₹"
              decimalSeparator="."
            />
          </h4>
          <h6 className="text-base font-medium line-through">
            <CurrencyFormat
              value={p?.original_price}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              thousandSeparator=","
              prefix="₹"
              decimalSeparator="."
            />
          </h6>
          <p className="ml-auto text-base font-medium text-green-500">
            {getDiscountedPricePercentage(p.original_price, p.price)}
            % off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
