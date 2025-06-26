import { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: 'Home', // This will become "Home | Emptea Studios"
};

export default function Home() {
  return <HomePageClient />;
}
