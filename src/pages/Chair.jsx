import { Wind, Maximize2, ShieldCheck, Download, ShoppingCart, Headset, ChevronDown, Move } from 'lucide-react';
import { useState, useEffect } from 'react';

const Chair = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { icon: <Maximize2 className="w-6 h-6 text-brand-600" />, title: "Adaptive Lumbar", desc: "Dynamic support that automatically adjusts to your posture as you shift throughout the day." },
    { icon: <Wind className="w-6 h-6 text-brand-600" />, title: "Breathable Mesh", desc: "Premium woven mesh keeps you cool and comfortable even during the longest work sessions." },
    { icon: <Move className="w-6 h-6 text-brand-600" />, title: "4D Armrests", desc: "Fully adjustable in height, width, depth, and pivot for perfect ergonomic alignment." },
    { icon: <ShieldCheck className="w-6 h-6 text-brand-600" />, title: "BIFMA Certified", desc: "Exceeds industry standards for safety, durability, and structural integrity." }
  ];

  const faqs = [
    { q: "Is assembly required?", a: "Minimal assembly is required. It takes about 10 minutes and all necessary tools are included in the box." },
    { q: "What is the weight limit?", a: "The Spark Chair is rigorously tested and certified to support up to 300 lbs (136 kg)." },
    { q: "Can I lock the recline angle?", a: "Yes, the chair features a 4-position tilt lock, allowing you to secure the backrest exactly where you want it." }
  ];

  useEffect(() => {
    document.title = "Spark Chair | Ergonomic Office Chair";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Discover the Spark Chair, designed for adaptive lumbar support, breathability, and all-day comfort. BIFMA certified.");
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section (QR Friendly - above the fold) */}
      <section className="relative px-4 pt-10 pb-16 sm:pt-20 sm:pb-24 lg:flex lg:items-center lg:gap-12 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="w-full max-w-sm aspect-[3/4] bg-gray-100 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col items-center justify-center p-8">
            {/* Placeholder Image */}
            <div className="w-48 h-48 relative z-10 flex flex-col items-center">
              <div className="w-full h-24 bg-gray-300 rounded-t-xl opacity-80"></div>
              <div className="w-8 h-24 bg-gray-400 opacity-80 mt-1"></div>
              <div className="w-32 h-4 bg-gray-400 opacity-80 mt-1 rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-transparent"></div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Series 02</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Spark Chair
          </h1>
          <p className="text-xl text-gray-500 font-light mb-8 max-w-lg mx-auto lg:mx-0">
            Engineered for focus. Designed for health. The ultimate seating experience for your modern workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center gap-2 bg-brand-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-md text-lg">
              <ShoppingCart className="w-5 h-5" />
              Order Now - $450
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg">
              <Download className="w-5 h-5" />
              Manual
            </button>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <dl className="divide-y divide-gray-100 text-sm sm:text-base">
              {[
                ['Overall Dimensions', 'H: 38" - 42" | W: 27" | D: 26"'],
                ['Seat Height', '16.5" - 20.5" (Adjustable)'],
                ['Weight Capacity', 'Up to 300 lbs (136 kg)'],
                ['Materials', 'Aluminum frame, Advanced Elastomer Mesh, High-density foam'],
                ['Colors', 'Obsidian Black, Ash Grey']
              ].map(([key, value]) => (
                <div key={key} className="px-6 py-4 grid grid-cols-3 gap-4">
                  <dt className="text-gray-500 font-medium">{key}</dt>
                  <dd className="text-gray-900 col-span-2 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Ergonomics First</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Care & Warranty */}
      <section className="bg-brand-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-500" /> 12-Year Warranty
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your investment is protected. The Spark Chair is backed by an industry-leading 12-year warranty covering all moving parts, frame, and mesh.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Care & Maintenance</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              <li>Vacuum mesh regularly to remove dust.</li>
              <li>Wipe plastic and metal parts with a damp cloth.</li>
              <li>Do not use harsh chemical cleaners.</li>
              <li>Check and tighten bolts every 6 months.</li>
            </ul>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Chair Support</h2>
          <p className="text-gray-500 mb-8">
            Need help with assembly, adjustments, or warranty claims? Our ergonomics experts are standing by.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Contact Support
            </button>
            <button className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Request Repair
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chair;
