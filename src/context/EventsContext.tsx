import React, { createContext, useContext, useState } from 'react';
import { IEvent } from '../types';
import { events as data } from '../utils';

interface EventsContextProps {
  events: IEvent[];
  selectedEvent: IEvent | null;
  setSelectedEvent: React.Dispatch<React.SetStateAction<IEvent | null>>;
  findEventByIndex: (index: number) => void;
}

const EventsContext = createContext<EventsContextProps | undefined>(undefined);


export const EventsContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [events, setEvents] = useState<IEvent[]>(data);
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(events[0]);

  const findEventByIndex = (index: number) => {
    const event =  events.find((event) => event.id === index);
    setSelectedEvent(event!)
  };

  const contextValues: EventsContextProps = {
    events,
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

// Создаем хук для получения значения контекста
export const useEvents = () => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error(
      'useEvents must be used within an EventsContextProvider',
    );
  }

  return context;
};