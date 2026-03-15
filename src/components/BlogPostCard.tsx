import { BlogPost } from "@/types";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <a href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-meta">
        <span className="blog-card-category">{post.category}</span>
        <span className="blog-card-date">{post.readTime}</span>
      </div>
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
    </a>
  );
}
