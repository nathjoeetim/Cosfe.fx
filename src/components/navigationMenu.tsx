"use client";

import * as React from "react";
import Link from "next/link";
import stock from "@/assests/stock.jpeg";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "",
    description:
      "We are an international financial company engaged in investment activities, which are related to trading on financial markets and cryptocurrency exchanges performed by qualified professional traders.",
  },
  {
    title: "Our Services",
    href: "/docs/primitives/hover-card",
    description:
      "Forex is a portmanteau of foreign currency and exchange. Foreign exchange is the process of changing one currency into another currency for a variety of reasons, usually for commerce, trading, or tourism. According to a recent triennial report",
  },
  {
    title: "Legal Information",
    href: "/docs/primitives/progress",
    description: "Download PDF to go through the legal information here",
  },
];

export function NavigationMenuComponent() {
  return (
    <NavigationMenu className="pl-10">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white ">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-700">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex text-white h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-5 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={stock.src}
                      alt="stock"
                      height={120}
                      width={150}
                      className="rounded-sm"
                    />
                    <span className="mb-2 mt-4 text-lg font-medium">
                      Stocks
                    </span>
                    <span className="text-sm leading-tight text-muted-foreground">
                      All US Exchanges + Darkpools
                    </span>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem
                href="/fotrex_market"
                title="Currencies"
                className="text-white"
              >
                <div className="flex flex-row items-center text-white gap-1">
                  <Image
                    src="https://cdn.sanity.io/images/dhlwe0i3/production/d38a3d98e25ece11b4f497aefb8bf6e16bca0bea-32x32.svg?w=64&q=75&fm=webp"
                    height={24}
                    width={24}
                    alt="cur"
                  />
                  Forex Exchange
                </div>
              </ListItem>
              <ListItem
                href="/docs/installation"
                title="Platform"
                className="text-white"
              >
                <div className="flex flex-row items-center gap-2 text-white">
                  <Image
                    src="https://cdn.sanity.io/images/dhlwe0i3/production/a5193d34b205a6f240ae18e1a5d9c3f3d1a630c9-49x48.svg?w=128&q=75&fm=webp"
                    height={24}
                    width={24}
                    alt="cur"
                  />
                  <div className="flex flex-col gap-1">
                    <span>MT4</span>
                    <span>OctaFX</span>
                    {/* <span>MT4</span> */}
                  </div>
                </div>
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Currrent Active Account "
                className="text-white"
              >
                70
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-white ">
            Other Information
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-slate-700">
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] text-white">
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <span className="text-sm font-medium leading-none">{title}</span>
          <span className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
