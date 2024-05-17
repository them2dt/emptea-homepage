"use client";
import Link from "next/link";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <div className="navbar-container">
        <div className="navbar flex-row-between-center">
          <div className="font-h4">emptea labs</div>
          <div className="operations flex-row-center-center">
            <Link href={""}>
              <div className="operation font-text">Product</div>
            </Link>
            <Link href={""}>
              <div className="operation font-text">Explorer</div>
            </Link>
            <Link href={""}>
              <div className="operation font-text">Contact</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero section flex-column-center-center">
        <div className="font-h1">
          Making <span>blockchain</span> accessible for everyone.
        </div>
      </div>
    </main>
  );
}
