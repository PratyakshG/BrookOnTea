const Footer = () => {
  return (
    <>
      <div className="px-6 pt-4 lg:px-12 lg:pt-8 pb-5 w-full lg:h-[450px] flex flex-col justify-between gap-5 lg:gap-10">
        <div className="h-full flex max-md:flex-col justify-between items-start gap-5">
          <div className="w-full pr-5 flex flex-col gap-3">
            <h2 className="font-bold text-4xl font-bricolage">BrookOnTea</h2>
            <div className="flex flex-col leading-5">
              <span className="font-semibold">Office Address:</span>
              <span>Maharajganj, Uttar Pradesh - 274084, India</span>
            </div>
            <div className="flex flex-col leading-5">
              <span className="font-semibold">Email:</span>
              <span>brookontea@gmail.com</span>
            </div>
            <div className="flex flex-col leading-5">
              <span className="font-semibold">Phone:</span>
              <span>+91 9876543210</span>
            </div>
          </div>

          <div className="w-full h-full lg:pl-5 lg:border-l lg:border-neutral-300 space-y-1 lg:space-y-2">
            <h3 className="font-semibold max-lg:text-lg text-2xl font-bricolage">
              Shop For More
            </h3>
            <ul className="space-y-1 lg:space-y-2 *:max-lg:text-sm">
              <li>Premium Collection</li>
              <li>Luxury Collection</li>
              <li>Standard Collection</li>
              <li>Combo and Gift Packs</li>
            </ul>
          </div>

          <div className="w-full h-full lg:pl-5 lg:border-l lg:border-neutral-300 space-y-1 lg:space-y-2">
            <h3 className="font-semibold max-lg:text-lg text-2xl font-bricolage">
              Quick Links
            </h3>
            <ul className="space-y-1 lg:space-y-2 *:max-lg:text-sm">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="w-full h-full lg:pl-5 lg:border-l lg:border-neutral-300 lg:space-y-2">
            <h3 className="font-semibold text-xl lg:text-2xl font-bricolage">
              Subscribe to our emails
            </h3>
            <span className="max-lg:text-sm">
              Sign up to get details about early release offers, sales, events
              and more!
            </span>
          </div>
        </div>

        <div className="max-lg:text-sm">
          <span>© 2025 BrookOnTea. All rights reserved.</span>
          <br />
          <span className="font-semibold">Created by Pratyaksh Gupta</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
