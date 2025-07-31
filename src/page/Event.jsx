import BannerPage from "../layout/BannerPage.jsx";
import BackHome from "../layout/BackHome.jsx";
import Container from "../layout/Container.jsx";
import TitlePage from "../layout/TitlePage.jsx";
import listCourse from "../assets/image/khoa-hoc.png";
import ItemNews from "../components/all/ItemNews.jsx";
import bannerRight from "../assets/image/hero-banner-1.jpg";
import { dataNews } from "../data/dataNews.js";
export default function Event() {
  return (
    <>
      <div className="w-full bg-amber-100">
        <BackHome />
        <BannerPage image={listCourse} />
        <Container>
          <TitlePage title="Thông tin sự kiện" />
        </Container>
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:gap-8 w-full">
            {/* news */}
            <div className="w-full md:w-3/4 space-y-6">
              <ItemNews
                img={dataNews[0].image}
                title={dataNews[0].title}
                desc={dataNews[0].desc}
              />
              <ItemNews
                img={dataNews[1].image}
                title={dataNews[1].title}
                desc={dataNews[1].desc}
              />
              <ItemNews
                img={dataNews[2].image}
                title={dataNews[2].title}
                desc={dataNews[2].desc}
              />
              <ItemNews
                img={dataNews[3].image}
                title={dataNews[3].title}
                desc={dataNews[3].desc}
              />
              <ItemNews
                img={dataNews[4].image}
                title={dataNews[4].title}
                desc={dataNews[4].desc}
              />
              <ItemNews
                img={dataNews[5].image}
                title={dataNews[5].title}
                desc={dataNews[5].desc}
              />
            </div>

            {/* Banner */}
            <div className="hidden md:block w-1/4 border-l-1 border-startBlue pl-6">
              <a className="block h-full" href="#">
                <img
                  className="w-full h-1/2 object-center object-cover rounded-2xl"
                  src={bannerRight}
                />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
