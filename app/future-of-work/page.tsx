import Link from "next/link";
import { InterestForm } from "./InterestForm";
import { WorkLoopPlayer } from "./WorkLoopPlayer";

export const metadata = {
  title: "Future of Work initiative",
  description: "Transform, not replace.",
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
  "Execute the run",
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
    question: "Is this another tool?",
    answer:
      "No. The point is to make the work clearer before adding another box your team has to manage.",
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
          Future of Work initiative
        </Link>
        <nav aria-label="Page sections">
          <a href="#pilot">Pilot</a>
          <a href="#how-it-works">How it works</a>
          <a href="#interest">I am interested</a>
        </nav>
      </header>

      <section className="section-band band-white hero-band">
        <div className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              Work transformation diagnosis for real teams
            </p>
            <h1>Transform, not replace.</h1>
            <p className="hero-subhead">
              A hands-on diagnostic for founders and operators to make important
              workflows clearer, more reviewable, and easier to improve.
            </p>
            <p className="hero-note">
              Not another SaaS dashboard. A practical way to diagnose what is
              unclear, define the work, execute it with review, and improve the
              next run.
            </p>
            <div className="cta-row">
              <a className="button primary" href="#interest">
                I am interested
              </a>
              <a className="button secondary" href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>

          <WorkLoopPlayer />
        </div>
      </section>

      <section className="section-band band-soft" id="problem">
        <div className="section-grid">
          <div>
            <p className="eyebrow">The problem</p>
            <h2>Most transformation work starts in the wrong place.</h2>
          </div>
          <div className="copy-stack">
            <p>
              The problem is usually not the tool. It is the work. The workflow
              is unclear, the handoffs are hidden, and review happens too late.
            </p>
            <p>
              If the work is not observable, repeatable, and reviewable, new
              tools just make confusion move faster.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band band-white" aria-label="Operating principle">
        <div className="excellence-band">
          <p className="eyebrow">Operating principle</p>
          <h2>Excellence is good work, improved, and repeated.</h2>
          <p>
            A workflow gets stronger when the team can define it, run it with
            review, capture what happened, and make the next run better.
          </p>
        </div>
      </section>

      <section className="section-band band-soft pilot-band" id="pilot">
        <div className="pilot-card">
          <div>
            <p className="eyebrow">Early partner pilot</p>
            <h2>Bring one workflow that matters.</h2>
            <p>
              A good pilot has repeated work, visible risk, and a leader willing
              to improve the workflow with the people who already do it.
            </p>
          </div>
          <a className="button primary" href="#interest">
            I am interested
          </a>
        </div>
      </section>

      <section className="section-band band-white">
        <div className="section-block">
          <div className="section-heading">
            <p className="eyebrow">What changes</p>
            <h2>Make the work ready before adding more tools.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="info-card" key={capability.title}>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band band-soft" id="how-it-works">
        <div className="section-block">
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
        </div>
      </section>

      <section className="section-band band-white">
        <div className="section-grid">
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
        </div>
      </section>

      <section className="section-band band-soft">
        <div className="section-grid stewardship">
          <div>
            <p className="eyebrow">Human stewardship</p>
            <h2>Change the work, not the worker.</h2>
          </div>
          <div className="copy-stack">
            <p>
              People trust change more when they can see where tools help, where
              they stop, and how their feedback changes the next run.
            </p>
            <p>
              The goal is not to make employees feel inspected or replaceable.
              The goal is to make the work clearer, safer, and easier to
              improve.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band band-white" id="interest">
        <div className="section-grid form-section">
          <div>
            <p className="eyebrow">Interest form</p>
            <h2>Share one workflow.</h2>
            <p>
              Submissions are reviewed for fit with a diagnostic conversation.
              Your email is also added to the Future of Work newsletter for
              occasional updates.
            </p>
          </div>
          <InterestForm />
        </div>
      </section>

      <section className="section-band band-soft">
        <div className="section-block faq-section">
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
        </div>
      </section>

      <footer className="section-band band-white">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Future of Work initiative</p>
            <h2>
              Make work clear enough to improve and human enough for teams to
              trust.
            </h2>
          </div>
          <div className="footer-actions">
            <a className="button primary" href="#interest">
              I am interested
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
