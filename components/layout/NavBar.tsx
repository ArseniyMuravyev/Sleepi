"use client";

import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Burger } from "./Burger";
import { NavLinks } from "./NavLinks";

type Props = {
  className?: string;
};

export const Navbar: FC<Props> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <header
      className={cn(
        "fixed top-6 left-2 right-2 inset-x-0 max-w-[96%] md:max-w-6xl mx-auto z-50",
        className,
      )}
    >
      <div
        className={cn(
          "relative rounded-[100px] border border-[rgba(192,206,255,0.102)] bg-[rgba(24,19,48,0.551)] shadow-input flex-col justify-between space-x-5 px-8 py-7 backdrop-blur-[15px] items-center transition-[border-radius] duration-300 ease-linear",
          { ["rounded-[24px] duration-0"]: isActive },
        )}
      >
        <div className="w-full flex items-center justify-between lg:justify-center lg:gap-6">
          <Logo />
          <Burger isActive={isActive} onClick={handleClick} />
          <div className="hidden lg:flex">
            <NavLinks />
          </div>
        </div>
        <div
          className={cn(
            "max-h-0 overflow-hidden transition-[max-height] duration-300 flex-col gap-16 ease-linear",
            { ["max-h-[420px]"]: isActive },
          )}
        >
          <NavLinks className="flex-col mt-6" />
        </div>
      </div>
    </header>
  );
};
