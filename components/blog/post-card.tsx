import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Post } from '@/lib/types/blog'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export function PostCard({ post, featured }: PostCardProps) {
  return (
    <Card className={featured ? 'border-primary' : ''}>
      <CardHeader>
        <CardTitle>
          <Link 
            href={`/blog/${post.id}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.description && (
            <p className="mt-2">{post.description}</p>
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}