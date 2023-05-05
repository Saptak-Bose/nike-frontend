import type { NextPage } from "next";
import { useRouter } from "next/router";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

const Category: NextPage = () => {
  return (
    <main className="w-full md:py-20">
      <Wrapper>
        <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
          <h2 className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
            Pegasus
          </h2>
        </div>

        <div className="my-14 grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </main>
  );
};

export default Category;
