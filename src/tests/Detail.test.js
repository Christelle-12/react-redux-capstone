import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Detail from '../components/Detail';
import newsReducer, { incrementView } from '../redux/Home/newsSlice';

const mockStore = configureMockStore();
describe('newsSlice', () => {
  test('should increment the view count when incrementView action is dispatched', () => {
    const initialState = {
      news: [
        {
          title: 'News 1',
          views: 0,
        },
        {
          title: 'News 2',
          views: 0,
        },
      ],
    };

    const newState = newsReducer(initialState, incrementView({ newsItemId: 'News 1' }));

    expect(newState.news[0].views).toBe(1);
    expect(newState.news[1].views).toBe(0);
  });
});

describe('Detail Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      news: {
        news: [],
        categories: {},
      },
    });
  });

  test('does not render detail component when selectedItem is null', () => {
    render(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );

    expect(screen.queryByText('Test Title')).toBeNull();
    expect(screen.queryByText('Results:')).toBeNull();
  });
});
