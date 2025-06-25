import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', phone: '', password: '' });
  };

  return (
    <div className='form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <br /><br />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <br /><br />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        <br /><br />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />

        <button type="submit" style={{ display: 'inline', width: '70px', margin: '10px 0' }}>Submit</button>
      </form>
    </div>
  );
};

export default Signup;