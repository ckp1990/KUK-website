import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Commentary() {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt", "author"]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-4">Commentary</h1>

      <div className="space-y-8">
        {allPosts.map((post) => (
          <article key={post.slug} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/commentary/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <div className="text-sm text-gray-500 mb-4 flex items-center space-x-4">
              <span>{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <Link href={`/commentary/${post.slug}`} className="text-secondary font-medium hover:underline">
              Read More &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
