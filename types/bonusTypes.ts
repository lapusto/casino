import { StaticImageData } from "next/image"


export type BonusCategory = "No Deposit Bonus" | "Welcome Bonus" | "Free Spins Bonus"

export interface BonusCardProps {
    bonus: Bonus,
    className?: String
}

export interface Bonus {
    logo: StaticImageData | string,
    casino: String,
    bonusType: BonusCategory,
    amount: String,
    exclusive?: Boolean
}