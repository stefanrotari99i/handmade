import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-neutral-800 max-w-screen-2xl mx-auto  py-10 w-full flex items-start justify-between border-t border-neutral-700/10">
      <div className="flex items-start justify-between">
        <div className="flex items-start justify-start flex-col gap-2">
          <p className="text-lg font-semibold -mt-6">Join our newsletter</p>
          <p className="text-sm">
            Get the latest news on our handcrafted sculptures
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Discover</p>
        <p className="text-sm">About us</p>
        <p className="text-sm">Our story</p>
        <p className="text-sm">Collections</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Support</p>
        <Link href={"/contact"} className="text-sm">
          Contact us
        </Link>
        <p className="text-sm">FAQs</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Social</p>
        <p className="text-sm">Instagram</p>
        <p className="text-sm">Facebook</p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Legal</p>
        <Link href={"/privacy"} target="_blank" className="text-sm">
          Privacy Policy
        </Link>
        <Link href={"/terms-of-service"} target="_blank" className="text-sm">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
