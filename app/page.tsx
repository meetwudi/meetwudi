import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto grid min-h-screen w-full max-w-3xl gap-8 px-6 py-16 font-sans">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold">Notes from Di</h1>
        <p className="text-base text-zinc-400">
          Mixture of thoughts, believes and rants
        </p>
      </header>

      <section className="space-y-4">
        {posts.length === 0 && (
          <p className="text-zinc-500">No posts yet. Drop a markdown file in /posts to get started.</p>
        )}

        {posts.map((post) => {
          const dateLabel = post.date
            ? new Date(post.date).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "Draft";

          const isSnippet = post.type === "snippet";

          return (
            <article
              key={post.slug}
              className="rounded-lg border border-white/10 bg-white/5 p-5 transition hover:border-white/30"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-400">{dateLabel}</p>
              <h2 className="text-2xl font-semibold leading-tight">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>

              {isSnippet ? (
                <div className="markdown mt-3 text-base" dangerouslySetInnerHTML={{ __html: post.contentHtml ?? post.excerpt }} />
              ) : (
                <>
                  <p className="mt-2 text-base text-zinc-400">{post.excerpt}</p>
                  <Link href={`/posts/${post.slug}`} className="mt-4 inline-block text-sm font-medium text-white">
                    Read post →
                  </Link>
                </>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
