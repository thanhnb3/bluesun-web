import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import activity1 from "../../assets/image/activity-1.png";
import activity2 from "../../assets/image/activity-2.png";
import activity3 from "../../assets/image/activity-3.png";
import activity4 from "../../assets/image/activity-4.png";
import activity5 from "../../assets/image/activity-5.jpg";
import activity6 from "../../assets/image/su-kien.png";
import TitleH2 from "./TitleH2";
export default function ImageActivity() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const image = [
    {
      img: activity1,
      col: "col-span-2",
      delay: 50,
    },
    {
      img: activity2,
      col: "col-span-3",
      delay: 200,
    },
    {
      img: activity3,
      col: "col-span-2",
      delay: 350,
    },
    {
      img: activity4,
      col: "col-span-3",
      delay: 500,
    },
    {
      img: activity5,
      col: "col-span-2",
      delay: 650,
    },
    {
      img: activity6,
      col: "col-span-3",
      delay: 800,
    },
  ];
  return (
    <div className="pt-4 mt-4 md:py-8">
      <TitleH2 text="Hình ảnh hoạt động" />
      <div className="grid grid-cols-5 gap-4 mt-4">
        {image.map((item, i) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-delay={item.delay}
              data-aos-mirror="true"
              key={i}
              className={`${item.col} row-span-1 rounded-2xl overflow-hidden`}
            >
              <img
                className="w-full h-48 object-center object-cover"
                src={item.img}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
