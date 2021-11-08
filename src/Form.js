import React, { useState } from 'react';
import './Form.css';

function Form(props) {
  const {label, onChange, id, ...inputProps} = props
  return (
    <div className="form">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange}/>
    </div>
  );
}

export default Form;
