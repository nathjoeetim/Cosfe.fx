"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { CgMenuMotion } from "react-icons/cg";
import styled from "styled-components";
import Logo from "./logoComponent";
import CustomText from "./customText";

export function SideBar() {
  return (
    <SideBarItem className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <CgMenuMotion size={30} color="white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#0c0e13] text-white ">
          <SheetHeader>
            <SheetTitle className="mt-5 flex flex-row items-center justify-center mb-3">
              <Logo />
            </SheetTitle>
            <SheetDescription className="w-full flex flex-col justify-center items-center">
              <span className="text-lg mb-3 w-[90%] text-center">
                A Better Way To Invest, <br />
                <CustomText> Crypto Currency and Forex </CustomText>
              </span>
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center  gap-4 py-4">
            <div className="flex w-full">
              <Input
                id="email"
                value=""
                type="email"
                className="col-span-3 text-slate-600 font-semibold"
                placeholder="PedroDuarte@gmail.com"
              />
            </div>
            <div className="flex w-full text-white font-semibold text-center">
              <p>
                By Submitting Your Mail You&apos;ve Accepted Our Newsletter
                <CustomText>
                  <h5 className="underline">Terms and Condition</h5>
                </CustomText>
              </p>
            </div>
          </div>
          <SheetFooter className="flex flex-row items-center justify-center">
            <SheetClose asChild>
              <Button type="submit">Subscribe to Newsletter</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </SideBarItem>
  );
}

const SideBarItem = styled.div`
  display: none;
  @media screen and (max-width: 688px) {
    display: flex;
  }
`;
