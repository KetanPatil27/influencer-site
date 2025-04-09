import React, { useState } from 'react';
import { sendMessage } from '../service/api';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', content: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(form);
      setMessage('Message sent successfully!');
      setForm({ name: '', email: '', content: '' });
    } catch (error) {
      setMessage('Something went wrong.');
    }
  };

  return (
    <div className="card shadow p-4 my-5">
      <h3>Contact Me</h3>
      {message && <div className="alert alert-info">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control my-2"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="form-control my-2"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          className="form-control my-2"
          placeholder="Message"
          rows="4"
          value={form.content}
          onChange={handleChange}
          required
        ></textarea>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
