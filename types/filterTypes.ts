import { BonusCategory } from "./bonusTypes";

export interface FilterProps {
  categories: BonusCategory[],
  toFilter: (str: BonusCategory) => void,
  active: BonusCategory
}  
