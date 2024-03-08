"use client";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import TradingView from "@/components/ui/tradingViewComponent";
import Logo from "@/components/logoComponent";
import { NavigationMenuComponent } from "@/components/navigationMenu";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsQuestionSquare } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import styled from "styled-components";
import { SideBar } from "@/components/sideBar";
import Head from "next/head";
import Fotter from "@/components/fotter";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const metadata: Metadata = {
  title: " Cosfe.FX",
  description: "The Best Forex Consultancy Firm ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isTopNavFixed, setIsTopNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a threshold value based on your navbar height
      const threshold = 95; // Change this value according to your needs

      if (scrollY > threshold && !isTopNavFixed) {
        setIsTopNavFixed(true);
      } else if (scrollY <= threshold && isTopNavFixed) {
        setIsTopNavFixed(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTopNavFixed]);

  return (
    <html lang="en">
      <Head>
        <title>
          <Logo />
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col bg-slate-600 w-full mx-auto">
          <div className="relative flex flex-col items-center justify-center max-w-[1440px] bg-zinc-950 dark:bg-white mx-auto w-full ">
            <TradingView />
            <div
              className={`flex flex-row items-center justify-between w-full p-3 gap-7 ${
                isTopNavFixed
                  ? "fixed top-0 w-full r-0 l-0 bg-transparent z-50"
                  : ""
              } `}
              style={{
                borderBottom: "1px solid white",
                backdropFilter: isTopNavFixed ? "blur(5px)" : "none",
                // opacity: 1,
              }}
            >
              <SideBar />
              <Logo />
              <SideBarLastItem className="flex flex-row items-center justify-between gap-10 pr-11 md:pr-5 sm:pr-0">
                <SideBarItem className="mr-10">
                  <NavigationMenuComponent />
                </SideBarItem>
                <div className="flex flex-row justify-end items-center gap-5">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        <RiCustomerService2Fill
                          size={20}
                          color="yellow"
                          className="cursor-pointer"
                        />
                      </TooltipTrigger>
                      <TooltipContent className="opacity-40">
                        <p>Customer Service</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        {" "}
                        <BsQuestionSquare
                          size={20}
                          color="yellow"
                          className="cursor-pointer"
                        />
                      </TooltipTrigger>
                      <TooltipContent className="opacity-40">
                        <p>Frequently asked Question</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </SideBarLastItem>
            </div>
            <div className="flex flex-col p-3 gap-5 w-full">{children}</div>
            <Fotter />
          </div>
        </div>
      </body>
    </html>
  );
}

const SideBarItem = styled.div`
  display: flex;
  margin-right: 1rem;
  @media screen and (max-width: 688px) {
    display: none;
    margin-right: 0px;
  }
`;

const SideBarLastItem = styled.div`
  padding-right: 49px;
  @media screen and (max-width: 688px) {
    padding: 1px;
  }
`;
