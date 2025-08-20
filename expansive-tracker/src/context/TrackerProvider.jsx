import { createContext, useContext } from 'react';

export const TrackerContext = createContext();

export const useTracker = () => useContext(TrackerContext);

export const TrackerProvider = TrackerContext.Provider

