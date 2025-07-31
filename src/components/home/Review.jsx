import TitleH2 from "./TitleH2";
import review from "../../assets/image/review1.jpg";

export default function Review() {
  return (
    <div className="mt-4 w-full">
      <TitleH2 text="Cảm nhận từ phụ huynh" />
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border border-5 border-startBlue">
            <img src={review} />
          </div>
          <p className="font-semibold text-sm text-center mt-4 text-startBlue">
            PH Bé Thanh Tâm
          </p>
        </div>
        <div className="bg-white rounded-3xl p-4 border border-5 border-startBlue">
          <p className="italic">
            Con chị từng là 1 bé không biết cách giao tiếp và hầu như không có
            nhu cầu giao tiếp với bạn bè trong lớp. Vậy mà chỉ 1 năm học, con đã
            có thể lấy lại sự tự tin và vui vẻ năng động hơn hẳn. Thực sự cảm ơn
            thầy Ken và Bluesun đã luôn đồng hành và biến con thành một người
            khác hoàn thiện hơn rất nhiều so với mong đợi của chị.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
