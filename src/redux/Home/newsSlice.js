import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  news: [],
  status: 'idle',
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  try {
    const response = await axios.get(
      'https://newsapi.org/v2/everything?q=bitcoin&apiKey=514fd3845622473eaca2815d2b99d44a'
    );
    const newsWithImages = response.data.articles.map((article) => ({
      ...article,
      imageUrl: article.urlToImage,
    }));
    return newsWithImages;
  } catch (error) {
    throw Error(error);
  }
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
