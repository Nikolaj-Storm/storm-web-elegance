
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#f4e2cf" }}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/background.mp4" type="video/mp4" />
          <source src="/video/background.webm" type="video/webm" />
          Din browser understøtter ikke video-tag'et.
        </video>
        {/* Beige overlay */}
        <div className="absolute inset-0 w-full h-full bg-[#f4e2cf]/80 pointer-events-none" />
      </div>
      <div className="relative z-10">
        <Navigation />
      </div>
      {/* Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center pt-36 pb-16">
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

