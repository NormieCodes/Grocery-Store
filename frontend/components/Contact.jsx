import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log(form);

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };


  return (
    <section id="contact" className="py-20 px-6 text-white flex flex-col justify-between items-center h-screen">
      <div className="border border-white/20 p-12 text-xl m-auto backdrop-blur-2xl bg-white/5 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <p className="text-gray-400 mb-6">
          Have questions? Reach out to us anytime.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 max-w-md">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-2 rounded bg-slate-800 border border-slate-700"
          />

          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required 
            placeholder="Your Email"
            className="p-2 rounded bg-slate-800 border border-slate-700"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-2 rounded bg-slate-800 border border-slate-700"
          />

          <button className="bg-yellow-500 text-black py-2 rounded cursor-pointer hover:bg-yellow-400" type="submit">
            Send
          </button>
        </div>
        </form>
        
      </div>
      
    </section>
  );
}

export default Contact;