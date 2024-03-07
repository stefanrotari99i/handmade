import ContactMe from "@/components/contact-me";
import Link from "next/link";

const page = () => {
  return (
    <main className="max-w-screen-2xl mx-auto my-20">
      <ContactMe />
      <div className="flex flex-col items-center gap-4 justify-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-6">
          Kontakt Informationen
        </h1>
        <Link href={"/"} className="text-md text-neutral-500">
          example@mail.de
        </Link>
        <Link href={"/"} className="text-md text-neutral-500">
          0123 456789
        </Link>
        <Link href={"/"} className="text-md text-neutral-500">
          Instagram
        </Link>
        <Link href={"/"} className="text-md text-neutral-500">
          Facebook
        </Link>
      </div>
    </main>
  );
};

export default page;
