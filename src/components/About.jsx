export default function About() {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto mt-12 gap-16">
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-2 text-primary-500">
          <div className="w-10 h-0.5 bg-primary-500"></div>
          <p>About Us</p>
        </div>
        <h2>We Leave A Delicious Memory For You</h2>

        <p>
          Klassy Cafe is one of the best restaurant HTML templates with
          Bootstrap v4.5.2 CSS framework. You can download and feel free to use
          this website template layout for your restaurant business. You are
          allowed to use this template for commercial purposes.{" "}
        </p>
        <p>
          You are NOT allowed to redistribute the template ZIP file on any
          template donwnload website. Please contact us for more information.
        </p>

        <div className="flex gap-10">
          <img
            src="images/about-thumb-01.jpg"
            alt="food image"
            className="w-28 h-28"
          />
          <img
            src="images/about-thumb-02.jpg"
            alt="food image"
            className="w-28 h-28"
          />
          <img
            src="images/about-thumb-03.jpg"
            alt="food image"
            className="w-28 h-28"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-[url(images/about-video-bg.jpg)] bg-cover bg-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-play-icon lucide-play"
          >
            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
