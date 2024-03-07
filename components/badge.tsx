const Badge = ({ count }: { count: any }) => {
  return (
    <div className="bg-rose-500 h-4 flex items-center justify-center aspect-square flex-1 text-white text-[10px] font-semibold p-1 rounded-full absolute top-0 -right-2 z-10">
      {count}
    </div>
  );
};

export default Badge;
