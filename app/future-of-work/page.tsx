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

      <section className="section-band band-soft" id="shift">
        <div className="section-grid shift-section">
          <div>
            <p className="eyebrow">The shift</p>
            <h2>&quot;Doing work&quot; -&gt; &quot;Building work&quot;</h2>
          </div>
          <div className="copy-stack shift-copy">
            <p>
              As the cost of doing knowledge work trends toward zero with AI,
              the question is no longer just &quot;Can this task get done?&quot;
              It is &quot;Can this work get better every time it is done?&quot;
            </p>
            <p>
              An employee can do good work once. A tool can help them do it
              faster twice. But by the 100th time, with a different person, a
              new hire, or a changed customer situation,{" "}
              <strong>the quality often resets.</strong>
            </p>
            <p>
              The goal of the Future of Work initiative is to make the work
              itself improve: clearer inputs, better instructions, visible
              review points, useful artifacts, and feedback that improves the
              next time the work is done.
            </p>
            <p>
              What we offer here is a diagnostic: we look at one real workflow,
              find where it is unclear or hard to repeat, and help turn it into
              work that can be reviewed, improved, and trusted.
            </p>
            <p className="shift-principle">
              Excellence is good work done, improved, and repeated.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band band-white pilot-band" id="pilot">
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

      <section className="section-band band-soft">
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

      <section className="section-band band-white" id="how-it-works">
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
          <div className="section-cta">
            <a className="button primary" href="#interest">
              I am interested
            </a>
          </div>
        </div>
      </section>

      <section className="section-band band-soft">
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

      <section className="section-band band-white">
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

      <section className="section-band band-soft" id="interest">
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

      <section className="section-band band-white">
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
    </main>
  );
}
