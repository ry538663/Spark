import { Droplet, Thermometer, ShieldCheck, Leaf, ShoppingCart, Headset, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Bottle = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const features = [
    { icon: <Thermometer className="w-6 h-6 text-brand-600" />, title: "24h Cold / 12h Hot", desc: "Advanced double-wall vacuum insulation keeps your drinks at the perfect temperature." },
    { icon: <ShieldCheck className="w-6 h-6 text-brand-600" />, title: "Premium Materials", desc: "Crafted from 18/8 pro-grade stainless steel to ensure pure taste and no flavor transfer." },
    { icon: <Droplet className="w-6 h-6 text-brand-600" />, title: "Leakproof Design", desc: "Our signature precision-engineered cap guarantees zero spills in your bag." },
    { icon: <Leaf className="w-6 h-6 text-brand-600" />, title: "Eco-Friendly", desc: "BPA-free, reusable, and built to last a lifetime, reducing single-use plastic waste." }
  ];

  const faqs = [
    { q: "Is the Spark Bottle dishwasher safe?", a: "Yes, all our bottles are top-rack dishwasher safe. However, for the longest lifespan of the powder coating, we recommend hand washing." },
    { q: "Can I use it for carbonated drinks?", a: "Absolutely. The leakproof seal is designed to handle the pressure of carbonated beverages without leaking." },
    { q: "What happens if I lose the cap?", a: "We sell replacement caps in our accessories store. Your bottle is designed to be a lifetime companion." }
  ];

  useEffect(() => {
    document.title = "Spark Bottle | Premium Insulated Water Bottle";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Experience the ultimate hydration with Spark Bottle. 24h cold, 12h hot, leakproof, and eco-friendly.");
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section (QR Friendly - above the fold) */}
      <section className="relative px-4 pt-10 pb-16 sm:pt-20 sm:pb-24 lg:flex lg:items-center lg:gap-12 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="w-48 h-96 bg-gray-100 rounded-[3rem] shadow-xl relative overflow-hidden flex items-center justify-center">
            {/* Placeholder Image */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-300 opacity-50"></div>
            <span className="relative z-10 text-gray-500 font-medium rotate-[-90deg] tracking-widest uppercase">Spark Bottle</span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-brand-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Series 01</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Spark Bottle
          </h1>
          <p className="text-xl text-gray-500 font-light mb-8 max-w-lg mx-auto lg:mx-0">
            The last water bottle you'll ever need to buy. Engineered for perfection, designed for everyday life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-medium hover:bg-brand-500 transition-colors shadow-md text-lg">
              <ShoppingCart className="w-5 h-5" />
              Buy Now - $35
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
                ['Capacity', '750ml / 25oz'],
                ['Weight', '380g (empty)'],
                ['Dimensions', 'Height: 26cm, Diameter: 7.5cm'],
                ['Materials', '18/8 Stainless Steel, BPA-free Silicone'],
                ['Colors', 'Matte Black, Glacier White, Ocean Blue']
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
          <h2 className="text-3xl font-bold text-gray-900">Why Spark?</h2>
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
              <ShieldCheck className="w-5 h-5 text-brand-500" /> Lifetime Warranty
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              We stand by our quality. Every Spark Bottle comes with a limited lifetime warranty against manufacturing defects. If it fails due to a flaw, we replace it.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Care Instructions</h3>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
              <li>Wash thoroughly before first use.</li>
              <li>Do not microwave or freeze.</li>
              <li>Leave cap off when storing empty to dry completely.</li>
              <li>Use warm soapy water and a bottle brush for deep cleaning.</li>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help With Your Bottle?</h2>
          <p className="text-gray-500 mb-8">
            Whether you have a question about care, need a replacement part, or want to raise a complaint, our support team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Contact Support
            </button>
            <button className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Submit a Claim
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bottle;
