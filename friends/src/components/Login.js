import React, { useState } from "react"
import axios from "axios";
import { useHistory } from "react-router-dom"

const initialFormValues = {
  name: "",
  password: ""
}

function Login() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();

    const newUser = {
      username: formValues.name,
      password: formValues.password
    }

    axios
    .post("http://localhost:5000/api/login", newUser)
    .then(res => {
      localStorage.setItem("token", res.data.payload)
      history.push("/friends")
    })
  }

  function handleChange(evt) {
    const { name, value } = evt.target

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  return (
    <>
      <div className="form-container">
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handleSubmit}>

          <input onChange={handleChange} name="name" type="text" placeholder="Name"/>

          <input onChange={handleChange} name="password" type="password" placeholder="Password"/>

          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login;