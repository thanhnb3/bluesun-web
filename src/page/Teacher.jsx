import teacher from "../assets/image/about-us.png";
import BannerPage from "../layout/BannerPage.jsx";
import BackHome from "../layout/BackHome.jsx";
import Container from "../layout/Container.jsx";
import TitlePage from "../layout/TitlePage.jsx";
import Subject from "../components/all/Subject.jsx";
import { teamTeacher } from "../data/teamTeacher.js";
export default function Teacher() {
  return (
    <>
      <div>
        <div className="w-full bg-amber-100">
          <BackHome />
          <BannerPage image={teacher} />
          <Container>
            <TitlePage
              title="Đội ngũ giảng viên"
              desc="Đội ngũ giáo viên giàu kinh nghiệm, tận tâm và nhiệt huyết của chúng tôi sẽ đồng hành cùng các em trên hành trình phát triển tài năng."
            />
          </Container>
          <Container>
            {/* item 1 */}
            <div className="flex flex-col w-full items-center text-center py-10 px-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-startBlue mb-3">
                Bộ môn: <br className="md:hidden" /> Tự tin giao tiếp - MC Nhí
              </h2>
              <p className="text-base md:text-lg text-startBlue max-w-[600px] mb-10">
                Phát triển kỹ năng giao tiếp, tự tin trước đám đông và khả năng
                dẫn chương trình.
              </p>
              <div className="flex flex-wrap justify-center gap-10">
                <Subject
                  img={teamTeacher[0].image}
                  name={teamTeacher[0].name}
                  desc={teamTeacher[0].desc}
                />
                <Subject
                  img={teamTeacher[1].image}
                  name={teamTeacher[1].name}
                  desc={teamTeacher[1].desc}
                />
              </div>
            </div>
            {/* item 2 */}
            <div className="flex flex-col w-full items-center text-center py-10 px-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-startBlue mb-3">
                Bộ môn: <br className="md:hidden" /> Nhảy Hiện Đại
              </h2>
              <p className="text-base md:text-lg text-startBlue max-w-[600px] mb-10">
                Học các động tác nhảy hiện đại, nâng cao sức khỏe và sự linh
                hoạt.
              </p>
              <div className="flex flex-wrap justify-center gap-10">
                <Subject
                  img={teamTeacher[2].image}
                  name={teamTeacher[2].name}
                />
                <Subject
                  img={teamTeacher[3].image}
                  name={teamTeacher[3].name}
                />
                <Subject
                  img={teamTeacher[4].image}
                  name={teamTeacher[4].name}
                />
              </div>
            </div>
            {/* item 3 */}
            <div className="flex flex-col w-full items-center text-center py-10 px-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-startBlue mb-3">
                Bộ môn: <br className="md:hidden" /> Thanh Nhạc
              </h2>
              <p className="text-base md:text-lg text-startBlue max-w-[600px] mb-10">
                Rèn luyện giọng hát, kỹ thuật thanh nhạc và biểu diễn chuyên
                nghiệp..
              </p>
              <div className="flex flex-wrap justify-center gap-10">
                <Subject
                  img={teamTeacher[5].image}
                  name={teamTeacher[5].name}
                  desc={teamTeacher[5].desc}
                />
              </div>
            </div>
            {/* item 4 */}
            <div className="flex flex-col w-full items-center text-center py-10 px-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-startBlue mb-3">
                Bộ môn: <br className="md:hidden" /> Vẽ Sáng Tạo
              </h2>
              <p className="text-base md:text-lg text-startBlue max-w-[600px] mb-10">
                Khơi dậy khả năng sáng tạo và phát triển kỹ năng vẽ nghệ thuật.
              </p>
              <div className="flex flex-wrap justify-center gap-10">
                <Subject
                  img={teamTeacher[6].image}
                  name={teamTeacher[6].name}
                  desc={teamTeacher[6].desc}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
