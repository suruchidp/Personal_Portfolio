import { useState } from 'react';
import api from '../services/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    await api.post('/contact', form);
    setStatus('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Contact Me</h2>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full p-2 rounded border" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input className="w-full p-2 rounded border" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <textarea className="w-full p-2 rounded border" rows="5" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
        <button className="pretty-btn bg-indigo-600 text-white">Send</button>
      </form>
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </section>
  );
}
