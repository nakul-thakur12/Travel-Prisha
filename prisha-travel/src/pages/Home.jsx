import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  const services = [
    { title: "Tourist Visa", desc: "Family holidays aur tourism ke liye complete documentation support.", img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Business Visa", desc: "Meetings aur conferences ke liye invitation & financial guidance.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "Student Visa", desc: "SOP, university shortlisting aur visa file preparation.", img: "https://plus.unsplash.com/premium_photo-1661412968858-94c2675c3370?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Schengen Visa", desc: "Europe multi-country trips with ODMV biometric support.", img: "https://plus.unsplash.com/premium_photo-1723478557824-5d9b58da31af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" },
    { title: "UK Visa", desc: "Visitor & family visit visas with biometric assistance.", img: "https://plus.unsplash.com/premium_photo-1694475331421-40cf7f468690?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VUslMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Other Countries", desc: "Canada, USA, Australia etc. (on request).", img: "https://images.unsplash.com/photo-1737971661846-55518e6e1355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fENvdW50cmllcyUyMGltYWdlfGVufDB8fDB8fHww" },
  ];

  const blogPosts = [
    { title: "Schengen Visa 2026: Latest Requirements", intro: "Europe travel ke naye rules aur documents.", img: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { title: "UK Visa Refusal: Common Mistakes", intro: "Bhopal applicants ke top refusal reasons.", img: "https://images.unsplash.com/photo-1598710868982-98556cbc2631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVrJTIwdHJhdmVsfGVufDB8fDB8fHww"},
    { title: "ODMV Biometric Process Explained", intro: "Step-by-step guide for France & UK biometrics.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div>
      {/* Hero Section */}
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image */}
  <img
    src="https://plus.unsplash.com/premium_photo-1679830513869-cd3648acb1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <p className="text-lg font-semibold uppercase tracking-wider mb-4 text-sky-200">
        Bhopal's Trusted Visa Experts Since 2015
      </p>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-slate-100">
        Your Global Journey
        <br />
        <span className="text-sky-300">Starts in Bhopal</span>
      </h1>

      <p className="text-xl lg:text-2xl mb-10 max-w-4xl mx-auto text-slate-200">
        10+ years experience · Schengen & UK ODMV specialists · Local support · Honest guidance
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="tel:+919981573873"
          className="px-10 py-5 bg-white text-blue-700 font-bold text-xl rounded-xl hover:shadow-2xl transition transform hover:scale-105"
        >
          Book Consultation
        </a>

        <a
          href="https://wa.me/919981573873"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 border-4 border-white text-white font-bold text-xl rounded-xl hover:bg-white hover:text-blue-700 transition"
        >
          WhatsApp Now
        </a>
      </div>
    </motion.div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Visa Services</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Complete guidance for all major visa types</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800"
              >
                <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-lg">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Short on Home) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-8">Why Choose Prisha's Travel Paradise?</h2>
              <ul className="space-y-6 text-lg">
                <li className="flex gap-4"><span className="text-2xl">✓</span> 10+ years trusted experience in visa processing</li>
                <li className="flex gap-4"><span className="text-2xl">✓</span> Special focus on Schengen & UK ODMV/biometrics in Bhopal</li>
                <li className="flex gap-4"><span className="text-2xl">✓</span> No need to travel to Delhi/Mumbai</li>
                <li className="flex gap-4"><span className="text-2xl">✓</span> Honest advice – no fake guarantees</li>
                <li className="flex gap-4"><span className="text-2xl">✓</span> Detailed document checking for high success rate</li>
              </ul>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}

src="https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D
"             
 alt="Trusted Team"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Latest Visa Guides</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">Practical tips aur updates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl"
              >
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">{post.intro}</p>
                  <a href="/blog" className="text-blue-600 font-semibold">Read More →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section on Home */}
      <section className="py-20 bg-blue-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl">Contact us today for expert visa guidance</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Quick Contact</h3>
              <div className="space-y-6 text-lg">
                <p><strong>Phone/WhatsApp:</strong> <a href="tel:+919981573873" className="text-blue-600">+91 9981573873</a></p>
                <p><strong>Email:</strong> <a href="mailto:visa@prishatravel.in" className="text-blue-600">visa@prishatravel.in</a></p>
                <p><strong>Address:</strong> E-3/3 Arera Colony, Bhopal, MP</p>
                <p><strong>Timings:</strong> Mon-Sat, 11AM - 7PM</p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Request Callback</h3>
              <form className="space-y-6">
                <input type="text" placeholder="Name" className="w-full px-6 py-4 rounded-xl border" required />
                <input type="tel" placeholder="Mobile" className="w-full px-6 py-4 rounded-xl border" required />
                <select className="w-full px-6 py-4 rounded-xl border">
                  <option>Tourist Visa</option>
                  <option>Schengen Visa</option>
                  <option>UK Visa</option>
                  <option>Other</option>
                </select>
                <button className="w-full py-3 bg-blue-600 text-white font-bold text-xl rounded-xl hover:bg-blue-700 transition">
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
