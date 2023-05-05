import type { NextPage } from "next";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import CurrencyFormat from "react-currency-format";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails: NextPage = () => {
  return (
    <main className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col gap-[50px] md:px-10 lg:flex-row lg:gap-[100px]">
          <div className="mx-auto w-full max-w-[500px] flex-[1.5] md:w-auto lg:mx-0 lg:max-w-full">
            <ProductDetailsCarousel />
          </div>

          <div className="flex-1 py-3">
            <h2 className="mb-2 text-[34px] font-semibold">Jordan Retro 6 G</h2>
            <h5 className="mb-5 text-lg font-semibold">
              Men&apos;s Golf Shoes
            </h5>
            <p className="text-lg font-semibold">
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
            <span className="text-base font-medium text-black/[0.5]">
              incl. of all taxes.
            </span>
            <p className="text-base mb-20 font-medium text-black/[0.5]">
              {`(Also includes all applicable duties.)`}
            </p>

            <div className="mb-10">
              <div className="mb-2 flex justify-between">
                <h3 className="text-base font-semibold">Select Size</h3>
                <p className="text-base font-medium text-black/[0.5]">
                  Select Guide
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 5
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 6
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 6.5
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 7
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 7.5
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 8
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 8.5
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 9
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 9.5
                </button>
                <button className="rounded-md border py-3 text-center font-medium hover:border-black">
                  UK 10
                </button>
                <button className="cursor-not-allowed rounded-md border bg-black/[0.1] py-3 text-center font-medium opacity-50">
                  UK 10.5
                </button>
                <button className="cursor-not-allowed rounded-md border bg-black/[0.1] py-3 text-center font-medium opacity-50">
                  UK 11
                </button>
              </div>

              <h6 className="mt-1 text-[#F5054F]">
                *Size selection is required.
              </h6>
            </div>

            <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-lg font-medium text-white transition-transform duration-300 ease-in-out hover:opacity-95 active:scale-95">
              <AiOutlineShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="mb-10 flex w-full items-center justify-center gap-2 rounded-full border border-black py-4 text-lg font-medium transition-transform duration-300 ease-in-out hover:opacity-80 active:scale-95">
              <IoMdHeartEmpty size={20} />
              Add to Wishlist
            </button>

            <div>
              <h1 className="mb-5 text-lg font-bold">Product Details</h1>
              <p className="text-base mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eget metus nec augue pretium volutpat. Quisque nisl ex, ultrices
                at ligula rhoncus, faucibus condimentum tellus. Phasellus sed
                suscipit dolor. Quisque orci lectus, consectetur vel lacinia a,
                laoreet in sapien. In volutpat, ex non iaculis eleifend, magna
                nisl suscipit ligula, vitae sodales turpis mauris quis sapien.
                In hac habitasse platea dictumst. Integer ac blandit lacus,
                vitae viverra eros. Sed massa leo, condimentum vitae dapibus.
              </p>
              <p className="text-base mb-5">
                Fusce blandit dictum orci sed dapibus. Nullam dapibus ligula
                massa, et posuere turpis porttitor non. Nullam tristique, eros
                convallis porttitor euismod, nibh justo bibendum mi, sed mollis
                neque justo in lacus. Etiam ipsum ex, cursus et tellus eu,
                auctor tincidunt leo. Maecenas vestibulum, justo ut feugiat
                vestibulum, leo est ultricies eros, ac tempor eros arcu in.
              </p>
            </div>
          </div>
        </div>

        <RelatedProducts />
      </Wrapper>
    </main>
  );
};

export default ProductDetails;
