export default function ItemNews({ img, title, desc }) {
  return (
    <a className="block group" href="#">
      <div className="bg-white rounded-xl overflow-hidden shadow-none transition-transform duration-500 hover:shadow-lg flex flex-col md:grid md:grid-cols-3 group-hover:-translate-y-2">
        <div className="relative aspect-[4/3] w-full md:h-full bg-white rounded-xl overflow-hidden">
          <img className="w-full h-full object-center object-cover" src={img} />
        </div>
        <div className="flex-1 p-4 flex flex-col justify-between md:col-span-2">
          <div>
            <h3 className="font-semibold text-startBlue line-clamp-2 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3">{desc}</p>
          </div>
          <button className="max-md:hidden inline-flex mr-auto px-4 py-1.5 bg-gradient-to-tr from-startBlue to-endBlue text-white text-sm font-medium rounded-full transition-transform hover:scale-105">
            Xem thêm
          </button>
        </div>
      </div>
    </a>
  );
}
