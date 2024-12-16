export interface Post {
  id: string
  title: string
  date: string
  description?: string
  contentHtml?: string
  author?: string
  tags?: string[]
}

export interface BlogConfig {
  postsPerPage: number
  featuredPostCount: number
  showAuthor: boolean
  showTags: boolean
}