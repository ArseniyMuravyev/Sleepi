import { useTranslations } from "next-intl";
import { FC } from "react";

export const AdditionlReading: FC = () => {
  const t = useTranslations("Layout");
  return (
    <section id="additional-reading" className="section">
      <h2 className="heading">{t("additional")}</h2>
    </section>
  );
};
