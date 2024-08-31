import { FC } from "react";
import { Compare } from "@/components/ui/Compare";
import { Section } from "../common/Section";

export const Welcome: FC = () => {
  return (
    <Section id="welcome">
      <div className="rounded-3xl border border-neutral-800 w-full md:w-[80%] flex justify-center items-center md:max-w-[700px]">
        <Compare
          firstImage="/images/before.jpg"
          secondImage="/images/after.png"
          firstImageClassName="object-cover object-top"
          secondImageClassname="object-cover object-top"
          className="h-[400px] w-full md:h-[500px] md:max-w-[700px]"
          slideMode="hover"
        />
      </div>
    </Section>
  );
};
