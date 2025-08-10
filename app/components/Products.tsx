import Link from "next/link";

const Products = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-6 py-5 lg:px-12 lg:py-10 space-y-2 lg:space-y-5">
        <div className="w-full text-center">
          <h1 className="w-full font-medium text-xl lg:text-3xl font-bricolage">
            Coming Soon..
          </h1>
          <h4 className="w-full text-sm lg:text-base">
            Discover a wide variety of flavors and fragrances with our
            collection.
          </h4>
        </div>
        <div className="w-full flex max-lg:flex-col items-center justify-between gap-5">
          <div className="size-full aspect-square bg-neutral-200">1</div>
          <div className="size-full aspect-square bg-neutral-200">2</div>
          <div className="size-full aspect-square bg-neutral-200">3</div>
          <div className="size-full aspect-square bg-neutral-200">4</div>
        </div>
        <Link
          href="/products"
          className="font-bricolage hover:bg-black hover:text-white transition-all duration-300 ease-in-out border rounded-full text-sm lg:text-base px-3 py-2 lg:px-6 lg:py-3"
        >
          View All Products
        </Link>
      </div>
    </>
  );
};

export default Products;
