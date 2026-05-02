import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@portfolio.com');
  const [password, setPassword] = useState('admin123');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    navigate('/admin/dashboard');
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Admin Login</h2>
      <form onSubmit={login} className="space-y-4">
        <input className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="pretty-btn bg-indigo-600 text-white">Login</button>
      </form>
    </section>
  );
}
