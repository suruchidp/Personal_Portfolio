import { useState } from 'react';

const contentByRole = {
  Recruiter: 'I build scalable full-stack products with clean architecture and business impact.',
  Developer: 'I enjoy writing modular code, building APIs, and creating smooth user experiences.',
  Friend: 'Thanks for visiting! I love tech, learning, and building useful things.'
};

export default function Home() {
  const [role, setRole] = useState(localStorage.getItem('role') || 'Recruiter');

  const handleRole = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem('role', selectedRole);
  };

  return (
    <section className="max-w-6xl mx-auto p-6">
      <div
        className="glass-card rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="bg-slate-900/55 p-10 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Hi, I&apos;m Suruchi</h2>
          <p className="mt-4 text-lg text-indigo-100">Full-stack developer building modern web apps</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {Object.keys(contentByRole).map((roleOption) => (
              <button
                key={roleOption}
                onClick={() => handleRole(roleOption)}
                className={`pretty-btn ${role === roleOption ? 'bg-indigo-600 text-white' : 'bg-white/80 text-slate-800'}`}
              >
                {roleOption}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">Personalized Intro</h3>
        <p className="text-lg text-slate-700 dark:text-slate-200">{contentByRole[role]}</p>
      </div>
    </section>
  );
}
