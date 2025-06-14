
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
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "#f4e2cf",
        borderBottom: "1px solid rgba(230,218,206,0.7)",
        boxShadow: "0 2.5px 11px 0 rgba(88,31,39,0.07)"
      }}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-display font-bold transition-colors"
            style={{
              color: "#581f27", 
              borderRadius: "1.1rem", 
              padding: "0.13em 0.68em", 
              background: "rgba(255,255,255,0.10)"
            }}
          >
            Nikolaj Storm Petersen
          </Link>
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors hover:text-[#581f27] px-2 py-1 rounded-[0.8rem]`}
                style={{
                  color: location.pathname === item.path ? "#581f27" : "#7d626a",
                  background: location.pathname === item.path ? "rgba(230,218,206,0.56)" : "transparent",
                  fontWeight: 500
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Mobile menu button placeholder */}
          <button className="md:hidden" style={{
            color: "#581f27",
            background: "rgba(255,255,255,0.07)",
            borderRadius: "0.7rem",
            padding: "0.3em"
          }}>
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

