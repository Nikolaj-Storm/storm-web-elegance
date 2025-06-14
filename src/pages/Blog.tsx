
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Kunstig intelligens og etiske overvejelser",
      date: "15. november 2024",
      excerpt: "En dybdegående analyse af de etiske udfordringer, vi står overfor i en verden præget af kunstig intelligens og automatisering.",
      slug: "ai-etiske-overvejelser"
    },
    {
      id: 2,
      title: "Fremtidens forskning: Tværfaglige tilgange",
      date: "8. november 2024",
      excerpt: "Hvordan tværfagligt samarbejde kan løse komplekse samfundsproblemer og drive innovation frem.",
      slug: "tvaerfaglige-tilgange"
    },
    {
      id: 3,
      title: "Teknologi som brobygger",
      date: "1. november 2024",
      excerpt: "Refleksioner over teknologiens rolle i at forbinde mennesker på tværs af geografiske og kulturelle grænser.",
      slug: "teknologi-brobygger"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Tanker, indsigter og refleksioner om teknologi, forskning og samfund
            </p>

            <div className="space-y-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="block bg-card p-8 rounded-lg shadow-sm hover-lift border border-border group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h2 className="text-2xl font-display font-semibold text-primary group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </h2>
                    <span className="text-muted-foreground mt-2 md:mt-0">
                      {post.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-primary font-medium group-hover:text-primary/80 transition-colors">
                    Læs mere →
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
