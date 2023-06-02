import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Detail from '../components/Detail';

const mockStore = configureMockStore();

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
