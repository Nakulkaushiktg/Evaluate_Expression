import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setExpression(e.target.value);
    console.log('Expression updated:', e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting expression:', expression);

    try {
      const response = await axios.post('http://localhost:5000/evaluate', {
        expression,
      });

      console.log('Response received:', response.data);
      setResult(response.data.result);
    } catch (error) {
      console.error('Error evaluating expression', error);
      setResult('Error');
    }
  };

  return (
    <div className="app">
      <h1>Math Expression Evaluator</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={expression}
          onChange={handleChange}
          placeholder="Enter a math expression (e.g., 3+5*2)"
          className="input-field"
        />
        <button type="submit" className="submit-button">Evaluate</button>
      </form>
      {result !== null && <h2 className="result">Result: {result}</h2>}
    </div>
  );
}

export default App;