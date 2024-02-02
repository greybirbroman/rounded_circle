import './HistoryDatesPage.scss';
import PageWrapper from '../../hoc/PageWrapper';
import {
  AnimatedTimePeriodBar,
  AnimatedCircle,
  SwiperCards,
  GridOverlay,
  PageTitle,
  Devider,
} from '../../components';
import { useEvents } from '../../context/EventsContext';

const HistoryDatesPage = () => {
  const { totalEvents, selectedEvent } = useEvents();
  const selectedPeriodEvents = selectedEvent ? selectedEvent.list : [];

  return (
    <>
      <PageTitle title="Исторические даты" />
      <GridOverlay />
      <AnimatedTimePeriodBar
        from={selectedEvent?.year_from}
        to={selectedEvent?.year_to}
      />
      <Devider />
      {/* { numberOfDots устанавливаем по количеству евентов.
          По заданию от 2 до 6. В данном случае ограничений не установленно.
          Демонстрация с 6 событиями. } */}
      {/* { circleRadius устанавливаем согласшно ширине макета / 2 } */}
      <AnimatedCircle numberOfDots={totalEvents} circleRadius={265} />
      <SwiperCards list={selectedPeriodEvents} />
      
    </>
  );
};

export default PageWrapper(HistoryDatesPage);
