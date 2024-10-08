import { FC } from "react";
import { Section } from "../common/Section";
import { Heading } from "../common/Heading";
import { ReadingList } from "./ReadingList";

export const AdditionlReading: FC = () => {
  return (
    <Section id="additional-reading">
      <Heading type="h2">additional</Heading>
      <ReadingList />
    </Section>
  );
};
