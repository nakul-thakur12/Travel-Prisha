import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            About Prisha's Travel Paradise
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-5xl mx-auto">
            Bhopal's leading visa consultancy with 10+ years of trusted experience in turning global travel dreams into reality.
          </p>
        </motion.div>

        {/* Introduction Section with Team Images on Right */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-lg leading-relaxed"
            >
              <p>
                Welcome to <strong className="text-blue-600">Prisha’s Travel Paradise</strong>, one of Bhopal (M.P.)'s most trusted and reliable visa consultancies. We specialize in assisting applicants traveling abroad for tourism, business, education, or family visits.
              </p>
              <p>
                With <strong>over 10 years of dedicated experience</strong>, our highly professional team works tirelessly to deliver honest, transparent, and efficient visa solutions. We've earned a strong reputation by simplifying complex visa procedures and achieving high success rates for thousands of clients.
              </p>
              <p>
                A tourist, visitor, or business visa permits temporary entry for leisure, family reunions, or professional purposes. We prepare strong applications to ensure smooth approval and compliance with all exit requirements.
              </p>
              <p className="text-xl font-semibold text-blue-600">
                At nominal fees, we make your visa journey simple, stress-free, and successful.
              </p>
            </motion.div>

            {/* Right Side: Professional Team Images Grid (4 images) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <img
                src="https://content.jdmagicbox.com/v2/comp/delhi/j9/011pxx11.xx11.240910125423.x6j9/catalogue/yellowbird-immigration-services-pvt-ltd-nehru-place-delhi-immigration-consultants-yys1mf17ka.jpg"
                alt="Professional visa team helping client"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <img
                src="https://content3.jdmagicbox.com/comp/thiruvananthapuram/x1/0471px471.x471.220523203415.g9x1/catalogue/amster-group-thiruvananthapuram-immigration-consultants-c8bbnqhodt.jpg"
                alt="Visa consultancy office team"
                className="w-full h-64 object-cover rounded-2xl shadow-xl mt-8"
              />
              <img
                src="https://content.jdmagicbox.com/v2/comp/hyderabad/e8/040pxx40.xx40.231127135544.x4e8/catalogue/lqb6r2gq2chogge-ya7vml8irk.jpg"
                alt="Expert visa consultants at work"
                className="w-full h-64 object-cover rounded-2xl shadow-xl"
              />
              <img
                src="https://www.y-axis.com/assets/cms/2025-09/Global-Indian-Image.png"
                alt="Global visa experts team"
                className="w-full h-64 object-cover rounded-2xl shadow-xl mt-8"
              />
            </motion.div>
          </div>
        </section>

        {/* Countries We Serve with World Map on Right */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
          >
            Countries We Serve
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-2xl order-2 lg:order-1"
            >
              <p className="text-lg mb-4">
                As expert visa consultants in Bhopal, we provide complete support for popular destinations worldwide, including:
              </p>
              <div className="grid grid-cols-2 gap-4 text-base">
                {["Australia", "New Zealand", "Canada", "United Kingdom", "Schengen (Europe)", "Singapore", "Malaysia", "Thailand", "China", "USA", "And many more worldwide"].map((country) => (
                  <div key={country} className="flex items-center gap-3 py-2">
                    <span className="text-2xl">✓</span>
                    <span className="font-medium">{country}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-lg font-semibold">
                Services: Tourist, Visitor, Business, Student, Spouse Visas & more.
              </p>
            </motion.div>

            {/* Right Side: World Map & Flags Images (3 images stacked) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <img
src="https://plus.unsplash.com/premium_photo-1712011181415-570ef105f57a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="World map with country flags"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />
             
            </motion.div>
          </div>
        </section>

        {/* Happy Clients Section */}
        <section className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold text-center mb-12"
          >
            Making Dreams Come True
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <img
              src="https://www.shutterstock.com/image-photo/happy-african-american-couple-sitting-600nw-1372212434.jpg"
              alt="Happy couple with approved visa at airport"
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
            <img
              src="https://thumbs.dreamstime.com/b/happy-excited-black-family-traveling-holding-documents-airport-ready-journey-portrait-excited-cheerful-african-221213817.jpg"
              alt="Excited family with passports and visa"
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
            <img
              src="https://thumbs.dreamstime.com/b/caucasian-family-smiling-airport-luggage-passports-sitting-together-ready-departure-symbolizing-cheerful-lifestyle-406640913.jpg"
              alt="Family ready for international travel"
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </section>

        {/* Commitment Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 lg:p-20 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-8"
          >
            Our Commitment to You
          </motion.h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-5xl mx-auto">
            At Prisha’s Travel Paradise, we lead the market in visa consulting excellence. Our expert team masters procedures for countries worldwide and offers complete support — before, during, and after your application.
          </p>
          <p className="text-2xl lg:text-3xl font-bold">
            Customer satisfaction is our #1 priority. Contact us today and experience the Prisha's difference!
          </p>
        </section>

        {/* Core Values */}
        <section className="mt-24">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Professional Expertise", desc: "Highly trained team with in-depth knowledge of global visa regulations and updates." },
              { title: "Complete Transparency", desc: "No hidden fees, no false promises — clear guidance at every single step." },
              { title: "Client-First Approach", desc: "Personalized support tailored to your unique travel goals and success." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="p-10 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl text-center border border-slate-200 dark:border-slate-800"
              >
                <div className="text-5xl mb-6">✨</div>
                <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
