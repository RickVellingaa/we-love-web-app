"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <nav className="w-full px-52">
        <div className="flex justify-between items-center border-b border-border-kleur logo">
          <div>
            <span className="text-xl uppercase font-bold tracking-widest">
              <Link href="/">We Love Web</Link>
            </span>
          </div>
          <div className="flex flex-row items-center mobile">
            <ul className="flex flex-row items-center mr-12 ">
              <li className="p-6">
                <Link
                  href="/blogs"
                  className={`pb-2 tracking-widest ${
                    pathname === "/blogs" ? "active" : ""
                  }`}
                >
                  Alle blogs
                </Link>
              </li>
              <li className="p-6">
                <Link
                  href="/about-me"
                  className={`pb-2 tracking-widest ${
                    pathname === "/about-me" ? "active" : ""
                  }`}
                >
                  Over mij
                </Link>
              </li>
            </ul>
            <button className="bg-licht-groen py-3 rounded-md px-10 text-white font-extrabold">
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
