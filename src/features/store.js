import { configureStore } from '@reduxjs/toolkit';
import factsReducer from './facts/slices/factsSlice';

export const store = configureStore({
  reducer: {
    facts: factsReducer
  },
});
