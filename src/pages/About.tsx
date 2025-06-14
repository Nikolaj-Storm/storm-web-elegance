
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
      <Navigation />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-8" style={{ color: "#581f27" }}>
                About Nikolaj Storm Petersen
              </h1>
              <div className="w-32 h-32 bg-[#ad7283] rounded-full mx-auto mb-8 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#581f27] mb-8">
                <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: "#581f27" }}>Background</h2>
                <p className="leading-relaxed mb-4" style={{ color: "#7d626a" }}>
                  I am a researcher and technologist passionate about exploring how advanced technologies can solve complex societal challenges. My work ranges across artificial intelligence, sustainable development, and ethical technology frameworks.
                </p>
                <p className="leading-relaxed" style={{ color: "#7d626a" }}>
                  With an interdisciplinary approach, I combine technical expertise with social science perspectives to create innovative solutions for both people and the environment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#581f27] mb-8">
                <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: "#581f27" }}>Research Areas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#581f27" }}>Artificial Intelligence</h3>
                    <p className="text-sm" style={{ color: "#7d626a" }}>
                      Machine learning, ethical AI, and human-machine interaction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#581f27" }}>Sustainable Technology</h3>
                    <p className="text-sm" style={{ color: "#7d626a" }}>
                      Green technologies, Smart Cities, and environmental optimization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#581f27" }}>Data Science</h3>
                    <p className="text-sm" style={{ color: "#7d626a" }}>
                      Big data analysis, blockchain, and secure data sharing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#581f27" }}>Technology Ethics</h3>
                    <p className="text-sm" style={{ color: "#7d626a" }}>
                      Ethical frameworks, privacy, and the social consequences of technology.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#581f27]">
                <h2 className="text-2xl font-display font-semibold mb-4" style={{ color: "#581f27" }}>Contact</h2>
                <p className="leading-relaxed mb-4" style={{ color: "#7d626a" }}>
                  I am always interested in discussing new ideas and potential collaborations.
                  Feel free to reach out if you want to know more about my work or have suggestions for exciting projects.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:nikolaj@example.com"
                    className="px-4 py-2"
                    style={{ background: "#581f27", color: "#fff", borderRadius: "0.375rem", fontWeight: 500 }}
                  >
                    📧 Send Email
                  </a>
                  <a 
                    href="https://linkedin.com/in/nikolajstorm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2"
                    style={{ background: "#ad7283", color: "#fff", borderRadius: "0.375rem", fontWeight: 500 }}
                  >
                    💼 LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
