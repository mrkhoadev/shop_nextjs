import Book from "@/pages/home/Book";
import Contact from "@/pages/home/Contact";
import Gallery from "@/pages/home/Gallery";
import Home from "@/pages/home/Home";
import Packages from "@/pages/home/Packages";
import Promo from "@/pages/home/Promo";
import Review from "@/pages/home/Review";
import Services from "@/pages/home/Services";
export default function HomeRoute() {
  return (
    <main className="main">
      <Home />
      <Book />
      <Promo />
      <Packages />
      <Services />
      <Gallery />
      <Review />
      <Contact />
    </main>
  );
}
