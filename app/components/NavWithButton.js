import Link from "next/link";

export default function NavWithButton({ appUrl }) {
  return (
    <div className="navigation flex-row-center">
      <div className="nav-bar flex-row-between-center">
        <Link href="/" className="logo-link">
          <div className="logo font-h4">Emptea Studios</div>
        </Link>
        <Link href={appUrl} target="_blank" className="nav-button">
          <div className="button">
            <div className="text">Launch App</div>
          </div>
        </Link>
      </div>
    </div>
  );
} 