import { FC } from "react";
import { ExpandableCardDemo } from "@/components/ui/ExpandableCard";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";

export const Recomendations: FC = () => {
  return (
    <Section id="recomendations">
      <Heading type="h2">recomendations</Heading>
      <ExpandableCardDemo />
    </Section>
  );
};
