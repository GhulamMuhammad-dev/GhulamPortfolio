export default function Contact() {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h1>
        <p className="text-gray-600 mb-8">
          Feel free to reach out to me via the form below!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              rows={5}
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }
  