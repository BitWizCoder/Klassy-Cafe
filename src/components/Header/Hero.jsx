import React from "react";

function Hero() {
  return (
    <div className="flex mt-12">
      <div class="w-1/4 bg-indigo-500 bg-[url(images/top-left-bg.jpg)] bg-cover bg-center">
        <h2>KlassyCafe</h2>
        <p>THE BEST EXPERIENCE</p>
        <button>Make A Reservation</button>
      </div>
      <div class="w-3/4 bg-amber-600">
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
