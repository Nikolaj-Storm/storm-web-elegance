
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: "#f4e2cf" }}>
      <Navigation />
      {/* Hero Section */}
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-10 animate-fade-in text-shadow leading-tight" style={{ color: "#581f27" }}>
              How can research and technology<br />shape the society of the future?
            </h1>
            <p className="text-xl md:text-2xl mb-2 animate-slide-up font-light max-w-3xl mx-auto" style={{ color: "#7d626a" }}>
              I am Nikolaj Storm Petersen, a researcher and technologist passionate about creating innovative solutions through interdisciplinary collaboration.
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: "#581f27", background: "#f9f2ea" }}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-[#7d626a]">
            © 2024 Nikolaj Storm Petersen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

