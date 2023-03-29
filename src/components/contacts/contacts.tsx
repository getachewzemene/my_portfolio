import React, { useEffect, useState } from "react";
import { animated, useSprings } from "@react-spring/web";
import { SocialIcon } from "react-social-icons";
import Typewriter from "typewriter-effect";

const ContactsPageView = ({ view }: any) => {
  const [display, setDisplay] = useState(true);

  const [springs, apis] = useSprings(5, (index) => ({
    from: {
      opacity: 0,
      y: -100,
    },
  }));

  useEffect(() => {
    if (view === "contacts") {
      setTimeout(() => {
        setDisplay(true);
        apis.start((index) => ({
          to: {
            y: 0,
            opacity: 1,
          },
          delay: index * 200,
        }));
      }, 800);
    } else {
      apis.start((index) => ({
        to: {
          y: -100,
          opacity: 0,
        },
        delay: index * 200,
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
          className=" first-screen pb-36 w-screen main-bg sm:mt-24 fixed "
          id="contactspage"
        >
          {/* <animated.div style={{...springs[0]}}>
                <button className="mt-5 ml-12 text-bold text-white font-sans font-bold uppercase text-4xl sm:text-5xl "> <span className="text-teal-400 font-bold mr-2">100.</span> Contacts </button>
                <hr className=' sm:w-1/2 w-5/6 sm:mt-2' />
            </animated.div> */}

          {/* <FlipMove></FlipMove> */}

          <div className=" flex flex-wrap justify-center mt-24 ">
            <animated.div
              style={{ ...springs[1] }}
              className="flex flex-col justify-center w-full sm:w-1/4  mx-12 mb-10 "
            >
              <div className="text-white text-xl  "> Bahir Dar, Ethiopia </div>
              <div className="text-white text-xl  "> +251945282035</div>
              <a
                href="mailto:getchze1221@gmail.com"
                className="  text-teal-400 text-md font-mono hover:underline hover:font-bold hover:cursor-pointer"
              >
                {" "}
                getchze1221@gmail.com{" "}
              </a>
            </animated.div>

            <div className="flex flex-col justify-center sm:w-1/3 mx-5 ">
              <animated.div
                style={{ ...springs[2] }}
                className=" text-center mb-5 text-xl text-gray-400 font-thin "
              >
                {" "}
                I am open for discussion :){" "}. Reach me out{" "}
              </animated.div>

              <animated.div
                style={{ ...springs[3] }}
                className="flex justify-center"
              >
                 <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://github.com/getachewzemene"
                  bgColor="white"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="https://www.linkedin.com/in/getachew-zemene-ba4457237/"
                  fgColor="white"
                />
                <SocialIcon
                  className="mx-3 hover:-translate-y-1 "
                  url="mailto:getchze1221@gmail.com"
                  bgColor="red"
                  fgColor="white"
                />
              </animated.div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactsPageView;
