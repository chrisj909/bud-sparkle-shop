import { ProductType } from "@/types/product";
import { PREMIUM_VAPES } from "./premium-vapes";
import { CLASSIC_VAPES } from "./classic-vapes";
import { DISPOSABLE_VAPES } from "./disposable-vapes";

export const VAPES_PRODUCTS: ProductType[] = [
  ...PREMIUM_VAPES,
  ...CLASSIC_VAPES,
  ...DISPOSABLE_VAPES
];