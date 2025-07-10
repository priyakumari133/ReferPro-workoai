
import React from "react";

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-900 border-yellow-300",
  Reviewed: "bg-blue-100 text-blue-900 border-blue-300",
  Hired: "bg-green-100 text-green-900 border-green-300",
};

const statusIcons = {
  Pending: "⏳",
  Reviewed: "🔎",
  Hired: "🎉",
};

export default function CandidateCard({ candidate, onStatusChange }) {
  const getInitials = (name) => {
    if (!name) return "?";
    const parts = name.split(" ");
    return parts.length > 1
      ? parts[0][0].toUpperCase() + parts[1][0].toUpperCase()
      : parts[0][0].toUpperCase();
  };

  return (
    <div className="bg-white border-2 border-[#f4845f] rounded-3xl shadow-2xl p-8 flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-200 relative min-h-[360px] min-w-[320px] max-w-full mb-10">
      {/* Avatar and Name */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1a1919] to-[#2e2a2a] flex items-center justify-center text-xl font-extrabold text-white shadow-lg border-4 border-white">
          {getInitials(candidate.name)}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-1.5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f27059] via-[#f4845f] to-[#22223b] mb-1 truncate whitespace-nowrap overflow-x-auto">
            {candidate.name}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[#4a4e69] text-base font-semibold truncate" title={candidate.jobTitle}>{candidate.jobTitle}</span>
            <span className="text-gray-400 text-xs" title="Job Title Info">ℹ️</span>
          </div>
        </div>
        <span className={`flex items-center gap-1 px-4 py-2 rounded-full text-base font-bold border-2 shadow-sm ${statusStyles[candidate.status] || "bg-gray-100 text-gray-800 border-gray-200"}`}>
          <span>{statusIcons[candidate.status] || "•"}</span> {candidate.status}
        </span>
      </div>
      {/* Contact Info */}
      <div className="flex flex-row gap-4 ml-1 mt-2 items-center">
        {candidate.email && (
          <a href={`mailto:${candidate.email}`} className="text-[#22223b] hover:text-[#f27059] text-xl" title={candidate.email}>
            {/* Standard envelope icon for email */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" stroke="currentColor" fill="none" />
              <path d="M3 7l9 6 9-6" strokeWidth="2" stroke="currentColor" fill="none" />
            </svg>
          </a>
        )}
        {candidate.phone && (
          <a href={`tel:${candidate.phone}`} className="text-[#22223b] hover:text-[#f27059] text-xl" title={candidate.phone}>
            {/* Phone icon only, no number shown */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5.75C3 4.784 3.784 4 4.75 4h2.5C8.216 4 9 4.784 9 5.75v2.5C9 9.216 8.216 10 7.25 10H6.5c.5 2.5 2.5 4.5 5 5v-.75C11.784 13 12.568 13.784 13.534 13.784h2.5c.966 0 1.75-.784 1.75-1.75v-2.5C17.784 8.784 17 8 16.034 8h-.75C14.784 6.5 12.784 4.5 10.284 4.5V5.25C10.284 6.216 9.5 7 8.534 7h-2.5C4.784 7 4 6.216 4 5.25v-2.5z" />
            </svg>
          </a>
        )}
      </div>
      {/* Resume Download */}
      {candidate.resume && (
        <div className="flex items-center gap-3 mt-3">
          <a
            href={candidate.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#43aa8b] to-[#f7b267] hover:from-[#f7b267] hover:to-[#43aa8b] text-white px-5 py-2 rounded-xl font-bold text-base shadow transition"
          >
            📄 View Resume
          </a>
          <button
            className="bg-[#f27059] hover:bg-[#f4845f] text-white px-4 py-2 rounded-xl font-bold text-base shadow transition"
            onClick={() => alert('Share functionality coming soon!')}
            title="Share Candidate"
          >
            🔗 Share
          </button>
        </div>
      )}
      <div className="border-t border-[#f4845f]/30 my-3" />
      {/* Status Change */}
      <div className="flex flex-col gap-2 mt-2">
        <label htmlFor="status" className="text-base text-[#4a4e69] font-bold">Change Status:</label>
        <select
          id="status"
          className="border-2 border-[#22223b] rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-[#f27059] transition w-full bg-white font-bold shadow-sm hover:border-[#f27059]"
          value={candidate.status}
          onChange={e => onStatusChange(candidate._id, e.target.value)}
        >
          <option value="Pending">Awaiting Review</option>
          <option value="Reviewed">In Review</option>
          <option value="Hired">Selected</option>
        </select>
      </div>
    </div>
  );
}
