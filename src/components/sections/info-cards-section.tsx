import * as React from "react";
import { useState } from "react";
import { FrequencyEnum } from "../../enums/frequency.enum";
import { IPricing } from "../../models/pricing.interface";
import Card from "../common/card";
import RadioSelection from "../common/radioSelection";

const InfoCardsSection = () => {
  const pricing: IPricing = {
    frequencies: [
      { value: FrequencyEnum.MONTHLY, label: "Man" },
      { value: FrequencyEnum.YEARLY, label: "Woman" }
    ],
    tiers: [
      {
        name: "Starter",
        id: "tier-starter",
        href: "#",
        featured: false,
        description: "All your essential business finances, taken care of.",
        price: { monthly: "$15", annually: "$144" },
        mainFeatures: [
          "Basic invoicing",
          "Easy to use accounting",
          "Mutli-accounts"
        ]
      },
      {
        name: "Scale",
        id: "tier-scale",
        href: "#",
        featured: true,
        description: "The best financial services for your thriving business.",
        price: { monthly: "$60", annually: "$576" },
        mainFeatures: [
          "Advanced invoicing",
          "Easy to use accounting",
          "Mutli-accounts",
          "Tax planning toolkit",
          "VAT & VATMOSS filing",
          "Free bank transfers"
        ]
      },
      {
        name: "Growth",
        id: "tier-growth",
        href: "#",
        featured: false,
        description:
          "Convenient features to take your business to the next level.",
        price: { monthly: "$30", annually: "$288" },
        mainFeatures: [
          "Basic invoicing",
          "Easy to use accounting",
          "Mutli-accounts",
          "Tax planning toolkit"
        ]
      }
    ],
    sections: [
      {
        name: "Catered for business",
        features: [
          {
            name: "Tax Savings",
            tiers: { Starter: true, Scale: true, Growth: true }
          },
          {
            name: "Easy to use accounting",
            tiers: { Starter: true, Scale: true, Growth: true }
          },
          {
            name: "Multi-accounts",
            tiers: {
              Starter: "3 accounts",
              Scale: "Unlimited accounts",
              Growth: "7 accounts"
            }
          },
          {
            name: "Invoicing",
            tiers: {
              Starter: "3 invoices",
              Scale: "Unlimited invoices",
              Growth: "10 invoices"
            }
          },
          {
            name: "Exclusive offers",
            tiers: { Starter: false, Scale: true, Growth: true }
          },
          {
            name: "6 months free advisor",
            tiers: { Starter: false, Scale: true, Growth: true }
          },
          {
            name: "Mobile and web access",
            tiers: { Starter: false, Scale: true, Growth: false }
          }
        ]
      },
      {
        name: "Other perks",
        features: [
          {
            name: "24/7 customer support",
            tiers: { Starter: true, Scale: true, Growth: true }
          },
          {
            name: "Instant notifications",
            tiers: { Starter: true, Scale: true, Growth: true }
          },
          {
            name: "Budgeting tools",
            tiers: { Starter: true, Scale: true, Growth: true }
          },
          {
            name: "Digital receipts",
            tiers: { Starter: true, Scale: true, Growth: true }
          },
          {
            name: "Pots to separate money",
            tiers: { Starter: false, Scale: true, Growth: true }
          },
          {
            name: "Free bank transfers",
            tiers: { Starter: false, Scale: true, Growth: false }
          },
          {
            name: "Business debit card",
            tiers: { Starter: false, Scale: true, Growth: false }
          }
        ]
      }
    ]
  };
  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <>
      {/* Pricing section */}
      <div className="isolate overflow-hidden">
        <div className="flow-root dark:bg-gray-900 py-16 sm:pt-32 lg:pb-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
              <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                Simple pricing, no commitment
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                numquam eligendi quos odit doloribus molestiae voluptatum quos
                odit doloribus.
              </p>
              <RadioSelection
                defaultValue={pricing.frequencies[0]}
                onUpdate={setFrequency}
                frequencies={pricing.frequencies}
              ></RadioSelection>
            </div>
            <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              <svg
                viewBox="0 0 1208 1024"
                aria-hidden="true"
                className="absolute left-1/2 -bottom-48 h-[64rem] translate-y-1/2 -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:bottom-auto lg:-top-48 lg:translate-y-0"
              >
                <ellipse
                  cx={604}
                  cy={512}
                  fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)"
                  rx={604}
                  ry={512}
                />
                <defs>
                  <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
              <div
                className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                aria-hidden="true"
              />
              {pricing.tiers.map((tier) => (
                <Card card={tier} frequency={frequency.value}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCardsSection;
