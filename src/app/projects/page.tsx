"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";
import Nav from "../_components/navbar";

export default function Projects() {
  const projects = [
    {
      title: "WiteLab",
      description: "Software house landing page with multiple languages",
      href: "https://witelab.com",
      color: "#905aff",
      image: "/assets/projects/witelab.png",
    },
    {
      title: "ClockIn",
      description: "Web application for time management",
      href: "https://getclockin.app",
      color: "#F5A524",
      image: "/assets/projects/clockin.png",
    },
    {
      title: "Boostagram",
      description: "Web application for increasing followers",
      href: "https://boostagram.dev",
      color: "#006FEE",
      image: "/assets/projects/boostagram.png",
    },
    {
      title: "Kalayanamit",
      description:
        "Web application for information display with data management system",
      href: "https://kalayanamit.com",
      color: "#3db34f",
      image: "/assets/projects/kalayanamit.png",
    },
    // {
    //   title: "5Shop",
    //   description:
    //     "E-commerce web application for selling online game products",
    //   href: "https://5shop.app",
    //   image: "/assets/projects/5shop.png",
    // },
    {
      title: "B3loved",
      description: "Product showcase website",
      href: "https://b3loved-s.web.app",
      image: "/assets/projects/b3loved.png",
    },
  ];

  return (
    <div className="">
      <Nav index="projects" />
      <div
        className="flex w-full flex-col items-center justify-center p-6 pt-32"
        id="projects"
      >
        <div className="grid max-w-screen-xl justify-center">
          <h2 className="text-center text-5xl font-bold">Projects</h2>
          <p className="mt-6 max-w-screen-sm text-center text-lg text-foreground-500">
            A showcase of innovative web applications and SaaS platforms
            I&apos;ve built, demonstrating expertise in modern development
            technologies and a passion for solving real-world problems.
          </p>
        </div>
        <div className="mt-12 grid w-full max-w-screen-xl grid-cols-2 gap-4 lg:grid-cols-3">
          {projects.map((project, index) => {
            return (
              <div key={index} className="mb-2 w-full max-w-md">
                <Link href={project.href}>
                  <Skeleton
                    isLoaded={project.image != null}
                    className="rounded-xl"
                  >
                    <div className="relative h-32 w-full overflow-hidden rounded-lg md:h-64">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg object-cover transition-transform hover:scale-105"
                        fill
                      />
                    </div>
                  </Skeleton>
                </Link>
                <h3 className="mt-4 font-medium">{project.title}</h3>
                <p className="text-sm text-foreground-500">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
