import Calculator from '@/components/calculator/calculator';
import { render, fireEvent, screen } from '@testing-library/react';


describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });

  test('renders calculator and shows default values', () => {
    expect(screen.getByText('0')).toBeInTheDocument(); // Initial result
  });

  test('can perform addition', () => {
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('can clear input', () => {
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('C'));

    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('can delete last character', () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('←'));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('can handle negative numbers', () => {
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('±'));

    expect(screen.getByText('-6')).toBeInTheDocument();
  });

  test('can calculate percentage', () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('%'));

    expect(screen.getByText('0.5')).toBeInTheDocument();
  });

  test('prevents invalid input (double operators)', () => {
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('+'));

    // Only one '+' should be in the input
    expect(screen.getByText('+')).toBeInTheDocument();
  });
});
