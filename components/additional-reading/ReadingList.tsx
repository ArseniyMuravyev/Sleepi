import { FC } from "react";
import { reading } from "@/data/index";
import { useTranslations } from "next-intl";

export const ReadingList: FC = () => {
  const t = useTranslations();
  return (
    <ul className="list-disc flex flex-col gap-4 w-[calc(100%-16px)] z-10 ml-4">
      {reading.map((item) => (
        <li key={item.title}>
          <a href={t(item.link)} className="underline font-bold text-white">
            {t(item.title)}
          </a>
          {t(item.description)}
        </li>
      ))}
    </ul>
  );
};
