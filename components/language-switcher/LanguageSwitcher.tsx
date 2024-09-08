"use client";

import { FC, useTransition, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import clsx from "clsx";
import Image from "next/image";
import { LanguageOption } from "./LanguageOption";

export const LanguageSwitcher: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocal = useLocale();

  const isEnglish = currentLocal === "en";

  const handleChange = () => {
    let local = isEnglish ? "ru" : "en";
    startTransition(() => {
      router.replace(`/${local}`);
      router.refresh();
    });
  };

  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <div
      className={clsx(
        "bg-[#18142d] relative min-h-[56px] min-w-[172px] flex justify-center flex-col p-3 rounded-[100px]",
        { ["rounded-b-none rounded-t-3xl mb-8"]: isActive },
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center gap-4">
        <div
          className={clsx("relative w-8 h-8", {
            ["rotate-180"]: !isActive,
          })}
        >
          <Image src="/icons/arrow.svg" alt="arrow icon" fill />
        </div>
        <LanguageOption title={isEnglish ? "English" : "Русский"} />
      </div>
      <div
        className={clsx(
          "absolute top-full left-0 w-full overflow-hidden flex flex-col items-center gap-4 pb-0 max-h-0 bg-[#18142d] pl-10",
          { ["max-h-[300px] rounded-b-3xl pb-3"]: isActive },
        )}
      >
        <LanguageOption
          title={isEnglish ? "Русский" : "English"}
          onClick={handleChange}
        />
      </div>
    </div>
  );
};
