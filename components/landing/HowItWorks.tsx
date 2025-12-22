"use client";

import React from "react";
import { motion } from "motion/react";
import {
  CheckCircleIcon,
  PlusIcon,
  BookOpenIcon,
  TargetIcon,
  SparkleIcon,
  StarIcon,
  CertificateIcon,
  ChartLineUpIcon,
  GlobeIcon,
  CalculatorIcon,
  BriefcaseIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";

const steps = [
  { label: "Client Onboarding", time: "Day 1", completed: true },
  { label: "Process Mapping", time: "Week 1", completed: true },
  { label: "Team Allocation", time: "Week 1", completed: true },
  { label: "Quality Review", time: "Week 2", completed: true },
  { label: "Continuous Support", time: "Ongoing", completed: false },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Heading Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              How We <span className="text-orange-600">Work</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
              Delivering comprehensive accounting outsourcing solutions with a
              team of distinguished chartered accountants specializing in their
              areas of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-10 md:my-20">
            {/* First Card - Professional Services */}
            <div className="max-w-full mx-auto bg-white rounded-lg rounded-tl-3xl rounded-bl-3xl shadow-lg">
              <div className="relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-[4000px]">
                <div className="perspective-[4000px] rotate-z-15 -rotate-y-20 rotate-x-30 scale-[1.2] h-full w-full -translate-y-10 mask-radial-from-50 mask-r-from-50">
                  {/* Top Card */}
                  <div className="h-fit my-auto bg-white mx-auto w-full p-3 rounded-2xl border-2 border-slate-200 shadow-xl absolute bottom-0 left-12 max-w-[90%] z-30">
                    <div className="flex gap-3 items-center">
                      <CalculatorIcon
                        className="size-4 text-orange-600"
                        weight="duotone"
                      />
                      <p className="text-xs md:text-sm font-semibold text-slate-900">
                        Accounting Services
                      </p>
                      <div className="px-2 py-0.5 rounded-full flex border items-center gap-1 w-fit bg-blue-50 border-blue-200 text-blue-600">
                        <SparkleIcon className="size-3" weight="fill" />
                        <p className="text-[10px] font-bold">Expert Team</p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-slate-600 mt-3">
                      Comprehensive financial accounting and bookkeeping
                      services delivered by qualified chartered accountants.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        Bookkeeping
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        Taxation
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        Audit
                      </div>
                    </div>
                  </div>

                  {/* Middle Card */}
                  <div className="max-w-[85%] h-fit my-auto bg-white mx-auto w-full p-3 rounded-2xl border-2 border-slate-200 shadow-xl absolute bottom-10 left-8 z-20">
                    <div className="flex gap-3 items-center">
                      <GlobeIcon
                        className="size-4 text-orange-600"
                        weight="duotone"
                      />
                      <p className="text-xs md:text-sm font-semibold text-slate-900">
                        Global Reach
                      </p>
                      <div className="px-2 py-0.5 rounded-full flex border items-center gap-1 w-fit bg-green-50 border-green-200 text-green-600">
                        <StarIcon className="size-3" weight="fill" />
                        <p className="text-[10px] font-bold">International</p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-slate-600 mt-3">
                      Serving an extensive base of national and international
                      clients across multiple industries.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        India
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        Global
                      </div>
                    </div>
                  </div>

                  {/* Bottom Card */}
                  <div className="h-fit my-auto bg-white mx-auto w-full p-3 rounded-2xl border-2 border-slate-200 shadow-xl absolute bottom-14 left-4 max-w-[80%] z-10">
                    <div className="flex gap-3 items-center">
                      <BriefcaseIcon
                        className="size-4 text-orange-600"
                        weight="duotone"
                      />
                      <p className="text-xs md:text-sm font-semibold text-slate-900">
                        Industry Expertise
                      </p>
                      <div className="px-2 py-0.5 rounded-full flex border items-center gap-1 w-fit bg-amber-50 border-amber-200 text-amber-600">
                        <BookOpenIcon className="size-3" weight="fill" />
                        <p className="text-[10px] font-bold">Specialized</p>
                      </div>
                    </div>
                    <p className="text-[10px] md:text-sm text-slate-600 mt-3">
                      Experience across multiple industries with specialized
                      knowledge in each sector.
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mt-4">
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        Multi-sector
                      </div>
                      <div className="px-2 text-[10px] md:text-sm py-1 rounded-sm bg-slate-100 text-slate-700">
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900">
                  Professional Accounting Services
                </h3>
              </div>
            </div>

            {/* Second Card - Process Tracking */}
            <div className="max-w-full mx-auto bg-white rounded-lg shadow-lg">
              <div className="relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-[4000px]">
                <div
                  style={{
                    transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
                  }}
                  className="max-w-[85%] group h-full my-auto bg-slate-50 mx-auto w-full p-3 rounded-2xl border-2 border-slate-200 shadow-xl flex flex-col mask-radial-from-50 mask-b-from-50 translate-x-10"
                >
                  <div className="flex gap-3 items-center">
                    <TargetIcon
                      className="size-4 text-orange-600"
                      weight="duotone"
                    />
                    <p className="text-sm font-semibold text-slate-900">
                      Our Process
                    </p>
                  </div>
                  <div className="relative flex-1 bg-slate-100 mt-4 border-2 border-slate-200 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,#1e293b_0,#1e293b_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] opacity-5"></div>
                    <div className="absolute rounded-2xl translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 inset-0 bg-white h-full w-full">
                      {steps.map((step, index) => (
                        <div className="mt-2 mr-2" key={index}>
                          <div className="flex items-center justify-between px-4 py-2">
                            <div className="flex items-center gap-2">
                              <div
                                className={`size-4 flex items-center justify-center rounded-full ${
                                  step.completed
                                    ? "bg-green-500"
                                    : "bg-amber-500"
                                }`}
                              >
                                {step.completed ? (
                                  <CheckCircleIcon
                                    className="size-3 text-white"
                                    weight="fill"
                                  />
                                ) : (
                                  <div className="size-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                )}
                              </div>
                              <p className="text-slate-600 font-medium text-xs md:text-sm">
                                {step.label}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 text-slate-500">
                              <div className="size-1.5 rounded-full bg-current opacity-60"></div>
                              <p className="text-[10px] font-bold">
                                {step.time}
                              </p>
                            </div>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900">
                  Streamlined Workflow Process
                </h3>
              </div>
            </div>

            {/* Third Card - Team & Results */}
            <div className="max-w-full mx-auto bg-white rounded-lg rounded-tr-3xl rounded-br-3xl shadow-lg">
              <div className="relative h-80 sm:h-60 md:h-80 overflow-hidden perspective-[4000px]">
                <div className="relative h-full w-full flex items-center justify-center">
                  {/* Team Excellence Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative z-30 w-full max-w-[85%] bg-white border-2 border-blue-100 rounded-2xl p-4 md:p-6 shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CertificateIcon
                          className="size-5 text-orange-600"
                          weight="duotone"
                        />
                        <p className="text-sm font-bold text-slate-900">
                          Our Competitive Advantage
                        </p>
                      </div>
                      <div className="px-2 py-1 rounded-full bg-blue-50 border border-blue-200">
                        <StarIcon
                          className="size-3 text-orange-600"
                          weight="fill"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UsersIcon
                            className="size-4 text-slate-500"
                            weight="duotone"
                          />
                          <p className="text-xs text-slate-600">
                            Team Strength
                          </p>
                        </div>
                        <p className="text-xs font-semibold text-slate-900">
                          Distinguished CAs
                        </p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BriefcaseIcon
                            className="size-4 text-slate-500"
                            weight="duotone"
                          />
                          <p className="text-xs text-slate-600">Management</p>
                        </div>
                        <p className="text-xs font-semibold text-slate-900">
                          Professional
                        </p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <ChartLineUpIcon
                            className="size-4 text-slate-500"
                            weight="duotone"
                          />
                          <p className="text-xs text-slate-600">
                            Client Satisfaction
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-16 bg-slate-200 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "95%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-orange-600 rounded-full"
                            />
                          </div>
                          <p className="text-xs font-bold text-orange-600">
                            95%
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Background gradient effect */}
                  <div className="pointer-events-none mask-radial-to-70 mask-radial-at-center absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-radial from-blue-100/50 via-blue-50/30 to-transparent blur-3xl"></div>
                  </div>
                </div>
              </div>
              <div className="px-4 md:px-8 md:pb-12 pb-6 flex items-center justify-between">
                <h3 className="text-lg md:text-2xl font-bold text-slate-900">
                  Expert Team & Results
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
