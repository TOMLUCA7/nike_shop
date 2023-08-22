import Nav from "./components/Nan";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustimerReviews from "./sections/CustimerReviews";
import Subscride from "./sections/Subscride";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustimerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscride />
      </section>
      <section className="padding-x pb-8 text-white bg-black padding-t">
        <Footer />
      </section>
    </main>
  );
};

export default App;
