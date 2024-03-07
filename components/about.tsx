import { caveat } from "@/components/fonts";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mb-20 flex items-center gap-10">
      <div className="bg-yellow-900/5 aspect-square w-[20vw] relative overflow-hidden  rounded-full flex-1 ">
        <Image
          src="/about.png"
          width={650}
          height={500}
          alt="About me"
          className=" absolute z-0 right-0 bottom-0 grayscale"
        />
      </div>
      <div className="max-w-screen-md ml-auto">
        <h2
          className={`${caveat.className} text-5xl  font-semibold text-emerald-800/70`}
        >
          Who am I?
        </h2>

        <p className="text-neutral-500 mt-4 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          fringilla libero. Sed in luctus lorem. Nulla facilisi. Donec euismod
          turpis vitae odio tincidunt, vel sollicitudin nunc tincidunt. Sed
          venenatis, nunc et lacinia viverra, justo nulla fermentum nunc, in
          tincidunt enim ligula at elit. Donec in nunc id nisi auctor tincidunt.
          Nulla facilisi. Donec euismod turpis vitae odio tincidunt, vel
          sollicitudin nunc tincidunt. Sed venenatis, nunc et lacinia viverra,
          justo nulla fermentum nunc, in tincidunt enim ligula at elit. Donec in
          nunc id nisi auctor tincidunt.
        </p>
      </div>
    </div>
  );
};

export default About;
