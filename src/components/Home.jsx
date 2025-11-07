import React, { useEffect, useState } from "react";
import myImage from "../assets/my-image.jpeg";
import { Button } from "@heroui/react";

function Home() {
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Dhaka",
  };

  const bangladeshTime = new Intl.DateTimeFormat("en-us", options).format(time);

  useEffect(() => {
    const now = new Date();
    const hour24 = parseInt(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        hour12: false,
      }),
      10
    );
    const minutes = parseInt(
      now.toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        minute: "2-digit",
      }),
      10
    );
    const totalMinutes = hour24 * 60 + minutes;

    let newStatus = "";
    if (totalMinutes >= 300 && totalMinutes < 600) newStatus = "🟢 Online";
    else if (totalMinutes >= 600 && totalMinutes < 660)
      newStatus = "🔴 Not available";
    else if (totalMinutes >= 660 && totalMinutes < 780) newStatus = "🟢 Online";
    else if (totalMinutes >= 780 && totalMinutes < 840)
      newStatus = "🔴 Not available";
    else if (totalMinutes >= 840 && totalMinutes < 1080)
      newStatus = "🟢 Online";
    else if (totalMinutes >= 1080 && totalMinutes < 1200)
      newStatus = "🔴 Offline";
    else if (totalMinutes >= 1200 && totalMinutes < 1380)
      newStatus = "🟢 Online";
    else newStatus = "💤 Sleeping";

    setStatus(newStatus);
  }, [time]);

  return (
    <>
      <section className="flex justify-around container mx-auto mt-40 flex-col md:flex-row gap-10 items-center">
        {/* Text Section */}
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Al Jihad
          </h1>
          <p className="text-gray-400 leading-relaxed text-lg">
            I am a passionate and results-driven Software Engineer specializing
            in full-stack web development using the MERN stack (MongoDB,
            Express.js, React, and Node.js). With hands-on experience in
            building dynamic, responsive, and high-performance web applications,
            I focus on delivering scalable solutions and clean, maintainable
            code.
          </p>
          <div className="flex gap-5 mt-4 justify-center md:justify-start">
            <Button
              color="primary"
              className="transition-transform hover:scale-105"
            >
              Book a Meeting
            </Button>
            <Button
              color="primary"
              className="transition-transform hover:scale-105"
            >
              View my CV
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col space-y-4">
          <div className="relative group">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <img
              src={myImage}
              alt="Profile"
              className="relative w-[450px] h-[450px] object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-col items-center justify-center h-[10vh] w-full bg-gray-900 text-white rounded-2xl">
            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dhaka
              </h1>
              <p className="text-sm mt-1">{bangladeshTime}</p>
            </div>
            <p className="text-xs mt-2 text-red-200">{status}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
