import { caveat } from "@/components/fonts";

const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-1 my-14">
      <p
        className={`${caveat.className} text-3xl  font-semibold text-emerald-800/70`}
      >
        {subtitle}
      </p>
      <h2 className="text-4xl font-semibold text-neutral-700">{title}</h2>
    </div>
  );
};

export default SectionTitle;
