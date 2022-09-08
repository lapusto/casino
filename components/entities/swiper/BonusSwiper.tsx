import BonusCard from '../bonus/BonusCard';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./BonusSwiper.module.scss"
import next from "../../../public/images/next.png"

import { Navigation, Pagination } from "swiper";
import { Container } from 'react-bootstrap';

const BonusSwiper = ({ bonusCardsToShow }) => {


  return (
    <div className={styles["wrapper"]}>
      <Swiper
        spaceBetween={15}
        pagination={{
          clickable: true
        }}
        slidesPerView={5} 
        navigation={true} 
        modules={[Navigation, Pagination]}
         className={styles["my-swiper"]}>
        {
          bonusCardsToShow.map((card, i) => <SwiperSlide>
            <BonusCard bonus={card} key={`swiper-${i}`} />
          </SwiperSlide>)
        }
      
      </Swiper>
    </div>
  );


};

export default BonusSwiper