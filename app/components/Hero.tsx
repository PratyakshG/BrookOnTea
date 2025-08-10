import Image from "next/image";
import backgroundImg from "../../public/images/background_img.png";
import Carousel from "./layout/Carousel";

const Hero = () => {
  return (
    <>
      <div className="w-full h-full">
        <Carousel />
        <Image
          src={backgroundImg}
          alt="background_img"
          className="w-screen h-[70vh] object-cover"
        />
      </div>
    </>
  );
};

export default Hero;
