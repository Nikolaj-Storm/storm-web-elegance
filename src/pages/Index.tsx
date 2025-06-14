
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f4e2cf" }}>
      <Navigation />
      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center pt-36 pb-16">
        <div className="w-full flex flex-col items-center">
          <h1
            className="text-5xl md:text-7xl font-display font-bold text-shadow mb-6 animate-fade-in tracking-tight"
            style={{ color: "#581f27", letterSpacing: "-0.02em" }}
          >
            Nikolaj Storm Petersen
          </h1>
          <p
            className="text-lg md:text-2xl max-w-2xl text-center font-light animate-fade-in"
            style={{ color: "#7d626a" }}
          >
            Researcher and Technologist passionate about shaping a better future through interdisciplinary innovation & technology.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;

