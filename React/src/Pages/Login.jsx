import React, { useState } from 'react'
import './Login.css'
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: '',
      password: ''
    })
  }
  return (
    <div className='main'>

      <form action="" onSubmit={handelSubmit}>
        <h1 className='heading'>LOGIN</h1>
        <table>
          <tbody>
            <tr>
              <th><label>EMAIL:</label></th>
              <td><input type="email" name='email' value={formData.email} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th><label>PASSWORD:</label></th>
              <td><input type="password" name='password' value={formData.password} onChange={handleChange} /></td>
            </tr>
            <tr>
              <th colSpan="2"><button className="btn" type="submit">LOGIN</button></th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Login