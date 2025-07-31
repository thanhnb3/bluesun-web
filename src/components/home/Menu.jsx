import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/image/logo.png";
import iconFB from "../../assets/icon/Icon-FB.png";
import iconZalo from "../../assets/icon/Icon-Zalo.png";
import iconTiktok from "../../assets/icon/Icon-Tiktok.png";
import iconOpen from "../../assets/icon/open.png";

export default function Menu() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <>
      {/* Button */}
      <button
        onClick={toggleMenu}
        className={`absolute top-3 right-3 bg-white rounded-full z-50 cursor-pointer p-1 w-10 h-10 flex justify-center items-center ${
          open ? "hidden" : "block"
        }`}
      >
        <img className="w-5" src={iconOpen} alt="Open Menu" />
      </button>
      {/* Sidebar */}
      <div
        className={`w-[380px] h-full fixed top-0 bg-white transition-all duration-400 ease-in-out flex flex-col ${
          open ? "right-0" : "right-[-380px]"
        }`}
      >
        <button
          onClick={toggleMenu}
          className={`absolute top-3 right-3 bg-yellow-500 rounded-full z-50 cursor-pointer p-1 w-10 h-10 flex justify-center items-center text-white text-2xl ${
            open ? "block" : "hidden"
          }`}
        >
          X
        </button>
        <div className="mt-1 ml-1 mb-10">
          <img className="w-24 h-24" src={logo} alt="Blue Sun" />
        </div>
        <div className="p-3">
          <button className="bg-blue-800 w-full py-2 rounded-xl text-white ">
            Đăng ký / Đăng nhập
          </button>
        </div>
        <nav className="flex flex-col divide-y divide-blue-200 p-3">
          <Link
            to="/about-us"
            className="group relative flex items-center text-blue-800 py-4 px-2 font-semibold text-lg"
          >
            <span className="absolute left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img className="w-5 h-5" src={logo} alt="icon" />
            </span>
            <span className="transition-all duration-300 group-hover:translate-x-6">
              Về Bluesun
            </span>
          </Link>
          <Link
            to="/team-teacher"
            className="group relative flex items-center text-blue-800 py-4 px-2 font-semibold text-lg"
          >
            <span className="absolute left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img className="w-5 h-5" src={logo} alt="icon" />
            </span>
            <span className="transition-all duration-300 group-hover:translate-x-6">
              Đội ngũ giảng viên
            </span>
          </Link>
          <Link
            to="/course"
            className="group relative flex items-center text-blue-800 py-4 px-2 font-semibold text-lg"
          >
            <span className="absolute left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img className="w-5 h-5" src={logo} alt="icon" />
            </span>
            <span className="transition-all duration-300 group-hover:translate-x-6">
              Danh sách khóa học
            </span>
          </Link>
          <Link
            to="/event"
            className="group relative flex items-center text-blue-800 py-4 px-2 font-semibold text-lg"
          >
            <span className="absolute left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img className="w-5 h-5" src={logo} alt="icon" />
            </span>
            <span className="transition-all duration-300 group-hover:translate-x-6">
              Thông tin sự kiện
            </span>
          </Link>
        </nav>
        <div className="flex justify-between p-4 bg-yellow-500 mt-auto">
          <img className="w-8 h-8" src={iconFB} alt="Facebook" />
          <img className="w-8 h-8" src={iconZalo} alt="Facebook" />
          <img className="w-8 h-8" src={iconTiktok} alt="Facebook" />
        </div>
      </div>
    </>
  );
}
