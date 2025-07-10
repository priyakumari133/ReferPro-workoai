import React from "react";
import Navbar from "../components/Navbar";

export default function Metrics({ stats }) {
  // Demo stories data
  const stories = [
    {
      name: "Priya S.",
      story: "I referred my friend and she landed her dream job in just two weeks! The process was smooth and transparent.",
    },
    {
      name: "Rahul K.",
      story: "ReferPro made it easy to track my referrals. I love the updates and the support team is super helpful!",
    },
    {
      name: "Ayesha M.",
      story: "I never thought referring someone could be so rewarding. The dashboard is clean and easy to use.",
    },
    {
      name: "Sneha T.",
      story: "Thanks to ReferPro, I was able to help my colleague get noticed by a top company. The community stories inspired me to refer more!",
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-3xl mx-auto mt-10 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 font-serif">Community Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((s, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl shadow p-6 border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-700 font-serif">
                  {s.name.split(' ').map(n => n[0]).join('')}
                </div>
                <span className="font-semibold text-gray-800">{s.name}</span>
              </div>
              <p className="text-gray-700 text-base font-light">"{s.story}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
