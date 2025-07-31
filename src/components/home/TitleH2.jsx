export default function TitleH2({ link, text }) {
  return (
    <div className="flex flex-col items-center">
      <a href={link}>
        <h2 className="text-2xl md:text-3xl font-bold text-center uppercase mb-6 hover:scale-110 transition-transform duration-300 bg-gradient-to-tr from-startBlue to-endBlue bg-clip-text text-transparent">
          {text}
        </h2>
      </a>
    </div>
  );
}
