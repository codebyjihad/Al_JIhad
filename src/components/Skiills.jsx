import React from "react";

function Skills() {
  const skills = [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "TailwindCSS",
      img: "https://i.ibb.co.com/XfjXnMQW/download-1.jpg",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      img: "https://i.ibb.co.com/DcpZbm9/images-1.png",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ];

  return (
    <section className="w-full py-16 overflow-y-hidden container mx-auto mt-10">
      
      {/* Marquee Section */}
      <div className="relative flex overflow-hidden">
        {/* First loop */}
        <div className="animate-marquee flex whitespace-nowrap gap-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[140px] p-2 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 mb-2 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              />
              <span className="text-gray-200 font-semibold text-lg">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate loop for infinite effect */}
        <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap gap-16">
          {skills.map((skill, index) => (
            <div
              key={`copy-${index}`}
              className="flex flex-col items-center justify-center min-w-[140px] p-2 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-14 h-14 mb-2 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              />
              <span className="text-gray-200 font-semibold text-lg">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
