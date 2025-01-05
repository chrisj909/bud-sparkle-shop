import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export const SocialLinks = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-6">Connect With Us</h2>
      <div className="space-y-4">
        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
        >
          <Facebook className="w-5 h-5" />
          <span>Follow us on Facebook</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span>Follow us on Instagram</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Message us on Discord</span>
        </a>
      </div>
    </div>
  );
};