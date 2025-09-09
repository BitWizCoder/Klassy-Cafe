export default function Menu() {
  const cardData = [
    {
      price: "$7.25",
      title: "Klassic Cake",
      image: "images/menu-item-01.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor in quidem.",
    },
    {
      price: "$7.25",
      title: "Klassic Cake",
      image: "images/menu-item-02.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor in quidem.",
    },
    {
      price: "$7.25",
      title: "Klassic Cake",
      image: "images/menu-item-03.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor in quidem.",
    },
    {
      price: "$7.25",
      title: "Klassic Cake",
      image: "images/menu-item-04.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor in quidem.",
    },
    {
      price: "$7.25",
      title: "Klassic Cake",
      image: "images/menu-item-05.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor in quidem.",
    },
    {
      price: "$7.25",
      title: "Klassic Cake",
      image: "images/menu-item-04.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam dolor in quidem.",
    },
  ];

  return (
    <div className="bg-[#fffafa] py-28 mt-32 px-6">
      <div className="lg:max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-primary-500">
          <div className="w-10 h-0.5 bg-primary-500"></div>
          <p>Our Menu</p>
        </div>
        <h2 className="font-bold text-4xl py-6">
          Our selection of cakes with quality taste
        </h2>
      </div>

      <div className="flex gap-8 flex-wrap">
        {cardData.map((data) => (
          <div className="relative inline-block">
            <div className="bg-primary-500 inline-block text-white py-6 px-4 rounded-sm absolute top-0 left-0">
              {data.price}
            </div>
            <div>
              <img src={data.image} alt="Food Menu" />
            </div>
            <div className="bg-primary-500 text-white py-6 pl-6 font-bold w-full absolute bottom-0 rounded-b-sm">
              <h2>{data.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
