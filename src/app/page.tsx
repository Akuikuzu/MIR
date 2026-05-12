import Image from "next/image";
import Header from "@/Components/Header";
import Galleri from "@/Components/Galleri";
import ArtistCards from "@/Components/ArtistCards";
import HistorikGal from "@/Components/HistorikGal";

export default function Home() {
  return (
    <main className="w-full flex-1 bg-brown text-white">
      <Header />
      <Galleri />
      <ArtistCards />
      <HistorikGal />
      <section>
        
      </section>
    </main>
  );
}