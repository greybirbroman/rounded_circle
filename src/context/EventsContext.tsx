import React, { createContext, useContext, useState } from 'react';
import { IEvent } from '../types';
import { events as data } from '../utils';

interface EventsContextProps {
  events: IEvent[];
  totalEvents: number;
  selectedEvent: IEvent | null;
  setSelectedEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
  findEventByIndex: (index: number) => void;
}

const EventsContext = createContext<EventsContextProps | undefined>(undefined);


export const EventsContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [events, setEvents] = useState<IEvent[]>(data);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(events[0]);

  const totalEvents = events.length

  const findEventByIndex = (index: number) => {
    const event =  events.find((event) => event.id === index);
    setSelectedEvent(event!)
  };

  const contextValues: EventsContextProps = {
    events,
    totalEvents,
    selectedEvent,
    setSelectedEvent,
    findEventByIndex
  }

  return (
    <EventsContext.Provider value={contextValues}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error(
      'useEvents должен использоваться внутри EventsContextProvider.',
    );
  }

  return context;
};
