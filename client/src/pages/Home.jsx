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
    <section className="max-w-4xl mx-auto p-6">
      <div className="text-center py-12">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Hi, I&apos;m Suruchi</h2>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Full-stack developer building modern web apps</p>
      </div>

      <div className="flex gap-3 justify-center mb-6">
        {Object.keys(contentByRole).map((roleOption) => (
          <button
            key={roleOption}
            onClick={() => handleRole(roleOption)}
            className={`px-4 py-2 rounded ${role === roleOption ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-700 dark:text-white'}`}
          >
            {roleOption}
          </button>
        ))}
      </div>

      <p className="text-center text-slate-700 dark:text-slate-200 text-lg">{contentByRole[role]}</p>
    </section>
  );
}
