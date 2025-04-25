import React from 'react'
import { CheckCircle } from 'lucide-react' 

const Details = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <CheckCircle className="text-green-500" /> Basic Calculator Functions
      </h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. Numeric Input</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Digits: 0 through 9</li>
          <li>Decimal point: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.</code></li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. Basic Operations</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Addition: <code className="font-mono text-sm">+</code></li>
          <li>Subtraction: <code className="font-mono text-sm">-</code></li>
          <li>Multiplication: <code className="font-mono text-sm">*</code></li>
          <li>Division: <code className="font-mono text-sm">/</code></li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. Functional Buttons</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Equals (<code>=</code>): Evaluate the expression</li>
          <li>Clear (<code>C</code>): Clear all input</li>
          <li>Delete (<code>←</code>): Delete the last character</li>
          <li>Negate (<code>±</code>): Toggle sign of current number</li>
          <li>Percentage (<code>%</code>): Convert current number to percentage</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">4. Component Structure</h2>
        <p className="mb-2">Start with a single component like:</p>
        <pre className="bg-gray-100 dark:bg-gray-800 text-sm p-3 rounded">
          {`<Calculator />`}
        </pre>
        <p className="mt-2">Break it down into:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><code>{'<CalculatorDisplay />'}</code></li>
          <li><code>{'<CalculatorButtons />'}</code></li>
          <li><code>{'<Button />'}</code></li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">5. State Management</h2>
        <p>Use <code>useState</code> to manage:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li><code>input</code>: string of the expression (e.g. <code>{"5+3*2"}</code>)</li>
          <li><code>result</code>: number result</li>
          <li>Optional: <code>history</code> array</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">6. Button Click Handling</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Digits & decimal → append to input</li>
          <li>Operators → validate before adding (avoid <code>++</code>)</li>
          <li>Equals → safely evaluate expression</li>
          <li>Clear → reset all</li>
          <li>Delete → remove last character</li>
          <li>Negate → flip sign of number</li>
          <li>Percentage → divide number by 100</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Evaluation Logic</h2>
        <p>
          Avoid using <code>eval()</code>. Use a safer alternative like <code>Function()</code> or build a parser.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. UI/UX Enhancements</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Responsive layout for all devices</li>
          <li>Button animations</li>
          <li>Disable invalid inputs</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">✅ Optional Features</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Keyboard support</li>
          <li>Expression history view</li>
          <li>Light/Dark themes</li>
          <li>Memory buttons: MC, M+, M-</li>
        </ul>
      </section>
    </div>
  )
}

export default Details
