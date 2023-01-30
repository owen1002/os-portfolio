import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "./Header";
import { profile } from "@/const";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <div className="text-red-500">Hi There</div>
      <div className="text-red-500">{`I'm ${profile.shortName}`}</div>
    </main>
  );
}
