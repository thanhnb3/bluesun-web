import Container from "../../layout/Container.jsx";
import AboutSun from "./AboutSun.jsx";
import ListCourse from "./ListCourse.jsx";
import ImageActivity from "./ImageActivity.jsx";
import TeamTeacher from "./TeamTeacher.jsx";
import News from "./News.jsx";
import Review from "./Review.jsx";

export default function MainContent() {
  return (
    <>
      <div className="w-full bg-amber-100">
        <Container className="hidden md:flex gap-8 px-4 py-8">
          <div className="flex flex-col w-1/2 gap-8">
            <AboutSun />
            <ImageActivity />
            <News />
          </div>
          <div className="flex flex-col w-1/2 gap-8">
            <ListCourse />
            <TeamTeacher />
            <Review />
          </div>
        </Container>
        <Container className="flex flex-col md:hidden">
          <AboutSun />
          <ListCourse />
          <ImageActivity />
          <TeamTeacher />
          <News />
          <Review />
        </Container>
      </div>
    </>
  );
}
