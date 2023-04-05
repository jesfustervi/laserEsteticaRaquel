export interface ITier {
  Starter: boolean | string;
  Scale: boolean | string;
  Growth: boolean | string;
}

export interface IFeatures {
  name: string;
  tiers: ITier;
}

export interface ISection {
  name: string;
  features: IFeatures[];
}
