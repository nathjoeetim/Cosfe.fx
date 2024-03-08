"use client";

import styled from "styled-components";
import Logo from "./logoComponent";
import Lottie from "lottie-react";
import UnderLine from "./underline";
import { Card } from "./ui/card";
import FindPlan from "@/assests/svg/find_plan.json";
import openEnvelop from "@/assests/svg/open_envelop.json";
import cashout from "@/assests/svg/cash_out.json";
import growth from "@/assests/svg/growth.json";
import CustomText from "./customText";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function HowWeWork() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col gap-3 py-10 justify-center item-center W-[95%] mx-2">
      <HeaderWrapper className="gap-2 ">
        <h5 className="flex flex-row text-white text-lg font-semibold gap-2">
          How <Logo /> Works
        </h5>
        <UnderLine />
      </HeaderWrapper>
      <div className="flex flex-col items-center justify-center w-[90%] mx-auto text-white font-thin text-sm text-center">
        We&apos;re committed to providing fair access to the financial markets
        for everyone, not just the big players on Wall Street. That&apos;s why
        we offer the same institutional-level access to both companies and
        individuals alike.
      </div>
      <GridContainer className="p-5">
        <CustomCard
          data-aos="fade-up"
          className=" relative flex flex-col items-center justify-center gap-5 p-5 w-[260px] h-[250px] bg-slate-700 transition-transform duration-300 ease-in-out transform-gpu hover:-translate-y-2 hover:cursor-pointer"
        >
          <div className="w-[150px] h-[150px] ">
            <Lottie animationData={FindPlan} loop={true} />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <CustomText>
              <h4 className="font-bold text-xl">Choose a Plan</h4>
            </CustomText>
            <h4 className="text-white">To Start Investment</h4>
          </div>
        </CustomCard>
        <CustomCard
          data-aos="fade-up"
          className=" relative flex flex-col items-center justify-center gap-5 p-5 w-[260px] h-[250px] bg-slate-700 transition-transform duration-300 ease-in-out transform-gpu hover:-translate-y-2 hover:cursor-pointer"
        >
          <div className="w-[150px] h-[150px] ">
            <Lottie animationData={openEnvelop} loop={true} />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <CustomText>
              <h4 className="font-bold text-xl">Get Confirmation </h4>
            </CustomText>
            <h4 className="text-white">Of Your Deposit</h4>
          </div>
        </CustomCard>
        <CustomCard
          data-aos="fade-up"
          className=" relative flex flex-col items-center justify-center gap-5 p-5 w-[260px] h-[250px] bg-slate-700 transition-transform duration-300 ease-in-out transform-gpu hover:-translate-y-2 hover:cursor-pointer"
        >
          <div className="w-[150px] h-[150px] ">
            <Lottie animationData={growth} loop={true} />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <CustomText>
              <h4 className="font-bold text-xl">Watch Your</h4>
            </CustomText>
            <h4 className="text-white">Money Grow</h4>
          </div>
        </CustomCard>
        <CustomCard
          data-aos="fade-up"
          className=" relative flex flex-col items-center justify-center gap-5 p-5 w-[260px] h-[250px] bg-slate-700 transition-transform duration-300 ease-in-out transform-gpu hover:-translate-y-2 hover:cursor-pointer"
        >
          <div className="w-[150px] h-[150px] ">
            <Lottie animationData={cashout} loop={true} />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <CustomText>
              <h4 className="font-bold text-xl">Withdraw</h4>
            </CustomText>
            <h4 className="text-white">Investment</h4>
          </div>
        </CustomCard>
      </GridContainer>
    </div>
  );
}

export default HowWeWork;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  width: 100%;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  margin: 10px 0 5px 0;
  padding: 5px;
  box-sizing: border-box;
  place-items: center;
`;
const CustomCard = styled(Card)`
  transition: transform 1s ease;
`;

// class="relative isolate overflow-hidden rounded-2xl bg-gray-900 px-6 pb-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"

// the image
// absolute inset-x-16 m-auto w-[30rem] max-w-none rounded-md max-sm:w-[30rem] lg:-mt-24

// class="relative mt-16 hidden h-80 sm:block lg:mt-8"
