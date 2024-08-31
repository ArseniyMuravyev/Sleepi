import { useTranslations } from "next-intl";
import { FC } from "react";
import clsx from "clsx";

type Props = {
  children: string;
  type: "h1" | "h2" | "h3";
  className?: string;
};

export const Heading: FC<Props> = ({ children, type, className }) => {
  const t = useTranslations("Headings");
  const styles = "text-center my-4 md:my-8";
  if (type === "h1")
    return (
      <h1 className={clsx(className, styles, "text-2xl md:text-4xl font-bold")}>
        {t(children)}
      </h1>
    );
  if (type === "h2")
    return (
      <h2 className={clsx(className, styles, "text-xl md:text-2xl font-bold")}>
        {t(children)}
      </h2>
    );
  if (type === "h3")
    return (
      <h3
        className={clsx(className, styles, "text-lg md:text-xl font-semibold")}
      >
        {t(children)}
      </h3>
    );
};
