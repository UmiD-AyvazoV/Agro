import AboutTitle from "../../Components/AboutTitle";
import Banner from "../../Components/Banner";
import Info from "../../Components/Info";
import NewsTitle from "../../Components/NewsTitle";
import Carousel from "../../Components/Swiper/Carousel";

export default function Home() {
  return (
    <>
      <Banner />
      <Carousel />
      <Info />
      <AboutTitle />
      <NewsTitle />
    </>
  );
}
