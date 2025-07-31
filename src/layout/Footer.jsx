import Container from "./Container";
import iconFB from "../assets/icon/Icon-FB.png";
import iconZalo from "../assets/icon/Icon-Zalo.png";
import iconTiktok from "../assets/icon/Icon-Tiktok.png";

export default function Footer() {
  return (
    <div className="bg-amber-400 pb-10">
      <Container className="flex flex-col justify-between md:flex-row-reverse">
        <div className="flex justify-between gap-20 p-4">
          <div className="w-12 h-12 rounded-full flex justify-center items-center">
            <img className="w-full h-full" src={iconFB} />
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center">
            <img className="w-full h-full" src={iconZalo} />
          </div>
          <div className="w-12 h-12 rounded-full flex justify-center items-center">
            <img className="w-full h-full" src={iconTiktok} />
          </div>
        </div>
        <div className="w-full  py-10 px-4 flex flex-col gap-4 md:max-w-[520px] text-startBlue font-medium">
          <h2 className="text-xl md:text-2xl font-bold uppercase">Liên hệ</h2>

          <p className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 text-startBlue"
            >
              <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
              <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
              <path d="M18 22v-3" />
              <circle cx="10" cy="10" r="3" />
            </svg>
            <span>
              Địa chỉ: SA02 – Chung cư Prosper Plaza, 22/14 Đường Phan Văn Hớn,
              Phường Đông Hưng Thuận, TP. Hồ Chí Minh
            </span>
          </p>

          <p className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 text-startBlue"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
            <span>
              Email:{" "}
              <a
                href="mailto:info@bluesunacademy.vn"
                className="underline hover:text-blue-700"
              >
                info@bluesunacademy.vn
              </a>
            </span>
          </p>

          <p className="flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 text-startBlue"
            >
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <span>
              Hotline:{" "}
              <a href="tel:0867664988" className="hover:text-blue-700">
                0867664988
              </a>
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
}
