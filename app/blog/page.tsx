import { getSortedPostsData } from "@/lib/blog"
import { blogConfig } from "@/lib/config/blog"
import { Navbar } from "@/components/layout/navbar"
import { PostGrid } from "@/components/blog/post-grid"

export default function BlogPage() {
  const allPosts = getSortedPostsData()
  const featuredPosts = allPosts.slice(0, blogConfig.featuredPostCount)
  const regularPosts = allPosts.slice(blogConfig.featuredPostCount)

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        {featuredPosts.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
            <PostGrid posts={featuredPosts} featured />
          </>
        )}

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">All Posts</h2>
          <PostGrid posts={regularPosts} />
        </div>
      </main>
    </div>
  )
}