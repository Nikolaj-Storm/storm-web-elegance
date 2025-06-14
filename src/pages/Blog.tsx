
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Artificial Intelligence and Ethical Reflections",
      date: "November 15, 2024",
      excerpt: "An in-depth analysis of the ethical challenges we face in an AI-driven and automated world.",
      slug: "ai-ethical-reflections"
    },
    {
      id: 2,
      title: "The Future of Research: Interdisciplinary Approaches",
      date: "November 8, 2024",
      excerpt: "How interdisciplinary cooperation can solve complex societal challenges and drive innovation.",
      slug: "interdisciplinary-approaches"
    },
    {
      id: 3,
      title: "Technology as a Bridge Builder",
      date: "November 1, 2024",
      excerpt: "Reflections on the role of technology in connecting people across geographical and cultural boundaries.",
      slug: "technology-bridge-builder"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center" style={{ color: "#581f27" }}>
              Blog
            </h1>
            <p className="text-xl text-center mb-12 max-w-2xl mx-auto" style={{ color: "#7d626a" }}>
              Thoughts, insights, and reflections on technology, research, and society
            </p>
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="block bg-white p-8 rounded-lg shadow-sm hover-lift border border-[#581f27] group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-display font-semibold" style={{ color: "#581f27" }}>
                      {post.title}
                    </h2>
                    <span className="mt-2 md:mt-0" style={{ color: "#7d626a" }}>
                      {post.date}
                    </span>
                  </div>
                  <p className="text-[#7d626a] leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4" style={{ color: "#581f27" }}>
                    Read more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
