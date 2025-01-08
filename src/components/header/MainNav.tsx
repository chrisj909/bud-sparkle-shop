import { Link } from "react-router-dom";
import { User, Mail, ExternalLink } from "lucide-react";

export const MainNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link to="/about" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
        <User className="w-4 h-4" />
        <span>About</span>
      </Link>
      <Link to="/contact" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
        <Mail className="w-4 h-4" />
        <span>Contact</span>
      </Link>
      <a 
        href="https://hemphousesmokeshop.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600"
      >
        <ExternalLink className="w-4 h-4" />
        <span>Our Story</span>
      </a>
    </nav>
  );
};