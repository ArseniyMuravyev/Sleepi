import { glossaryWords } from "@/data";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const WordsList: FC = () => {
  const t = useTranslations();
  return (
    <ul className="list-disc flex flex-col gap-4 w-[calc(100%-16px)] z-10 ml-4">
      {glossaryWords.map((item) => (
        <li key={item.title}>
          <p>
            <span className="font-bold text-white">{t(item.title)}</span>
            {t(item.definition)}
          </p>
        </li>
      ))}
    </ul>
  );
};
