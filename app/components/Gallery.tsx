const Gallery = () => {
  return (
    <>
      <div className="px-6 py-5 lg:px-12 lg:py-10 space-y-2 lg:space-y-5">
        <h1 className="font-medium text-xl lg:text-3xl font-bricolage text-center">Gallery</h1>
        <div className="w-full flex max-lg:flex-col items-center justify-between gap-5">
          <div className="size-full aspect-square bg-neutral-200">1</div>
          <div className="size-full aspect-square bg-neutral-200">2</div>
          <div className="size-full aspect-square bg-neutral-200">3</div>
          <div className="size-full aspect-square bg-neutral-200">4</div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
