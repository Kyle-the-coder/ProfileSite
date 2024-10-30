import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./imggrid.css";
import rjp from "../../assets/rjp.png";
import rms from "../../assets/rms.png";
import poke from "../../assets/poke.png";
import apc from "../../assets/apc.png";
import Loader from "../Loader/Loader";
import { useInView } from "react-intersection-observer";

const ImgGrid = ({ setIsFirstRender }) => {
  const [images1, setImages1] = useState([rjp, rms]);
  const [images2, setImages2] = useState([apc]);
  const [images3, setImages3] = useState([poke]);
  const [loading, setLoading] = useState(false);
  const imgArr1 = ["Sapphire Ring", "Emerald Ring"];
  const imgArr2 = ["Diamond Earrings"];
  const imgArr3 = ["Wedding", "Engagement"];
  const [ref, inView] = useInView({});

  function findArr(arr) {
    const ranIndex = Math.floor(Math.random() * arr.length);
    return arr[ranIndex];
  }

  useEffect(() => {
    if (inView) {
      gsap.to(".img-grid-display", {
        duration: 75.2,
        yPercent: -100,

        delay: 0.5,
      });
      gsap.to(".img-grid-display-reverse", {
        duration: 75.2,
        yPercent: 80,
        ease: "slow(0.3,0.4,false)",
        delay: 0.5,
      });
    }
  }, [inView]);

  console.log(images1);

  return (
    <div className="img-grid-container" ref={ref}>
      <div className="img-grid">
        {loading ? (
          <div className="spinner-container">
            {/* Create 18 card elements */}
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="spinner-card">
                <Loader />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="img-grid-display">
              <img
                id="forward"
                src={rjp}
                alt={"picture"}
                className="img-display-img"
              />
              <img
                id="forward"
                src={poke}
                alt={"picture"}
                className="img-display-img"
              />
            </div>
            <div className="img-grid-display-reverse">
              <img
                id="reverse"
                src={apc}
                alt={"picture"}
                className="img-display-img"
              />
            </div>
            <div className="img-grid-display">
              <img
                id="forward"
                src={rms}
                alt={"picture"}
                className="img-display-img"
              />
            </div>
          </>
        )}{" "}
      </div>
    </div>
  );
};

export default ImgGrid;
