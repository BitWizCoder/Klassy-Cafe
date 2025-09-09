import React from "react";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row mt-12">
      <div class="w-full md:w-1/4 bg-indigo-500 bg-[url(images/top-left-bg.jpg)] bg-cover bg-center flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl mt-4 font-dancing-script italic">KlassyCafe</h2>
        <p>THE BEST EXPERIENCE</p>
        <button className="bg-white hover:bg-gray-100 py-2 px-4 rounded-sm text-primary-500 cursor-pointer my-4">
          Make A Reservation
        </button>
      </div>
      <div class="w-full md:w-3/4 bg-amber-600">
        <img
          src="images/slide-02.jpg"
          alt="resturant"
          className="bg-cover bg-center"
        />
      </div>
    </div>
  );
}

export default Hero;
