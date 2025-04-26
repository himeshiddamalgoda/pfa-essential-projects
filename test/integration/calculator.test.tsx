import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '@/components/calculator/calculator';

describe('Calculator Integration Test', () => {
  test('performs a full calculation flow', () => {
    render(<Calculator />);

    // Click 7 + 3 =
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    // Expect input to be "7+3"
    expect(screen.getByText('7+3')).toBeInTheDocument();

    // Expect result to be "10"
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  test('handles clear and delete operations', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('←'));

    expect(screen.getByText('0')).toBeInTheDocument();

    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('C'));

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('prevents double operator entry', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+')); // should be ignored
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('4+5')).toBeInTheDocument();
    expect(screen.getByText('9')).toBeInTheDocument();
  });
});
