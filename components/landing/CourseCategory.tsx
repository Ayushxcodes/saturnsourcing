"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeIcon,
  CloudIcon,
  DatabaseIcon,
  GearIcon,
  BrainIcon,
  DeviceMobileIcon,
  ComputerTowerIcon,
  GlobeIcon,
  TerminalIcon,
  LockIcon,
} from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "../base/Container";

const courseCategories = [
  {
    id: 1,
    title: "Web Development",
    icon: GlobeIcon,
    enrolled: 12500,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "DevOps",
    icon: GearIcon,
    enrolled: 8900,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: 3,
    title: "AI & ML",
    icon: BrainIcon,
    enrolled: 15200,
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: 4,
    title: "App Development",
    icon: DeviceMobileIcon,
    enrolled: 11200,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 5,
    title: "Backend",
    icon: ComputerTowerIcon,
    enrolled: 9800,
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    id: 6,
    title: "Frontend",
    icon: CodeIcon,
    enrolled: 13400,
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    id: 7,
    title: "Full Stack",
    icon: TerminalIcon,
    enrolled: 16800,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 8,
    title: "Cloud Computing",
    icon: CloudIcon,
    enrolled: 10200,
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
  },
  {
    id: 9,
    title: "Database",
    icon: DatabaseIcon,
    enrolled: 7600,
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    id: 10,
    title: "Cybersecurity",
    icon: LockIcon,
    enrolled: 9200,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function CourseCategory() {
  return (
    <Container>
      <section className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16 py-12 md:py-16 lg:py-20">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-space-grotesk text-gradient leading-tight">
            Explore Course <br />
            <span className="text-primary">Categories</span>
          </h2>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full lg:max-w-3xl xl:max-w-4xl"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {courseCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <CarouselItem
                    key={category.id}
                    className="pl-2 md:pl-4 basis-[85%] sm:basis-[45%] lg:basis-[32%]"
                  >
                    <Card
                      className={cn(
                        "rounded-xl border-0 shadow-sm h-full",
                        category.bgColor
                      )}
                    >
                      <CardHeader className="pb-3">
                        <div className="mb-4">
                          <IconComponent
                            weight="regular"
                            className={cn(
                              "size-8 md:size-10",
                              category.iconColor
                            )}
                          />
                        </div>
                        <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm md:text-base text-foreground/80">
                          <span className="text-primary font-bold font-space-grotesk">
                            {category.enrolled.toLocaleString()}
                          </span>{" "}
                          Enrolled Students
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            {/* Navigation Arrows - positioned below the carousel */}
            <div className="flex justify-center gap-3 mt-6">
              <CarouselPrevious
                variant="outline"
                className="static translate-x-0 translate-y-0 left-0 top-0 right-0 bottom-0 rounded-full border-primary/20 bg-white hover:bg-primary/10 hover:border-primary/40"
              />
              <CarouselNext
                variant="default"
                className="static translate-x-0 translate-y-0 left-0 top-0 right-0 bottom-0 rounded-full bg-primary text-primary-foreground border-0 hover:bg-primary/90"
              />
            </div>
          </Carousel>
        </motion.div>
      </section>
    </Container>
  );
}
