import { useEffect, useState } from 'react';
import api from '../services/api';

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', link: '' });
  const token = localStorage.getItem('token');

  const loadData = async () => {
    const [projectsRes, messagesRes] = await Promise.all([
      api.get('/projects'),
      api.get('/contact', { headers: { Authorization: `Bearer ${token}` } })
    ]);
    setProjects(projectsRes.data);
    setMessages(messagesRes.data);
  };

  useEffect(() => { loadData(); }, []);

  const addProject = async (e) => {
    e.preventDefault();
    await api.post('/projects', form, { headers: { Authorization: `Bearer ${token}` } });
    setForm({ title: '', description: '', link: '' });
    loadData();
  };

  const deleteProject = async (id) => {
    await api.delete(`/projects/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    loadData();
  };

  return (
    <section className="max-w-5xl mx-auto p-6 dark:text-white">
      <h2 className="text-3xl font-bold mb-4">Admin Dashboard</h2>
      <form onSubmit={addProject} className="grid md:grid-cols-3 gap-2 mb-8">
        <input className="border p-2 rounded text-black" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input className="border p-2 rounded text-black" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <input className="border p-2 rounded text-black" placeholder="Link" value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} required />
        <button className="md:col-span-3 bg-indigo-600 text-white py-2 rounded">Add Project</button>
      </form>

      <h3 className="text-xl font-semibold mb-2">Projects</h3>
      {projects.map((p) => (
        <div key={p._id} className="flex justify-between border-b py-2">
          <span>{p.title}</span>
          <button onClick={() => deleteProject(p._id)} className="text-red-500">Delete</button>
        </div>
      ))}

      <h3 className="text-xl font-semibold mt-8 mb-2">Contact Messages</h3>
      {messages.map((m) => (
        <div key={m._id} className="border p-3 rounded mb-2">
          <p><strong>{m.name}</strong> ({m.email})</p>
          <p>{m.message}</p>
        </div>
      ))}
    </section>
  );
}
