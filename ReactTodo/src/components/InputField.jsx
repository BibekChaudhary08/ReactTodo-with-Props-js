import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const InputField = () => {
  const [currentInput, setInput] = useState('');
  const [inputHistory, setInputHistory] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      clearInput();
    }
  };

  const clearInput = () => {
    if (currentInput) {
      setInputHistory([...inputHistory, currentInput]);
      setInput('');
    }
  };

  const deleteItem = (index) => {
    const updatedInputHistory = [...inputHistory];
    updatedInputHistory.splice(index, 1);
    setInputHistory(updatedInputHistory);
  };

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          value={currentInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} // Added event handler for keypress
          className="form-control"
          placeholder="Enter your Todo"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <button type="button" className="btn btn-primary" onClick={clearInput}>
          ADD
        </button>
      </div>

      <ul className="list-group">
        {inputHistory.map((item, index) => (
          <li className="list-group-item" key={index} aria-current="true">
            {item}
            <span onClick={() => deleteItem(index)}>
              <AiFillDelete size={20} color="red" />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default InputField;
