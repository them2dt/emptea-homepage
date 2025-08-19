import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-12 md:py-16 px-4 md:px-8 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6 md:gap-0">
        <div>
          <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
            <li><Link href="/" className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-orange-500 text-sm md:text-base">Home</Link></li>
            <li><Link href="/privacy" className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-orange-500 text-sm md:text-base">Privacy</Link></li>
            <li><Link href="/imprint" className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-orange-500 text-sm md:text-base">Imprint</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-right font-bold text-white text-lg md:text-xl">
          <h4>EMPTEA STUDIOS®</h4>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 text-center text-xs md:text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Emptea Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
