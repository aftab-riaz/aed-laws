import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-600 fill-red-600" />
              <span className="text-2xl font-bold text-gray-900">AED STATES</span>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Industries</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Resources</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Company</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium">Pricing</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Contact
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
              Store
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
