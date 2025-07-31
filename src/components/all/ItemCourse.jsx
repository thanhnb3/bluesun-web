export default function ItemCourse({ img, title }) {
  return (
    <a
      className="relative rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:scale-[1.04] transition-all duration-300"
      href="#"
    >
      <div className="w-full h-full">
        <img className="w-full h-full object-cover object-center" src={img} />
      </div>
      <div className="p-4 flex-1 relative h-full flex justify-center items-center bg-gradient-to-tr from-startBlue to-endBlue">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </a>
  );
}
