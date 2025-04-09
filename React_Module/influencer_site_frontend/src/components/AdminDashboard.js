import React, { useEffect, useState } from 'react';
import { getAdminMessages } from '../service/api'; // adjust the path if needed

function AdminDashboard({ token }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMsgs = async () => {
      try {
        const res = await getAdminMessages(token);
        setMessages(res.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMsgs();
  }, [token]);

  return (
    <div className="container mt-4">
      <h3>User Messages</h3>
      <div className="list-group">
        {messages.map((msg) => (
          <div className="list-group-item" key={msg.id}>
            <h5>
              {msg.name} ({msg.email})
            </h5>
            <p>{msg.content}</p>
            <small>{new Date(msg.submittedAt).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
