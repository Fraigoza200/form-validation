import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const [focused, setFocused] = useState(false);
  const { label, birthday, onChange, errorMessage, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="form">
      <label>{label}</label>
      <input
        className="formInput"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default Form;
