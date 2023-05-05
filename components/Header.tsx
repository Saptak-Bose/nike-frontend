/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

type Props = {
  categories: Categories;
};

const Header = ({ categories }: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-20");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);

  useEffect(() => {
    categories;
  }, [categories]);

  return (
    <header
      className={`sticky top-0 z-20 flex h-[50px] w-full items-center justify-between bg-white transition-transform duration-300 ${show} md:h-[80px]`}
    >
      <Wrapper className="flex h-[60px] items-center justify-between">
        <Link href="/">
          <img className="w-10 md:w-[60px]" src="/logo.svg" alt="Logo" />
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <button className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <span className="absolute left-5 top-1 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-[#F5054F] px-0.5 text-[10px] text-white md:left-7 md:h-[18px] md:min-w-[18px] md:px-[5px] md:text-[12px]">
              27
            </span>
          </button>

          <Link href="/cart">
            <button className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:h-12 md:w-12">
              <AiOutlineShoppingCart className="text-[19px] md:text-[24px]" />
              <span className="absolute left-5 top-1 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-[#F5054F] px-0.5 text-[10px] text-white md:left-7 md:h-[18px] md:min-w-[18px] md:px-[5px] md:text-[12px]">
                5
              </span>
            </button>
          </Link>

          <div className="relative -mr-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full hover:bg-black/[0.05] md:hidden">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
