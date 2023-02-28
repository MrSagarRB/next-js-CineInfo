import Link from "next/link";
import React from "react";

interface NavbarDataType {
  title: String;
  link: String | any;
}
const navbarData: NavbarDataType[] = [
  {
    title: "Products",
    link: "/products",
  },
  {
    title: "Solutions",
    link: "/solutions",
  },
  {
    title: "Industry",
    link: "/industry",
  },
  {
    title: "Resources",
    link: "/resources",
  },
  {
    title: "Company",
    link: "/company",
  },
];

const Navbar = () => {
  return (
    <div className="bg-[#ECECEC73] flex justify-center ">
      <div> Mirats</div>
      <nav className="flex space-x-6">
        {" "}
        {navbarData.map((item, idx) => {
          return (
            <Link key={idx} href={{ pathname: item.link }}>
              {item.title}
            </Link>
          );
        })}
        <button>Sign In</button>
      </nav>
    </div>
  );
};

export default Navbar;
