export default function Special() {
  const foodItems = [
    {
      image: "images/tab-item-01.png",
      heading: "Fresh Chicken Salad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, seddo.",
      price: "$10.50",
    },
    {
      image: "images/tab-item-02.png",
      heading: "Fresh Chicken Salad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, seddo.",
      price: "$10.50",
    },
    {
      image: "images/tab-item-03.png",
      heading: "Fresh Chicken Salad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, seddo.",
      price: "$10.50",
    },
    {
      image: "images/tab-item-04.png",
      heading: "Fresh Chicken Salad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, seddo.",
      price: "$10.50",
    },
    {
      image: "images/tab-item-05.png",
      heading: "Fresh Chicken Salad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, seddo.",
      price: "$10.50",
    },
    {
      image: "images/tab-item-06.png",
      heading: "Fresh Chicken Salad",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur koit adipiscing elit, seddo.",
      price: "$10.50",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="text-center">
        <p className="text-primary-500">Klassy Week</p>
        <h2 className="font-bold text-4xl py-6 w-96">
          This Week’s Special Meal Offers
        </h2>
      </div>

      <div className="flex gap-12 mt-12 mb-20">
        <div className="flex flex-col items-center">
          <img src="images/tab-icon-01.png" alt="" />
          <h2 className="font-semibold">Breakfast</h2>
        </div>
        <div className="flex flex-col items-center">
          <img src="images/tab-icon-02.png" alt="" />
          <h2>Lunch</h2>
        </div>
        <div className="flex flex-col items-center">
          <img src="images/tab-icon-03.png" alt="" />
          <h2>Dinner</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-12">
        {foodItems.map((food) => (
          <div className="flex gap-4 items-center">
            <img src={food.image} alt="food image" className="rounded-sm" />
            <div>
              <h2 className="text-xl font-bold">{food.heading}</h2>
              <p className="w-96">{food.paragraph}</p>
            </div>
            <div className="bg-primary-500 text-white p-4 rounded-sm font-bold">
              {food.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
