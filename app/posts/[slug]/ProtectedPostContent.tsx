"use client";

import { useState, type FormEvent } from "react";

const PASSWORD = "keep-going";

type ProtectedPostContentProps = {
  content: string;
};

export default function ProtectedPostContent({ content }: ProtectedPostContentProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  if (unlocked) {
    return <div className="markdown text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <p className="mb-3 text-sm text-zinc-400">This post is protected. Enter the password to unlock it.</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="password"
          name="password"
          autoComplete="off"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Password"
          className="w-full rounded-md border border-white/20 bg-black/40 px-3 py-2 text-base outline-none focus:border-white/60"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-white/80 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-white"
        >
          Unlock post
        </button>
      </form>
    </div>
  );
}
