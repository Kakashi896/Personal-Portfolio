import React, { useState } from 'react';
import { MdOutlineFileDownload, MdSend } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { MdContactPage } from "react-icons/md";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        setSuccess(true);
        setEmail('');
        setMessage('');
        setName('');
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="min-h-screen w-full px-4 py-10 b">

<div className="flex items-center gap-3 mb-10">
<MdContactPage className="text-4xl sm:text-5xl mt-2 text-blue-500" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl  bg-clip-text text-transparent bg-zinc-900">Contact</h1>
        <div className='flex-grow h-[1px] bg-blue-500 mt-2 ml-4 rounded-full'></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      
        
        {/* Left: Form */}
        <form
         name="contact"
         method="POST"
         netlify
         data-netlify="true"
         onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 sm:p-10"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="flex items-center gap-2 text-blue-700 text-xl font-semibold mb-1">
            <MdSend className="text-2xl" />
            <span>Send me a message</span>
          </div>
          <p className="text-sm text-gray-500 mb-6">I'll get back to you as soon as possible</p>

          <label className="block mb-3">
            <span className="text-gray-700 font-medium">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John Doe"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-700 font-medium">Email Address</span>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="your@email.com"
            />
          </label>

          <label className="block mb-5">
            <span className="text-gray-700 font-medium">Your Message</span>
            <textarea
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="mt-1 w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Hello Shivam, I'd like to talk about..."
            />
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <MdSend />
            Send Message
          </button>

          {success && (
            <div className="mt-4 text-green-600 font-medium text-center">
              ✅ Message sent successfully!
            </div>
          )}
        </form>

        {/* Right: Info + Socials */}
        <div className="flex flex-col gap-6">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="flex items-center gap-3 mb-3">
              <CgMail className="text-2xl text-blue-600" />
              <span>mrakshatsharma15@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Kakashi896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-bhardwaj-704643326/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md"
              >
                <FaLinkedin className="text-xl text-blue-600" />
                LinkedIn
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 px-4 py-2 rounded-md"
              >
                <FaTwitter className="text-xl text-blue-400" />
                Twitter
              </a>

              <a
                href="mailto:mrakshatsharma15@gmail.com"
                className="flex items-center gap-2 bg-red-100 hover:bg-red-200 px-4 py-2 rounded-md"
              >
                <CgMail className="text-xl text-red-500" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
