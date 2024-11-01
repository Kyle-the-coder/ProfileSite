import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import fb from "../../assets/fb.png";
import insta from "../../assets/insta.png";
import gsap from "gsap";
import "./navbar.css";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import LottieAnimation from "../LottieAnimation";

export function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoverIndex, setHoverIndex] = useState(null);
  const navigate = useNavigate();

  //Phone States
  const [isHamburgerActive, setIsHamburgerActive] = useState(null);
  const [isAnimationActive, setIsAnimtionActive] = useState(null);

  const links = [
    { linkName: "About Me", link: "/aboutme" },
    { linkName: "Services", link: "/services" },
    { linkName: "Projects", link: "/projects" },
  ];

  function handleHomeNavigation() {
    navigate("/");
  }
  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  function handleActivateHamburger() {
    if (!isHamburgerActive) {
      setIsHamburgerActive(true);
      setIsAnimtionActive(true);
    } else if (isHamburgerActive) {
      setIsAnimtionActive(false);
      gsap.to(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.4,
        ease: "power4.in",
        onComplete: () => {
          setIsHamburgerActive(false);
        },
      });
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isHamburgerActive) {
      gsap.from(".navbar-phone-dropdown-container", {
        x: "-100%",
        duration: 1.2,
        ease: "power3.inOut",
      });
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isHamburgerActive]);

  useEffect(() => {
    if (hoverIndex !== null) {
      gsap.from(".active1", 0.8, {
        scaleX: 0,
        transformOrigin: "50% 50%",
        ease: "power4.out",
      });
    }
  }, [hoverIndex]);
  return (
    <div className="navbar-main-container">
      {windowWidth <= 800 ? (
        //Phone View
        <>
          <img
            src={logo}
            className="navbar-logo"
            onClick={() => handleHomeNavigation()}
          />

          <div
            className="navbar-phone-hamburger"
            onClick={() => handleActivateHamburger()}
          >
            <LottieAnimation
              isHamburgerActive={isHamburgerActive}
              isAnimationActive={isAnimationActive}
            />
          </div>

          {isHamburgerActive && (
            <div className="navbar-phone-dropdown-container">
              {links.map((link, index) => {
                return (
                  <div key={link.linkName}>
                    <h3
                      className="dropdown-link-name"
                      onClick={() => {
                        navigate(link.link);
                        handleActivateHamburger();
                      }}
                    >
                      {link.linkName}
                    </h3>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        //Default Monitor View
        <>
          <div className="navbar-logo-container">
            <Button
              padding="10px 17px 10px 17px"
              buttonName={"Contact"}
              size="1.5rem"
            />
            <img
              src={logo}
              className="navbar-logo"
              onClick={() => handleHomeNavigation()}
            />
            <div className="navbar-socials-container">
              <img
                className="social-icon"
                style={{ marginRight: "15%" }}
                src={insta}
              />
              <img className="social-icon" src={fb} />
            </div>
          </div>
          <div className="navbar-link-container">
            {links.map((link, index) => {
              return (
                <h3
                  className="navbar-link f1-8"
                  key={link.linkName}
                  onClick={() => navigate(link.link)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  {link.linkName}
                  {hoverIndex === index && <div className="active1"></div>}
                </h3>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
