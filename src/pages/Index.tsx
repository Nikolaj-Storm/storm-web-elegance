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
            {/* Overskrift og beskrivelse fjernet for et mere minimalistisk udtryk */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
