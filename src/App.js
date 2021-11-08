import { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  // create array for inputs
  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
    },
    {
      id: 2,
      name: 'email',
      type: 'text',
      placeholder: 'email',
      label: 'email',
    },
    {
      id: 3,
      name: 'password',
      type: 'text',
      placeholder: 'Password',
      label: 'Password',
    },
    {
      id: 4,
      name: 'confirmpassword',
      type: 'text',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Form 
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange} />
        ))} 
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
