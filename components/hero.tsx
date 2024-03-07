import Button from "@/components/button";
import { caveat } from "@/components/fonts";
import Scene from "@/components/three/scene";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex items-center relative hero max-w-screen-2xl mx-auto ">
      <div className="flex flex-col text-neutral-700 items-start justify-center h-full w-full ">
        <p className="text-md  mt-2 tracking-wider">
          Entdecken Sie unsere neueste Kollektion
        </p>
        <h1 className="text-7xl font-black tracking-wide mt-4 uppercase">
          Handgemacht
        </h1>
        <h2
          className={`${caveat.className} text-9xl font-semibold -mt-5 text-emerald-800/70`}
        >
          Skulpturen
        </h2>

        <Button
          label="Entdecken Sie"
          className="mt-6"
          size="md"
          icon={<ChevronRight size={24} className="text-white ml-1" />}
        />
      </div>
      <div className="bg-yellow-900/5 opacity-50 pointer-events-none -z-0 aspect-square absolute -left-[30vw] w-[50vw] rounded-full  "></div>
      <Scene />
    </div>
  );
};

export default Hero;
