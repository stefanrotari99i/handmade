import { CollectionItem } from "@/components/collections";
import SectionTitle from "@/components/SectionTitle";

const page = () => {
  return (
    <main className="max-w-screen-2xl mx-auto my-20">
      <SectionTitle
        title="Alle Kollektionen anzeigen"
        subtitle="Jetzt einkaufen"
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-x-2 gap-y-8">
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
        <CollectionItem
          title="
            Halloween-Kollektion
  "
          count={16}
          image="/coll3.jpg"
        />
      </div>
    </main>
  );
};

export default page;
