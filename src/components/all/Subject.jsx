export default function Subject({ img, name, desc }) {
  return (
    <div className="flex flex-col items-center w-[220px] md:w-[240px]">
      <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-[4px] border-startBlue overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <p className="mt-4 text-startBlue text-sm md:text-base font-bold">
        {name}
        <br />
        <span className="font-normal">{desc}</span>
      </p>
    </div>
  );
}
