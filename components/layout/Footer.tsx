import { FC } from "react";
import { LanguageSwitcher } from "../language-switcher/LanguageSwitcher";

export const Footer: FC = () => (
  <footer className="flex flex-col gap-8 items-center justify-center py-10">
    <LanguageSwitcher />
    <p>© Sleepi 2024</p>
  </footer>
);
