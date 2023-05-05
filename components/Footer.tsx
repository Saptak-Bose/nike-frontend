import React from "react";
import Wrapper from "./Wrapper";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black pb-3 pt-14 text-white">
      <Wrapper className="flex flex-col justify-between gap-[50px] md:flex-row md:gap-0">
        <div className="flex flex-col gap-[50px] md:flex-row md:gap-[75px] lg:gap-[100px]">
          <div className="flex shrink-0 flex-col gap-3">
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              Find a store
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              become a partner
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              sign up for email
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              send us feedback
            </div>
            <div className="cursor-pointer font-oswald text-sm font-medium uppercase">
              student discount
            </div>
          </div>

          <div className="flex shrink-0 gap-[50px] md:gap-[75px] lg:gap-[100px]">
            <div className="flex flex-col gap-3">
              <div className="font-oswald text-sm font-medium uppercase">
                get help
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Order Status
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Delivery
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Returns
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Payment Options
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Contact Us
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-oswald text-sm font-medium uppercase">
                About nike
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                News
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Careers
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Investors
              </div>
              <div className="cursor-pointer text-sm text-white/[0.5] hover:text-white">
                Sustainability
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          <Link
            href="https://fb-clone-psi-seven.vercel.app/"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="https://insta-iota.vercel.app/"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/[0.25] text-black hover:bg-white/[0.5]"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
      </Wrapper>
      <Wrapper className="mt-10 flex flex-col justify-between gap-[10px] md:flex-row md:gap-0">
        <div className="cursor-pointer text-center text-[12px] text-white/[0.5] hover:text-white md:text-left">
          © 2023 Nike - Saptak, Inc. All Rights Reserved
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-center md:gap-5 md:text-left">
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Guides
          </div>
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Terms of Sale
          </div>
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Terms of Use
          </div>
          <div className="cursor-pointer text-[12px] text-white/[0.5] hover:text-white">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
