import Link from "next/link";
import { InterestForm } from "./InterestForm";

export const metadata = {
  title: "Future of Work Harness",
  description: "Transform work. Don't replace people.",
};

const capabilities = [
  {
    title: "Observable",
    copy: "See the inputs, steps, artifacts, decisions, and review points.",
  },
  {
    title: "Repeatable",
    copy: "Turn recurring work into a run your team can trust and improve.",
  },
  {
    title: "Reviewable",
    copy: "Keep human judgment in the places where quality and trust matter.",
  },
  {
    title: "Improvable",
    copy: "Capture feedback and use it to update the next run.",
  },
  {
    title: "Governable",
    copy: "Make ownership, approval gates, and risk visible from the start.",
  },
];

const steps = [
  "Diagnose one workflow",
  "Map the inputs, handoffs, and risks",
  "Create a harnessed run",
  "Review the run with the people doing the work",
  "Improve the instructions for next time",
];

const useCases = [
  "Customer follow-up drafts",
  "Sales research and account prep",
  "Operations checklists",
  "Hiring and candidate review support",
  "Internal reporting",
  "Policy-aware content review",
];

const faqs = [
  {
    question: "Is this a SaaS product?",
    answer:
      "No. This starts as hands-on diagnosis and pilot work. Software may support the workflow, but the first product is clarity.",
  },
  {
    question: "Is this another AI tool?",
    answer:
      "No. The point is to make the work ready for safe AI assistance, not to add another box your team has to manage.",
  },
  {
    question: "Do we need a technical team?",
    answer:
      "No. The first pass is about the business workflow: what comes in, what happens, who reviews it, and what must improve.",
  },
  {
    question: "What makes a good first workflow?",
    answer:
      "Something repeated, important, a little messy, and painful enough that better review and clearer instructions would matter.",
  },
];

export default function FutureOfWorkPage() {
  return (
    <main className="fow-page">
      <header className="site-header">
        <Link href="/future-of-work" className="brand">
          Future of Work Harness
        </Link>
        <nav aria-label="Page sections">
          <a href="#how-it-works">How it works</a>
          <a href="#pilot">Pilot</a>
          <a href="#interest">Submit interest</a>
        </nav>
      </header>

      <section className="hero section-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI transformation diagnosis for real teams</p>
          <h1>Transform work. Don&apos;t replace people.</h1>
          <p className="hero-subhead">
            I help founders and operators find where AI can safely help real
            workflows: inputs, handoffs, review points, artifacts, and feedback.
          </p>
          <p className="hero-note">
            Not another SaaS dashboard. Not another AI tool. A practical way to
            drop into the work, diagnose what is unclear, and pilot a better
            operating loop.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#interest">
              Submit interest
            </a>
            <a className="button secondary" href="#how-it-works">
              See how the harness works
            </a>
          </div>
        </div>

        <div className="work-card" aria-label="Example harnessed work run">
          <div className="card-topline">
            <span>Work run</span>
            <strong>In progress</strong>
          </div>
          <h2>Respond to high-priority customer follow-ups</h2>
          <div className="run-detail">
            <span>Human touchpoints</span>
            <p>Manager reviews tone before sending</p>
          </div>
          <div className="artifact-list" aria-label="Artifacts">
            <span>Draft replies</span>
            <span>Customer notes</span>
            <span>Follow-up checklist</span>
          </div>
          <blockquote>
            Use warmer language for repeat buyers.
          </blockquote>
          <div className="run-detail">
            <span>Next improvement</span>
            <p>Update the work instructions for future runs</p>
          </div>
          <ol className="loop-list" aria-label="Harness loop">
            <li>Define work</li>
            <li>Run with AI</li>
            <li>Human review</li>
            <li>Capture feedback</li>
            <li>Improve the work</li>
          </ol>
        </div>
      </section>

      <section className="section-grid" id="problem">
        <div>
          <p className="eyebrow">The problem</p>
          <h2>Most AI projects start in the wrong place.</h2>
        </div>
        <div className="copy-stack">
          <p>
            The problem is usually not the model. It is the work. The workflow
            is unclear, the handoffs are hidden, and review happens too late.
          </p>
          <p>
            If the work is not observable, repeatable, and reviewable, AI just
            makes confusion move faster.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">What the harness does</p>
          <h2>Make the work AI-ready before adding more AI.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="info-card" key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-band">
        <div>
          <p className="eyebrow">Not software-first</p>
          <h2>This is diagnosis before tooling.</h2>
        </div>
        <p>
          I drop into one real workflow and help make it legible: what the work
          is, how it runs, where humans review, what artifacts matter, and how
          the next run gets better.
        </p>
      </section>

      <section className="section-block" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A short diagnostic, then a small pilot.</h2>
        </div>
        <ol className="step-list">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-grid">
        <div>
          <p className="eyebrow">Use cases</p>
          <h2>Start where the work already repeats.</h2>
        </div>
        <div className="use-case-grid">
          {useCases.map((useCase) => (
            <div className="use-case" key={useCase}>
              {useCase}
            </div>
          ))}
        </div>
      </section>

      <section className="section-grid stewardship">
        <div>
          <p className="eyebrow">Human stewardship</p>
          <h2>Change the work, not the worker.</h2>
        </div>
        <div className="copy-stack">
          <p>
            People trust AI more when they can see where it helps, where it
            stops, and how their feedback changes the next run.
          </p>
          <p>
            The goal is not to make employees feel inspected or replaceable. The
            goal is to make the work clearer, safer, and easier to improve.
          </p>
        </div>
      </section>

      <section className="pilot-card" id="pilot">
        <div>
          <p className="eyebrow">Early partner pilot</p>
          <h2>Bring one workflow that matters.</h2>
          <p>
            A good pilot has repeated work, visible risk, and a leader willing
            to improve the workflow with the people who already do it.
          </p>
        </div>
        <a className="button primary" href="#interest">
          Start with a workflow
        </a>
      </section>

      <section className="section-grid form-section" id="interest">
        <div>
          <p className="eyebrow">Interest form</p>
          <h2>Share one workflow.</h2>
          <p>
            I will use this to decide whether there is a strong fit for a
            diagnostic conversation. Your email is also added to the Future of
            Work newsletter for occasional updates.
          </p>
        </div>
        <InterestForm />
      </section>

      <section className="section-block faq-section">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2>Plain answers for early conversations.</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="info-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-cta">
        <div>
          <p className="eyebrow">Future of Work Harness</p>
          <h2>Make work clear enough for AI to help and human enough for teams to trust.</h2>
        </div>
        <div className="footer-actions">
          <a className="button primary" href="#interest">
            Submit interest
          </a>
          <Link href="/__blog" className="footer-link">
            Read the blog
          </Link>
        </div>
      </footer>
    </main>
  );
}
