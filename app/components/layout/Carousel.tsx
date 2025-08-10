import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="bg-red-500 w-full h-[70vh] overflow-hidden">
        Carousel
        <ul className="w-full h-full overflow-scroll flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <li className="place-items-center basis-full h-full bg-neutral-300">{index + 1}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
