import { FC } from "react";
import Image from "next/image";

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export const Burger: FC<Props> = ({ isActive, onClick }) => {
  return (
    <button onClick={onClick} className="w-5 h-5 relative flex lg:hidden">
      <Image
        src={isActive ? "/icons/activeBurger.svg" : "/icons/burger.svg"}
        alt="menu icon"
        fill
      />
    </button>
  );
};
