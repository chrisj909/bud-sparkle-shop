import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-gray-900">Hemp House Smoke Shop CBD + Vape</span>
            <a href="tel:205.326.7888" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">205.326.7888</a>
            <span className="text-xs text-gray-400">© 2024 Hemp House. Must be 21 or older.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};