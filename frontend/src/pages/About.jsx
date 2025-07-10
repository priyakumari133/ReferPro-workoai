import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow mt-10 flex flex-col gap-10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">About ReferPro</h1>
        <p className="text-gray-700 mb-4 text-base font-light">
          ReferPro is built for people who believe in the power of connections. We make it easy to recommend talented professionals, track their progress, and celebrate their success—all in one place.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 text-sm font-light">
          <li>Refer with confidence: Our platform is designed for transparency and trust.</li>
          <li>Stay updated: Get real-time notifications as your referrals move forward.</li>
          <li>Support your network: Help friends and colleagues find new opportunities.</li>
          <li>Simple, modern, and secure: Your data and referrals are always protected.</li>
        </ul>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col gap-2">
            <h2 className="text-lg font-bold mb-2 text-gray-800 font-serif">Our Mission</h2>
            <p className="text-gray-600 text-sm font-light">
              We believe every great opportunity starts with a personal connection. Our mission is to make professional referrals easy, rewarding, and accessible for everyone.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 flex flex-col gap-2">
            <h2 className="text-lg font-bold mb-2 text-gray-800 font-serif">How We Help</h2>
            <ul className="list-disc pl-6 text-gray-600 text-sm font-light">
              <li>Step-by-step guidance for making successful referrals.</li>
              <li>Resources and tips for growing your professional network.</li>
              <li>Community stories and testimonials to inspire you.</li>
              <li>Dedicated support for all your questions.</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 flex flex-col gap-2 mt-4">
          <h2 className="text-lg font-bold mb-2 text-blue-800 font-serif">Join Our Community</h2>
          <p className="text-blue-800 text-sm font-light">Become part of a growing network of professionals who believe in the power of referrals. Share your story, learn from others, and help shape the future of hiring.</p>
        </div>
        <p className="text-gray-400 text-xs mt-8">&copy; 2025 ReferPro. All rights reserved.</p>
      </div>
    </div>
  );
}
