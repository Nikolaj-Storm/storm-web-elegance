
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import { toast } from "sonner";

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

const PaperDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paper = papers.find((p) => p.id === Number(id));
  if (!paper) return (
    <div style={{background:"#f4e2cf"}} className="min-h-screen">
      <Navigation />
      <div className="pt-32 max-w-2xl mx-auto text-center text-2xl" style={{ color: "#ad7283" }}>
        Research paper not found.
      </div>
    </div>
  );

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(paper.citation);
      toast.success("Citation copied to clipboard!");
    } catch {
      toast.error("Could not copy citation.");
    }
  };

  return (
    <div className="min-h-screen" style={{background: "#f4e2cf"}}>
      <Navigation />
      <div className="max-w-4xl mx-auto pt-24 pb-16 px-6">
        <button className="mb-8 underline" style={{ color: "#581f27" }} onClick={() => navigate('/papers')}>
          ← Back to list
        </button>
        <div className="bg-white rounded-lg shadow-md p-8 border" style={{borderColor: "#581f27"}}>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-semibold text-lg" style={{color:"#581f27"}}>{paper.year}</span>
            <span className="font-medium" style={{ color: "#ad7283" }}>•</span>
            <span className="italic" style={{ color: "#ad7283" }}>{paper.venue}</span>
          </div>
          <h1 className="text-3xl font-display font-bold mb-4" style={{color:"#581f27"}}>{paper.title}</h1>
          <p className="mb-4" style={{ color: "#7d626a" }}>{paper.description}</p>
          <div className="mb-6">
            <a
              href={paper.pdf}
              download
              className="inline-block text-white px-6 py-2 rounded-md mr-3 font-medium"
              style={{background: "#581f27"}}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
            <a
              href={paper.pdf}
              className="inline-block px-6 py-2 rounded-md font-medium border"
              style={{borderColor:"#581f27", color:"#581f27"}}
              target="_blank"
              rel="noopener noreferrer"
            >
              View PDF
            </a>
          </div>
          <div className="mb-6" style={{ background: "#f4e2cf", border: "1px solid #581f27", borderRadius: "6px", padding: "1rem" }}>
            <div className="font-semibold mb-2" style={{ color: "#581f27" }}>APA Citation:</div>
            <div className="text-sm mb-3" style={{ color: "#7d626a" }}>{paper.citation}</div>
            <button
              onClick={copyCitation}
              className="inline-block px-4 py-2 rounded"
              style={{ background: "#581f27", color: "#fff" }}
            >
              Copy reference
            </button>
          </div>
          {paper.doi && (
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-sm underline" style={{ color: "#581f27" }}>
              DOI: {paper.doi}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default PaperDetail;
