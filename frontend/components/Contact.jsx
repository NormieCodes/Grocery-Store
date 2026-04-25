function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <p className="text-gray-400 mb-6">
        Have questions? Reach out to us anytime.
      </p>

      <div className="flex flex-col gap-3 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 rounded bg-slate-800 border border-slate-700"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded bg-slate-800 border border-slate-700"
        />

        <textarea
          placeholder="Your Message"
          className="p-2 rounded bg-slate-800 border border-slate-700"
        />

        <button className="bg-yellow-500 text-black py-2 rounded">
          Send
        </button>
      </div>
    </section>
  );
}

export default Contact;