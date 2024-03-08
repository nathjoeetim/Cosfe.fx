"use client";
import React from "react";
import styled from "styled-components";
import UnderLine from "./underline";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonies() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col w-full gap-5 p-5 mt-4">
      <HeaderWrapper className="gap-1 ">
        <h5 className="flex flex-row text-white text-3xl font-bold gap-2">
          Testimony
        </h5>
        <UnderLine />
      </HeaderWrapper>
      <div className="w-full items-center flex flex-col justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          setApi={setApi}
          className="w-[270px] h-[90px]:"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="">
                <Card className="w-[268px] h-[190px]: basis-1/3">
                  <CardContent className="flex aspect-square items-start gap-3 justify-center p-6">
                    <div className="flex flex-col items-center justify-start gap-4">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col justify-between items-center">
                        <p className="text-xs text-slate-700 font-normal text-center h-[150px] overflow-hidden overflow-ellipsis w-full p-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ullam a, soluta autem ut vitae dolores? Lorem
                          ipsum dolor, sit amet consectetur adipisicing elit.
                          Atque minus dicta debitis, nisi sit cum perferendis
                          dignissimos architecto magni voluptas et! Animi
                          aliquam ex soluta, exercitationem cum nisi suscipit
                          deleniti?
                        </p>
                        <div className="flex flex-row w-full mt-2 items-center justify-end">
                          <span className="font-medium text-sm">
                            &quot;<span className="text-black">User Name</span>
                            &quot;{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground text-slate-400">
          {current} of {count}
        </div>
      </div>
    </div>
  );
}

export default Testimonies;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
