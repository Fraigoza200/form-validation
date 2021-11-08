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
      errorMessage: "Enter Valid Information, Limit 16 characters",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      errorMessage: "Enter Valid Email",
      label: 'email',
      required: true,
    },
    {
      id: 3,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage: "Enter Valid Password Information",
      label: 'Password',
      pattern: '^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$',
      required: true,
    },
    {
      id: 4,
      name: 'confirmpassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "Enter Valid Password Information",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      errorMessage: "Enter Valid Date",
      label: 'Your Date of Birth',
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
        <h1>Register</h1>
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
