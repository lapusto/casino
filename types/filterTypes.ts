import { bonusCategory } from "./bonusTypes";

export interface FilterProps {
  categories: bonusCategory[],
  toFilter: any,
  active: bonusCategory
}  
