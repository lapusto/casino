
import styles from "./Slider.module.scss"
import { bonuses } from "./mockData"
import Filter from "../../entities/filter/Filter"
import { useState } from "react"
import { bonusCategory } from "../../../types/bonusTypes"
import BonusCard from "../../entities/bonus/BonusCard"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Button from "../../shared/Button/Button"
import Typography from "../../shared/typography/Typography"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import BonusSwiper from "../../entities/swiper/BonusSwiper"
import BSwiper from "../../entities/swiper/BonusSwiper"
import { Container } from "react-bootstrap"

const Slider = () => {

    const welcomeBonuses = bonuses.filter(item => item.bonusType === bonuses[0].bonusType)
    const [filtered, setFiltered] = useState(welcomeBonuses)

    const [activeFilter, setActiveFilter] = useState(bonuses[0].bonusType)
    

    const bonusTypes = bonuses.map(b => b.bonusType)
    let [...uniqBonuses] = new Set(bonusTypes);


    function toFilter(filterType: bonusCategory) {
        const filteredBonusCards = bonuses.filter(item => item.bonusType === filterType)
        setActiveFilter(filterType)
        setFiltered(filteredBonusCards)
    }

    return (
        <Container fluid className={styles["slider-wrapper"]}>
            <Filter categories={uniqBonuses} toFilter={toFilter} active={activeFilter} />
            <Container className={styles["bonus-cards-wrapper"]}>
            
                 <BonusSwiper bonusCardsToShow={filtered}/> 
            
            </Container>
            <Button size="l">
                <Typography>Show All {activeFilter}</Typography>
            </Button>
            <div>
   




            </div>
        </Container>

    )
}

export default Slider