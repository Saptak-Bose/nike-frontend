/* eslint-disable @next/next/no-img-element */
import React from "react";
import CurrencyFormat from "react-currency-format";
import { RiDeleteBin6Line } from "react-icons/ri";

type Props = {};

const CartItem = (props: Props) => {
  return (
    <div className="flex gap-3 border-b py-5 md:gap-5">
      <div className="aspect-square w-[50px] shrink-0 md:w-[120px]">
        <img src="/product-1.webp" alt="Product-1" />
      </div>

      <div className="flex w-full flex-col">
        <div className="flex flex-col justify-between md:flex-row">
          <h2 className="text-lg font-semibold text-black/[0.8] md:text-2xl">
            Jordan Retro 6 G
          </h2>

          <h4 className="block text-sm font-medium text-black/[0.5] md:hidden">
            Men&apos;s Golf Shoes
          </h4>

          <p className="mt-2 text-sm font-bold text-black/[0.5] md:text-base">
            MRP:{" "}
            <CurrencyFormat
              value={17999}
              displayType="text"
              decimalScale={2}
              fixedDecimalScale
              thousandSeparator=","
              prefix="₹"
              decimalSeparator="."
            />
          </p>
        </div>

        <h4 className="hidden text-base font-medium text-black/[0.5] md:block">
          Men&apos;s Golf Shoes
        </h4>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-black/[0.5] md:gap-10 md:text-base">
            <div className="flex items-center gap-1">
              <h5 className="font-semibold">Size:</h5>
              <select className="bg-transparent p-0.5 hover:text-black">
                <option className="font-semibold" value="1">
                  UK 5
                </option>
                <option className="font-semibold" value="2">
                  UK 6
                </option>
                <option className="font-semibold" value="3">
                  UK 6.5
                </option>
                <option className="font-semibold" value="4">
                  UK 7
                </option>
                <option className="font-semibold" value="5">
                  UK 7.5
                </option>
                <option className="font-semibold" value="6">
                  UK 8
                </option>
                <option className="font-semibold" value="7">
                  UK 8.5
                </option>
                <option className="font-semibold" value="8">
                  UK 9
                </option>
                <option className="font-semibold" value="9">
                  UK 9.5
                </option>
                <option className="font-semibold" value="10">
                  UK 10
                </option>
                <option className="font-semibold" value="11">
                  UK 10.5
                </option>
                <option className="font-semibold" value="12">
                  UK 11
                </option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <h5 className="font-semibold">Quantity:</h5>
              <select className="bg-transparent p-0.5 hover:text-black">
                <option value="1" className="font-semibold">
                  1
                </option>
                <option value="2" className="font-semibold">
                  2
                </option>
                <option value="3" className="font-semibold">
                  3
                </option>
                <option value="4" className="font-semibold">
                  4
                </option>
                <option value="5" className="font-semibold">
                  5
                </option>
              </select>
            </div>
          </div>

          <RiDeleteBin6Line className="cursor-pointer text-[16px] text-black/[0.5] hover:text-black md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
