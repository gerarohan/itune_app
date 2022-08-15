import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { describe, expect, it } from vitest;

describe('Testing the Application', () => {
    it('Fetch posts', async () => {
        render(<App/>);

        expect(screen.getByText(/Test Project for itunes search/i)).toBeInTheDocument();
    });
}); 