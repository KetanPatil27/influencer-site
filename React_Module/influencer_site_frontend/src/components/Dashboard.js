import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  // Fetch messages on component load
  useEffect(() => {
    axios.get('http://localhost:8080/api/admin/messages', { withCredentials: true })
      .then(res => setMessages(res.data))
      .catch(() => {
        alert('Unauthorized or session expired. Please login again.');
        navigate('/');
      });
  }, [navigate]);

  // Handle logout with notification
  const handleLogout = () => {
    axios.post('http://localhost:8080/api/admin/logout', {}, { withCredentials: true })
      .then(() => {
        toast.success("Logged out successfully!"); // Show success notification
        setTimeout(() => {
          navigate('/'); // Redirect after showing the notification
        }, 2000); // Wait for 2 seconds before redirect
      })
      .catch((err) => {
        console.error("Logout failed:", err);
        toast.error("Logout failed!"); // Show error notification
        setTimeout(() => {
          navigate('/'); // Redirect after failure
        }, 1500);
      });
  };

  return (
    <div className="container my-5">
      {/* Header / Welcome */}
      <div className="bg-dark text-white p-4 rounded shadow-lg mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h1 className="fw-bold mb-2">👑 Welcome, SRK!</h1>
          <p className="fw-semibold text-white" style={{ fontSize: '1.2rem' }}>
            Your empire awaits, King Khan! 👑<br />
            Dive into the love, cheers, and stories your fans have sent. 💌🎬
          </p>
        </div>
        <button
          className="btn btn-outline-light fw-bold"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>
      </div>

      {/* Messages Table */}
      <div className="shadow p-4 bg-white rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0 fw-bold text-primary">📥 Fan Messages</h2>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center text-muted">No messages found.</td>
                </tr>
              ) : (
                messages.map((m) => (
                  <tr key={m.id}>
                    <td className="text-center">{m.id}</td>
                    <td>{m.name}</td>
                    <td>{m.email}</td>
                    <td>{m.content}</td>
                    <td className="text-nowrap">{new Date(m.submittedAt).toLocaleString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ToastContainer to show notifications */}
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
