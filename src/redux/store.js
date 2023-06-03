import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './Home/newsSlice';

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
