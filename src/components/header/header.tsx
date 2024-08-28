import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainMenu from "../utility/MainMenu";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  // Handle navbar background change on scroll
  const changeBackground = () => {
    setNavbar(window.scrollY >= 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Check if a route is active
  const isActiveLink = (routePath) => router.asPath === routePath;

  // Example dropdown items
  const pageItems = [
    {
      name: "User Login",
      routePath: "/page1",
    },
    {
      name: "Vendor Login",
      routePath: "/page2",
    },
  ];

  return (
    <>
      <header className={`header ${navbar ? "bg-white is-sticky" : "bg-white"}`}>
        <div className="header__container container">
          <div className="row justify-between items-center">
            <div className="col-auto mobile-col">
              <div className="d-flex items-center">
                <div className="mr-20 d-flex items-center">
                  <div className="mr-15 d-none md:d-flex">
                    <Link
                      href="/others-pages/login"
                      className="icon-user text-inherit text-22 text-white"
                    />
                  </div>
                </div>

                <Link href="/" className="header-logo mr-20">
                  <img src="/img/general/logo.png" alt="logo icon" />
                </Link>

                <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="row x-gap-20 items-center xxl:d-none">
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                </div>

                <div className="d-flex items-center ml-20 is-menu-opened-hide md:d-none">
                  <div className="dropdown ml-20">
                    <button
                      className="btn dropdown-toggle button px-30 fw-400 text-14 border-green-2 -outline-green-2 h-34 text-black"
                      id="dropdownMenuButton"
                      aria-expanded="false"
                      type="button"
                    >
                      Sign In / Register
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {pageItems.map((item, index) => (
                        <li
                          key={index}
                          className={`dropdown-item ${isActiveLink(item.routePath) ? "active" : ""}`}
                        >
                          <Link href={item.routePath}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
