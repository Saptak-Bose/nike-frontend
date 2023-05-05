import type { NextPage } from "next";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import CurrencyFormat from "react-currency-format";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

const Cart: NextPage = () => {
  return (
    <main className="w-full md:py-20">
      <Wrapper>
        <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
          <h1 className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            Shopping Cart
          </h1>
        </div>

        <div className="flex flex-col gap-12 py-10 lg:flex-row">
          <div className="flex-[2]">
            <h3 className="text-lg font-bold">Cart Items</h3>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold">Summary</h3>

            <div className="my-5 rounded-xl bg-black/[0.05] p-5">
              <div className="flex justify-between">
                <h4 className="text-base font-medium uppercase text-black md:text-lg">
                  Subtotal
                </h4>

                <h5 className="text-base font-medium text-black md:text-lg">
                  <CurrencyFormat
                    value={17999 * 3}
                    displayType="text"
                    decimalScale={2}
                    fixedDecimalScale
                    thousandSeparator=","
                    prefix="₹"
                    decimalSeparator="."
                  />
                </h5>
              </div>

              <p className="mt-5 border-t py-5 text-sm md:text-base">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </p>
            </div>

            <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:opacity-95 active:scale-95">
              <HiOutlineShoppingBag size={20} />
              Checkout
            </button>
          </div>
        </div>

        {/* <div className="flex flex-[2] flex-col items-center pb-[50px] md:-mt-14">
          <Image
            className="w-[300px] md:w-[400px]"
            src="/empty-cart.jpg"
            width={300}
            height={300}
            alt="Empty Cart"
          />
          <strong className="text-xl font-bold">Your cart is empty</strong>
          <span className="mt-4 text-center">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="mb-3 mt-8 rounded-full bg-black px-8 py-4 text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:opacity-95 active:scale-95"
          >
            Continue Shopping
          </Link>
        </div> */}
      </Wrapper>
    </main>
  );
};

export default Cart;
