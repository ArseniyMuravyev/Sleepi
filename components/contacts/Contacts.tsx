"use client";

import axios from "axios";
import { useTranslations } from "next-intl";
import { ChangeEvent, FC, SyntheticEvent, useState } from "react";

export const Contacts: FC = () => {
  const t = useTranslations("Contacts");
  const [email, setEmail] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    axios
      .post(`${baseUrl}/send`, { email })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <section id="contacts" className="section">
      <h2 className="heading">{t("heading")}</h2>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-8: md:mt-16 border border-[rgba(192,206,255,0.102)] bg-transparent rounded-xl"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="rounded-l-xl p-2 md:p-4 text-md md:text-lg focus:outline-none w-64 h-[42px] bg-transparent text-white"
        />
        <button className="px-4 py-2 flex justify-center items-center rounded-r-xl bg-indigo-700 hover:bg-indigo-900 transition-colors duration-300 h-[42px]">
          Submit
        </button>
      </form>
    </section>
  );
};
