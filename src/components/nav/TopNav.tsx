import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { CircleHelp, House } from "lucide-react";
import { ModeToggle } from "./DarkMode";

function TopNav() {
  const links = [
    { link: "/dashboard", name: "Home", icon: <House /> },
    { link: "/about", name: "About", icon: <CircleHelp /> },
  ];

  return (
    <div className="fixed top-0 z-10 flex h-20 w-full items-center justify-between border-b border-white/10 backdrop-blur-md dark:border-black/10">
      <div className="flex flex-grow justify-center">
        {links.map((items, key) => (
          <div className="p-3" key={key}>
            <Button asChild className="text-2xl">
              <Link href={items.link}>{items.icon}</Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex items-center pr-3">
        <ModeToggle />
      </div>
    </div>
  );
}

export default TopNav;
