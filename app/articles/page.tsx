import Article, { ArticlesWrapper } from "@/components/Article";

import SectionTitle from "@/components/SectionTitle";

const page = () => {
  return (
    <main className="max-w-screen-2xl mx-auto my-20">
      <SectionTitle
        title="
      Alle Artikel anzeigen
      "
        subtitle="Jetzt einkaufen"
      />
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
    </main>
  );
};

export default page;
