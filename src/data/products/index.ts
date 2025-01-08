import { ProductType, ProductCategory } from "@/types/product";
import { HEMP_FLOWER_PRODUCTS } from './hemp-flower';
import { VAPES_PRODUCTS } from './vapes';
import { GUMMY_PRODUCTS } from './gummies';
import { MICRODOSE_PRODUCTS } from './microdose';

export const PRODUCTS: ProductType[] = [
  ...HEMP_FLOWER_PRODUCTS,
  ...VAPES_PRODUCTS,
  ...GUMMY_PRODUCTS,
  ...MICRODOSE_PRODUCTS,
] as const satisfies ProductType[];

export const CATEGORIES: ProductCategory[] = ["Hemp Flower", "Vapes", "Gummies", "Mushrooms"];