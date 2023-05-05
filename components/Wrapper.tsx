import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 md:px-10 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
