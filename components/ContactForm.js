"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  function validate() {
    if (!name.trim() || !email.trim() || !message.trim()) return false;
    // basic email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return false;
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      setStatus({ ok: false, message: "Please fill all fields with a valid email." });
      return;
    }

    setStatus({ ok: null, message: "Sending..." });

    try {
      // Simulate send — replace with real API call later
      await new Promise((res) => setTimeout(res, 800));
      setStatus({ ok: true, message: "Message sent. I will reply soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ ok: false, message: "Failed to send. Try again later." });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="block mb-2 font-label-md text-label-md text-text-secondary">
            Name
          </label>
          <input
            id="cf-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            className="w-full py-2 bg-transparent input-field font-body-md text-body-md text-text-primary"
            required
          />
        </div>

        <div>
          <label htmlFor="cf-email" className="block mb-2 font-label-md text-label-md text-text-secondary">
            Email
          </label>
          <input
            id="cf-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            type="email"
            className="w-full py-2 bg-transparent input-field font-body-md text-body-md text-text-primary"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-message" className="block mb-2 font-label-md text-label-md text-text-secondary">
          Message
        </label>
        <textarea
          id="cf-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full py-2 bg-transparent resize-none input-field font-body-md text-body-md text-text-primary"
          required
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="btn-primary text-text-primary px-6 py-2 rounded-full font-label-md text-label-md flex items-center gap-2"
        >
          Send Message
          <span className="material-symbols-outlined text-sm">send</span>
        </button>

        <div aria-live="polite" className="text-sm">
          {status && (
            <span className={status.ok ? "text-emerald-400" : status.ok === false ? "text-rose-400" : "text-slate-300"}>
              {status.message}
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
