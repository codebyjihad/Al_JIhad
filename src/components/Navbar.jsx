import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
          Al Jihad
        </h1>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/al-jihad-110910380/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5 text-cyan-300" />
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/CodebyJihad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <Twitter className="w-5 h-5 text-blue-400" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/codebyjihad"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <Github className="w-5 h-5 text-gray-200" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
