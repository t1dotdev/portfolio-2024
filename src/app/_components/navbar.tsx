"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "./theme-switcher";
import Ascii from "./ascii";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "~/components/ui/button";

export default function Nav({ index }: { index: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { theme } = useTheme();

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="fixed p-2"
      // shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarBrand>
          {/* <Logo /> */}
          <div className="text-lg font-black">topone</div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-6 md:flex" justify="center">
        <NavbarItem isActive={index === "home"}>
          <Link
            color={index === "home" ? "primary" : "foreground"}
            href="/"
            className="cursor-pointer hover:text-primary"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "about"}>
          <Link
            color={index === "about" ? "primary" : "foreground"}
            href="/about"
            className="cursor-pointer hover:text-primary"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "projects"}>
          <Link
            color={index === "projects" ? "primary" : "foreground"}
            href="/projects"
            className="cursor-pointer hover:text-primary"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={index === "services"}>
          <Link
            color={index === "services" ? "primary" : "foreground"}
            href="/services"
            className="cursor-pointer hover:text-primary"
          >
            Services
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive={index === "contact"}> */}
        {/*   <Link */}
        {/*     color={index === "contact" ? "primary" : "foreground"} */}
        {/*     href="/contact" */}
        {/*     className="cursor-pointer hover:text-primary" */}
        {/*   > */}
        {/*     Contact */}
        {/*   </Link> */}
        {/* </NavbarItem> */}
      </NavbarContent>
      <NavbarContent className="gap-2" justify="end">
        <NavbarItem className="">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="flex md:hidden">
          <Link href="https://github.com/petchxx">
            <Button color="primary">
              {/* <TbBrandGithub size={20} /> */}

              <Icon icon="line-md:github-loop" fontSize={20} />
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="https://github.com/t1dotdev">
            <Button color="primary">
              {/* <TbBrandGithub size={20} /> */}
              <Icon icon="line-md:github-loop" fontSize={20} />
              <p>T1DOTDEV</p>
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            color={index === "home" ? "primary" : "foreground"}
            className="w-full"
            href="/"
            size="lg"
          >
            Home
          </Link>
          <Link
            color={index === "about" ? "primary" : "foreground"}
            className="w-full"
            href="/about"
            size="lg"
          >
            About
          </Link>
          <Link
            color={index === "projects" ? "primary" : "foreground"}
            className="w-full"
            href="/projects"
            size="lg"
          >
            Projects
          </Link>
          {/* <Link */}
          {/*   color={index === "contact" ? "primary" : "foreground"} */}
          {/*   className="w-full" */}
          {/*   href="/contact" */}
          {/*   size="lg" */}
          {/* > */}
          {/*   Contact */}
          {/* </Link> */}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
