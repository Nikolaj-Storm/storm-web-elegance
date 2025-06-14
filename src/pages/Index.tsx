
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
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 animate-fade-in text-shadow leading-tight" style={{ color: "#581f27" }}>
              How can research and technology<br />shape the society of the future?
            </h1>
            <p className="text-xl md:text-2xl mb-16 animate-slide-up font-light max-w-3xl mx-auto" style={{ color: "#7d626a" }}>
              I'm Nikolaj Storm Petersen, researcher and technologist passionate about creating innovative solutions through interdisciplinary collaboration.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
              <Link 
                to="/papers" 
                className="group bg-white p-8 rounded-lg shadow-lg hover-lift border transition-all duration-200 border-[#581f27]"
              >
                <div className="mb-4" style={{ color: "#581f27" }}>
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2" style={{ color: "#581f27" }}>Explore Research</h3>
                <p className="text-[#7d626a]">See my academic publications and research projects</p>
              </Link>
              <Link 
                to="/projects" 
                className="group bg-white p-8 rounded-lg shadow-lg hover-lift border transition-all duration-200 border-[#581f27]"
              >
                <div className="mb-4" style={{ color: "#581f27" }}>
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2" style={{ color: "#581f27" }}>Technical Projects</h3>
                <p className="text-[#7d626a]">Discover innovative solutions and experiments</p>
              </Link>
              <Link 
                to="/blog" 
                className="group bg-white p-8 rounded-lg shadow-lg hover-lift border transition-all duration-200 border-[#581f27]"
              >
                <div className="mb-4" style={{ color: "#581f27" }}>
                  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2" style={{ color: "#581f27" }}>Read Blog</h3>
                <p className="text-[#7d626a]">Thoughts and insights on technology and society</p>
              </Link>
            </div>
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

