import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black py-16 px-8 border-t border-white/10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <ul className="list-none p-0 m-0 flex gap-8">
            <li><Link href="/" className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-orange-500">Home</Link></li>
            <li><Link href="/privacy" className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-orange-500">Privacy</Link></li>
            <li><Link href="/imprint" className="text-white no-underline transition-colors duration-300 ease-in-out hover:text-orange-500">Imprint</Link></li>
          </ul>
        </div>
        <div className="text-right font-bold text-white text-xl">
          <h4>EMPTEA STUDIOS®</h4>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Emptea Studios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
