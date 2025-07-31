import { Link } from "react-router-dom";

export default function BackHome() {
  return (
    <Link to="/">
      <button className="fixed z-10 top-4 left-4 p-2 bg-[#f5ae07] text-white rounded-full focus:outline-none shadow-md hover:cursor-pointer">
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
          class="lucide lucide-arrow-left-icon lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>
    </Link>
  );
}
