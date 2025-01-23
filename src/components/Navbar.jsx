import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Icons from "@/common/constants/Icons";
import "../assests/styles/components/navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Detect if it's a mobile view
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Initial check when the component mounts
    handleResize();

    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  // Toggle the hamburger menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const generateBreadcrumb = () => {
    const pathArray = router.pathname.split("/").filter((item) => item); // Remove empty parts

    const breadcrumb = pathArray.map((path, index) => {
      const route = `/${pathArray.slice(0, index + 1).join("/")}`; // Build the path dynamically
      return (
        <span key={index}>
          <Link href={route}>
            <span style={{ color: "gray" }}>HOME</span> | {capitalize(path)}
          </Link>
          {index < pathArray.length - 1 && " | "}
        </span>
      );
    });

    return breadcrumb;
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="navbar">
      <div className="navbar_top_section">
        <div className="navbar_left">
          {isMobile && (
            <div className="hamburger-menu" onClick={toggleMenu}>
              <Image
                src={Icons.HamburgerIcon}
                alt="Menu"
                height={"30px"}
                width={"30px"}
              />
            </div>
          )}
          <Link href="/shop">
            <Image src={Icons.Logo} alt="Logo" height={"50px"} width={"50px"} />
          </Link>
        </div>
        <h1 className={isMobile ? "" : "center_logo"}>Logo</h1>
        {/* Hamburger Menu Icon for Mobile */}

        {/* Profile Section */}
        <div className="navbar_profile">
          <Image
            src={Icons.SearchIcon}
            alt="Search"
            height={"50px"}
            width={"50px"}
          />
          <Image
            src={Icons.HeartIcon}
            alt="Favorites"
            height={"50px"}
            width={"50px"}
          />
          <Image
            src={Icons.ShoppingBagIcon}
            alt="Bag"
            height={"50px"}
            width={"50px"}
          />
          {isMobile ? (
            ""
          ) : (
            <Image
              src={Icons.ProfileIcon}
              alt="Profile"
              height={"50px"}
              width={"50px"}
            />
          )}
          {isMobile ? (
            ""
          ) : (
            <h5 className="language">
              ENG
              <Image
                src={Icons.ArrowDownIcon}
                alt="Language Dropdown"
                height={"50px"}
                width={"50px"}
              />
            </h5>
          )}
        </div>
      </div>

      {/* Navigation - Full Menu for Desktop and Hamburger Menu for Mobile */}
      <nav className="navlinks breadcrumb_start">
        {isMobile ? (
          <>
            {/* Breadcrumb for Mobile */}
            <div className="breadcrumb">{generateBreadcrumb()}</div>
            {/* Show the menu when hamburger icon is clicked */}
            {isMenuOpen && (
              <div className="navlinks-mobile">
                <Link
                  href="/shop"
                  className={router.pathname === "/shop" ? "active" : ""}
                >
                  Shop
                </Link>
                <Link
                  href="/skills"
                  className={router.pathname === "/skills" ? "active" : ""}
                >
                  Skills
                </Link>
                <Link
                  href="/stories"
                  className={router.pathname === "/stories" ? "active" : ""}
                >
                  Stories
                </Link>
                <Link
                  href="/about"
                  className={router.pathname === "/about" ? "active" : ""}
                >
                  About
                </Link>
                <Link
                  href="/contactus"
                  className={router.pathname === "/contactus" ? "active" : ""}
                >
                  Contact Us
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="navlinks">
            <Link
              href="/shop"
              className={router.pathname === "/shop" ? "active" : ""}
            >
              Shop
            </Link>
            <Link
              href="/skills"
              className={router.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Link>
            <Link
              href="/stories"
              className={router.pathname === "/stories" ? "active" : ""}
            >
              Stories
            </Link>
            <Link
              href="/about"
              className={router.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
            <Link
              href="/contactus"
              className={router.pathname === "/contactus" ? "active" : ""}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
