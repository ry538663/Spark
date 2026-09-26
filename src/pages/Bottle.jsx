import { Headset, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Bottle = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/img/WB.png", "/img/WBB.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000); // changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    { q: "Is Spark Neer safe for daily consumption?", a: "Yes, our water goes through rigorous RO, Ozonization, and UV treatments to ensure the highest safety and purity for daily hydration." },
    { q: "How should I store the water bottle?", a: "Store it in a cool and dry place, away from direct sunlight, to maintain freshness and quality." },
    { q: "What should I do with the empty bottle?", a: "Our bottles are made of PET material. Please crush the bottle after use and dispose of it responsibly in recycling bins. Do not litter." }
  ];

  useEffect(() => {
    document.title = "Spark Neer | Packaged Drinking Water";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Spark Neer - Packaged Drinking Water with Added Minerals. RO, Ozonized, UV Treated Water.");
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section (QR Friendly - above the fold) */}
      <section className="relative px-4 pt-10 pb-16 sm:pt-20 sm:pb-24 lg:flex lg:items-center lg:gap-12 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 relative h-96">
          <img 
            src="/img/WB.png" 
            alt="Spark Neer Bottle" 
            className={`absolute w-auto h-96 object-contain transition-opacity duration-700 ease-in-out ${currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
          />
          <img 
            src="/img/WBB.png" 
            alt="Spark Neer Bottle Back" 
            className={`absolute w-auto h-96 object-contain transition-opacity duration-700 ease-in-out ${currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Packaged Drinking Water with Added Minerals</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Spark Neer
          </h1>
          <p className="text-xl text-gray-500 font-light mb-8 max-w-lg mx-auto lg:mx-0">
            RO, Ozonized, UV Treated Water
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="https://wa.me/919219550811" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-medium hover:bg-brand-500 transition-colors shadow-md text-lg">
              <Headset className="w-5 h-5" />
              Contact for Orders
            </a>
          </div>
        </div>
      </section>

      {/* Product Information */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Product Information</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <dl className="divide-y divide-gray-100 text-sm sm:text-base">
              {[
                ['Manufactured By', 'V.R. Beverages, B-17 UPSIDC Agro Park, Kursi Road, Fatehpur Barabanki, Uttar Pradesh'],
                ['Manufacturing License No.', '12725022000057'],
                ['Marketed By', 'M/S Mahalaxmi Traders, 114 Govind Nagar, Sidhauli, Sitapur, Uttar Pradesh – 261303'],
                ['Marketing License No.', '12726067000034'],
                ['Customer Care', '+91 9219550811'],
                ['Shelf Life', 'Best before 6 months from the date of packaging'],
                ['Storage Instructions', 'Store in cool & dry place, keep away from direct sunlight'],
                ['Quality Note', 'Do not accept if cap/seal is broken'],
                ['Material', 'PET — crush the bottle after use, do not litter'],
                ['Date of Packaging, Batch No., and M.R.P. (incl. of all taxes)', 'Printed on the pack (varies per batch)']
              ].map(([key, value]) => (
                <div key={key} className="px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <dt className="text-gray-500 font-medium">{key}</dt>
                  <dd className="text-gray-900 sm:col-span-2 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nutrition Information (per 100ml)</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <dl className="divide-y divide-gray-100 text-sm sm:text-base">
              {[
                ['Energy', '0%'],
                ['Total Fat', '0%'],
                ['Carbohydrates', '0%'],
                ['Protein', '0%'],
                ['Cholesterol', '0%']
              ].map(([key, value]) => (
                <div key={key} className="px-6 py-4 grid grid-cols-2 gap-4">
                  <dt className="text-gray-500 font-medium">{key}</dt>
                  <dd className="text-gray-900 font-medium text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <button 
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-semibold text-gray-900">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Support / Contact */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Headset className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help With Your Bottle?</h2>
          <p className="text-gray-500 mb-8">
            Whether you have a question about our water source, need to place a bulk order, or want to raise a complaint, our support team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919219550811" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors text-center">
              Contact Support
            </a>
            <a href="https://wa.me/919219550811" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors text-center">
              Bulk Orders
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bottle;
