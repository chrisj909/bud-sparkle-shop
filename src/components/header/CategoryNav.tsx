import { Link } from "react-router-dom";
import { Cannabis, Cigarette, Candy } from "lucide-react";
import { Mushroom } from "@/components/icons/Mushroom";

export const CategoryNav = () => {
  return (
    <nav className="flex items-center justify-center md:justify-start gap-6 py-2 overflow-x-auto scrollbar-hide">
      <Link
        to="/hemp-flower"
        className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
      >
        <Cannabis className="w-4 h-4" />
        <span>Hemp Flower</span>
      </Link>
      <Link
        to="/vapes"
        className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
      >
        <Cigarette className="w-4 h-4" />
        <span>THCA Vapes</span>
      </Link>
      <Link
        to="/gummies"
        className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
      >
        <Candy className="w-4 h-4" />
        <span>Gummies</span>
      </Link>
      <Link
        to="/microdose"
        className="flex items-center gap-1.5 text-xs text-gray-800 hover:text-gray-600 whitespace-nowrap transition-colors"
      >
        <Mushroom className="w-4 h-4" />
        <span>Microdose</span>
      </Link>
    </nav>
  );
};