import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/Linkedin";
import Twitter from "./icons/Twitter";

export default function Footer() {
  return (
    <div className="bg-primary-500 py-6 mt-32">
      <div className="flex flex-col items-center gap-8 px-6 lg:flex-row max-w-7xl mx-auto justify-between ">
        <div className=" flex gap-4">
          <div className="bg-white rounded-full p-4 text-primary-500 cursor-pointer">
            <Facebook />
          </div>
          <div className="bg-white rounded-full p-4 text-primary-500 cursor-pointer">
            <Twitter />
          </div>
          <div className="bg-white rounded-full p-4 text-primary-500 cursor-pointer">
            <Linkedin />
          </div>
          <div className="bg-white rounded-full p-4 text-primary-500 cursor-pointer">
            <Instagram />
          </div>
        </div>
        <div>
          <a href="#">
            <img src="images/white-logo.png" alt="site logo" />
          </a>
        </div>
        <div className="text-center text-white lg:text-right">
          <p>© Copyright Klassy Cafe Co.</p>
          <p>Design: TemplateMo</p>
        </div>
      </div>
    </div>
  );
}
