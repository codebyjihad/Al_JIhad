import React, { useEffect, useState, use } from "react";
import { Link } from "react-router";

function Navbar({ navItemsPromise }) {
  const navbarItms = use(navItemsPromise);
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

    if (totalMinutes >= 300 && totalMinutes < 600) {
      newStatus = "🟢 Online";
    } else if (totalMinutes >= 600 && totalMinutes < 660) {
      newStatus = "🔴 Not available";
    } else if (totalMinutes >= 660 && totalMinutes < 780) {
      newStatus = "🟢 Online";
    } else if (totalMinutes >= 780 && totalMinutes < 840) {
      newStatus = "🔴 Not available";
    } else if (totalMinutes >= 840 && totalMinutes < 1080) {
      newStatus = "🟢 Online";
    } else if (totalMinutes >= 1080 && totalMinutes < 1200) {
      newStatus = "🔴 Offline";
    } else if (totalMinutes >= 1200 && totalMinutes < 1380) {
      newStatus = "🟢 Online";
    } else {
      newStatus = "💤 Sleeping";
    }

    setStatus(newStatus);
  }, [time]);

  return (
    <>
      <div className="bg-[#05081c] px-10 pt-10 h-[90vh] flex flex-col items-center space-y-8 text-white">
        {navbarItms.map((items) => (
          <div key={items.id}>
            <Link className="text-xl font-bold" to={items.path}>
              {items.name}
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center h-[10vh] w-full bg-gray-900 text-white">
        <div className="flex gap-2 items-center">
          <h1 className=" text-lg font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Dhaka
          </h1>
          <p className="text-sm mt-1">{bangladeshTime}</p>
        </div>
        <p className="text-xs mt-2 text-red-200">{status}</p>
      </div>
    </>
  );
}

export default Navbar;
