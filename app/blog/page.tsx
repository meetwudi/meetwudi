import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata = {
  title: "The D note",
  description: "Dispatches on product, craft, and building useful things.",
};

export default async function BlogHome() {
  const posts = await getPosts();

  return (
    <main className="blog-shell">
      <header className="blog-header">
        <Link href="/future-of-work" className="blog-back-link">
          Future of Work initiative
        </Link>
        <h1>The D note</h1>
        <p>Mixture of thoughts, beliefs, and rants</p>
      </header>

      <section className="blog-list" aria-label="Posts">
        {posts.length === 0 && (
          <p className="blog-empty">
            No posts yet. Drop a markdown file in /posts to get started.
          </p>
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
            <article key={post.slug} className="blog-card">
              <p className="blog-date">{dateLabel}</p>
              <div className="blog-title-row">
                <h2>
                  {isSnippet ? (
                    post.title
                  ) : (
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  )}
                </h2>
                {post.protected && <span>Protected</span>}
              </div>

              {isSnippet ? (
                <div
                  className="markdown blog-snippet"
                  dangerouslySetInnerHTML={{
                    __html: post.contentHtml ?? post.excerpt,
                  }}
                />
              ) : (
                <>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href={`/posts/${post.slug}`} className="blog-read-link">
                    Read post
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
