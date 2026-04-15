"use client";

import { useState, FormEvent } from "react";

export default function NextSteps() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      category: (form.elements.namedItem("category") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("https://formspree.io/f/xnjozkow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="mb-3 text-2xl font-bold text-leaf-dark">
        What&apos;s Next?
      </h2>
      <p className="mb-6 max-w-sm text-base leading-relaxed text-foreground/70">
        These recommendations are just the beginning. Have feedback, questions,
        or ran into something weird? Let us know.
      </p>

      {submitted ? (
        <p className="text-base font-semibold text-leaf-dark">
          Thanks for reaching out! We&apos;ll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-sm flex-col gap-4 text-left"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-semibold text-leaf-dark"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your email"
              className="w-full rounded-xl border border-leaf/30 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-1 block text-sm font-semibold text-leaf-dark"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              required
              defaultValue=""
              className="w-full appearance-none rounded-xl border border-leaf/30 bg-white px-4 py-2.5 text-sm text-foreground focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Feedback">Feedback</option>
              <option value="Question about a tool">
                Question about a tool
              </option>
              <option value="Bug/issue">Bug/issue</option>
              <option value="Just saying hi">Just saying hi</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-semibold text-leaf-dark"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="What's on your mind?"
              className="w-full resize-none rounded-xl border border-leaf/30 bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-leaf focus:outline-none focus:ring-2 focus:ring-leaf/20"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-2xl bg-leaf px-8 py-3 text-base font-bold text-white shadow-lg transition-all hover:bg-leaf-dark hover:shadow-xl disabled:opacity-60"
          >
            {submitting ? "Sending..." : "Submit"}
          </button>
        </form>
      )}

      <p className="mt-4 text-base text-foreground/70">
        No pressure. Just an open door.
      </p>
    </div>
  );
}
