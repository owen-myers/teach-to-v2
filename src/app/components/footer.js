import Link from 'next/link';
import TeachToLogo from './teachto-logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <TeachToLogo />
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <Link href="/terms" className="text-gray-600 hover:text-violet-600 font-karla transition-colors duration-300">
                Terms
              </Link>
            </div>
            <p className="text-gray-500 text-sm font-karla">
              &copy; {currentYear} Let Teachers Teach LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 