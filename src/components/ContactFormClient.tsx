"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-heritage-deep border border-desert-sand/30 p-8 sm:p-12">
      <span className="text-[10px] uppercase tracking-[0.3em] text-desert-sand">
        Private Dispatch
      </span>
      <h2 className="font-serif text-3xl text-ivory-warm mt-1 mb-6">
        Write to Our Royal Concierge
      </h2>

      {submitted ? (
        <div className="p-6 bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Message Received by the Sanctuary</span>
          </div>
          <p className="text-sm">
            Thank you, {name || "Honoured Guest"}. Our Head Khidmatgar will
            respond personally to {email || "your inbox"} within 4 hours with
            tailored Jaisalmer arrangements.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-2"
            >
              Full Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-night-deep border border-desert-sand/30 px-4 py-3 text-sm text-ivory-warm focus:outline-none focus:border-desert-sand"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact-email"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-2"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="guest@example.com"
                className="w-full bg-night-deep border border-desert-sand/30 px-4 py-3 text-sm text-ivory-warm focus:outline-none focus:border-desert-sand"
              />
            </div>

            <div>
              <label
                htmlFor="contact-dates"
                className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-2"
              >
                Anticipated Travel Dates
              </label>
              <input
                id="contact-dates"
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="e.g. November 14–18, 2026"
                className="w-full bg-night-deep border border-desert-sand/30 px-4 py-3 text-sm text-ivory-warm focus:outline-none focus:border-desert-sand"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-[10px] uppercase tracking-[0.25em] text-desert-sand mb-2"
            >
              How May We Shape Your Jaisalmer Story?
            </label>
            <textarea
              id="contact-message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your preferred suite, private dune dining wishes, or chauffeur transfer from Jodhpur/Jaisalmer airport..."
              className="w-full bg-night-deep border border-desert-sand/30 px-4 py-3 text-sm text-ivory-warm focus:outline-none focus:border-desert-sand"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-desert-gold hover:bg-desert-sand text-night-deep text-xs font-semibold uppercase tracking-[0.24em] transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Private Inquiry</span>
          </button>
        </form>
      )}
    </div>
  );
}
