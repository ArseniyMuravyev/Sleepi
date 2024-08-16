import { FC } from "react";
import { Emoji } from "../ui/Emoji";

type Props = {
  title: string;
  firstSymbol: string;
  secondSymbol: string;
  onClick?: () => void;
};

export const LanguageOption: FC<Props> = ({
  title,
  firstSymbol,
  secondSymbol,
  onClick,
}) => (
  <div className="flex items-center gap-1 mt-[2px]" onClick={onClick}>
    <span>{title}</span>
    <div>
      <Emoji symbol={firstSymbol} label="country icon" />
      <Emoji symbol={secondSymbol} label="country icon" />
    </div>
  </div>
);
