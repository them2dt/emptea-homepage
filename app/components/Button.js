import Link from 'next/link';

export default function Button({ text, link }) {
  return (
    <Link href={link} target="_blank" className="button-base">
      <div className="button">
        <div className="text">{text}</div>
      </div>
    </Link>
  );
} 