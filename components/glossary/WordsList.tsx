import { glossaryWords } from "@/data";
import { useTranslations } from "next-intl";
import { FC } from "react";

export const WordsList: FC = () => {
  const t = useTranslations();
  return (
    <ul className="list-disc">
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
