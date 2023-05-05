import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

type Props = {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  categories: Categories;
};

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Support", url: "/support" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Lifestyle", doc_count: 13 },
  { id: 3, name: "Sneakers", doc_count: 8 },
  { id: 4, name: "Football shoes", doc_count: 107 },
  { id: 5, name: "Running shoes", doc_count: 64 },
];

const Menu = ({ showCatMenu, setShowCatMenu, categories }: Props) => {
  return (
    <ul className="hidden items-center gap-8 font-medium text-black md:flex">
      {data?.map((item) => (
        <React.Fragment key={item?.id}>
          {!!item?.subMenu ? (
            <li
              className="relative flex cursor-pointer items-center gap-2"
              onMouseEnter={() => setShowCatMenu(true)}
              onMouseLeave={() => setShowCatMenu(false)}
            >
              {item?.name}
              <BsChevronDown size={14} />

              {showCatMenu && (
                <ul className="absolute left-0 top-6 min-w-[250px] bg-white p-1 text-black shadow-lg">
                  {categories?.data?.map(({ attributes: a, id }) => (
                    <Link
                      href={`/category/${a?.slug}`}
                      key={id}
                      onClick={() => setShowCatMenu(false)}
                    >
                      <li className="flex h-12 items-center justify-between rounded-md px-3 hover:bg-black/[0.03]">
                        {a?.name}
                        <span className="text-sm opacity-50">
                          {`(${a?.products?.data?.length})`}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li className="cursor-pointer">
              <Link href={`${item?.url}`}>{item?.name}</Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Menu;
