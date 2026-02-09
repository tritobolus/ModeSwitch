import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Why Music Theory Is Important",
    slug: "blog1"
  },
  {
    title: "Guitar Scales Explained",
    slug: "blog2"
  }
];

export default function Blogs() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>

      <ul className="space-y-3">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              to={`/blogs/${blog.slug}`}
              className="text-blue-500 hover:underline"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
