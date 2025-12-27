import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/posts";

type RouteParams = { slug: string };

type PageProps = {
  params: Promise<RouteParams>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.title} | The D note`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-8 px-6 py-16 font-sans">
      <Link href="/" className="text-sm text-zinc-400 hover:text-white">
        ← Back to posts
      </Link>

      <article className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            {post.date
              ? new Date(post.date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Draft"}
          </p>
          <h1 className="text-4xl font-semibold leading-tight">{post.title}</h1>
        </div>
        <div className="markdown text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
}
