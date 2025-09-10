import Mail from "./icons/Mail";
import Phone from "./icons/Phone";

export default function Contact() {
  return (
    <div className="bg-[url(/images/reservation-bg.jpg)]">
      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto px-8 mt-32 py-24">
        <div className="w-2/4">
          <div className="flex items-center gap-2 text-primary-500">
            <div className="w-10 h-0.5 bg-primary-500"></div>
            <p>Contact Us</p>
          </div>
          <h2 className="font-bold text-4xl py-6 text-white">
            Here You Can Make A Reservation Or Just walkin to our cafe
          </h2>

          <p className="text-white">
            Donec pretium est orci, non vulputate arcu hendrerit a. Fusce a
            eleifend riqsie, namei sollicitudin urna diam, sed commodo purus
            porta ut.
          </p>
          <div className="flex gap-4 mt-16 justify-between">
            <div className="bg-white py-8 px-12 rounded-sm inline-block relative text-center">
              <div className="bg-primary-500 text-white inline-flex items-center justify-center p-6 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Phone />
              </div>
              <h2 className="mt-8 font-bold text-lg">Phone Numbers</h2>
              <p>080-090-0990</p>
              <p>080-090-0880</p>
            </div>
            <div className="bg-white py-8 px-12 rounded-sm inline-block relative text-center">
              <div className="bg-primary-500 text-white inline-flex items-center justify-center p-6 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
                <Mail />
              </div>
              <h2 className="mt-8 font-bold text-lg">Emails</h2>
              <p>hello@company.com</p>
              <p>info@company.com</p>
            </div>
          </div>
        </div>
        <div className="w-2/4 bg-white rounded-sm p-8">
          <h1 className="text-2xl mb-3">Table Reservation</h1>
          <form>
            <div className="flex flex-wrap gap-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="border border-gray-300 rounded-sm p-3 active:border-green-600 focus:border-green-600 focus-visible:border-green-600  w-2/5"
              />
              <input
                type="text"
                placeholder="Your Email Address*"
                className="border border-gray-300 rounded-sm p-3 active:border-green-600 focus:border-green-600 focus-visible:border-green-600 w-2/5"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="border border-gray-300 rounded-sm p-3 active:border-green-600 focus:border-green-600 focus-visible:border-green-600 w-2/5"
              />
              <input
                type="text"
                placeholder="Number of Guests"
                className="border border-gray-300 rounded-sm p-3 active:border-green-600 focus:border-green-600 focus-visible:border-green-600 w-2/5"
              />
              <input
                type="date"
                className="border border-gray-300 rounded-sm p-3 active:border-green-600 focus:border-green-600 focus-visible:border-green-600 block w-2/5"
              />
              <input
                type="text"
                placeholder="Time"
                className="border border-gray-300 rounded-sm p-3 active:border-green-600 focus:border-green-600 focus-visible:border-green-600 w-2/5"
              />
              <textarea
                placeholder="Message"
                className="border border-gray-300 rounded-sm w-[85%] h-40 p-4 resize-none focus:border-green-600"
              />
              <button className="text-white bg-primary-500 w-[85%] py-3 rounded-sm cursor-pointer hover:bg-primary-500/90">
                Make a Reservation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
