"use client";

import React from "react";
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
import { motion } from "framer-motion";
import Nav from "../_components/navbar";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function AboutPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const experience = [
    {
      year: "2023 - Present",
      work: "WiteLab",
      company: "Co-Founder & Full-Stack Developer",
    },
    {
      year: "2020 - Present",
      work: "Self-Employed",
      company: "Fullstack Developer",
    },
  ];
  const education = [
    {
      year: "2021 - Present",
      education: "Bachelor of Science in Computer Science",
      name: "Assumption University of Thailand",
    },
    {
      year: "2014 - 2020",
      education: "High School",
      name: "St.Paul's School Darjeeling, India",
    },
  ];
  const skills = [
    {
      name: "Frontend Development",
      description: "Next.js, React, TypeScript, TailwindCSS, Framer Motion",
    },
    {
      name: "Backend Development",
      description: "Node.js, Prisma, Drizzle ORM, tRPC, PHP",
    },
    {
      name: "Database Management",
      description: "PostgreSQL, Supabase, Firebase, MySQL, MongoDB",
    },
    {
      name: "Mobile Development",
      description: "Flutter, React Native",
    },
    // {
    //   name: "DevOps",
    //   description: "Docker, Kubernetes, Terraform, Ansible, GitLab CI/CD",
    // },
    {
      name: "UX/UI Design",
      description: "Figma",
    },
  ];
  const awards = [
    {
      year: "2020",
      name: "World Class Award",
      description: "Network Studio Academy",
    },
  ];
  return (
    <main>
      <Nav index="about" />
      <div className="mx-auto mt-24 max-w-7xl justify-start gap-12 p-4 md:flex">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween" }}
        >
          <Card className="sticky top-32 items-center gap-6 rounded-3xl p-6">
            <Skeleton
              className="h-80 min-w-80 rounded-3xl"
              isLoaded={imageLoaded}
            >
              <Image
                src="/assets/petchx2.png"
                className="pointer-events-none rounded-3xl"
                fill={true}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)} // Handle error by setting imageLoaded to true
                alt="Petchx Logo"
              />
            </Skeleton>
            <div className="flex flex-col items-center">
              <h1 className="text-center text-2xl">Panuphong Burakitphachai</h1>
              <p className="opacity-50">Topone</p>
            </div>
            <div className="flex gap-4">
              <Link href={"https://github.com/t1dotdev"}>
                <div className="rounded-full bg-secondary p-4 text-primary hover:text-foreground">
                  <Icon icon="line-md:github-loop" fontSize={32} />
                </div>
              </Link>
              <Link href={"https://instagram.com/petchxig"}>
                <div className="rounded-full bg-secondary p-4 text-primary hover:text-foreground">
                  <Icon icon="line-md:instagram" fontSize={32} />
                </div>
              </Link>
              <Link href={"https://twitter.com/panuphongxtw"}>
                <div className="rounded-full bg-secondary p-4 text-primary hover:text-foreground">
                  <Icon icon="line-md:twitter-x" fontSize={32} />
                </div>
              </Link>
              <Link href={"https://facebook.com/profile.php?id=61564234927089"}>
                <div className="rounded-full bg-secondary p-4 text-primary hover:text-foreground">
                  <Icon icon="line-md:facebook" fontSize={32} />
                </div>
              </Link>
            </div>
            <Button
              color="primary"
              variant="ghost"
              className="mt-2 w-80"
              size="lg"
              as={Link}
              href="/contact"
            >
              Contact me
            </Button>
          </Card>
        </motion.div>

        <div className="mt-10 max-w-2xl px-2">
          <p className="text-2xl font-bold">About Me</p>
          <p className="mt-6">
            Innovative and driven full-stack developer with 4+ years of
            experience specializing in building scalable web applications using
            modern technologies like Next.js, React, TypeScript, tRPC,
            TailwindCSS, Prisma, Drizzle, and PostgreSQL. Co-founder of WiteLab,
            a software house focusing on custom software solutions and SaaS
            platforms. Passionate about coding, entrepreneurship, and achieving
            excellence in technology.
          </p>
          <p className="mt-12 text-2xl font-bold">Skills</p>
          {skills.map((item, index) => (
            <div key={index} className="mt-6">
              {/* <p className="opacity-50">{item.percent}</p> */}
              <p className="text-lg text-primary">{item.name}</p>
              <p className="">{item.description}</p>
            </div>
          ))}
          <p className="mt-12 text-2xl font-bold">Experience</p>
          {experience.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.year}</p>
              <p className="text-lg text-primary">{item.work}</p>
              <p className="">{item.company}</p>
            </div>
          ))}
          <p className="mt-12 text-2xl font-bold">Education</p>
          {education.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.year}</p>
              <p className="text-lg text-primary">{item.education}</p>
              <p className="">{item.name}</p>
            </div>
          ))}
          <p className="mt-12 text-2xl font-bold">Awards</p>
          {awards.map((item, index) => (
            <div key={index} className="mt-6">
              <p className="opacity-50">{item.year}</p>
              <p className="text-lg text-primary">{item.name}</p>
              <p className="">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
