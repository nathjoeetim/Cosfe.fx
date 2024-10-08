import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

import Logo from "./logoComponent";
import CustomText from "./customText";

function Fotter() {
  return (
    <div className="bg-slate-700 w-full flex flex-col items-start justify-start p-2 gap-5 mt-6">
      <GridContainer className="w-full items-start justify-start gap-4">
        <Logo />
        <div className="flex flex-col gap-4 w-full mb-5">
          <h4 className="text-slate-400 font-bold text-xl">Company</h4>
          <span className="text-base font-semibold cursor-pointer text-slate-100">
            About Us
          </span>
          <span className="text-base font-semibold cursor-pointer text-slate-100">
            Terms And Condition
          </span>
          <span className="text-base font-semibold cursor-pointer text-slate-100">
            Privacy Policy
          </span>
        </div>
        <div className="flex flex-col gap-4  w-full">
          <h4 className="text-slate-400 font-bold text-xl">Help</h4>
          <span className="text-base font-semibold cursor-pointer text-slate-100">
            support@bigbankFX.com
          </span>
          <span className="text-base font-semibold cursor-pointer text-slate-100">
            Contact Us
          </span>
          <span className="text-base font-semibold cursor-pointer text-slate-100">
            FAQ&apos;s
          </span>
        </div>
        <div className="flex flex-row gap-7 p-5 items-center justify-center w-full">
          <FaXTwitter size={50} className="cursor-pointer p-3 " />
          <SlSocialInstagram
            size={50}
            className="cursor-pointer p-3 text-indigo-600	"
          />
          <SlSocialGithub
            color="white"
            size={50}
            className="cursor-pointer p-3"
          />
        </div>
      </GridContainer>
      <div className="text-slate-400 font-medium text-xs w-full flex felx-row items-center justify-center gap-2 underline">
        UI by{" "}
        <a href="https://nathjoeetim12.vercel.app/">
          <CustomText> @Nathjoeetim</CustomText> All Right Reserved
        </a>
      </div>
    </div>
  );
}

export default Fotter;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 10px;
  row-gap: 20px;
  margin: 10px 0 5px 0;
  padding: 10px;
  box-sizing: border-box;
  place-items: center;
`;
