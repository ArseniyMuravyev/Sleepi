import { FC } from "react";
import { LanguageSwitcher } from "../language-switcher/LanguageSwitcher";

export const Footer: FC = () => (
  <footer className="flex flex-col gap-8 items-center justify-center py-20">
    <LanguageSwitcher />
    <p>© Sleepi 2024-2025</p>
  </footer>
);
