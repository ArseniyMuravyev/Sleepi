import clsx from "clsx";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id: string;
};

export const Section: FC<Props> = ({ children, className, id }) => {
  return (
    <section
      className={clsx(
        className,
        "w-full flex flex-col items-center my-4 md:my-8",
      )}
      id={id}
    >
      {children}
    </section>
  );
};
