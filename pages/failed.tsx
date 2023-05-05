import Wrapper from "@/components/Wrapper";
import type { NextPage } from "next";
import Link from "next/link";

const Failed: NextPage = () => {
  return (
    <main className="flex min-h-[650px] items-center">
      <Wrapper>
        <div className="mx-auto flex max-w-[600px] flex-col rounded-lg border border-black p-5">
          <div className="text-2xl font-bold">Payment failed!</div>
          <div className="mt-5 text-base">
            For any product related query, drop an email to
          </div>
          <div className="underline">nikesaptaksupport@cleversap.com</div>

          <Link href="/" className="mt-5 font-bold">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </main>
  );
};

export default Failed;
