import { FC } from "react";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { WordsList } from "./WordsList";

export const Glossary: FC = () => {
  return (
    <Section id="section">
      <Heading type="h2">glossary</Heading>
      <WordsList />
    </Section>
  );
};
