export default function TitlePage({ title, desc }) {
  return (
    <div className="flex flex-col my-8 items-center justify-center text-center">
      <h1 className="text-3xl md:text-4xl uppercase font-[700] text-startBlue mb-8 border-2 border-transparent border-b-[#f5ae07] pb-2 inline-flex items-center gap-4">
        {title}
      </h1>
      <div className="text-lg mt-2 max-w-[75%] mx-auto text-startBlue">
        {desc}
      </div>
    </div>
  );
}
