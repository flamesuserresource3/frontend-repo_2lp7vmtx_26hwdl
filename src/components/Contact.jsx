import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassButton from './GlassButton';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold sm:text-4xl"
        >
          Contact
        </motion.h2>
        <p className="mt-4 text-white/80">Have a project in mind or just want to say hello? Drop a line.</p>

        <form onSubmit={onSubmit} className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-white/70">Name</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-white/70">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-0 placeholder:text-white/40"
              placeholder="Let’s build something great together."
            />
          </div>
          <div className="flex items-center justify-between">
            <GlassButton type="submit">Send Message</GlassButton>
            {sent && <span className="text-sm text-emerald-400">Thanks! I’ll get back to you soon.</span>}
          </div>
        </form>

        <p className="mt-12 text-center text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </section>
  );
}
