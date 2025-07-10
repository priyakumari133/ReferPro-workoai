import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2 animate-fade-in">
            Welcome to ReferPro
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4 animate-fade-in delay-100 font-light">
            ReferPro is your trusted platform to recommend talented professionals and help them advance their careers. Connect, refer, and make a difference in your network with ease and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Link to="/signup" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-base shadow transition">Start Referring</Link>
            <Link to="/about" className="bg-white border border-gray-200 text-gray-900 px-8 py-3 rounded-full font-semibold text-base shadow hover:bg-gray-50 transition">Learn More</Link>
          </div>
        </section>
        <section className="w-full max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-10 animate-fade-in delay-300">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-3 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2 font-serif">How to Get Started</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-1 text-left text-sm font-light">
              <li>Create your free ReferPro account.</li>
              <li>Submit a referral for a professional you trust.</li>
              <li>Track the progress of your referrals in real time.</li>
              <li>Celebrate when your referral succeeds!</li>
            </ol>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-3 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2 font-serif">Why ReferPro?</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 text-left text-sm font-light">
              <li>Simple, professional interface for all users.</li>
              <li>Real-time updates on every referral you make.</li>
              <li>Data privacy and security at every step.</li>
              <li>Supportive team to help you succeed.</li>
            </ul>
          </div>
        </section>
        {/* New: Features section */}
        <section className="w-full max-w-5xl mx-auto mt-20 animate-fade-in delay-400">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center font-serif">Platform Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-2">🔒</span>
              <h4 className="font-bold text-lg mb-1">Secure & Private</h4>
              <p className="text-gray-600 text-sm">Your data is always protected with industry-leading security and privacy standards.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-2">📈</span>
              <h4 className="font-bold text-lg mb-1">Track Progress</h4>
              <p className="text-gray-600 text-sm">Monitor every referral and get real-time updates as your network grows.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow p-6 border border-gray-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-2">🤝</span>
              <h4 className="font-bold text-lg mb-1">Community Support</h4>
              <p className="text-gray-600 text-sm">Get help and share your experience with a supportive community of professionals.</p>
            </div>
          </div>
        </section>

        {/* New: Call to action section */}
        <section className="w-full max-w-4xl mx-auto mt-20 mb-10 animate-fade-in delay-500">
          <div className="bg-blue-50 rounded-2xl shadow-lg p-10 flex flex-col items-center border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif text-center">Ready to make a difference?</h2>
            <p className="text-gray-700 text-center mb-6 max-w-xl">Join ReferPro today and help talented people in your network find their next big opportunity. Your referral could change someone's life!</p>
            <Link to="/signup" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold text-base shadow transition">Get Started</Link>
          </div>
        </section>
      </main>
      {/* Add some bottom margin for scroll */}
      <div className="h-10" />
    </div>
  );
}
