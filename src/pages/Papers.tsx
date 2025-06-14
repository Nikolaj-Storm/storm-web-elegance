
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const papers = [
  {
    id: 1,
    title: "Machine Learning Applications in Sustainable Development: A Comprehensive Review",
    year: 2024,
    venue: "Journal of Artificial Intelligence Research",
    description: "En omfattende gennemgang af hvordan machine learning kan bidrage til bæredygtige udviklingsmål.",
    citation: "Petersen, N. S. (2024). Machine Learning Applications in Sustainable Development: A Comprehensive Review. Journal of Artificial Intelligence Research, 45(3), 234-267.",
    doi: "10.1234/jair.2024.45.234",
    pdf: "/assets/papers/paper-1.pdf",
  },
  {
    id: 2,
    title: "Ethical Frameworks for AI in Healthcare: Nordic Perspectives",
    year: 2023,
    venue: "International Conference on AI Ethics",
    description: "Analyse af etiske rammer for kunstig intelligens inden for sundhedsvæsenet med fokus på nordiske perspektiver.",
    citation: "Petersen, N. S., & Hansen, L. M. (2023). Ethical Frameworks for AI in Healthcare: Nordic Perspectives. In Proceedings of the International Conference on AI Ethics (pp. 123-145). Springer.",
    doi: "10.1007/978-3-031-12345-6_8",
    pdf: "/assets/papers/paper-2.pdf",
  },
  {
    id: 3,
    title: "Blockchain Technology for Secure Research Data Sharing",
    year: 2023,
    venue: "IEEE Transactions on Information Security",
    description: "Undersøgelse af blockchain-teknologiens potentiale for sikker deling af forskningsdata mellem institutioner.",
    citation: "Petersen, N. S., Jensen, K. A., & Liu, W. (2023). Blockchain Technology for Secure Research Data Sharing. IEEE Transactions on Information Security, 18(7), 1456-1472.",
    doi: "10.1109/TIFS.2023.1234567",
    pdf: "/assets/papers/paper-3.pdf",
  },
];

const Papers = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center" style={{ color: "#581f27" }}>
              Forskningspublikationer
            </h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-[#7d626a]">
              Mine akademiske bidrag til forskning inden for teknologi, AI og bæredygtighed
            </p>
            <div className="space-y-8">
              {papers.map((paper) => (
                <div
                  key={paper.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/papers/${paper.id}`)}
                  className="cursor-pointer bg-white p-8 rounded-lg border transition-all duration-200 shadow-sm hover:shadow-lg group focus:outline-none"
                  style={{
                    borderColor: "#581f27",
                    boxShadow: "0 2px 8px rgba(88,31,39,0.06)",
                  }}
                >
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span className="text-lg font-semibold" style={{color: "#581f27"}}>{paper.year}</span>
                    <span className="text-[#ad7283] font-medium">•</span>
                    <span className="italic text-[#ad7283]">{paper.venue}</span>
                  </div>
                  <h2 className="text-2xl font-display font-semibold mb-2 leading-tight group-hover:underline" style={{ color: "#581f27" }}>
                    {paper.title}
                  </h2>
                  <p className="text-[#7d626a] mb-2">{paper.description}</p>
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
