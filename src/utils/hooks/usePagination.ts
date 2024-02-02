import { useEvents } from '../../context/EventsContext';

const usePagination = () => {
  const { findEventByIndex, selectedEvent } = useEvents();

  const currentPage = selectedEvent?.id;

  const handlePrevPage = () => {
    if (currentPage) {
      findEventByIndex(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage) {
      findEventByIndex(currentPage + 1);
    }
  };

  return {
    handlePrevPage,
    handleNextPage,
  };
};

export default usePagination;
