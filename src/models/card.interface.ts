import { IPrice } from "./price.interface";

export interface ICard {
  name: string;
  id: string;
  href: string;
  featured: boolean;
  description: string;
  price: IPrice;
  mainFeatures: string[];
}
