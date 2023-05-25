import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import List from "@/components/List";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} flex flex-col items-center`}>
      <Banner />
      <List />
    </main>
  );
}
