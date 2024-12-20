import { getAllPosts } from "@/lib/api";

// Predefined routes
const routes = ["", "/contact", "/docs", "/pricing", "/privacy"];

// Sitemap generation function
export default async function sitemap() {
  // Await posts since getAllPosts() might return a promise
  const posts = await getAllPosts();

  // Post routes generation
  const postRoutes = posts.flatMap((post) => ({
    url: `https://quickpeek.vercel.app/posts/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Routes generation for predefined paths
  const routeUrls = routes.flatMap((route) => ({
    url: `https://quickpeek.vercel.app${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [
    ...routeUrls, // Include all predefined routes
    ...postRoutes, // Include all post routes
  ];
}
