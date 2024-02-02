import './HistoryDate.scss';
import PageWrapper from '../../hoc/PageWrapper';
import {
  AnimatedTimePeriodBar,
  AnimatedCircle,
  Pagination,
  SwiperCards,
  GridOverlay,
  PageTitle,
} from '../../components';
import { useEvents } from '../../context/EventsContext';

const HistoryDate = () => {
  const { events, selectedEvent } = useEvents();
  const totalEvents = events.length;
  const selectedPeriodEvents = selectedEvent ? selectedEvent.list : [];

  return (
    <>
      <PageTitle title="Исторические даты" />
      <GridOverlay />
      <AnimatedTimePeriodBar
        from={selectedEvent?.year_from}
        to={selectedEvent?.year_to}
      />
      <div className="devider" />
      <AnimatedCircle numberOfDots={totalEvents} circleRadius={265} />
      <SwiperCards list={selectedPeriodEvents} />
    </>
  );
};

export default PageWrapper(HistoryDate);
