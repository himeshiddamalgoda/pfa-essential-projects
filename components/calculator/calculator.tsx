'use client';

import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState<string>(''); // raw expression
  const [result, setResult] = useState<string>('0');

  const operators = ['+', '-', '*', '/'];

  const handleButtonClick = (value: string) => {
    // Prevent double operators
    if (
      operators.includes(value) &&
      (input === '' || operators.includes(input.slice(-1)))
    ) {
      return;
    }

    setInput(prev => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('0');
  };

  const handleDelete = () => {
    setInput(prev => prev.slice(0, -1));
  };

  const handlePercentage = () => {
    try {
      const evalValue = Function('"use strict"; return (' + input + ')')();
      setResult(String(evalValue / 100));
    } catch {
      setResult('Error');
    }
  };

  const handleNegate = () => {
    try {
      const evalValue = Function('"use strict"; return (' + input + ')')();
      setResult(String(-evalValue));
    } catch {
      setResult('Error');
    }
  };

  const handleCalculate = () => {
    try {
      const evalResult = Function('"use strict"; return (' + input + ')')();
      setResult(String(evalResult));
    } catch {
      setResult('Error');
    }
  };

  const buttons: string[] = [
    'C', '←', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '±', '0', '.', '='
  ];

  const handleClick = (btn: string) => {
    switch (btn) {
      case 'C':
        handleClear();
        break;
      case '←':
        handleDelete();
        break;
      case '%':
        handlePercentage();
        break;
      case '±':
        handleNegate();
        break;
      case '=':
        handleCalculate();
        break;
      default:
        handleButtonClick(btn);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xs bg-white rounded-xl shadow-lg p-4 space-y-4">
        <div className="bg-gray-200 rounded p-2 text-right font-mono text-xl min-h-[3rem]">
          {input || '0'}
        </div>
        <div className="text-right text-2xl font-bold text-blue-600">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {buttons.map(btn => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="p-3 rounded bg-gray-300 hover:bg-gray-400 font-semibold text-lg"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator