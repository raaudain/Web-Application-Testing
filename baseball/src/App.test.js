import React from 'react';
import App from './App';
import { render } from "@testing-library/react";

test('renders without crashing', () => {
  const container = render(<App />);
});

test("Is 'Score' there", () => {
  const {getByText} = render(<App />);
  getByText("Score")
})