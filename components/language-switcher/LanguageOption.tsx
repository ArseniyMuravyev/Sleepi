import { FC } from "react";

type Props = {
  title: string;
  onClick?: () => void;
};

export const LanguageOption: FC<Props> = ({ title, onClick }) => (
  <div
    className="flex items-center gap-1 mt-[2px] cursor-pointer"
    onClick={onClick}
  >
    <span>{title}</span>
    <span>{title == "English" ? "🇬🇧" : "🇷🇺"}</span>
  </div>
);
