import React, { useState } from 'react';
import './index.css';

function InputForm() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const [input5, setInput5] = useState('');
  const [input6, setInput6] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1.length < 5) {
      alert('Input 1 must be at least 5 characters long.');
      return;
    }
    if (!input2.includes('@')) {
      alert('Input 2 must contain an "@" symbol.');
      return;
    }
    if (input3 === '') {
      alert('Input 3 cannot be empty.');
      return;
    }
    if (input4 !== input4.toUpperCase()) {
      alert('Input 4 must be in all uppercase letters.');
      return;
    }
    if (input5 === '') {
      alert('Input 5 cannot be empty.');
      return;
    }
    if (input6 === '') {
      alert('Input 6 cannot be empty.');
      return;
    }
    const data = {
      input1,
      input2,
      input3,
      input4,
      input5,
      input6
    };
    fetch('https://northwind.vercel.app/api/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('Supplier added successfully!');
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to add supplier.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input 1 (min 5 characters):
        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
      </label>
      <br />
      <label>
        Input 2 (must contain "@"):
        <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
      </label>
      <br />
      <label>
        Input 3 (cannot be empty):
        <input type="text" value={input3} onChange={(e) => setInput3(e.target.value)} />
      </label>
      <br />
      <label>
        Input 4 (must be all uppercase):
        <input type="text" value={input4} onChange={(e) => setInput4(e.target.value)} />
      </label>
      <br />
      <label>
        Input 5 (cannot be empty):
        <input type="text" value={input5} onChange={(e) => setInput5(e.target.value)} />
      </label>
      <br />
      <label>
        Input 6 (cannot be empty):
        <input type="text" value={input6} onChange={(e) => setInput6(e.target.value)} />
      </label>
      <br />
      <button type="submit">Add Supplier</button>
    </form>
  );
}

export default InputForm;
