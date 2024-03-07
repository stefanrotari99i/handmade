import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const ContactMe = () => {
  return (
    <section className="  min-h-[100dvh] relative w-full  mt-32">
      <Image
        alt="ss"
        src="/about.png"
        width={500}
        height={500}
        className="rounded-full absolute left-100 top-1/2 transform -translate-y-1/2 rotate-90 grayscale opacity-10 z-0 pointer-events-none"
      />
      <Image
        alt="ss"
        src="/img1.png"
        width={500}
        height={500}
        className="rounded-full absolute right-0 -scale-[1] top-0 transform -translate-y-1/2 rotate-90 grayscale opacity-10 z-0 pointer-events-none"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center ">
        <SectionTitle
          title="Kontaktiere mich"
          subtitle="Haben Sie Fragen? Schreiben Sie mir eine Nachricht"
        />
        <form className="flex flex-col gap-4 mt-6 max-w-screen-md w-full">
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="name" className="text-neutral-700/70 text-md">
              Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full h-12 border-2 border-neutral-700/30 px-4 "
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="email" className="text-neutral-700/70 text-md">
              Email *
            </label>
            <input
              id="email"
              type="mail"
              placeholder="example@mail.de"
              className="w-full h-12 border-2 border-neutral-700/30 px-4 "
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label htmlFor="message" className="text-neutral-700/70 text-md">
              Nachricht *
            </label>
            <textarea
              placeholder="Ihre Nachricht"
              id="message"
              className="w-full h-32 border-2 border-neutral-700/30 px-4 py-2 min-h-32 "
            />
          </div>
          <p className="text-neutral-700/70 text-xs">
            * Wir werden uns so schnell wie möglich bei Ihnen melden
          </p>
          <Button
            label="Senden"
            variant="secondary"
            size="md"
            icon={<ChevronRight size={24} className="text-white ml-1" />}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
