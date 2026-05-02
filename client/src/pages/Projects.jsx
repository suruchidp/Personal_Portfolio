import { useEffect, useState } from 'react';
import api from '../services/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((res) => setProjects(res.data)).catch(console.error);
  }, []);

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project._id} className="p-5 rounded-2xl glass-card">
            <h3 className="font-semibold text-xl text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">{project.description}</p>
            <a href={project.link} className="text-indigo-500 mt-3 block" target="_blank" rel="noreferrer">Visit Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
