import axios from 'axios';
import { useState } from 'react';

function ContactForm() {
  const [message, setMessage] = useState({ name: '', email: '', content: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/messages/send', message, {
        withCredentials: true,
      });
      setStatus('Message sent successfully!');
      setMessage({ name: '', email: '', content: '' });
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="card shadow p-4 my-5">
      <h3>Contact Me</h3>
      {status && <div className="alert alert-info">{status}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control my-2"
          placeholder="Name"
          value={message.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          className="form-control my-2"
          placeholder="Email"
          value={message.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          className="form-control my-2"
          placeholder="Message"
          rows="4"
          value={message.content}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
