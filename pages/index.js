import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/home-page/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Hero />;
}
