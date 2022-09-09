import { Bonus, BonusCategory } from "./bonusTypes";

export interface SwiperProps {
  bonusCardsToShow: Bonus[],
  toFilter: () => void,
  active: BonusCategory
}  
