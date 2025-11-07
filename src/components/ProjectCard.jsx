import React from "react";
import { ExternalLink, Github } from "lucide-react"; // npm install lucide-react

function ProjectCard({ project }) {
  const { title, description, image, tech, demo, github } = project;

  return (
    <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.5deg]">
      {/* Project Image */}
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            {title}
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-blue-500 mt-1 rounded-full"></div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {tech?.map((item, i) => (
            <span
              key={i}
              className="text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-1 rounded-md backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-5">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 border border-cyan-400 text-cyan-300 py-2.5 rounded-xl font-medium hover:bg-cyan-500/10 transition"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Glow Border Effect (fixed pointer issue) */}
      <div className="absolute inset-0 border border-transparent rounded-3xl group-hover:border-cyan-400/40 transition-all duration-700 pointer-events-none"></div>
    </div>
  );
}

export default ProjectCard;
