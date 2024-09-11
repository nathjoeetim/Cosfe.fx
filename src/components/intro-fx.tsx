"use client";
import { useState } from "react";
import Image from "next/image";
import fx1 from "@/assests/fx_1.jpeg";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function IntroToForexMarket() {
  const [telegramHovered, setTelegramHovered] = useState<boolean>(false);
  const [whatsappIsHovered, setWhatsappIsHovered] = useState<boolean>(false);
  const [twitterHovered, settwitterHovered] = useState<boolean>(false);

  const handleMouseOverOnTelegram = () => {
    setTelegramHovered(true);
  };

  const handleMouseOutOnTelegram = () => {
    setTelegramHovered(false);
  };

  const handleMouseOverOnWhatsapp = () => {
    setWhatsappIsHovered(true);
  };

  const handleMouseOutOnWhatsapp = () => {
    setWhatsappIsHovered(false);
  };

  const handleMouseOverOnTwitter = () => {
    settwitterHovered(true);
  };

  const handleMouseOutOnTwitter = () => {
    settwitterHovered(false);
  };

  return (
    <main className="flex flex-col gap-7 px-4 lg:px-9">
      <div className="w-full h-fit font-bold text-4xl text-white">
        Understanding the forex market
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col text-justify">
          Forex, or Foreign Exchange, is the global marketplace for buying and
          selling currencies. It&apos;s the largest and most liquid financial
          market in the world, with trillions of dollars traded daily. Unlike
          traditional stock markets, Forex operates 24 hours a day, five days a
          week, allowing traders to react quickly to global events and market
          movements.
        </div>
        <div className="lg:flex-row w-full gap-5 justify-center lg:justify-between items-center ">
          <Image
            src={fx1.src}
            height={400}
            width={400}
            alt="image"
            className="hidden lg:flex "
          />
          <span className="text-lg text-center italic  item-center jsutify-center w-full">
            <span className="text-5xl text-yellow-300">&quot; </span>
            Risk comes from not knowing what you&apos;re doing.{" "}
            <span className="text-5xl text-yellow-300"> &quot;</span>
            <br /> — Warren Buffett
          </span>
        </div>
        <span className="text-justify">
          In Forex trading, participants buy one currency while simultaneously
          selling another, making profits from the fluctuations in exchange
          rates. This market attracts everyone from large financial institutions
          to individual traders, all seeking to capitalize on the ever-changing
          values of global currencies.
        </span>
        <span className="text-lg text-center italic mt-8 mb-10">
          <span className="text-5xl text-yellow-300">&quot; </span>
          The art of Forex is in the balance: knowing when to hold steady and
          when to seize the moment.
          <span className="text-5xl text-yellow-300"> &quot;</span>
          <br /> — Unknown
        </span>
        <div className="flex flex-col gap-5 w-full mt-11">
          <h3 className="font-serif text-2xl font-bold">
            what to know more ? contact us
          </h3>
          <div className="flex flex-row items-center justify-start gap-5">
            {/* icons */}
            <FaTelegram
              size={40}
              color="white"
              className={`cursor-pointer ${
                telegramHovered ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={handleMouseOverOnTelegram}
              onMouseOut={handleMouseOutOnTelegram}
              style={{
                transition: "all 0.3s ease", // Add transition for smooth animation
              }}
            />
            <FaWhatsapp
              size={40}
              color="white"
              className={`cursor-pointer ${
                whatsappIsHovered ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={handleMouseOverOnWhatsapp}
              onMouseOut={handleMouseOutOnWhatsapp}
              style={{
                transition: "all 0.3s ease", // Add transition for smooth animation
              }}
            />
            <FaXTwitter
              size={40}
              color="white"
              className={`cursor-pointer ${
                twitterHovered ? "opacity-100" : "opacity-50"
              }`}
              onMouseOver={handleMouseOverOnTwitter}
              onMouseOut={handleMouseOutOnTwitter}
              style={{
                transition: "all 0.3s ease", // Add transition for smooth animation
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default IntroToForexMarket;
