import { FC } from "react";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { useTranslations } from "next-intl";

export const About: FC = () => {
  const t = useTranslations("About");
  return (
    <Section id="about">
      <Heading type="h2">about</Heading>
      <div>
        <p>{t("main")}</p>
      </div>
    </Section>
  );
};
