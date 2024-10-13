"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { recomendationsCards } from "@/data";
import { useTranslations } from "next-intl";

export function ExpandableCard() {
  const t = useTranslations();
  const [active, setActive] = useState<
    (typeof recomendationsCards)[number] | boolean | null
  >(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${t(active.title)}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute fixed top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 z-10"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${t(active.title)}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] relative h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-auto items-center py-4"
            >
              <motion.div layoutId={`image-${t(active.title)}-${id}`}>
                <Image
                  priority
                  width={160}
                  height={160}
                  src={active.src}
                  alt={t(active.title)}
                  className="w-64 h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-center items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${t(active.title)}-${id}`}
                      className="font-medium text-white text-xl"
                    >
                      {t(active.title)}
                    </motion.h3>
                  </div>
                </div>
                <div className="flex pt-4 relative px-4 md:px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-md md:text-lg lg:text-base h-full md:h-fit pb-4 flex flex-col items-start gap-4"
                  >
                    <p className="indent-3">{t(active.content)}</p>
                    {active.post && (
                      <p className="indent-3">{t(active.post)}</p>
                    )}
                  </motion.div>
                </div>
                <div className="flex justify-center items-start p-4">
                  <h3 className="font-medium text-white text-xl">
                    {t("Layout.studies")}
                  </h3>
                </div>
                <div className="pt-4 relative px-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-md md:text-lg lg:text-base h-full md:h-fit pb-10 flex flex-col items-start gap-4 "
                  >
                    <ul className="list-disc">
                      {active.links.map(({ link, title }) => (
                        <li key={link}>
                          <a
                            href={link}
                            className="underline hover:opacity-70"
                            target="_blank"
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {recomendationsCards.map((card) => (
          <motion.div
            layoutId={`card-${t(card.title)}-${id}`}
            key={t(card.title)}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-800 rounded-xl cursor-pointer z-10 transition-colors duration-300"
          >
            <div className="flex gap-4 flex-col w-full items-center justify-center">
              <motion.div layoutId={`image-${t(card.title)}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={t(card.title)}
                  className="w-36 md:w-48 h-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${t(card.title)}-${id}`}
                  className="sub-heading"
                >
                  {t(card.title)}
                </motion.h3>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
