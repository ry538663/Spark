
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-900 border-t border-brand-900 mt-auto" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/img/logo w.png" alt="Spark Neer Logo" className="h-12 w-auto" />
              <span className="font-bold text-xl tracking-tight text-white">SPARK NEER</span>
            </Link>
            <p className="text-brand-100/70 text-sm max-w-xs leading-relaxed mb-4">
              Premium everyday products designed with purpose, minimal aesthetics, and quality materials.
            </p>
            <div className="text-brand-100/70 text-sm max-w-xs leading-relaxed">
              <p className="font-semibold text-white mb-1">Office Address:</p>
              <p>M/S Mahalaxmi Traders, 114 Govind Nagar,</p>
              <p>Sidhauli, Sitapur, Uttar Pradesh – 261303</p>
              <p className="mt-2"><span className="font-semibold text-white">Contact:</span> +91 9219550811</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/bottle" className="text-brand-100/70 hover:text-white text-sm transition-colors">Spark Neer</Link></li>
              <li><Link to="/chair" className="text-brand-100/70 hover:text-white text-sm transition-colors">Spark Chair</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><a href="https://wa.me/919219550811" target="_blank" rel="noopener noreferrer" className="text-brand-100/70 hover:text-white text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-brand-100/70 hover:text-white text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-brand-100/70 hover:text-white text-sm transition-colors">Warranty & Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-100/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Spark Neer. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-brand-100/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
