import { ProductType, ProductCategory } from "@/types/product";
import { HEMP_FLOWER_PRODUCTS } from './hemp-flower';
import { VAPE_PRODUCTS } from './vapes';
import { GUMMY_PRODUCTS } from './gummies';

export const PRODUCTS: ProductType[] = [
  ...HEMP_FLOWER_PRODUCTS,
  ...VAPE_PRODUCTS,
  ...GUMMY_PRODUCTS,
];

export const CATEGORIES: ProductCategory[] = ["Hemp Flower", "Vapes", "Gummies"];