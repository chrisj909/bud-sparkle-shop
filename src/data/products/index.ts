import { HEMP_FLOWER_PRODUCTS } from './hemp-flower';
import { VAPE_PRODUCTS } from './vapes';
import { GUMMY_PRODUCTS } from './gummies';
import { MICRODOSE_PRODUCTS } from './microdose';

export const PRODUCTS = [
  ...HEMP_FLOWER_PRODUCTS,
  ...VAPE_PRODUCTS,
  ...GUMMY_PRODUCTS,
  ...MICRODOSE_PRODUCTS,
];

export const CATEGORIES = ["Hemp Flower", "THCA Vapes", "Gummies", "Mushrooms"] as const;
export type ProductCategory = typeof CATEGORIES[number];