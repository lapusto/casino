import BonusCard from '../bonus/BonusCard';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./BonusSwiper.module.scss"

const BonusSwiper = ({ bonusCardsToShow }) => {

  return (
    <div className={styles["wrapper"]}>
      <Swiper
        spaceBetween={23}
        pagination={{
          clickable: true
        }}
        slidesPerView={5}
        navigation={true}
        modules={[Navigation, Pagination]}
        className={styles["my-swiper"]}>
        {
          bonusCardsToShow.map((card, i) => <SwiperSlide key={`swiper-${i}`} >
            <BonusCard bonus={card} />
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default BonusSwiper