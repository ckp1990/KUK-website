import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getPostSlugs() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return [];
  }
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.resolve(postsDirectory, `${realSlug}.md`);

  try {
    // Security check: ensure the resolved path is within the postsDirectory
    if (!fullPath.startsWith(path.resolve(postsDirectory)) || !fs.existsSync(fullPath)) {
      return {};
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    type Items = {
      [key: string]: string;
    };

    const items: Items = {};

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }

      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  } catch (error) {
    console.error(`Error reading post by slug (${slug}):`, error);
    return {};
  }
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, [...fields, "date"]))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);
  return result.toString();
}
