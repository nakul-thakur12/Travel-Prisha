import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Prisha's Travel Paradise</h3>
            <p className="text-sm">Bhopal ki sabse trusted visa consultancy. 10+ saal ka experience, honest guidance aur local support.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Tourist Visa</li>
              <li>Business Visa</li>
              <li>Student Visa</li>
              <li>Schengen Visa</li>
              <li>UK Visa</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <p className="text-sm">E-3/3 Arera Colony,<br />Chhatrapati Shivaji Bhawan,<br />10 No. Market, Bhopal, MP 462016</p>
         <p className="mt-4 text-sm">
  Phone:{" "}
  <a
    href="tel:+919981573873"
    className="text-blue-600 hover:underline cursor-pointer"
  >
    +91 9981573873
  </a>
</p>

<p className="text-sm">
  Email:{" "}
  <a
    href="mailto:visa@prishatravel.in"
    className="text-blue-600 hover:underline cursor-pointer"
  >
    visa@prishatravel.in
  </a>
</p>

          </div>
        </div>
        <div className="border-t border-slate-800 pt-6 text-center text-sm">
          <p>© 2026 Prisha's Travel Paradise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};