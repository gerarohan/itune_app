import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ItemCard from '../card';

test('should render card component', () => {
    render(<ItemCard/>);
    const todoElement = screen.getByTestId('card-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('');
})