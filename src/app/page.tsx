"use client";
import CustomText from "@/components/customText";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import traderHande from "@/assests/manhand.png";
import { Input } from "@/components/ui/input";
import { FaSearchDollar } from "react-icons/fa";
import { Card } from "@/components/ui/card";
import HowWeWork from "@/components/howWeWork";
import OurFlexibleInVestment from "@/components/investmentFlexibility";
import InvestmentPlan from "@/components/ourPlan";
import Testimonies from "@/components/testimony";

export default function Home() {
  return (
    <div className="flex flex-col mx-auto w-[97%] p-1 bg-transparent">
      <WhatNew className="flex flex-row items-center justify-start gap-1">
        <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-white ring-1 ring-inset ring-yellow w-[110px] flex flex-row items-center justify-center ">
          What&apos;s New
        </span>
        <HoverDiv className=" gap-3 rounded-md font-medium text-sm">
          S3 files included in all our plans{" "}
          <MdOutlineKeyboardArrowRight size={20} color="gold" />
        </HoverDiv>
      </WhatNew>
      {/*  */}
      <TopCard className="w-full p-5 flex flex-row ">
        <div className="flex flex-col gap-5 flex-1 font-bold text-white ">
          <span className="text-4xl">
            A Better Way To Invest, <br />
            <CustomText> Crypto Currency and Forex </CustomText>
          </span>
          <span className="font-normal text-sm">
            At Cosfe .FX, we&apos;re on a mission to modernize the financial
            industry. We believe that the industry runs on currency, and
            we&apos;re here to give you the finicial independence you deserve.
          </span>
          <span className="font-normal text-lg">
            Invest and earn with Up to <CustomText> 2.5% - 5.0% </CustomText>
            daily profit
          </span>
          <div className="flex flex-col w-[250px] relative">
            <Input
              type="text"
              placeholder="Search here..."
              className="text-slate-600 font-semibold"
            />
            <AnimatedBackgroundDiv className=" flex-row absolute top-1/2 right-[-10px] items-center justify-center transform h-full flex -translate-y-1/2 cursor-pointer bg-gold z-10 p-5 text-base text-slate-700">
              <FaSearchDollar size={18} className="" />
            </AnimatedBackgroundDiv>
          </div>
        </div>
        <Image
          src={traderHande.src}
          height={250}
          width={250}
          alt="phone "
          className="flex-[0.7] w-full h-full traderHand"
        />
      </TopCard>
      <Activities className="flex flex-row items-center justify-between mt-5">
        <div className="flex flex-row items-center gap-5 mt-3">
          <div className="text-white font-bold flex flex-row items-center w-[120px]">
            <h4 className="font-bold text-5xl text-orange-300">4</h4>
            <span className="flex flex-row font-medium text-xs">
              Years of experience
            </span>
          </div>
          <div className="text-white font-bold flex flex-row items-center w-[170px]">
            <h4 className="font-bold text-5xl text-orange-300">70</h4>
            <span className="flex flex-row font-medium text-xs">
              Active Trading Account
            </span>
          </div>
        </div>
        <CustomCustomerCard className="flex flex-row items-center gap-2 p-2 rounded-full text-xl font-bold mt-2">
          5K+ satisfied customers
        </CustomCustomerCard>
      </Activities>
      <HowWeWork />
      <OurFlexibleInVestment />
      <InvestmentPlan />
      <Testimonies />
    </div>
  );
}

const TopCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-top: 2rem;

  @media screen and (max-width: 973px) {
    flex-direction: column;

    & div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      & span {
        width: 80%;
        text-align: center;
      }
    }

    & .traderHand {
      width: 80%;
      height: 100px;
    }
  }
`;

const Activities = styled.div`
  @media screen and (max-width: 612px) {
    flex-direction: column-reverse;
    gap: 10px;
  }
`;

const CustomCustomerCard = styled(Card)`
  @media screen and (max-width: 973px) {
    flex-direction: column;
    text-align: center;
    font-size: medium;
  }
`;

const AnimatedBackgroundDiv = styled.div`
  background: transparent;
`;

const HoverDiv = styled.div`
  color: white;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: background-position 0.3s ease;
  background-color: transparent;

  cursor: pointer;

  @media screen and (max-width: 479px) {
    font-size: small;
    text-align: center;
    padding: 0.5px;
  }
  &:hover {
    background-color: #6366f1;
    background-position: -100% 0;
    border: 1px solid grey;
    transition: 1s ease-in-out;
  }
`;

const WhatNew = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 479px) {
    justify-content: space-between;
  }
`;
