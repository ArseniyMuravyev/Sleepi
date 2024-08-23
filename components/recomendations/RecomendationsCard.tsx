import { FC } from "react";

type Props = {
  image: string;
  title: string;
  recomendation: string;
  links: string[];
};

export const RecomendationsCard: FC<Props> = () => {
  return (
    <div>
      <h1>RecomendationsCard</h1>
    </div>
  );
};
