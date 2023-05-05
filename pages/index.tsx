import type { GetStaticProps } from "next";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
import fetchDataFromApi from "@/utils/api";

type Props = {
  products: Products;
};

const Home = ({ products }: Props) => {
  return (
    <main>
      <HeroBanner />
      <Wrapper>
        <div className="mx-auto my-[50px] max-w-[800px] text-center md:my-20">
          <h2 className="mb-5 text-[28px] font-extrabold uppercase leading-tight md:text-[34px]">
            The World Runs in Jordans
          </h2>
          <p className="text-base md:text-xl">
            Meet the latest update of the most amazing, Nike Jordan Why Not .6
            PF, that's been trusted by runners of all kinds for four decades.
          </p>
        </div>

        <div className="my-14 grid grid-cols-1 gap-5 px-5 md:grid-cols-2 md:px-0 lg:grid-cols-3">
          {products?.data?.map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const products: Products = await fetchDataFromApi("/api/products?populate=*");

  return {
    props: {
      products,
    },
  };
};
