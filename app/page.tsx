import Article, { ArticlesWrapper } from "@/components/Article";

import About from "@/components/about";
import Collections from "@/components/collections";
import ContactMe from "@/components/contact-me";
import FAQ from "@/components/faq";
import Hero from "@/components/hero";
import SectionTitle from "@/components/SectionTitle";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Stats />
      <Collections />

      <>
        <SectionTitle title="Unsere Bestseller" subtitle="Jetzt einkaufen" />
        <ArticlesWrapper>
          <Article title="Caesar Statue" price={20} image="/1.jpg" />
          <Article
            title="Caesar Statue"
            price={55}
            image="/1.jpg"
            isDiscounted
            discountPrice={35}
          />
          <Article title="Caesar Statue" price={20} image="/3.jpg" />
          <Article
            title="Hercules Statue"
            price={19}
            image="/1.jpg"
            isDiscounted
            discountPrice={12.99}
          />
          <Article title="Caesar Statue" price={20} image="/4.jpg" />
          <Article title="Caesar Statue" price={20} image="/3.jpg" />

          <Article title="Caesar Statue" price={20} image="/1.jpg" />
          <Article title="Caesar Statue" price={20} image="/2.webp" />
          <Article title="Caesar Statue" price={20} image="/1.jpg" />
          <Article title="Caesar Statue" price={20} image="/5.webp" />
        </ArticlesWrapper>
      </>

      <Testimonials />
      <div className="section-bg" />
      <FAQ />
      <ContactMe />
    </main>
  );
}
