const Navbar = () => {
  return (
    <>
      <div className="bg-white text-black max-lg:text-xs capitalize font-bricolage text-center py-2 border-b-[1px] border-neutral-200">
        offers of the day!!!
      </div>
      <nav className="w-full h-[10vh] flex max-lg:flex-col bg-white items-center justify-between px-6 py-2 lg:px-12 lg:py-5 sticky z-10 top-0">
        <h1 className="font-bold text-3xl lg:text-5xl font-bricolage">BrookOnTea</h1>
        <ul className="flex items-center max-lg:py-2 gap-3 lg:gap-8 *:text-xs *:lg:text-base cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
