import TitleH2 from "./TitleH2";
import teacher from "../../assets/image/about-us.png";
export default function TeamTeacher() {
  return (
    <div className="p-4 mt-4">
      <TitleH2 text="Đội ngũ giáo viên" />
      <div className="w-full overflow-hidden rounded-2xl">
        <img
          className="w-full h-full object-cover object-center"
          src={teacher}
        />
      </div>
    </div>
  );
}
