import { ProductType } from "@/types/product";
import { HEMP_FLOWER_PRODUCTS } from './hemp-flower';
import { VAPE_PRODUCTS } from './vapes';
import { GUMMY_PRODUCTS } from './gummies';
import { MICRODOSE_PRODUCTS } from './microdose';

export const PRODUCTS = [
  ...HEMP_FLOWER_PRODUCTS,
  ...VAPE_PRODUCTS,
  ...GUMMY_PRODUCTS,
  ...MICRODOSE_PRODUCTS,
] as const satisfies ProductType[];

export const CATEGORIES = ["Hemp Flower", "THCA Vapes", "Gummies", "Microdose"] as const;