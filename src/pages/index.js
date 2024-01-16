import Image from "next/image";
import { Header } from "@/components/Header";
import { FirstPage } from "@/components/FirstPage";
import "@fontsource/work-sans";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/400-italic.css";
import { Trending } from "@/components/Trending";

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div>
        <FirstPage />
      </div>
      <div>
        <Trending />
      </div>
    </div>
  );
}
