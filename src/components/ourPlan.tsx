"use client";

import styled from "styled-components";
import UnderLine from "./underline";
import { Card } from "./ui/card";
import { AllPlans } from "./data";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

interface CustomCardProps {
  backgroundimagemobile: string;
}

function InvestmentPlan() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="flex flex-col w-full gap-5 p-5">
      <HeaderWrapper className="gap-1 ">
        <h5 className="flex flex-row text-white text-3xl font-bold gap-2">
          Investment Plan
        </h5>
        <UnderLine />
      </HeaderWrapper>
      <div className="flex flex-col items-center justify-center w-[90%] mx-auto text-white font-thin text-sm text-center">
        We&apos;re committed to providing fair access to the financial markets
        for everyone, not just the big players on Wall Street. That&apos;s why
        we offer affordable investment packages for both companies and
        individuals.
      </div>
      <GridContainer className="w-full justify-evenly">
        {AllPlans.map((element, index) => {
          return (
            <CustomCard key={index} className="gap-6" data-aos="fade-up">
              <div className="flex flex-col text-center items-center justify-start font-bold text-2xl">
                {element.header}
              </div>
              {element.data.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start w-full"
                  >
                    <div className="flex flex-row items-center justify-between w-full">
                      <h5 className="text-base text-slate-700 font-medium">
                        {element.tittle}
                      </h5>
                      <span className="text-green-600 font-semibold text-sm">
                        {element.item}
                      </span>
                    </div>
                  </div>
                );
              })}
            </CustomCard>
          );
        })}
      </GridContainer>
    </div>
  );
}

export default InvestmentPlan;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
  row-gap: 20px;
  margin: 10px 0 5px 0;
  padding: 5px;
  box-sizing: border-box;
  place-items: center;
`;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  height: 370px;
  padding: 10px;
  background-image: url(https://img.freepik.com/free-photo/gold-abstract-background-abstract-oil-bubble-texture-wallpaper_53876-142976.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 1s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(5px);
  }
`;
