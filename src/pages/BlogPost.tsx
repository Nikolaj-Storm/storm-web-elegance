
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";

const BlogPost = () => {
  const { slug } = useParams();
  // Example only, normally fetched based on `slug`
  const post = {
    title: "Artificial Intelligence and Ethical Reflections",
    date: "November 15, 2024",
    content: `
      <p>Artificial intelligence is no longer science fiction – it is a reality that shapes our everyday life in ways we may not even be aware of. From recommendations on social media to diagnostic tools in healthcare, AI plays an ever-growing role in society.</p>
      
      <h2>Ethical Challenges</h2>
      <p>But with great power comes great responsibility. When algorithms make decisions that affect people's lives, ethical considerations become crucial. How do we ensure AI systems are fair? How do we deal with data bias? Who is responsible when something goes wrong?</p>
      
      <h2>The Way Forward</h2>
      <p>The answer is not to stop development, but to guide it. We need robust ethical frameworks, interdisciplinary collaboration, and ongoing dialogue between technologists, policymakers, philosophers, and society as a whole.</p>
      
      <p>Only by taking these challenges seriously can we ensure that artificial intelligence becomes a force for good in the world.</p>
    `
  };

  return (
    <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-[#581f27]">
              <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight" style={{ color: "#581f27" }}>
                  {post.title}
                </h1>
                <time style={{ color: "#7d626a" }} className="text-lg">
                  {post.date}
                </time>
              </header>
              <div 
                className="prose prose-lg max-w-none"
                style={{ color: "#7d626a" }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
