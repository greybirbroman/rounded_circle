import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { EventsContextProvider } from './context/EventsContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <EventsContextProvider>
    <App />
  </EventsContextProvider>,
);
