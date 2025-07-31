import { dataCourse } from "../../data/dataCourse.js";
import TitleH2 from "./TitleH2.jsx";

export default function ListCourse() {
  return (
    <div className="w-full mt-4 md:pt-4">
      <TitleH2 link="./course" text="Khoá học nổi bật" />
      <div className="grid grid-cols-2 gap-8 p-8 bg-white rounded-xl">
        <div className="text-center md:hover:scale-110 transition-transform duration-500">
          <a
            class="relative w-32 h-32 mx-auto cursor-pointer flex justify-center items-center rounded-full bg-gradient-to-tr from-startBlue to-endBlue"
            href="#"
          >
            <div class="relative bg-white rounded-full overflow-hidden">
              <picture>
                <img
                  className="relative bg-white border-white border-2 z-10 w-[120px] h-[120px] object-cover rounded-full overflow-hidden transition-all duration-300 ease opacity-100 blur-0"
                  alt={dataCourse[0].title}
                  width="120"
                  height="120"
                  src={dataCourse[0].image}
                />
              </picture>
            </div>
          </a>
          <p className="mt-4 font-bold text-startBlue uppercase">
            {dataCourse[0].title}
          </p>
        </div>
        <div className="text-center md:hover:scale-110 transition-transform duration-500">
          <a
            class="relative w-32 h-32 mx-auto cursor-pointer flex justify-center items-center rounded-full bg-gradient-to-tr from-startBlue to-endBlue"
            href="#"
          >
            <div class="relative bg-white rounded-full overflow-hidden">
              <picture>
                <img
                  className="relative bg-white border-white border-2 z-10 w-[120px] h-[120px] object-cover rounded-full overflow-hidden transition-all duration-300 ease opacity-100 blur-0"
                  alt={dataCourse[1].title}
                  width="120"
                  height="120"
                  src={dataCourse[1].image}
                />
              </picture>
            </div>
          </a>
          <p className="mt-4 font-bold text-startBlue uppercase">
            {dataCourse[1].title}
          </p>
        </div>
        <div className="text-center md:hover:scale-110 transition-transform duration-500">
          <a
            class="relative w-32 h-32 mx-auto cursor-pointer flex justify-center items-center rounded-full bg-gradient-to-tr from-startBlue to-endBlue"
            href="#"
          >
            <div class="relative bg-white rounded-full overflow-hidden">
              <picture>
                <img
                  className="relative bg-white border-white border-2 z-10 w-[120px] h-[120px] object-cover rounded-full overflow-hidden transition-all duration-300 ease opacity-100 blur-0"
                  alt={dataCourse[2].title}
                  width="120"
                  height="120"
                  src={dataCourse[2].image}
                />
              </picture>
            </div>
          </a>
          <p className="mt-4 font-bold text-startBlue uppercase">
            {dataCourse[2].title}
          </p>
        </div>
        <div className="text-center md:hover:scale-110 transition-transform duration-500">
          <a
            class="relative w-32 h-32 mx-auto cursor-pointer flex justify-center items-center rounded-full bg-gradient-to-tr from-startBlue to-endBlue"
            href="#"
          >
            <div class="relative bg-white rounded-full overflow-hidden">
              <picture>
                <img
                  className="relative bg-white border-white border-2 z-10 w-[120px] h-[120px] object-cover rounded-full overflow-hidden transition-all duration-300 ease opacity-100 blur-0"
                  alt={dataCourse[3].title}
                  width="120"
                  height="120"
                  src={dataCourse[3].image}
                />
              </picture>
            </div>
          </a>
          <p className="mt-4 font-bold text-startBlue uppercase">
            {dataCourse[3].title}
          </p>
        </div>
        <div className="col-span-2 text-center font-semibold text-startBlue">
          <p>Xem thêm ... </p>
        </div>
      </div>
    </div>
  );
}
