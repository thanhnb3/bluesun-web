import TitleH2 from "./TitleH2";
import { dataNews } from "../../data/dataNews.js";

export default function News() {
  return (
    <div className="mt-4">
      <TitleH2 text="Thông tin sự kiện" />
      <div className="mt-4 flex flex-col gap-6">
        <a href="#" className="group block">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-lg bg-white rounded-xl flex flex-col md:grid md:grid-cols-3">
            {/* Hình ảnh */}
            <div className="relative aspect-[4/3] w-full md:h-full overflow-hidden rounded-l-xl md:rounded-l-xl md:rounded-r-none">
              <img
                src={dataNews[0].image}
                alt={dataNews[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Nội dung */}
            <div className="flex flex-col justify-between p-4 md:col-span-2">
              <h2 className="font-semibold text-startBlue mb-3 line-clamp-2">
                {dataNews[0].title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {dataNews[0].desc}
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="group block">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-lg bg-white rounded-xl flex flex-col md:grid md:grid-cols-3">
            {/* Hình ảnh */}
            <div className="relative aspect-[4/3] w-full md:h-full overflow-hidden rounded-l-xl md:rounded-l-xl md:rounded-r-none">
              <img
                src={dataNews[1].image}
                alt={dataNews[1].title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Nội dung */}
            <div className="flex flex-col justify-between p-4 md:col-span-2">
              <h2 className="font-semibold text-startBlue mb-3 line-clamp-2">
                {dataNews[1].title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {dataNews[1].desc}
              </p>
            </div>
          </div>
        </a>
        <a href="#" className="group block">
          <div className="transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-lg bg-white rounded-xl flex flex-col md:grid md:grid-cols-3">
            {/* Hình ảnh */}
            <div className="relative aspect-[4/3] w-full md:h-full overflow-hidden rounded-l-xl md:rounded-l-xl md:rounded-r-none">
              <img
                src={dataNews[2].image}
                alt={dataNews[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Nội dung */}
            <div className="flex flex-col justify-between p-4 md:col-span-2">
              <h2 className="font-semibold text-startBlue mb-3 line-clamp-2">
                {dataNews[2].title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {dataNews[2].desc}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
