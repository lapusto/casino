import React from "react"
import styles from "./BonusCard.module.scss"
import exclusive from "../../../public/images/exclusive.svg"
import { BonusCardProps } from "../../../types/bonusTypes"
import Button from "../../shared/button/Button"
import Typography from "../../shared/typography/Typography"
import Image from "next/image";
import flag from "../../../public/images/flag.svg"
import tooltip from "../../../public/images/tooltip.svg"

export const BonusCard = ({ bonus }: BonusCardProps): JSX.Element => {

    return (
        <div className={styles["bonus-card"]}>
            <div className={styles["casino-logo"]}>
                <Image src={bonus.logo} className={styles["logo"]} />
            </div>
            <div className={styles["bonus-details"]}>
                <div className={styles["bonus-header"]}>
                    {bonus.exclusive &&
                        <div className={styles["exclusive"]}>
                            <Image src={exclusive} alt="exclusive" />
                        </div>}
                    <Typography size="s" className={styles["bonus-type"]}>{bonus.bonusType}</Typography>
                </div>
                <hr className={styles.divider} />
                <Typography className={styles["up-to"]}>400% up to</Typography>
                <Typography className={styles["amount"]}>${bonus.amount}</Typography>
                <div>
                    <Typography className={styles["free-spins"]}>+ 100 Free Spins</Typography>
                    <Typography className={styles["spins-on"]}>on Cleopatra's Gold</Typography>
                </div>
                <Button size="s" className={styles["play-btn"]}>PLAY</Button>
                <div className={styles["flag-img"]}>
                    <Image src={flag} alt="flag" />
                </div>
                <div className={styles["tooltip-container"]}>
                    <Image src={tooltip} alt="tooltip" className={styles["tooltip"]} />
                </div>
            </div>
        </div>
    )
}

export default BonusCard