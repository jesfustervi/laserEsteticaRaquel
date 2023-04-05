import { CheckIcon } from "@heroicons/react/24/outline";
import * as React from "react";
import { useEffect, useState } from "react";
import { ICard } from "../../models/card.interface";
import { classNames } from "../utils/commonUtils";

type Props = {
  card: ICard;
  frequency: "monthly" | "annually";
};
const Card = ({ card, frequency }: Props) => {
  const [currentFrequency, setCurrentFrequency] = useState(frequency);

  useEffect(() => {
    setCurrentFrequency(frequency);
  }, [frequency]);

  return (
    <>
      <div
        key={card.id}
        className={classNames(
          card.featured
            ? "z-10 bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% text-sm/[17px]"
            : "dark:bg-gray-800  dark:hover:bg-gray-700 bg-white ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0",
          "relative rounded-2xl"
        )}
      >
        <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
          <h2
            id={card.id}
            className={classNames(
              card.featured ? "dark:text-gray-900" : "dark:text-white",
              "text-sm font-semibold leading-6"
            )}
          >
            {card.name}
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
            <div className="mt-2 flex items-center gap-x-4">
              <p
                className={classNames(
                  card.featured ? "text-gray-900" : "text-white",
                  "text-4xl font-bold tracking-tight"
                )}
              >
                {card.price[currentFrequency]}
              </p>
              <div className="text-sm leading-5">
                <p className={card.featured ? "text-gray-900" : "text-white"}>
                  USD
                </p>
                <p
                  className={card.featured ? "text-gray-500" : "text-gray-400"}
                >{`Billed ${currentFrequency}`}</p>
              </div>
            </div>
            <a
              href={card.href}
              aria-describedby={card.id}
              className={classNames(
                card.featured
                  ? "bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
                  : "bg-white/10 hover:bg-white/20 focus-visible:outline-white",
                "rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              )}
            >
              Buy this plan
            </a>
          </div>
          <div className="mt-8 flow-root sm:mt-10">
            <ul
              role="list"
              className={classNames(
                card.featured
                  ? "divide-gray-900/5 border-gray-900/5 text-gray-600"
                  : "divide-white/5 border-white/5 text-white",
                "-my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
              )}
            >
              {card.mainFeatures.map((mainFeature) => (
                <li key={mainFeature} className="flex gap-x-3 py-2">
                  <CheckIcon
                    className={classNames(
                      card.featured ? "text-indigo-600" : "text-gray-500",
                      "h-6 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  />
                  {mainFeature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
