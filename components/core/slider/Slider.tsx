
import styles from "./Slider.module.scss"
import { bonuses } from "./mockData"
import Filter from "../../entities/filter/Filter"
import { useState } from "react"
import BonusCard from "../../entities/bonus/BonusCard"
import Button from "../../shared/button/Button"
import Typography from "../../shared/typography/Typography"
import BonusSwiper from "../../entities/swiper/BonusSwiper"
import { Container } from "react-bootstrap"
import { BonusCategory } from "../../../types/bonusTypes"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {

    const welcomeBonuses = bonuses.filter(item => item.bonusType === bonuses[0].bonusType)

    const [filtered, setFiltered] = useState(welcomeBonuses)
    const [activeFilter, setActiveFilter] = useState(bonuses[0].bonusType)
    const [isShowAllButtonActive, setIsShowAllButtonActive] = useState(false)

    const bonusTypes = bonuses.map(b => b.bonusType)
    const [...uniqBonuses] = new Set(bonusTypes);
    

    function toFilter(filterType: BonusCategory) {
        const filteredBonusCards = bonuses.filter(item => item.bonusType === filterType)
        setActiveFilter(filterType)
        setFiltered(filteredBonusCards)
    }

    const toggleShowAllButton = () => setIsShowAllButtonActive(!isShowAllButtonActive)

    return (
        <Container fluid className={styles["slider-wrapper"]}>
            <Filter categories={uniqBonuses} toFilter={toFilter} active={activeFilter} />
            <Container className={styles["bonus-cards-wrapper"]}>
                {
                    isShowAllButtonActive ? filtered.map((b, i) => <BonusCard bonus={b} key={`card-${i}`} className={styles["all-bonus-cards"]} />)
                        : <BonusSwiper bonusCardsToShow={filtered} />
                }
            </Container>
            <Container className={styles["showAllButton"]}>
                <Button size="l" onClick={() => toggleShowAllButton()}>
                    <Typography>
                        {!isShowAllButtonActive ? `Show All ${activeFilter}es` : 'Back'}
                    </Typography>
                </Button>
            </Container>
        </Container>

    )
}

export default Slider