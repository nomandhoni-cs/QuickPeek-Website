import { getPostData, getAllPostIds } from "@/lib/blog"
import { formatDate } from "@/lib/utils"
import { Navbar } from "@/components/layout/navbar"

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts
}

export default async function BlogPost({
  params,
}: {
  params: { id: string }
}) {
  const post = await getPostData(params.id)

  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-muted-foreground block mb-8">
          {formatDate(post.date)}
        </time>
        <div 
          className="prose dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>
    </div>
  )
}