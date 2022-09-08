import { Bonus, bonusCategory } from "./bonusTypes";

export interface SwiperProps {

 bonusCardsToShow: Bonus[],
  toFilter?: any,
  active?: bonusCategory
}  
