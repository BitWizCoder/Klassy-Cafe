import SectionHeading from "./elements/SectionHeading";
import SectionSubHeading from "./elements/SectionSubHeading";

export default function About() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-auto lg:max-w-7xl mx-auto mt-32 gap-16 px-8">
      <div className="w-full md:w-1/2">
        <SectionSubHeading text={"About Us"} />
        <SectionHeading text={"We Leave A Delicious Memory For You"} />

        <p className="py-6">
          Klassy Cafe is one of the best{" "}
          <a href="#" className="text-blue-400 hover:text-blue-500">
            restaurant HTML templates
          </a>{" "}
          with Bootstrap v4.5.2 CSS framework. You can download and feel free to
          use this website template layout for your restaurant business. You are
          allowed to use this template for commercial purposes.
        </p>
        <p className="pb-6">
          You are NOT allowed to redistribute the template ZIP file on any
          template donwnload website. Please contact us for more information.
        </p>

        <div className="flex gap-2 justify-between">
          <img
            src="images/about-thumb-01.jpg"
            alt="food image"
            className="w-32 h-32"
          />
          <img
            src="images/about-thumb-02.jpg"
            alt="food image"
            className="w-32 h-32"
          />
          <img
            src="images/about-thumb-03.jpg"
            alt="food image"
            className="w-32 h-32"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 relative">
        <img src="images/about-video-bg.jpg" alt="video thumbnail" />
        <span className="bg-primary-500 w-16 h-16 flex items-center justify-center rounded-full cursor-pointer hover:bg-primary-500/70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play"
          >
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
