import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Hemp House</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">About Hemp House</h2>
              <p className="text-gray-700">
                At Hemp House Smoke Shop, we're not just retailers but passionate enthusiasts dedicated to offering the finest THC products in Birmingham, Alabama. Our commitment to transparency and integrity sets us apart. We offer products we personally use, ensuring that every item delivers the quality our customers expect and deserve. From carefully cultivated THCA flower to premium vapes and D9 snacks, our selection meets the highest standards.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
              <p className="text-gray-700">
                At Hemp House Smoke Shop, we have a commitment to offering only the highest quality THCA products that are rigorously tested, compliant, and effective. Your safety and satisfaction are our top priorities, and we strive to make your shopping experience simple, safe, and enjoyable. We believe in transparency, providing CoAs for all of our products.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Brands You Love</h2>
              <p className="text-gray-700">
                Discover a carefully selected range of trusted brands at Hemp House Smoke Shop. We bring you the best in THCA flower, vapes, and infused products from industry-leading names. Each brand is handpicked for its commitment to quality and customer satisfaction, ensuring you always get the finest products available. Explore your favorites and find new ones to love.
              </p>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86"
              alt="Nature background"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;