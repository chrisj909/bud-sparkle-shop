import React from "react";
import { Building2, Phone, Mail } from "lucide-react";

export const ContactInfo = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-semibold text-primary mb-6">Visit Our Store</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Building2 className="w-5 h-5 text-primary" />
          <a 
            href="https://maps.google.com/?q=120+Doug+Baker+BLVD,+STE+110,+Hoover,+AL+35242"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            <address className="not-italic">
              120 Doug Baker BLVD, STE 110<br />
              Hoover, AL 35242
            </address>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary" />
          <a href="tel:205.326.7888" className="text-gray-700 hover:text-primary transition-colors">
            205.326.7888
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <a href="mailto:RedMountainHemp@gmail.com" className="text-gray-700 hover:text-primary transition-colors">
            RedMountainHemp@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};