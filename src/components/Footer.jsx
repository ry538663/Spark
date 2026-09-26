import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-brand-600" />
              <span className="font-bold text-xl tracking-tight text-brand-900">Spark</span>
            </Link>
            <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
              Premium everyday products designed with purpose, minimal aesthetics, and quality materials.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/bottle" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">Spark Bottle</Link></li>
              <li><Link to="/chair" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">Spark Chair</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 text-sm transition-colors">Warranty & Returns</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Spark. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
