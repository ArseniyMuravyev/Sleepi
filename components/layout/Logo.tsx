import Image from "next/image";
import { FC } from "react";

export const Logo: FC = () => {
  const handleClick = () => window.scrollTo(0, 0);

  return (
    <div className="flex gap-2 md:gap-4 items-center">
      <p
        className="font-bold text-3xl md:text-5xl cursor-pointer"
        onClick={handleClick}
      >
        Sleepi
      </p>
      <div className="w-6 md:w-10 h-6 md:h-10 relative">
        <Image src="/icons/moon.svg" alt="moon icon" priority fill />
      </div>
    </div>
  );
};
