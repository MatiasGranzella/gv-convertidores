import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ForShops from "@/components/ForShops";
import Process from "@/components/Process";
import ForOwners from "@/components/ForOwners";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ForShops />
        <ForOwners />
        <Process />
        <Location />
      </main>
      <Footer />
    </>
  );
}
