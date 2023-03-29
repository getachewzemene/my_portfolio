import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import CircularImagesComponent from "./CircularImages";
import { BrowserView, MobileView } from "react-device-detect";
import Typewriter from "typewriter-effect";

const AboutMeView = ({ view }: any) => {
  const [display, setDisplay] = useState(false);

  const [springs, api] = useSpring(() => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "about") {
      setTimeout(() => {
        setDisplay(true);
        api.start(() => ({
          to: {
            y: 0,
            opacity: 1,
          },
        }));
      }, 1000);
    } else {
      api.start(() => ({
        to: {
          y: -100,
          opacity: 0,
        },
      }));
      setTimeout(() => {
        setDisplay(false);
      }, 800);
    }
  }, [view]);

  return (
    <>
      {display && (
        <div
          className=" main-bg sm:py-32 md:py-0 w-screen flex flex-col justify-start "
          id="aboutmepage"
        >
          <animated.div
            style={{
              ...springs,
            }}
            className=" hidden md:inline text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="font-size: 50px;">Bio:</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          {/* Mobile view */}
          <animated.div
            style={{
              ...springs,
            }}
            className="md:hidden text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl ml-12 mt-12"
          >
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    '<span style="font-size: 50px;">About me</span>'
                  )
                  .start();
              }}
            />
          </animated.div>

          <animated.div
            style={{
              ...springs,
            }}
          >
            <div className="flex flex-row w-screen mx-auto pb-24">
              <div className=" flex-1">
                <div className=" flex-col px-12 sm:px-40 min-w-min ">
                  <p className=" font-sans text-gray-200 my-4 text-justify ">
                    I am Getachew Zemene, Software Engineer based in Ethiopia.
                    I am born and raised in South Gonder, Ethiopia. I started my
                    developer journey since joining Bahir Dar University,2018 G.C studying basic Web development(HTML,CSS and JS) and C++. I continued my BSc degree in Software Engineering at Bahir Dar Institute of Technology (BiT),Bahir Dar University, 2022.
                  </p>
                  <p className=" font-sans text-gray-200 my-4  text-justify ">
                    I started my first job as{" "}
                    <span className="text-teal-200 font-bold">
                     Flutter Developer
                    </span>{" "}
                    (2021) at Elda Software,Ethiopia.I had worked on Agriculture based project which is developed using Flutter and Laravel.
                  
                    <span className="text-teal-200 font-bold">
                      {" "}
                      Front-end Developer{" "}
                    </span>
                    started from 5 Nov, 2022 to present I am woking as a React JS developer at <a href="https://www.tern.systems/" className="text-teal-200"> Tern Systems </a>.
                  </p>
                  <p className=" font-sans text-gray-200 my-4 text-justify ">
                    As a developer I am passionate about learning new technologies and building new things. I am always looking for new opportunities to learn and grow. I am a fast learner and a team player. 
                    In my spare time I like reading books, hiking, watching tech-based documentaries and playing video games.

                  </p>
                </div>
              </div>
              <div className=" flex-1 md:flex justify-center hidden md:visible ">
                <div className="flex-1 flex flex-col justify-center ">
                  <div className=" fixed">
                    <CircularImagesComponent />
                  </div>
                  <StaticImage
                    className="ml-24 mt-24 w-64 border-2 rounded-full border-teal-500 p-5  "
                    src="../../assets/images/profile.jpg"
                    alt="Getachew Zemene"
                  />
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      )}
    </>
  );
};

export default AboutMeView;
