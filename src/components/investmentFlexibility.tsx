import styled from "styled-components";
import "aos/dist/aos.css";
import Aos from "aos";
import CustomText from "./customText";
import { InvestmentFlexibility } from "./data";
import growth from "@/assests/svg/growth.json";
import { useEffect, useState } from "react";

let Lottie: any;
if (typeof window !== "undefined") {
  Lottie = require("lottie-react").default;
}

function OurFlexibleInVestment() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    if (Lottie) {
      setLottieLoaded(true);
    }
  }, []);
  return (
    <Container className="flex flex-row items-center justify-between gap-3 p-10 mb-4">
      <div className="flex flex-col items-start justify-start flex-[1.5] gap-5">
        <h4 className="text-white text-4xl font-bold text-center">
          Your Flexibility in Investment
        </h4>
        <p className=" gap-3 text-base text-slate-500 dark:text-slate-400 text-justify">
          Welcome to Your Flexibility in Investment,{" "}
          <CustomText>financial goals meet adaptable investment </CustomText>
          where your strategies tailored to your needs. We understand that every
          investor is unique, with varying objectives, risk tolerances, and
          timelines. That&apos;s why we offer a range of flexible investment
          options designed to empower you on your financial journey.
          <br />
          <br />
          With Your Flexibility in Investment,
          <CustomText>
            {" "}
            you&apos;re not confined to a one-size-fits-all approach
          </CustomText>
          . Whether you&apos;re planning for retirement, saving for a major
          purchase, or seeking to grow your wealth, we provide the tools and
          expertise to help you navigate the ever-changing landscape of the
          financial markets.
        </p>
      </div>
      <SecondContainer className="flex flex-col flex-1 p-2 w-full items-center justify-center">
        <div>
          {InvestmentFlexibility.map(element => {
            return (
              <div
                data-aos="fade-right"
                key={element.id}
                className="flex flex-row p-2 gap-2 items-center w-[340px]"
              >
                <span className="flex bg-slate-700 rounded-full p-5 text-white font-extrabold text-xl">
                  {`0${element.id}`}
                </span>
                <h5 className="text-base text-white font-medium">
                  {element.text}
                </h5>
              </div>
            );
          })}
        </div>
        {lottieLoaded && (
          <div className="w-[190px] h-[200px] motionImage ">
            <Lottie animationData={growth} loop={true} />
          </div>
        )}
      </SecondContainer>
    </Container>
  );
}

export default OurFlexibleInVestment;

const Container = styled.div`
  @media screen and (max-width: 973px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }
  @media screen and (max-width: 495px) {
    padding: 0.4rem;
  }
`;

const SecondContainer = styled.div`
  & .motionImage {
    display: none;
  }
  @media screen and (max-width: 973px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    & .motionImage {
      display: flex;
    }
  }
  @media screen and (max-width: 719px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    & .motionImage {
      display: flex;
    }
  }
`;
