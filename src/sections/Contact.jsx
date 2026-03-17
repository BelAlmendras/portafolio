import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // aquí luego irá el fetch al backend serverless
    /*
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    */
  };

  return (
    <section className="bg-slate-900 text-slate-100 py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-6 text-center">
          Contacta Me
        </h2>

        <p className="text-slate-300 text-center mb-10">
          If you'd like to work together or have any questions, send me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 rounded-xl shadow-lg space-y-6"
        >

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 transition p-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;