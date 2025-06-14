
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const navItems = [
    { path: "/blog", label: "Blog" },
    { path: "/projects", label: "Projects" },
    { path: "/papers", label: "Research Papers" },
    { path: "/about", label: "About" }
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(244,226,207,0.95)", borderBottom: "1px solid #581f27", backdropFilter: "blur(4px)" }}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold transition-colors"
            style={{ color: "#581f27" }}
          >
            Nikolaj Storm Petersen
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-[#581f27] ${
                  location.pathname === item.path
                    ? "border-b-2"
                    : ""
                }`}
                style={{ color: location.pathname === item.path ? "#581f27" : "#7d626a", borderColor: location.pathname === item.path ? "#581f27" : "transparent" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile menu button placeholder, could be replaced by real menu */}
          <button className="md:hidden" style={{ color: "#581f27" }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
