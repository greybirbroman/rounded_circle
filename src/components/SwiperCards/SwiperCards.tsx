import React, { useCallback, useEffect } from 'react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as Pagin } from 'swiper/modules';
import Card from '../Card/Card';
import { IEventList } from '../../types';
import useIsMobileResolution from '../../utils/hooks/useIsMobile';
import gsap from 'gsap'
import Pagination from '../Pagination/Pagination';


import './SwiperCards.scss';

interface ISwiperCards {
  list: IEventList[] | [];
}

const SwiperCards = ({ list }: ISwiperCards) => {
  const isMobile = useIsMobileResolution({ mobileResolution: 992 });

  const getAnimationAfterUpdate = useCallback(() => {
    gsap.from('.swiper', {
      y: - 20,
      opacity: 0,
    });
    gsap.to('.swiper', {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
    });
  } ,[list])

  useEffect(() => {
    getAnimationAfterUpdate();
  }, [list, getAnimationAfterUpdate]);

  return (
    <Swiper
      modules={[Navigation, Pagin]}
      spaceBetween={isMobile ? 25 : 80}
      slidesPerView={'auto'}
      breakpoints={{
        550: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      pagination={{clickable: true}}

      className='swiper'
    >
      {list.map((event: IEventList) => (
        <SwiperSlide key={event.year}>
          <Card title={event.title} year={event.year} />
        </SwiperSlide>
      ))}
     <Pagination currentPage={1} totalPages={6} />
    </Swiper>
  );
};

export default SwiperCards;
