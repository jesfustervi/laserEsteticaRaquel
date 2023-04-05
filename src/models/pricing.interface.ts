import { ICard } from "./card.interface";
import { IFrequency } from "./frequency.interface";
import { ISection } from "./section.interface";

export interface IPricing {
  frequencies: IFrequency[];
  tiers: ICard[];
  sections: ISection[];
}
