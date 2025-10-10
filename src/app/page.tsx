// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { name: "Register", href: "/register" },
//   { name: "Login", href: "/login" },
//   { name: "Forgot Password", href: "/forgot-password" },
// ];

// const Homepage = () => {
//   const pathname = usePathname();

//   return (
//     <>
//       {navLinks.map((link) => {
//         const isActive =
//           pathname === link.href ||
//           (pathname.startsWith(link.href) && link.href !== "/");

//         return (
//           <div>
//             <Link
//               className={
//                 isActive
//                   ? "font-bold mr-4"
//                   : "text-blue-500 mr-4 hover:text-2xl"
//               }
//               href={link.href}
//               key={link.name}
//             >
//               {link.name}
//             </Link>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Homepage;

import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href="/blog">Blog</Link><br />
      <Link href="/products">Products</Link>
      <br />
      <Link href="/articles/breaking-news-123?lang=en">
        Read in English
      </Link><br />
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </div>
  );
};

export default Home;
