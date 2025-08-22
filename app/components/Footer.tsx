import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-obsidian py-8 md:py-10 px-4 md:px-6 pb-28 md:pb-32 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div>
            <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-3 md:gap-6 text-center md:text-left">
              <li>
                <Link 
                  href="/" 
                  className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-accent text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy" 
                  className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-accent text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link 
                  href="/imprint" 
                  className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-accent text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
                >
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div className="flex items-center">
            <a 
              href="https://instagram.com/empteastudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-accent text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-obsidian rounded-sm"
              aria-label="Follow us on Instagram"
            >
              Instagram
            </a>
          </div>
          
          <div className="text-center md:text-right font-bold text-white text-base md:text-lg">
            <h4>EMPTEA STUDIOS®</h4>
          </div>
        </div>
        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Emptea Studios. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
