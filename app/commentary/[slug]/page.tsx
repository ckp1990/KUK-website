import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, markdownToHtml } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ["title", "date", "slug", "author", "content"]);

  if (!post.slug) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">{post.title}</h1>
          <div className="flex items-center text-gray-500 mb-6 space-x-4">
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>•</span>
            <span className="font-medium">{post.author}</span>
          </div>
        </header>
        <div
            className="prose prose-lg prose-green max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
  );
}
