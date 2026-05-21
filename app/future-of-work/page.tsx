import Link from "next/link";
import { InterestForm } from "./InterestForm";

export const metadata = {
  title: "Future of Work Harness",
  description:
    "Make your business AI-ready without making your people feel replaceable.",
};

const capabilities = [
  {
    title: "Observable",
    copy: "Leaders can see what happened, what inputs were used, and what changed.",
  },
  {
    title: "Repeatable",
    copy: "Teams turn recurring work into clear steps instead of one-off heroics.",
  },
  {
    title: "Reviewable",
    copy: "Human checkpoints are built into the workflow before risky outputs move forward.",
  },
  {
    title: "Improvable",
    copy: "Feedback becomes better instructions, not a forgotten chat thread.",
  },
  {
    title: "Governable",
    copy: "Approval gates, artifacts, and ownership stay visible as AI assistance grows.",
  },
];

const steps = [
  "Pick a real workflow",
  "Map inputs, decisions, and handoffs",
  "Create a harnessed work definition",
  "Run it with AI assistance and human review",
  "Use feedback to improve the next run",
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
    question: "Is this an agent platform?",
    answer:
      "No. The harness is about making real work clear enough that AI can assist inside boundaries your team understands.",
  },
  {
    question: "Do we need a technical team?",
    answer:
      "Not for the early workflow assessment. We start with business process, risk, and review points before talking about automation.",
  },
  {
    question: "What makes a good pilot workflow?",
    answer:
      "A repeated workflow with clear inputs, visible outputs, a meaningful human review point, and enough volume that improvement matters.",
  },
  {
    question: "Will this replace our existing tools?",
    answer:
      "The first goal is not replacement. It is to make the work easier to observe, review, and improve while fitting into the way the team already operates.",
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
          <p className="eyebrow">AI transformation for real operating teams</p>
          <h1>
            Make your business AI-ready without making your people feel
            replaceable.
          </h1>
          <p className="hero-subhead">
            Most businesses know they need AI. The hard part is turning
            everyday work into something AI can help with safely: clear inputs,
            visible runs, human review, feedback, and improvement over time.
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
          <h2>AI is easy to demo and hard to operate.</h2>
        </div>
        <div className="copy-stack">
          <p>
            Real businesses run on context, judgment, exceptions, approvals,
            customer history, and trust. When that work lives only in messages,
            meetings, and memory, AI has no safe shape to assist.
          </p>
          <p>
            Teams need a way to make work visible without turning people into
            replaceable parts. The harness gives AI a role inside the workflow,
            while keeping people responsible for judgment and improvement.
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">What the harness does</p>
          <h2>It turns recurring work into a managed operating loop.</h2>
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
          <p className="eyebrow">Not agents / not replacement</p>
          <h2>We do not start by asking what AI can take over.</h2>
        </div>
        <p>
          We start by asking what work needs clearer inputs, better review,
          more consistent handoffs, and a better way to learn from each run.
          AI can help, but the operating system stays human-led.
        </p>
      </section>

      <section className="section-block" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A practical path from messy workflow to reviewed AI assistance.</h2>
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
          <h2>Employee trust is part of the system design.</h2>
        </div>
        <div className="copy-stack">
          <p>
            People are more likely to adopt AI when they can see where it helps,
            where it stops, and how their feedback changes the work. The harness
            makes those boundaries explicit.
          </p>
          <p>
            Managers get a calmer way to introduce AI: not as a surprise
            replacement story, but as a shared improvement process for work the
            team already understands.
          </p>
        </div>
      </section>

      <section className="pilot-card" id="pilot">
        <div>
          <p className="eyebrow">Early partner pilot</p>
          <h2>We are looking for practical teams with real workflows.</h2>
          <p>
            Good pilots have a recurring workflow, a team that cares about
            quality, and a leader willing to improve the work in the open. The
            goal is a small, reviewable operating loop, not a broad AI rollout.
          </p>
        </div>
        <a className="button primary" href="#interest">
          Start with a workflow
        </a>
      </section>

      <section className="section-grid form-section" id="interest">
        <div>
          <p className="eyebrow">Interest form</p>
          <h2>Tell us where AI assistance needs a safer operating shape.</h2>
          <p>
            Submitting interest also adds your work email to the Future of Work
            newsletter for occasional updates.
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
          <h2>Make work clear enough for AI to help and safe enough for people to trust.</h2>
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
