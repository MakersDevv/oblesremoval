import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../public/logo.jpg";

export default function NavBar() {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector(".nav-list");

    if (showNavItems) {
      nav.classList.remove("nav-on");
      nav.classList.add("nav-off");
      document.querySelector(".nav-socials").classList.add("disappear");
      document.querySelector(".nav-icon-container").style.position = "absolute";
      setShowNavItems(false);
    } else {
      nav.classList.remove("nav-off");
      nav.classList.add("nav-on");
      document.querySelector(".nav-socials").classList.remove("disappear");
      document.querySelector(".nav-socials").classList.add("nav-socials-on");
      document.querySelector(".nav-icon-container").style.position = "fixed";
      setShowNavItems(true);
    }
  };

  const closeNav = () => {
    if (showNavItems) {
      setShowNavItems(false);
      toggleNav();
    }
  };

  useEffect(() => {}, [showNavItems]);

  return (
    <nav className="navigation">
      <Link href="/">
        <span className="logo">
          <Image
            src={logo}
            alt="Logo"
            height={60}
            width={60}
            style={{ borderRadius: "50%", marginRight: ".5em" }}
          />
          Obles Removal
        </span>
      </Link>
      <div className="nav-items-container">
        <div onClick={toggleNav} className="nav-icon-container">
          {showNavItems ? <HiX size="2rem" /> : <HiMenuAlt4 size="2rem" />}
        </div>
        <ul className="nav-list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-socials">
          <span>Stay connected with us</span>
          <div>
            <a
              href="https://www.instagram.com/oblesremoval/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", marginRight: ".5em" }}
              onClick={closeNav}
            >
              <FaInstagram size="1.7rem" color="#000" />
            </a>
            <a
              href="https://www.facebook.com/people/Obles-Removal-company/100063752329743/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", marginLeft: ".5em" }}
              onClick={closeNav}
            >
              <FaFacebook size="1.7rem" color="#000" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
