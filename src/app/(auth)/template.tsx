"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const Homepage = () => {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  return (
    <>
      <div className="border p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <div key={link.name}>
            <Link
              className={
                isActive
                  ? "font-bold mr-4"
                  : "text-blue-500 mr-4 hover:text-2xl"
              }
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Homepage;
