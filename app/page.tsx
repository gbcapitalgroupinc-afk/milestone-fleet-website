"use client";

import { useState } from "react";

export default function MilestoneFleetEliteWebsite() {
  const [formState, setFormState] = useState({ status: "idle", error: null });
  const [formData, setFormData] = useState({ name: "", email: "", intendedUse: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    setFormState({ status: "loading", error: null });
    try {
      const res = await fetch("https://formspree.io/f/xkopvaog", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          intended_use: formData.intendedUse,
          message: formData.message,
        }),
      });
      if (res.ok) {
        setFormState({ status: "success", error: null });
        setFormData({ name: "", email: "", intendedUse: "", message: "" });
      } else {
        const data = await res.json();
        setFormState({ status: "error", error: data?.errors?.[0]?.message || "Something went wrong. Please try again." });
      }
    } catch {
      setFormState({ status: "error", error: "Network error. Please check your connection and try again." });
    }
  };
  const useCases = [
    {
      title: "Rideshare Drivers",
      description:
        "Reliable contract rentals for Uber and other platform-based driving opportunities.",
    },
    {
      title: "Delivery Drivers",
      description:
        "Practical vehicle options for Uber Eats, DoorDash, Instacart, and other delivery services.",
    },
    {
      title: "Personal & Business Use",
      description:
        "Flexible fleet access for customers who need dependable transportation beyond platform work.",
    },
  ];

  const advantages = [
    {
      title: "Professional Fleet",
      text: "Clean, dependable vehicles selected for daily use, comfort, and consistent performance.",
    },
    {
      title: "Fast Approval Process",
      text: "A streamlined process that helps customers move from inquiry to vehicle access quickly.",
    },
    {
      title: "Driver-Focused Model",
      text: "Built for customers who rely on transportation to earn income, stay mobile, and keep moving.",
    },
    {
      title: "Contract-Based Rentals",
      text: "Structured agreements designed to create clarity, stability, and flexibility for vehicle access.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Submit an Inquiry",
      description:
        "Tell us how you plan to use the vehicle and what kind of rental arrangement you need.",
    },
    {
      step: "02",
      title: "Review Options",
      description:
        "We help match you with an available vehicle and contract structure that fits your needs.",
    },
    {
      step: "03",
      title: "Complete the Agreement",
      description:
        "Once terms are finalized, we complete the contract process and prepare the vehicle.",
    },
    {
      step: "04",
      title: "Get on the Road",
      description:
        "Pick up your vehicle and start driving for work, delivery, or personal transportation.",
    },
  ];

  const faqs = [
    {
      question: "Who are your rentals designed for?",
      answer:
        "Our rentals are ideal for rideshare drivers, delivery drivers, and customers who need dependable transportation on a contract basis.",
    },
    {
      question: "Can I use the vehicle for Uber or Uber Eats?",
      answer:
        "Yes. Milestone Fleet is built around customers who want to use rental vehicles for rideshare and delivery opportunities, along with other transportation needs.",
    },
    {
      question: "How do I get started?",
      answer:
        "The fastest way is to submit an inquiry through the website or email us directly so we can discuss availability and contract options.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
              Milestone Fleet
            </p>
            <p className="text-sm text-white/55">Contract Vehicle Rentals</p>
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
            <a
              href="#contact"
              className="rounded-full border border-amber-400/40 px-4 py-2 text-white transition hover:border-amber-300 hover:bg-amber-400/10"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,#0a0a0a_0%,#171717_55%,#1f1f1f_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.16),transparent_22%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-32">
            <div className="relative z-10">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Premium Fleet Access For Modern Drivers
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
                Elite vehicle rentals built for work, income, and everyday mobility.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
                Milestone Fleet provides contract-based vehicle rentals for customers who need dependable transportation for Uber, Uber Eats, delivery services, business use, or everyday driving.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-300"
                >
                  Request a Vehicle
                </a>
                <a
                  href="#solutions"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  Explore Solutions
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
                {[
                  "Contract-Based Rentals",
                  "Driver-Focused Support",
                  "Professional Fleet",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm text-white/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex items-center">
              <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/40 backdrop-blur">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">Best For</p>
                    <p className="mt-3 text-xl font-medium">Uber & Delivery Drivers</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">Structure</p>
                    <p className="mt-3 text-xl font-medium">Simple Contract Terms</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-neutral-900 p-6 sm:col-span-2">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">Why Milestone Fleet</p>
                    <p className="mt-3 text-base leading-7 text-white/80">
                      We make it easier for customers to access dependable vehicles and stay focused on driving, delivering, working, and moving forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                About Milestone Fleet
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Transportation access designed around real customer needs.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-white/68">
              <p>
                Milestone Fleet is focused on one thing: giving customers access to reliable vehicles through professional contract-based rentals.
              </p>
              <p>
                Whether someone is driving for income, making deliveries, or simply needs dependable transportation, our model is designed to provide clarity, convenience, and consistent vehicle access.
              </p>
            </div>
          </div>
        </section>

        <section id="solutions" className="border-y border-white/10 bg-neutral-900/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Rental Solutions
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Fleet options built around how customers actually use vehicles.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-neutral-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-400/35"
                >
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Why Customers Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              A sharper, more professional rental experience.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                  {item.title}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/68">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-neutral-900/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Simple Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                From inquiry to vehicle access.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.75rem] border border-white/10 bg-neutral-950 p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Contact Milestone Fleet
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Request availability, contract details, or more information.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
                The fastest way to get started is to email us directly with your intended use and vehicle needs.
              </p>

              <div className="mt-10 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 text-sm leading-7 text-white/75">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Email</p>
                  <a
                    href="mailto:HumrajSinghGrewal@gbcapitalgroup.ca"
                    className="mt-2 block transition hover:text-white"
                  >
                    HumrajSinghGrewal@gbcapitalgroup.ca
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">Email</p>
                  <a
                    href="mailto:SukhmandeepButtar@gbcapitalgroup.ca"
                    className="mt-2 block transition hover:text-white"
                  >
                    SukhmandeepButtar@gbcapitalgroup.ca
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl shadow-black/30">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
                Vehicle Inquiry
              </p>
              <p className="mt-4 text-sm leading-7 text-white/68">
                Tell us how you want to use the vehicle and we can discuss the best fit.
              </p>

              {formState.status === "success" ? (
                <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-6 py-8 text-center">
                  <p className="text-lg font-semibold text-amber-400">Inquiry Sent!</p>
                  <p className="mt-2 text-sm leading-7 text-white/65">
                    Thanks for reaching out. We'll be in touch shortly to discuss your vehicle needs.
                  </p>
                  <button
                    onClick={() => setFormState({ status: "idle", error: null })}
                    className="mt-6 rounded-2xl border border-white/15 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form className="mt-8 space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-400/50"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-400/50"
                  />
                  <input
                    type="text"
                    name="intendedUse"
                    placeholder="Intended Use"
                    value={formData.intendedUse}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-400/50"
                  />
                  <textarea
                    name="message"
                    placeholder="Tell us about the type of vehicle or arrangement you need"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-neutral-950 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-amber-400/50"
                  />
                  {formState.error && (
                    <p className="text-sm text-red-400">{formState.error}</p>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={formState.status === "loading"}
                    className="w-full rounded-2xl bg-amber-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-amber-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState.status === "loading" ? "Sending…" : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-white/10 bg-neutral-900/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Frequently Asked Questions
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                Quick answers for prospective customers.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="rounded-[1.75rem] border border-white/10 bg-neutral-950 p-8"
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Milestone Fleet
              </p>
              <p className="mt-3 text-sm text-white/50">
                Contract Fleet Rentals • Reliable Vehicles • Driver-Focused Service
              </p>
            </div>
            <div className="text-sm text-white/45">
              © 2026 Milestone Fleet. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
