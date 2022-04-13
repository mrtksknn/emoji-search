import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React from "react";
import App from '../App'

test('when the page load, first the list should be appear', () => {
    render(<App />)
    const listEl=screen.getAllByText("Click to copy emoji")
    expect(listEl.length).toEqual(20)
})