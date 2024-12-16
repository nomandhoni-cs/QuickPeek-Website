import { Post } from '@/lib/types/blog'
import { PostCard } from './post-card'

interface PostGridProps {
  posts: Post[]
  featured?: boolean
}

export function PostGrid({ posts, featured }: PostGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          post={post}
          featured={featured}
        />
      ))}
    </div>
  )
}