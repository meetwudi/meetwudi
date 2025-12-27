import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostSummary = {
  slug: string;
  title: string;
  date?: string;
  excerpt: string;
  type: "post" | "snippet";
  contentHtml?: string;
};

export type Post = PostSummary & {
  content: string;
};

async function readMarkdownFile(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  try {
    const file = await fs.readFile(filePath, "utf8");
    return file;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

function buildExcerpt(content: string) {
  const trimmed = content.replace(/\s+/g, " ").trim();
  return trimmed.slice(0, 140) + (trimmed.length > 140 ? "…" : "");
}

export async function getPosts(): Promise<PostSummary[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(postsDirectory);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
  const slugs = files.filter((file) => file.endsWith(".md")).map((file) => file.replace(/\.md$/, ""));

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const file = await readMarkdownFile(slug);
      if (!file) {
        return null;
      }

      const { data, content } = matter(file);
      const title = (data.title as string | undefined) ?? slug;
      const date = data.date as string | undefined;
      const excerpt = (data.excerpt as string | undefined) ?? buildExcerpt(content);
      const type = data.type === "snippet" ? "snippet" : "post";
      const contentHtml = type === "snippet" ? (marked.parse(content, { async: false }) as string) : undefined;

      return { slug, title, date, excerpt, type, contentHtml };
    }),
  );

  return posts
    .filter((post): post is PostSummary => Boolean(post))
    .sort((a, b) => {
      const aTime = a.date ? new Date(a.date).getTime() : 0;
      const bTime = b.date ? new Date(b.date).getTime() : 0;
      return bTime - aTime;
    });
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = await readMarkdownFile(slug);
  if (!file) {
    return null;
  }

  const { data, content } = matter(file);
  const html = marked.parse(content, { async: false });

  return {
    slug,
    title: (data.title as string | undefined) ?? slug,
    date: data.date as string | undefined,
    excerpt: (data.excerpt as string | undefined) ?? buildExcerpt(content),
    type: data.type === "snippet" ? "snippet" : "post",
    contentHtml: html as string,
    content: html as string,
  };
}
