"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Skeleton,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Nav from "./_components/navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ThemeSwitcher } from "./_components/theme-switcher";

export default function HomePage() {
  const router = useRouter();

  const moveUp = {
    init: {
      y: "300px",
      opacity: 0,
    },
    end: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 16,
        ease: "easeOut",
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const fadeIn = {
    init: {
      opacity: 0,
    },
    end: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 18,
        delay: 2,
        duration: 0.5,
      },
    },
  };

  const [imageLoaded, setImageLoaded] = useState(false);

  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
          delay: 2,
        },
      },
    },
  };

  const flyingIcons = {
    animate: {
      y: [0, -10, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 4,
          ease: "easeInOut",
        },
      },
    },
  };

  const zoomIn = {
    scale: 1.1,
    transition: { duration: 0.5, type: "spring" },
  };

  const [imageHover, setImageHover] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1038);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <main className="">
      <Nav index="home" />

      {/* BODY */}
      {/* First row */}
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-2 justify-center gap-4 p-4 lg:grid-cols-4">
        <motion.div
          className="order-1 col-span-2"
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: "0",
          }}
          transition={{
            type: "spring",
            damping: 18,
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
            <Card className="h-full cursor-default rounded-3xl p-4">
              <CardBody className="justify-center p-4">
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
                  <div
                    className="h-52 w-52"
                    onMouseEnter={() =>
                      !isMobileOrTablet && setImageHover(true)
                    }
                    onMouseLeave={() =>
                      !isMobileOrTablet && setImageHover(false)
                    }
                    style={{ perspective: "500px" }}
                  >
                    <motion.div
                      initial={{ rotateY: 0 }}
                      animate={{
                        rotateY: isMobileOrTablet ? 0 : imageHover ? -180 : 0,
                      }}
                      transition={{
                        type: "spring",
                        damping: 18,
                        ease: "easeOut",
                      }}
                      // whileHover={{
                      //   rotateY: -190,
                      //   transition: {
                      //     type: "spring",
                      //     damping: 18,
                      //     duration: 0.5,
                      //   },
                      // }}
                    >
                      <Skeleton
                        className="group h-52 min-w-52 rounded-3xl"
                        isLoaded={imageLoaded}
                      >
                        {/* <div className="bg-content1 hidden group-hover:flex group-hover:opacity-100 justify-center items-center shadow-medium w-52 h-52 rounded-3xl"> */}
                        {/*   <Image */}
                        {/*     src="/assets/logo.svg" */}
                        {/*     className="pointer-events-none ring-offset-default-foreground scale-x-[-1]" */}
                        {/*     alt="Petchx Panuphong Burakitphachai" */}
                        {/*     width={100} */}
                        {/*     height={100} */}
                        {/*     onLoad={() => setImageLoaded(true)} */}
                        {/*     onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true */}
                        {/*   /> */}
                        {/* </div> */}
                        {/* <Image */}
                        {/*   src="/assets/petchx.png" */}
                        {/*   className="pointer-events-none object-cover rounded-3xl" */}
                        {/*   fill={true} */}
                        {/*   alt="Petchx Panuphong Burakitphachai" */}
                        {/*   onLoad={() => setImageLoaded(true)} */}
                        {/*   onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true */}
                        {/* /> */}
                        {imageHover ? (
                          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-content1 shadow-medium">
                            <div className="scale-x-[-1] text-6xl font-black">
                              T1
                            </div>
                            {/* <Image */}
                            {/*   src={"/assets/logo.svg"} */}
                            {/*   // src={"/assets/petchx.png"} */}
                            {/**/}
                            {/*   className="pointer-events-none scale-x-[-1] ring-offset-default-foreground" */}
                            {/*   alt="Petchx Panuphong Burakitphachai" */}
                            {/*   width={126} */}
                            {/*   height={126} */}
                            {/*   onLoad={() => setImageLoaded(true)} */}
                            {/*   onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true */}
                            {/* /> */}
                          </div>
                        ) : (
                          <Image
                            src={"/assets/petchx.png"}
                            // src="/assets/logo.gif"
                            className="pointer-events-none h-full w-full rounded-3xl object-cover"
                            fill={true}
                            alt="Petchx Panuphong Burakitphachai"
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                          />
                        )}
                      </Skeleton>
                    </motion.div>
                  </div>

                  <CardFooter className="w-full flex-col items-start justify-start">
                    <div className="flex items-end gap-1">
                      <h1 className="mt-2 opacity-50">Full Stack Developer</h1>
                    </div>
                    <h1 className="mt-2 text-4xl font-bold">
                      Panuphong Burakitphachai
                    </h1>
                    <h1 className="mt-2">👋 I&apos;m a Full Stack Developer</h1>
                  </CardFooter>
                </div>
              </CardBody>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className="order-2 col-span-2 flex flex-col justify-between gap-4"
          initial={{
            x: "100vw",
          }}
          animate={{
            x: "0",
          }}
          transition={{
            type: "spring",
            damping: 18,
            ease: "easeOut",
            duration: 0.5,
          }}
        >
          <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
            <Card className="h-full rounded-full">
              <CardBody className="items-start justify-start overflow-hidden">
                <motion.p
                  variants={marqueeVariants}
                  animate="animate"
                  className="whitespace-nowrap text-xs tracking-widest text-foreground/50"
                >
                  HTML • CSS • JAVASCRIPT • TYPESCRIPT • REACT • NEXTJS •
                  TAILWINDCSS • PRISMA • DRIZZLE • FRAMERMOTION • T3 • VITE •
                  VUE • PHP • SQL • PYTHON • JAVA • FLUTTER • DART • FIREBASE •
                  NODEJS • EXPRESS • POSTGRES • MYSQL • FIGMA
                </motion.p>
              </CardBody>
            </Card>
          </div>
          <div className="order-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href={"/about"}>
              <div className="group h-full transition-transform duration-300 hover:scale-[1.02]">
                <Card className="col-span-1 h-56 rounded-3xl">
                  <CardBody className="items-center justify-center">
                    <motion.div
                      variants={flyingIcons}
                      whileHover={zoomIn}
                      animate="animate"
                    >
                      <Image
                        src="/assets/memoji.png"
                        className="pointer-events-none"
                        width={126}
                        height={126}
                        alt="Petchx Panuphong Burakitphachai"
                      />
                    </motion.div>
                    <CardFooter className="flex-col items-start justify-start p-4">
                      <h1 className="text-sm opacity-50">เกี่ยวกับฉัน</h1>
                      <h1 className="text-xl">About me</h1>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </Link>
            <Link href={"/projects"}>
              <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
                <Card className="col-span-1 h-56 rounded-3xl">
                  <CardBody className="items-center justify-center">
                    <motion.div whileHover={zoomIn} animate="animate">
                      <Image
                        src="/assets/logo.gif"
                        className="pointer-events-none"
                        width={126}
                        height={126}
                        alt="Petchx Panuphong Burakitphachai"
                      />
                    </motion.div>
                    <CardFooter className="flex-col items-start justify-start p-4">
                      <h1 className="text-sm opacity-50">ผลงาน</h1>
                      <h1 className="text-xl">Projects</h1>
                    </CardFooter>
                  </CardBody>
                </Card>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* <div className="col-span-3 grid-cols-3 grid gap-4">
          </div> */}
        <motion.div
          className="order-5 col-span-2 h-56 sm:col-span-1 lg:order-4"
          variants={moveUp}
          initial="init"
          animate="end"
        >
          <Link href={"/services"}>
            <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
              <Card className="h-full rounded-3xl">
                <CardBody className="items-center justify-center">
                  {/* <TbCode size={50} /> */}
                  {/* <TbDeviceMobileCode size={50} /> */}
                  <motion.div
                    className="flex h-[126px] items-center justify-center"
                    whileHover={zoomIn}
                    animate="animate"
                  >
                    {/* <TbCode size={50} /> */}
                    {/* <TbDeviceMobileCode size={50} /> */}

                    {/* <Image */}
                    {/*   src="/assets/logo.gif" */}
                    {/*   className="pointer-events-none " */}
                    {/*   width={126} */}
                    {/*   height={126} */}
                    {/*   alt="Petchx Panuphong Burakitphachai" */}
                    {/* /> */}
                    <Image
                      src={"/assets/logo.svg"}
                      // src={"/assets/petchx.png"}

                      className="pointer-events-none scale-x-[-1] ring-offset-default-foreground"
                      alt="Petchx Panuphong Burakitphachai"
                      width={126}
                      height={126}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                    />
                  </motion.div>
                  <CardFooter className="flex-col items-start justify-start">
                    <h1 className="text-xs opacity-50">บริการ</h1>
                    <h1 className="text-xl">Services</h1>
                  </CardFooter>
                </CardBody>
              </Card>
            </div>
          </Link>
        </motion.div>

        <motion.div
          className="order-4 col-span-2 h-56 lg:order-5 lg:col-span-2"
          variants={moveUp}
          initial="init"
          animate="end"
        >
          {/* <Link href={"/contact"}> */}
          <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
            <Card className="h-full rounded-3xl">
              <CardBody className="items-center justify-center">
                <div className="w-full p-2">
                  <div className="flex h-28 w-full items-center justify-center gap-6 rounded-3xl bg-secondary text-primary">
                    <motion.div
                      aria-label="Petchxx"
                      onClick={() => {
                        router.push("https://github.com/petchxx");
                      }}
                      whileHover={zoomIn}
                    >
                      <div className="cursor-pointer rounded-full bg-content1 p-4 text-primary hover:bg-black hover:text-white">
                        <Icon icon="line-md:github-loop" fontSize={32} />
                      </div>
                    </motion.div>
                    <motion.div
                      aria-label="Petchxig"
                      onClick={() => {
                        router.push("https://www.instagram.com/petchxig");
                      }}
                    >
                      <motion.div
                        whileHover={zoomIn}
                        // className="cursor-pointer bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full  p-4 text-white"
                        className="cursor-pointer rounded-full bg-content1 p-4 hover:bg-gradient-to-r hover:from-[#833ab4] hover:via-[#fd1d1d] hover:to-[#fcb045] hover:text-white"
                      >
                        <Icon icon="line-md:instagram" fontSize={32} />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      aria-label="Petchx"
                      onClick={() => {
                        router.push(
                          "https://www.facebook.com/profile.php?id=61564234927089",
                        );
                      }}
                      whileHover={zoomIn}
                    >
                      <div
                        // className="cursor-pointer rounded-full bg-blue-500 p-4 text-white"
                        // className="p-4 bg-content1 rounded-full cursor-pointer"
                        className="cursor-pointer rounded-full bg-content1 p-4 hover:bg-blue-500 hover:text-white"
                      >
                        <Icon icon="line-md:facebook" fontSize={32} />
                      </div>
                    </motion.div>
                    <motion.div
                      aria-label="petchxpanuphong@gmail.com"
                      onClick={() => {
                        router.push("mailto:petchxpanuphong@gmail.com");
                      }}
                      whileHover={zoomIn}
                    >
                      <div
                        // className="cursor-pointer rounded-full bg-[#06c755] p-4 text-white"
                        className="cursor-pointer rounded-full bg-content1 p-4 hover:bg-[#06c755] hover:text-white"
                      >
                        <Icon icon="ri:line-fill" fontSize={32} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                <CardFooter className="flex-col items-start justify-start">
                  <h1 className="text-xs opacity-50">โปรไฟล์</h1>
                  <h1 className="text-xl">Profiles</h1>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
          {/* </Link> */}
        </motion.div>

        <motion.div
          className="order-6 col-span-2 h-56 sm:col-span-1"
          variants={moveUp}
          initial="init"
          animate="end"
        >
          {/* <Link href={"/contact"}> */}
          <div className="h-full transition-transform duration-300 hover:scale-[1.02]">
            <Card
              className="h-full rounded-3xl"
              onClick={() => {
                router.push("/contact");
              }}
            >
              <CardBody className="items-center justify-center">
                <div className="x-2 w-full">
                  <div className="flex h-28 items-center justify-center gap-4 rounded-3xl bg-secondary text-primary">
                    <ThemeSwitcher isSwitch={true} />
                    {/* <div */}
                    {/*   className="rounded-full bg-content1 p-5 hover:text-foreground" */}
                    {/*   onClick={(e) => { */}
                    {/*     e.preventDefault(); */}
                    {/*     router.push("mailto:petchxpanuphong@gmail.com"); */}
                    {/*   }} */}
                    {/* > */}
                    {/*   <FaEnvelope size={25} /> */}
                    {/* </div> */}
                    {/* <div */}
                    {/*   className="rounded-full bg-content1 p-5 hover:text-foreground" */}
                    {/*   onClick={(e) => { */}
                    {/*     e.preventDefault(); */}
                    {/*     router.push("https://lin.ee/1kSm3fq"); */}
                    {/*   }} */}
                    {/* > */}
                    {/*   <FaLine size={25} /> */}
                    {/* </div> */}
                  </div>
                </div>
                <CardFooter className="flex-col items-start justify-start">
                  <h1 className="text-xs opacity-50">SWITCH THEMER</h1>
                  <h1 className="text-xl">Dark mode</h1>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
          {/* </Link> */}
        </motion.div>

        <motion.div
          className="order-7 col-span-1"
          variants={fadeIn}
          initial="init"
          animate="end"
          onClick={() => router.push("https://getclockin.app")}
        >
          <div className="group relative h-full cursor-pointer">
            <Card className="group h-full rounded-3xl">
              <div className="relative h-56 w-full">
                <Image
                  src="/assets/projects/clockin.png"
                  className="pointer-events-none block rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                  fill={true}
                  alt="Topone Panuphong Burakitphachai"
                />
              </div>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className="order-7 col-span-1"
          variants={fadeIn}
          initial="init"
          animate="end"
          onClick={() => router.push("https://kalayanamit.com")}
        >
          <div className="group relative h-full cursor-pointer">
            <Card className="group h-full rounded-3xl">
              <div className="relative h-56 w-full">
                <Image
                  src="/assets/projects/kalayanamit.png"
                  className="pointer-events-none block rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                  fill={true}
                  alt="Topone Panuphong Burakitphachai"
                />
              </div>
            </Card>
          </div>
        </motion.div>

        <motion.div
          className="order-7 col-span-1"
          variants={fadeIn}
          initial="init"
          animate="end"
          onClick={() => router.push("https://b3loved-s.web.app/")}
        >
          <div className="group relative h-full cursor-pointer">
            <Card className="group h-full rounded-3xl">
              <div className="relative h-56 w-full">
                <Image
                  src="/assets/projects/b3loved.png"
                  className="pointer-events-none block rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                  fill={true}
                  alt="Topone Panuphong Burakitphachai"
                />
              </div>
            </Card>
          </div>
        </motion.div>
        <motion.div
          className="order-7 col-span-1"
          variants={fadeIn}
          initial="init"
          animate="end"
          onClick={() => router.push("https://boostagram.app")}
        >
          <div className="group relative h-full cursor-pointer">
            <Card className="group h-full rounded-3xl">
              <div className="relative h-56 w-full">
                <Image
                  src="/assets/projects/boostagram.png"
                  className="pointer-events-none block rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                  fill={true}
                  alt="Topone Panuphong Burakitphachai"
                />
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
