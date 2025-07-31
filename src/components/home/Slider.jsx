import { dataSlider } from "../../data/dataSlider.js";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Slider() {
  const [index, setIndex] = useState(0);
  //   Hàm chạy slide

  useEffect(() => {
    const runSlider = setInterval(() => {
      setIndex((prev) => (prev + 1) % dataSlider.length);
    }, 5000);
    return () => {
      clearInterval(runSlider);
    };
  }, []);

  function activeButton(index) {
    setIndex(index);
  }
  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Ảnh */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {dataSlider.map((slider, i) => (
            <div
              key={i}
              className="min-w-full relative h-[765px] md:h-[815px] overflow-hidden"
            >
              {/* Image */}
              {/* Image mobile */}
              <img
                src={slider.imgMobile}
                alt={slider.title}
                className="w-full h-full block md:hidden object-cover object-center"
              />
              {/* Image desktop */}
              <img
                src={slider.imgDesktop}
                alt={slider.title}
                className="w-full h-full hidden md:block object-cover object-center "
              />
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-[320px] h-[270px] md:w-[350px] md:h-[300px] rounded-tr-[50px] bg-transparent">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: index === i ? 1 : 0,
                    scale: index === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-full rounded-tr-[50px]  bg-blue-500/50 z-10 "
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: index === i ? 1 : 0,
                    scale: index === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="absolute bottom-0 left-0 w-[90%] h-[90%] rounded-tr-[50px]  bg-yellow-500/50 z-20"
                ></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: index === i ? 1 : 0,
                    scale: index === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="absolute bottom-0 left-0 w-[80%] h-[80%] rounded-tr-[50px] bg-white z-20 p-3 flex flex-col justify-center"
                >
                  <motion.h3
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: index === i ? 1 : 0,
                      scale: index === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                    className="text-xl font-bold mb-2 text-blue-700"
                  >
                    {slider.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: index === i ? 1 : 0,
                      scale: index === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 1.5 }}
                    className="text-sm mb-4 text-blue-700"
                  >
                    {slider.desc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: index === i ? 1 : 0,
                      scale: index === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 1.8 }}
                    className="text-left"
                  >
                    <button className="inline-block p-2 bg-gradient-to-tr from-blue-700 to-sky-400 text-white rounded-full text-sm font-semibold whitespace-nowrap shadow-md transition hover:bg-gradient-to-bl from-blue-700 to-sky-400 cursor-pointer">
                      {slider.button}
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        {/* Nút */}
        <div className="absolute w-full bottom-4 flex justify-center gap-2 items-center">
          {dataSlider.map((_, i) => (
            <button
              key={i}
              className={`w-5 h-5 bg-amber-500 border-3 border-white rounded-full transition-all duration-200 ${
                index === i
                  ? "bg-blue-700"
                  : "scale-80 hover:scale-100 hover:border-blue-600 hover:bg-blue-800 hover:cursor-pointer"
              }`}
              onClick={() => {
                activeButton(i);
              }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}
