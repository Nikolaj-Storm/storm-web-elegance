
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-powered Data Analysis Platform",
      description: "A comprehensive platform for automated data analysis using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      slug: "ai-data-analysis-platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Sustainable Smart City Solutions",
      description: "IoT-based system for optimizing energy consumption in urban environments.",
      technologies: ["IoT", "Node.js", "MongoDB", "Arduino"],
      slug: "smart-city-solutions",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Blockchain Research Network",
      description: "Decentralized platform for secure sharing of research data between institutions.",
      technologies: ["Blockchain", "Solidity", "Web3.js", "React"],
      slug: "blockchain-research-network",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center" style={{ color: "#581f27" }}>
              Technical Projects
            </h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto" style={{ color: "#7d626a" }}>
              Innovation through technology – here are some of the projects I've worked on.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link 
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="block bg-white rounded-lg shadow-sm hover-lift border border-[#581f27] overflow-hidden group"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold mb-3 group-hover:underline" style={{ color: "#581f27" }}>
                      {project.title}
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: "#7d626a" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-[#f4e2cf] text-[#581f27] text-sm rounded-full border border-[#ad7283]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="font-medium group-hover:underline" style={{ color: "#581f27" }}>
                      View project →
                    </div>
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

export default Projects;
