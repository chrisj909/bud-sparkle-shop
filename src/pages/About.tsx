import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-primary">About Hemp House</h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                At Hemp House Smoke Shop, we're not just retailers but passionate enthusiasts dedicated to offering the finest THC products in Birmingham, Alabama. Our commitment to transparency and integrity sets us apart, ensuring every item delivers the quality our customers expect and deserve.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary mb-4">Our Philosophy</h2>
              <p className="text-gray-700 leading-relaxed">
                We have an unwavering commitment to offering only the highest quality THCA products that are rigorously tested, compliant, and effective. Your safety and satisfaction are our top priorities, and we strive to make your shopping experience simple, safe, and enjoyable.
              </p>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="relative h-64 mb-8 overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
                alt="Nature background"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="bg-primary/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-white">
              <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
              <p className="leading-relaxed">
                Every product in our collection undergoes rigorous testing and verification. We believe in transparency, which is why we provide detailed Certificates of Analysis (CoAs) for all our products, ensuring you can shop with complete confidence.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary mb-4">Visit Us Today</h2>
            <p className="text-gray-700 leading-relaxed">
              Experience the Hemp House difference for yourself. Our knowledgeable staff is ready to assist you in finding the perfect products to meet your needs. Visit our store in Birmingham, Alabama, and discover why we're the trusted choice for premium THCA products.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;