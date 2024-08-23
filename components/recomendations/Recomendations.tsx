import { FC } from "react";
import { ExpandableCardDemo } from "@/components/ui/ExpandableCard";

export const Recomendations: FC = () => {
  return (
    <section id="recomendations" className="section">
      <h2 className="heading">Recomendations</h2>
      <ExpandableCardDemo />
    </section>
  );
};
