import aboutUs from "../assets/image/about-us.png";
import BackHome from "../layout/BackHome.jsx";
import BannerPage from "../layout/BannerPage.jsx";
import Container from "../layout/Container.jsx";
import TitlePage from "../layout/TitlePage.jsx";
export default function About() {
  return (
    <>
      <div className="w-full bg-amber-100">
        <BackHome />
        <BannerPage image={aboutUs} />
        <Container>
          <TitlePage
            title="Về chúng tôi"
            desc="Chúng tôi cung cấp các chương trình đào tạo bài bản về hội họa, âm nhạc, nhảy múa và kỹ năng sáng tạo, giúp các em phát triển tài năng, tự tin thể hiện bản thân và mở rộng cánh cửa tương lai."
          />
        </Container>
        <Container>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 my-8">
            {/* item 1 */}
            <div className="bg-gradient-to-tr from-startBlue to-endBlue rounded-2xl px-4 py-8">
              {/* Title */}
              <div className="max-w-full mx-auto">
                <div className="flex justify-center items-center mb-8">
                  <h2 className="text-3xl uppercase font-bold text-white inline-flex items-center gap-4 rounded-full px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-target-icon lucide-target"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                    Tầm nhìn
                  </h2>
                </div>
              </div>
              {/* Content */}
              <div className="text-justify">
                <p className="text-lg text-white mb-4">
                  Bluesun Academy hướng đến trở thành học viện nghệ thuật năng
                  khiếu hàng đầu tại TP.HCM , dành cho mọi lứa tuổi - từ trẻ em
                  đến phụ huynh - nơi gia đình cùng nhau học hỏi, phát triển và
                  lan tỏa yêu thương thông qua nghệ thuật.
                </p>
                <p className="text-lg text-white">
                  Bluesun tin rằng dù bạn là ai, dù xuất phát điểm thế nào, khi
                  đến với Bluesun, bạn sẽ được truyền cảm hứng, dẫn dắt và đồng
                  hành để từng ngày tiến gần hơn đến phiên bản hoàn hảo nhất của
                  chính mình.
                </p>
              </div>
            </div>
            {/* item 2 */}
            <div className="bg-white rounded-2xl px-4 py-8">
              {/* Title */}
              <div className="max-w-full mx-auto">
                <div className="flex justify-center items-center mb-8">
                  <h2 className="text-3xl uppercase font-bold text-startBlue inline-flex items-center gap-4 rounded-full px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-target-icon lucide-target"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                    Sứ mệnh
                  </h2>
                </div>
              </div>
              {/* Content */}
              <div className="text-justify">
                <p className="text-lg text-startBlue mb-4">
                  Tại Bluesun Academy, mỗi học viên là một mặt trời bé, mang
                  trong mình ánh sáng riêng biệt và cần được tỏa sáng.
                </p>
                <p className="text-lg text-startBlue mb-4">
                  Bluesun mang sứ mệnh nuôi dưỡng tình yêu thương bản thân, gia
                  đình và cuộc sống , giúp học viên khám phá tiềm năng nghệ
                  thuật và tự tin tỏa sáng.
                </p>
                <ul className="text-lg text-blueColor mb-4 pl-4">
                  <li className="mb-2 flex items-center font-bold gap-2 text-startBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-heart-icon lucide-heart"
                    >
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>
                    Love Myself - Yêu bản thân
                  </li>
                  <li className="mb-2 flex items-center font-bold gap-2 text-startBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-heart-icon lucide-heart"
                    >
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>
                    Love My Family - Yêu gia đình
                  </li>
                  <li className="flex items-center font-bold gap-2 text-startBlue">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-heart-icon lucide-heart"
                    >
                      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                    </svg>
                    Love My Life - Yêu cuộc sống
                  </li>
                </ul>
              </div>
            </div>
            {/* item 2 */}
            <div className="bg-gradient-to-tr from-startBlue to-endBlue rounded-2xl px-4 py-8">
              {/* Title */}
              <div className="max-w-full mx-auto">
                <div className="flex justify-center items-center mb-8">
                  <h2 className="text-3xl uppercase font-bold text-white inline-flex items-center gap-4 rounded-full px-4 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-zap-icon lucide-zap"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                    </svg>
                    Giá trị cốt lõi
                  </h2>
                </div>
              </div>
              {/* Content */}
              <div className="text-justify">
                <p className="tex-lg text-white mb-2">
                  <span className="font-bold">L</span>- Love(Yêu Thương)
                </p>
                <p className="text-lg text-white mb-4">
                  Bluesun là nơi khơi dậy trong mỗi học viên tình yêu bản thân,
                  tình cảm dành cho gia đình, lòng biết ơn đối với thầy cô – để
                  từ đó, trẻ biết yêu thương và tỏa sáng.
                </p>
                <p className="tex-lg text-white mb-2">
                  <span className="font-bold">O</span>- Openness (Cởi mở & Sáng
                  tạo)
                </p>
                <p className="text-lg text-white mb-4">
                  Với sự đồng hành của ba mẹ và thầy cô, các học viên phát triển
                  tư duy mở, tự do sáng tạo và dám theo đuổi đam mê của mình.
                </p>
                <p className="tex-lg text-white mb-2">
                  <span className="font-bold">V</span> - Valor (Bản lĩnh)
                </p>
                <p className="text-lg text-white mb-4">
                  Chúng tôi vun đắp cho học viên sự tự tin và bản lĩnh, được
                  nuôi dưỡng từ sự tin yêu và hỗ trợ của gia đình, nhà trường.
                </p>
                <p className="tex-lg text-white mb-2">
                  <span className="font-bold">E</span> - Empathy (Thấu cảm và
                  Tôn trọng)
                </p>
                <p className="text-lg text-white">
                  Chúng tôi dạy trẻ thấu cảm bản thân và người khác – biết lắng
                  nghe, biết trân trọng từng mối quan hệ với ba mẹ, thầy cô và
                  cộng đồng. Không những thế, chúng tôi sẽ đồng hành cùng ba mẹ
                  để ba mẹ không chỉ là người dạy dỗ mà sẽ là người bạn của con,
                  hiểu con và chia sẻ cùng con trên hành trình trưởng thành.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
