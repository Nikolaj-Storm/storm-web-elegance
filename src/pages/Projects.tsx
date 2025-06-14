
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-drevet Dataanalyse Platform",
      description: "En omfattende platform til automatiseret dataanalyse med machine learning algoritmer",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      slug: "ai-dataanalyse-platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Bæredygtige Smart City Løsninger",
      description: "IoT-baseret system til optimering af energiforbrug i urbane miljøer",
      technologies: ["IoT", "Node.js", "MongoDB", "Arduino"],
      slug: "smart-city-solutions",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Blockchain Forskningsnetværk",
      description: "Decentraliseret platform til sikker deling af forskningsdata mellem institutioner",
      technologies: ["Blockchain", "Solidity", "Web3.js", "React"],
      slug: "blockchain-research-network",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
              Tekniske Projekter
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Innovation gennem teknologi - her er nogle af de projekter, jeg har arbejdet på
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Link 
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  className="block bg-card rounded-lg shadow-sm hover-lift border border-border overflow-hidden group"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-accent/20 text-primary text-sm rounded-full border border-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="text-primary font-medium group-hover:text-primary/80 transition-colors">
                      Se projekt →
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
