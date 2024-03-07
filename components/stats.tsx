import SectionTitle from "@/components/SectionTitle";
import { caveat } from "@/components/fonts";
import Image from "next/image";

const Stats = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex flex-col items-center mt-32 relative">
      <Image
        src="/img2.png"
        alt="ss"
        width={300}
        height={500}
        className="rounded-full absolute right-0 -scale-[1] top-[200px] transform -translate-y-1/2  grayscale opacity-10 z-0 pointer-events-none"
      />
      <Image
        src="/img1.png"
        alt="ss"
        width={300}
        height={500}
        className="rounded-full absolute -left-[100px]  -bottom-[50%] transform -translate-y-1/2  grayscale opacity-10 z-0 pointer-events-none"
      />
      <SectionTitle
        title="Unsere Statistiken"
        subtitle="Zahlen, die für sich sprechen"
      />
      <div className="flex flex-col gap-8 items-start w-full">
        <div className="flex items-center  gap-8 relative">
          <h3 className={`${caveat.className} text-9xl text-emerald-800/80 `}>
            2
          </h3>

          <p className="text-md  text-neutral-700 max-w-screen-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo
            fuga fugit tempore voluptatum illum placeat quo nulla eaque impedit.
          </p>
        </div>
        <div className="flex items-center  gap-8 mx-auto">
          <h3 className={`${caveat.className} text-9xl text-emerald-800/80`}>
            10
          </h3>
          <p className="text-md  text-neutral-700 max-w-screen-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo
            fuga fugit tempore voluptatum illum placeat quo nulla eaque impedit.
          </p>
        </div>
        <div className="flex items-center  gap-8 ml-auto">
          <h3 className={`${caveat.className} text-9xl text-emerald-800/80`}>
            7
          </h3>
          <p className="text-md  text-neutral-700 max-w-screen-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nemo
            fuga fugit tempore voluptatum illum placeat quo nulla eaque impedit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
