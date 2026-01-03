import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">Apna visa query discuss karne ke liye humse judein</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="bg-blue-50 dark:bg-slate-800 rounded-3xl p-10">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6 text-lg">
                <div>
                  <p className="font-semibold">Phone / WhatsApp</p>
                  <a href="tel:+919981573873" className="text-blue-600 text-2xl">+91 9981573873</a>
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:visa@prishatravel.in" className="text-blue-600">visa@prishatravel.in</a>
                </div>
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p>E-3/3 Arera Colony,<br />Chhatrapati Shivaji Bhawan,<br />10 No. Market,<br />Bhopal, Madhya Pradesh 462016</p>
                </div>
                <div>
                  <p className="font-semibold">Timings</p>
                  <p>Monday – Saturday: 11:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-10"
          >
            <h3 className="text-2xl font-bold mb-8">Request a Call Back</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-4 focus:ring-blue-500" required />
              <input type="tel" placeholder="Mobile Number" className="w-full px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-4 focus:ring-blue-500" required />
              <input type="email" placeholder="Email" className="w-full px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-4 focus:ring-blue-500" />
              <select className="w-full px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700">
                <option>Tourist Visa</option>
                <option>Business Visa</option>
                <option>Student Visa</option>
                <option>Schengen Visa</option>
                <option>UK Visa</option>
                <option>Other</option>
              </select>
              <textarea rows="5" placeholder="Your Query" className="w-full px-6 py-4 rounded-xl border border-slate-300 dark:border-slate-700 focus:ring-4 focus:ring-blue-500"></textarea>
              <button className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl transition transform hover:scale-105">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};