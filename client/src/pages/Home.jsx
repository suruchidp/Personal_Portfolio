import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [role, setRole] = useState("developer");
  const navigate = useNavigate();

  return (
    <div
      className="
        min-h-screen flex items-center justify-center px-4
        bg-white text-black
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-900 dark:to-slate-800
        dark:text-white
        transition-all duration-500
      "
    >
      <div className="text-center max-w-3xl">

        {/* Profile Image */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/042/332/098/non_2x/default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-illustration-for-socail-media-web-vector.jpg"
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-indigo-400 shadow-lg"
        />

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-500 dark:text-indigo-400">Suruchi</span> 👋
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Full-stack developer crafting modern web experiences
        </p>

        {/* Role Buttons */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {["recruiter", "developer", "friend"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                role === r
                  ? "bg-indigo-500 text-white shadow-md"
                  : "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Dynamic Text */}
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          {role === "recruiter" &&
            "I build scalable applications and love solving real-world problems."}
          {role === "developer" &&
            "I enjoy working with React, Node.js, and building APIs."}
          {role === "friend" &&
            "Hey 👀 thanks for visiting! This is my digital space."}
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/projects")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            View Projects
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Contact Me
          </button>
        </div>

      </div>
    </div>
  );
}