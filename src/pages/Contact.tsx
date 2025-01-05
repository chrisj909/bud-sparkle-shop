import React from "react";
import { Facebook, Instagram, Discord } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Visit Our Store</h2>
              <address className="not-italic text-gray-700 space-y-2">
                <p>120 Doug Baker BLVD, STE 110</p>
                <p>Hoover, AL 35242</p>
              </address>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-2 text-gray-700">
                <p>Phone: <a href="tel:205.326.7888" className="hover:text-primary">205.326.7888</a></p>
                <p>Email: <a href="mailto:RedMountainHemp@gmail.com" className="hover:text-primary">RedMountainHemp@gmail.com</a></p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Discord className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/9ee2b4c9-5525-45e4-b911-bc6ed2802e94.png"
              alt="Hemp House growing facility"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;