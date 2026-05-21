"use client";

import { FormEvent, useState } from "react";

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/future-of-work-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company_role: formData.get("company_role"),
          workflow: formData.get("workflow"),
          page_path: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("This did not save. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="success-card" role="status" tabIndex={-1}>
        <p className="eyebrow">Interest submitted</p>
        <h3>Thank you.</h3>
        <p>
          Your interest will be reviewed, and you&apos;ll hear back if there is a
          strong fit for an early partner conversation.
        </p>
      </div>
    );
  }

  return (
    <form className="interest-form" onSubmit={handleSubmit}>
      <div className="form-grid two">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Work email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
          />
        </label>
      </div>

      <label>
        <span>Company / role</span>
        <input
          name="company_role"
          type="text"
          autoComplete="organization"
          placeholder="Acme Ops, founder"
          required
        />
      </label>

      <label>
        <span>Briefly describe the interest</span>
        <small>
          Optionally tell us a bit about what workflows you might want to start
          building, standardizing, or improving.
        </small>
        <textarea
          name="workflow"
          rows={4}
          placeholder="Example: weekly customer follow-ups, sales research, invoice review..."
        />
      </label>

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="button primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "I am interested"}
      </button>
    </form>
  );
}
