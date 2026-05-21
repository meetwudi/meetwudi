"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Early partner pilot",
  "AI workflow assessment",
  "Occasional updates",
  "Interview / research conversation",
];

export function InterestForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function subscribeToButtondown(email: string) {
    const body = new FormData();
    body.append("email", email);

    await fetch(
      "https://buttondown.com/api/emails/embed-subscribe/future-of-work",
      {
        method: "POST",
        mode: "no-cors",
        body,
      },
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    try {
      if (email) {
        await subscribeToButtondown(email);
      }
    } finally {
      setSubmitted(true);
      setIsSubmitting(false);
      form.reset();
    }
  }

  if (submitted) {
    return (
      <div className="success-card" role="status" tabIndex={-1}>
        <p className="eyebrow">Interest submitted</p>
        <h3>Thank you.</h3>
        <p>
          We&apos;ll review your workflow and reach out if there is a strong
          fit for an early partner conversation.
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

      <div className="form-grid two">
        <label>
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" required />
        </label>
        <label>
          <span>Role</span>
          <input name="role" type="text" autoComplete="organization-title" />
        </label>
      </div>

      <div className="form-grid two">
        <label>
          <span>Team size</span>
          <select name="team_size" defaultValue="" required>
            <option value="" disabled>
              Select team size
            </option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-1,000</option>
            <option>1,000+</option>
          </select>
        </label>
        <label>
          <span>Business type</span>
          <input
            name="business_type"
            type="text"
            placeholder="Services, SaaS, retail, healthcare..."
          />
        </label>
      </div>

      <label>
        <span>Workflow to improve</span>
        <textarea
          name="workflow"
          rows={4}
          placeholder="Tell us about a workflow your team repeats often."
          required
        />
      </label>

      <label>
        <span>Biggest concern about adopting AI</span>
        <textarea
          name="ai_concern"
          rows={4}
          placeholder="Safety, quality, employee trust, review, compliance..."
        />
      </label>

      <fieldset>
        <legend>Interest type</legend>
        <div className="checkbox-grid">
          {interests.map((interest) => (
            <label key={interest} className="checkbox-row">
              <input name="interest_type" type="checkbox" value={interest} />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button type="submit" className="button primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit interest"}
      </button>
    </form>
  );
}
