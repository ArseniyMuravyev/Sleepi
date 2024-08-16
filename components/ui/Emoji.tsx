import { FC, memo } from "react";

type Props = {
  className?: string;
  label: string;
  symbol: string;
};

export const Emoji: FC<Props> = memo(({ className, label, symbol }) => (
  <span className={className} role="img" aria-label={label}>
    {String.fromCodePoint(symbol)}
  </span>
));
