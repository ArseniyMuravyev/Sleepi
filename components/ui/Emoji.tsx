import { FC } from "react";

type Props = {
  className?: string;
  label: string;
  symbol: string;
};

export const Emoji: FC<Props> = ({ className, label, symbol }) => (
  <span className={className} role="img" aria-label={label}>
    {String.fromCodePoint(symbol)}
  </span>
);
