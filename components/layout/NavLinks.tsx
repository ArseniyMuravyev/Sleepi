import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
};

export const NavLinks: FC<Props> = ({ className }) => {
  const t = useTranslations("Layout");
  return (
    <nav
      className={clsx(
        "flex items-center text-lg capitalize font-bold gap-6",
        className,
      )}
    >
      <Link href="#about">{t("about")}</Link>
      <Link href="#glossary">{t("glossary")}</Link>
      <Link href="#recomendations">{t("recomendations")}</Link>
      <Link href="#additional-reading">{t("additional")}</Link>
    </nav>
  );
};
