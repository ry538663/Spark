import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/img/WB.png", "/img/WBB.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = "Spark Neer | Premium Everyday Essentials";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Spark Neer designs premium, minimalist everyday products. Engineered for modern life.");
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-32 sm:py-48 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-white to-white opacity-60"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-50 text-brand-600 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            Meet Spark Neer
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-brand-900 mb-8 leading-tight">
            Designed for <br className="hidden sm:block" /> everyday life.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl font-light">
            We believe everyday objects should be beautiful, durable, and bring a moment of joy to your routine. Experience the exceptional in the essential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-500 hover:shadow-lg transition-all duration-300">
              Explore Collection
            </a>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Signature Products</h2>
            <p className="mt-4 text-gray-500">Meticulously crafted for your modern lifestyle.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Product Card 1: Bottle */}
            <Link to="/bottle" className="group block h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                <div className="aspect-[4/3] bg-brand-50/30 relative overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full flex justify-center items-center transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                    <img 
                      src="/img/WB.png" 
                      alt="Spark Neer Bottle" 
                      className={`absolute top-0 w-auto h-full max-h-64 object-contain transition-opacity duration-700 ease-in-out ${currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img 
                      src="/img/WBB.png" 
                      alt="Spark Neer Bottle Back" 
                      className={`absolute top-0 w-auto h-full max-h-64 object-contain transition-opacity duration-700 ease-in-out ${currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                    />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Spark Neer</h3>
                      <p className="text-gray-500 font-medium">Hydration, redefined.</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-brand-600 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                  <p className="text-gray-600 font-light mt-auto">
                    Double-walled vacuum insulation keeps your drinks perfectly cold for 24 hours or hot for 12. Minimalist design for maximum impact.
                  </p>
                </div>
              </div>
            </Link>

            {/* Product Card 2: Chair */}
            <Link to="/chair" className="group block h-full">
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden flex items-center justify-center p-8">
                  {/* Placeholder for Chair Image */}
                  <div className="w-48 h-48 bg-gray-200 rounded-lg shadow-inner transform group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center relative">
                    <div className="absolute top-0 w-1/2 h-full bg-gray-300 rounded-t-lg"></div>
                    <span className="text-gray-500 font-medium z-10 bg-white/50 px-2 rounded">Spark Chair</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Spark Chair</h3>
                      <p className="text-gray-500 font-medium">Support that adapts to you.</p>
                    </div>
                    <ArrowRight className="h-6 w-6 text-brand-600 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                  <p className="text-gray-600 font-light mt-auto">
                    Ergonomic excellence meets modern aesthetics. Designed to provide intuitive lumbar support whether you're working or relaxing.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
