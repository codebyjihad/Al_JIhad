import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center 
      bg-gradient-to-b from-black via-gray-900 to-gray-800 
      text-white px-6 py-16"
    >
      <div className="max-w-4xl w-full bg-gray-900/70 backdrop-blur-lg shadow-2xl rounded-2xl px-15 py-8 border border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-8">
           Contact <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-400">Let’s Connect!</h3>
            <p className="text-gray-400 mb-6 leading-relaxed ">
              Have a project idea or want to collaborate? Feel free to send me a
              message — I’ll reply as soon as possible.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" /> codebyjihad@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" /> +88 01771502665
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" /> Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Right side form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-gray-950/50 p-6 rounded-xl border border-gray-800 shadow-inner"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="input input-bordered w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 p-3 rounded-2xl"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="input input-bordered w-full bg-gray-900 border-gray-700 text-white focus:border-blue-500 p-3 rounded-2xl"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
              className="textarea textarea-bordered bg-gray-900 border-gray-700 text-white focus:border-blue-500 p-5 rounded-2xl"
            ></textarea>
            <button
              type="submit"
              className="btn btn-primary w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition-al p-3"
            >
              Send Message 
            </button>
            {submitted && (
              <p className="text-green-400 mt-3 text-center animate-pulse">
                 Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
