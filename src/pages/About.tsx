import Navigation from "../components/Navigation";

const About = () => (
  <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
    <Navigation />
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto soft-card">
          <h1 className="text-4xl font-display font-bold mb-6" style={{ color: "#581f27" }}>
            About
          </h1>
          <p className="text-xl mb-6" style={{ color: "#7d626a" }}>
            I am Nikolaj Storm Petersen, a researcher and technologist passionate about innovation and interdisciplinary collaboration. This site contains my research, technical projects and thoughts.
          </p>
          <p style={{ color: "#7d626a" }}>
            Feel free to reach out if you want to discuss ideas or collaborate!
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default About;
