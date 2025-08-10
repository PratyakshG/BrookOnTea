import Link from "next/link";

const AboutSection = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center py-5 lg:py-10 gap-2 lg:gap-5 text-center">
        <h1 className="text-xl lg:text-3xl font-medium font-bricolage">
          The Story Behind BrookOnTea
        </h1>
        <p className="text-sm lg:text-lg text-center max-w-4xl px-4">
          BrookOnTea, born from the curiosity and desire to attain the best
          authentic flavor and fragrance of the tea. Offering a diverse range of
          collection for mind-body wellness and refreshment.
        </p>
        <Link
          href="/about"
          className="font-bricolage hover:bg-black hover:text-white transition-all duration-300 ease-in-out border rounded-full text-sm lg:text-base px-3 py-2 lg:px-6 lg:py-3"
        >
          Know More
        </Link>
      </div>
    </>
  );
};

export default AboutSection;
