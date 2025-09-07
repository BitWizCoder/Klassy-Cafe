import React from "react";

function Nav() {
  const navItems = [
    {
      Name: "Home",
      Link: "#",
    },
    {
      Name: "About",
      Link: "#",
    },
    {
      Name: "Menu",
      Link: "#",
    },
    {
      Name: "Chefs",
      Link: "#",
    },
    {
      Name: "Contact Us",
      Link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 flex justify-between items-center mt-8">
      <div>
        <img src="images/klassy-logo.png" alt="" />
      </div>
      <div>
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li className="font-semibold">
              <a href={item.Link}>{item.Name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
