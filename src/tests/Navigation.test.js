import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('Navigation', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>,
    );

    // Assert that the navigation links are rendered
    const backButton = screen.getByLabelText('Go back');
    expect(backButton).toBeInTheDocument();

    const microphoneIcon = screen.getByLabelText('Microphone');
    expect(microphoneIcon).toBeInTheDocument();

    const cogIcon = screen.getByLabelText('Settings');
    expect(cogIcon).toBeInTheDocument();
  });
});
