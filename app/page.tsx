

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import Articles from "../components/Articles";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* Required “Features” section */}
      <Features />

      {/* Your nice image / content sections */}
      <Featured />
      <Categories />
      <Articles />

      {/* Required “Testimonials / Results” section */}
      <Testimonials />

      {/* Required “Pricing” section */}
      <Pricing />

      {/* Contact / Newsletter section */}
      <Newsletter />

      <Footer />
    </main>
  );
}

