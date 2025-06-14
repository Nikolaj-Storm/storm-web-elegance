
import { useState } from "react";
import Navigation from "../components/Navigation";
import { toast } from "sonner";

const Papers = () => {
  const papers = [
    {
      id: 1,
      title: "Machine Learning Applications in Sustainable Development: A Comprehensive Review",
      year: 2024,
      venue: "Journal of Artificial Intelligence Research",
      description: "En omfattende gennemgang af hvordan machine learning kan bidrage til bæredygtige udviklingsmål.",
      citation: "Petersen, N. S. (2024). Machine Learning Applications in Sustainable Development: A Comprehensive Review. Journal of Artificial Intelligence Research, 45(3), 234-267.",
      doi: "10.1234/jair.2024.45.234"
    },
    {
      id: 2,
      title: "Ethical Frameworks for AI in Healthcare: Nordic Perspectives",
      year: 2023,
      venue: "International Conference on AI Ethics",
      description: "Analyse af etiske rammer for kunstig intelligens inden for sundhedsvæsenet med fokus på nordiske perspektiver.",
      citation: "Petersen, N. S., & Hansen, L. M. (2023). Ethical Frameworks for AI in Healthcare: Nordic Perspectives. In Proceedings of the International Conference on AI Ethics (pp. 123-145). Springer.",
      doi: "10.1007/978-3-031-12345-6_8"
    },
    {
      id: 3,
      title: "Blockchain Technology for Secure Research Data Sharing",
      year: 2023,
      venue: "IEEE Transactions on Information Security",
      description: "Undersøgelse af blockchain-teknologiens potentiale for sikker deling af forskningsdata mellem institutioner.",
      citation: "Petersen, N. S., Jensen, K. A., & Liu, W. (2023). Blockchain Technology for Secure Research Data Sharing. IEEE Transactions on Information Security, 18(7), 1456-1472.",
      doi: "10.1109/TIFS.2023.1234567"
    }
  ];

  const copyToClipboard = async (citation: string) => {
    try {
      await navigator.clipboard.writeText(citation);
      toast.success("Citation kopieret til udklipsholder!");
    } catch (err) {
      toast.error("Kunne ikke kopiere citation");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 text-center">
              Forskningspublikationer
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              Mine akademiske bidrag til forskning inden for teknologi, AI og bæredygtighed
            </p>

            <div className="space-y-8">
              {papers.map((paper) => (
                <div 
                  key={paper.id}
                  className="bg-card p-8 rounded-lg shadow-sm border border-border"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-display font-semibold text-primary mb-2 leading-tight">
                        {paper.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                        <span className="font-medium">{paper.year}</span>
                        <span>•</span>
                        <span className="italic">{paper.venue}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {paper.description}
                  </p>

                  <div className="bg-accent/10 p-4 rounded-lg mb-4 border border-accent/20">
                    <h4 className="font-semibold text-primary mb-2">APA Citation:</h4>
                    <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                      {paper.citation}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => copyToClipboard(paper.citation)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                    >
                      📋 Kopier Reference
                    </button>
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium"
                    >
                      🔗 DOI Link
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Papers;
