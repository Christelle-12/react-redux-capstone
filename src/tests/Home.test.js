import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      news: {
        news: [],
        categories: {},
        totalResults: 0,
      },
    });

    component = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
  });

  it('renders the Home component correctly', () => {
    expect(component.getByTestId('home')).toBeInTheDocument();
  });
});
