import Image from "next/image";
import { Header } from "@/components/Header";
import { FirstPage } from "@/components/FirstPage";

import { Trending } from "@/components/Trending";
import { AllBlog } from "@/components/AllBlog";
import { NotFound } from "@/components/NotFound";
export default function Home() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        <div>
          <FirstPage />
        </div>
        <div>
          <Trending />
        </div>
        <div>
          <AllBlog />
        </div>
      </div>
    </div>
  );
}
