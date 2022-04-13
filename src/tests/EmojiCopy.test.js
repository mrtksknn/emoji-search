import { render, screen, } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import React from "react";
import App from '../App'

    test('emojies should copied when they got click', () => {
           render(<App />)
        const listEl=screen.getAllByText("Click to copy emoji")
        userEvent.click(listEl[0])
        expect(listEl[0]).toBeInTheDocument();
});