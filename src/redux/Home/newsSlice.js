import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  news: [],
  categories: {},
  status: 'idle',
  error: null,
  totalResults: 0,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=apple&from=2023-05-29&to=2023-05-29&sortBy=popularity&apiKey=514fd3845622473eaca2815d2b99d44a',
    );
    const { articles } = response.data;
    const categories = {};

    articles.forEach((article) => {
      const category = article.source.name;
      if (category in categories) {
        categories[category] += 1;
      } else {
        categories[category] = 1;
      }
    });

    return {
      news: articles,
      categories,
      totalResults: response.data.totalResults,
    };
  } catch (error) {
    throw Error(error);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    incrementView: (state, action) => {
      const { newsItemId } = action.payload;
      const newsItem = state.news.find((item) => item.title === newsItemId);
      if (newsItem) {
        newsItem.views += 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload.news;
        state.categories = action.payload.categories;
        state.totalResults = action.payload.totalResults;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { incrementView } = newsSlice.actions;

export default newsSlice.reducer;
