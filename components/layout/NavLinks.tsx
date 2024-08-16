import { FC } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type Props = {
  className?: string;
};

export const NavLinks: FC<Props> = ({ className }) => {
  const t = useTranslations();
  return (
    <nav
      className={clsx(
        "flex items-center text-lg capitalize font-bold gap-6",
        className,
      )}
    >
      <Link href="#about">{t("Layout.about")}</Link>
      <Link href="#recomendations">{t("Layout.recomendations")}</Link>
      <Link href="#contacts">{t("Layout.contacts")}</Link>
      <Link href="#additional-reading">{t("Layout.additional")}</Link>
    </nav>
  );
};
