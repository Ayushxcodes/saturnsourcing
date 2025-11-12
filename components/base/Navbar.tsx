"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import Container from "./Container";
import Logo from "./Logo";
import {
  SignInIcon,
  UserIcon,
  XIcon,
  ListIcon,
  CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "../ui/button";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const services = [
  { name: "Foreign Enterprises", slug: "foreign-enterprises" },
  { name: "Accounting Outsourcing", slug: "accounting-outsourcing" },
  { name: "NRI", slug: "nri" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsDesktopServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 mx-4 md:mx-0">
        <Container className="border border-neutral-200/80 px-4 md:px-6 rounded-2xl bg-background/80 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between py-3 md:py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Logo />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {link.label === "Services" ? (
                    // Services Dropdown
                    <div className="relative" ref={servicesDropdownRef}>
                      <button
                        onClick={() =>
                          setIsDesktopServicesOpen(!isDesktopServicesOpen)
                        }
                        className="relative px-4 py-2 text-sm font-medium font-space-grotesk text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1 group"
                      >
                        Services
                        <motion.div
                          animate={{ rotate: isDesktopServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CaretDown weight="bold" className="size-3" />
                        </motion.div>
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isDesktopServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-56 bg-background border border-neutral-200/80 rounded-lg shadow-lg overflow-hidden"
                          >
                            {services.map((service, idx) => (
                              <motion.div
                                key={service.slug}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <Link
                                  href={`/services/${service.slug}`}
                                  onClick={() =>
                                    setIsDesktopServicesOpen(false)
                                  }
                                  className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent transition-colors border-b border-neutral-100 last:border-b-0 font-space-grotesk"
                                >
                                  {service.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Links
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-sm font-medium font-space-grotesk text-foreground/80 hover:text-foreground transition-colors group"
                    >
                      {link.label}
                      <motion.span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button variant="ghost" className="font-space-grotesk">
                  <UserIcon weight="light" className="size-4" />
                  Login
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Button variant="default" className="font-space-grotesk">
                  <SignInIcon weight="light" className="size-4" />
                  Sign Up
                </Button>
              </motion.div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon weight="light" className="size-6" />
              ) : (
                <ListIcon weight="light" className="size-6" />
              )}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 bg-background/95 backdrop-blur-md"
            >
              <div className="flex flex-col items-start justify-center h-full gap-8 px-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col items-start gap-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      {link.label === "Services" ? (
                        <button
                          className="w-full text-left text-2xl font-medium hover:text-primary transition-colors flex items-center justify-between"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          Services
                          <CaretDown
                            size={16}
                            weight="bold"
                            className={`transition-transform ${
                              isServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={toggleMenu}
                          className="text-2xl font-medium hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile Services Dropdown */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full ml-4 space-y-2"
                      >
                        {services.map((service) => (
                          <motion.div
                            key={service.slug}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href={`/services/${service.slug}`}
                              className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Auth Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={toggleMenu}
                  >
                    <UserIcon weight="light" className="size-4" />
                    Login
                  </Button>
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={toggleMenu}
                  >
                    <SignInIcon weight="light" className="size-4" />
                    Sign Up
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
