
import React, { useCallback, useEffect } from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as Pagin } from 'swiper/modules';


import './SwiperCards.scss';

import Card from '../Card/Card';
import { IEventList } from '../../types';
import useIsMobileResolution from '../../utils/hooks/useIsMobile';
import Pagination from '../Pagination/Pagination';
import { useEvents } from '../../context/EventsContext';
import { slideFrom, slideTo } from '../../utils/gsap';



interface ISwiperCards {
  list: IEventList[] | [];
}

const SwiperCards = ({ list }: ISwiperCards) => {

  const isMobile = useIsMobileResolution({ mobileResolution: 992 });
  const { selectedEvent, totalEvents } = useEvents()


  const getAnimationAfterUpdate = useCallback(() => {
   slideFrom('.swiper-slide')
   slideTo('.swiper-slide')
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
  <Pagination currentPage={selectedEvent?.id} totalPages={totalEvents} />
    </Swiper>
  );
};

export default SwiperCards;
