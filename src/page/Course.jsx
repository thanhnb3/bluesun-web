import BannerPage from "../layout/BannerPage.jsx";
import BackHome from "../layout/BackHome.jsx";
import Container from "../layout/Container.jsx";
import TitlePage from "../layout/TitlePage.jsx";
import listCourse from "../assets/image/khoa-hoc.png";
import { dataCourse } from "../data/dataCourse.js";
import ItemCourse from "../components/all/ItemCourse.jsx";
export default function Course() {
  return (
    <>
      <div>
        <div className="w-full bg-amber-100">
          <BackHome />
          <BannerPage image={listCourse} />
          <Container>
            <TitlePage title="Các khoá học  tại BLUESUN ACEDAMY" />
          </Container>
          <Container>
            <div className="flex flex-col my-1 items-center justify-center text-center">
              <h2 className="text-xl md:text-2xl font-[700] text-startBlue mb-8 border-2 border-transparent border-b-[#f5ae07] pb-2 inline-flex items-center">
                Dành cho Thiếu Niên
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-12">
                <ItemCourse
                  img={dataCourse[5].image}
                  title={dataCourse[5].title}
                />
                <ItemCourse
                  img={dataCourse[3].image}
                  title={dataCourse[3].title}
                />
                <ItemCourse
                  img={dataCourse[2].image}
                  title={dataCourse[2].title}
                />
                <ItemCourse
                  img={dataCourse[6].image}
                  title={dataCourse[6].title}
                />
                <ItemCourse
                  img={dataCourse[4].image}
                  title={dataCourse[4].title}
                />
                <ItemCourse
                  img={dataCourse[1].image}
                  title={dataCourse[1].title}
                />
              </div>
            </div>
          </Container>
          <Container>
            <div className="flex flex-col my-1 items-center justify-center text-center">
              <h2 className="text-xl md:text-2xl font-[700] text-startBlue mb-8 border-2 border-transparent border-b-[#f5ae07] pb-2 inline-flex items-center">
                Dành cho người lớn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-12">
                <ItemCourse
                  img={dataCourse[8].image}
                  title={dataCourse[8].title}
                />
                <ItemCourse
                  img={dataCourse[0].image}
                  title={dataCourse[0].title}
                />
                <ItemCourse
                  img={dataCourse[9].image}
                  title={dataCourse[9].title}
                />
                <ItemCourse
                  img={dataCourse[7].image}
                  title={dataCourse[7].title}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
