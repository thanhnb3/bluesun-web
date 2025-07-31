import Slider from "../components/home/Slider.jsx";
import Menu from "../components/home/Menu.jsx";
import MainContent from "../components/home/MainContent.jsx";
import ChatSupport from "../layout/ChatSupport.jsx";
export default function Home() {
  return (
    <>
      <Slider />
      <Menu />
      <MainContent />
      <ChatSupport />
    </>
  );
}
