import React from "react"
import styles from "./BonusCard.module.scss"
import { ozwin, ripper } from "../../images/images"

import { Bonus, BonusCardProps } from "../../../types/bonusTypes"
import Button from "../../shared/Button/Button"
import Typography from "../../shared/typography/Typography"
import Image from "next/image"
export const BonusCard = ({ bonus }: BonusCardProps): JSX.Element => {


    return (
        <div className={styles["bonus-card"]}>
            <div className={styles["casino-logo"]}>
                <Image src={bonus.logo} className={styles["logo"]} />
            </div>
            <div className={styles["bonus-details"]}>
                <Typography>{bonus.bonusType}</Typography>
                <Typography>400% up to</Typography>
                <div>{bonus.amount}</div>
                <div>
                    <Typography>+ 100 Free Spins</Typography>
                    <Typography>on Cleopatra's Gold</Typography>
                </div>

                <Button size="s">PLAY</Button>
            </div>


        </div>
    )
}

export default BonusCard