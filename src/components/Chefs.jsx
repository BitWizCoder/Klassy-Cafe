export default function Chefs() {
  const cardData = [
    {
      image: "images/chefs-01.jpg",
      name: "Randy Walker",
      job: "Pastry Chef",
    },
    {
      image: "images/chefs-02.jpg",
      name: "David Martin",
      job: "Cookie Chef",
    },
    {
      image: "images/chefs-03.jpg",
      name: "Peter Perkson",
      job: "Pancake Chef",
    },
  ];

  return (
    <div className="flex flex-col items-center text-center mt-32 px-6">
      <div>
        <p className="text-primary-500">Our Chefs</p>
        <h2 className="font-bold text-4xl py-6 w-96">
          We offer the best ingredients for you
        </h2>
      </div>

      <div className="flex gap-8 flex-wrap">
        {cardData.map((data) => (
          <div className=" border border-gray-400 p-4 rounded-sm">
            <img
              src={data.image}
              alt={data.name}
              className="hover:bg-primary-500"
            />
            <h2 className="mt-4 text-xl font-bold"> {data.name} </h2>
            <p> {data.job} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
