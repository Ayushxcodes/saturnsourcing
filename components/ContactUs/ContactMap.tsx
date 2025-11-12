"use client";

import { motion } from "motion/react";
import Container from "@/components/base/Container";
import { Card } from "@/components/ui/card";
import { MapPin } from "@phosphor-icons/react/dist/ssr";

const offices = [
  {
    type: "Head Office",
    address: "312-314, Pratap Bhawan, Bahadur Shah Zafar Marg",
    city: "New Delhi-110002",
    country: "INDIA",
    coordinates: "28.6329,77.2197",
  },
  {
    type: "Branch Office",
    address: "No 3, Gibbs Green, Edgware",
    city: "HA8 9RS",
    country: "United Kingdom",
    coordinates: "51.6153,-0.3485",
  },
  {
    type: "Branch Office",
    address: "Golden Tower Block A unit no. 301, Al Nahyan Camp",
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    coordinates: "24.4539,54.3773",
  },
];

export default function ContactMap() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent font-space-grotesk">
            Find Us On The Map
          </h2>
          <p className="text-lg text-slate-600 font-space-grotesk">
            Visit our offices globally. We have locations across India, UK, and
            UAE.
          </p>
        </motion.div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 border border-orange-100 bg-gradient-to-br from-white to-orange-50 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                    <MapPin
                      size={24}
                      weight="bold"
                      className="text-orange-600"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-slate-900 mb-3 font-space-grotesk">
                      {office.type}
                    </h3>
                    <p className="text-sm text-slate-600 mb-1 font-space-grotesk">
                      {office.address}
                    </p>
                    <p className="text-sm text-slate-600 mb-1 font-space-grotesk">
                      {office.city}
                    </p>
                    <p className="text-sm font-medium text-orange-600 font-space-grotesk">
                      {office.country}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full rounded-2xl overflow-hidden border-4 border-orange-200"
        >
          <Card className="p-0 border-0 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5894407490926!2d77.20642!3d28.612857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2cc8c3b5555%3A0x7b7c7c7c7c7c7c7c!2s312-314%2C%20Pratap%20Bhawan%2C%20Bahadur%20Shah%20Zafar%20Marg%2C%20New%20Delhi%2C%20Delhi%20110002!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
