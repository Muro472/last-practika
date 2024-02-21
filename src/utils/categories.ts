import MainImage from 'assets/home_page/MainImage.jpg';
import nutrition from 'assets/home_page/nutrition.jpg';
import footwear from 'assets/home_page/footwear.jpg';
import clothing from 'assets/home_page/clothing.jpg';
import accessories from 'assets/home_page/accessories.jpg';
import inventory from 'assets/home_page/inventory.jpg';
import electronics from 'assets/home_page/electronics.jpg';
// import protection from 'assets/home_page/protection.jpg';

export const homeAssets = {
  mainImage: MainImage,
  footwear: footwear,
  clothing: clothing,
  accessories: accessories,
  // protection: protection,
  nutrition: nutrition,
  electronics: electronics,
  inventory: inventory,
} as const;

export const categories = [
  'footwear',
  'clothing',
  'accessories',
  // 'protection',
  'nutrition',
  'electronics',
  'inventory',
] as const;

export type CategoryType = (typeof categories)[number];
