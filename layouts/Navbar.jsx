import React from "react";
import Link from "next/link";

import Logo from "@/components/logo/Logo";
import InitialPadding from "./InitialPadding";

const navLinks = ["Home", "My projects", "About", "Blog"];

const Navbar = () => {
  return (
    <header className="header py-[8px]">
      <InitialPadding className={"justify-between flex w-full"}>
        <div className="logo">
          <Logo className="fill-accent-500 w-[28px] sm:w-[32px] md:w-[40px] lg:w-[48px] h-auto hover:fill-accent-400 active:fill-accent-600 transition-all duration-200 active:scale-95" />
        </div>
        <nav>
          <ul>
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="font-lato text-neutral-400 transition-all cursor-pointer duration-200 hover:text-neutral-600 font-medium container"
                >
                  <Link
                    href={
                      link === "Home" ? "/" : `/${link.toLocaleLowerCase()}`
                    }
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </InitialPadding>
    </header>
  );
};

export default Navbar;
