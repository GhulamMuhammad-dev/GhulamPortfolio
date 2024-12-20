import React from "react";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:p-16 justify-center min-h-screen bg-background_color  relative">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-full  relative ">
        <div className=" inset-0  bg-opacity-50 flex flex-col items-start justify-center text-white p-8">
          <h1 className="text-6xl bg-secondary p-4 rounded-xl font-bold mb-4 font-zentry">To Unleash Creativity</h1>
          <p className="text-lg">Feel free to contact me</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2  p-8">
        <h2 className="text-2xl font-bold text-center mb-8">CONTACT ME</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full border-2 focus:bg-transparent text-white  focus:border-none border-primary bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full border-2 focus:bg-transparent text-white  focus:border-none border-primary bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows={4}
              className="w-full border-2 focus:bg-transparent text-white  focus:border-none border-primary bg-transparent rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary text-white font-medium py-3 rounded-lg hover:bg-secondary_hover transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
