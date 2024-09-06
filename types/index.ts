type Link = {
  title: string;
  link: string;
};

export type RecomendationsCard = {
  title: string;
  src: string;
  content: string;
  post?: string;
  links: Link[];
};

export type GlossaryWord = {
  title: string;
  definition: string;
};

export type Reading = {
  title: string;
  description: string;
  link: string;
};
