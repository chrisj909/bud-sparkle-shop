import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-6">Connect With Us</h2>
      <div className="flex gap-6">
        <a
          href="#"
          className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110"
        >
          <Facebook className="w-8 h-8" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110"
        >
          <Instagram className="w-8 h-8" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-primary transition-colors transform hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};