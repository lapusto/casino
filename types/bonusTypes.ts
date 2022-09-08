import { StaticImageData } from "next/image"


export type bonusCategory = "No Deposit Bonus" | "Welcome Bonus" | "Free Spins Bonus"

export interface BonusCardProps {
    bonus: Bonus
}

export interface Bonus {
    logo: StaticImageData | any,
    casino: String,
    bonusType: bonusCategory,
    amount: String,
    exclusive?: Boolean

}