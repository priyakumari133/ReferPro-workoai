

// Modern Dashboard UI with sidebar, summary cards, and candidate list


import React, { useEffect, useState } from "react";
import CandidateCard from "../components/CandidateCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import ReferralForm from "../components/ReferralForm";

export default function Dashboard({ apiBaseUrl }) {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ name: "Priya Kumari", email: "priya@email.com" });
  const [showReferralForm, setShowReferralForm] = useState(false);

  // Save referral to backend
  const handleReferralSubmit = async (form, reset) => {
    setLoading(true);
    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("jobTitle", form.jobTitle);
    if (form.resume) data.append("resume", form.resume);
    try {
      const res = await fetch(`${apiBaseUrl}/candidates`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (!res.ok) {
        alert(result.error || "Error submitting referral. Please try again.");
        setLoading(false);
        return;
      }
      // Success: close modal, reset form, refresh candidates
      setShowReferralForm(false);
      if (typeof reset === 'function') reset();
      // Refresh candidate list
      fetch(`${apiBaseUrl}/candidates`)
        .then(res => res.json())
        .then(data => setCandidates(data))
        .catch(() => {});
    } catch (err) {
      alert("Error submitting referral. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch(`${apiBaseUrl}/candidates`)
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(() => setCandidates([]));
  }, [apiBaseUrl]);

  const handleStatusChange = (id, status) => {
    setLoading(true);
    fetch(`${apiBaseUrl}/candidates/${id}/status`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then(res => res.json())
      .then(updated => {
        setCandidates(candidates =>
          candidates.map(c => (c._id === id ? { ...c, status: updated.status } : c))
        );
      })
      .finally(() => setLoading(false));
  };

  const filtered = candidates.filter(c =>
    c.jobTitle.toLowerCase().includes(search.toLowerCase()) ||
    c.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f0f4f8] via-[#e0e7ef] to-[#f7f7fa] font-['Inter','Segoe UI',sans-serif]">
      <Navbar />
      <main className="w-full flex flex-col items-center px-0 md:px-0">
        <header className="w-full max-w-full bg-gradient-to-r from-[#f7b267] via-[#f4845f] to-[#f27059] py-12 px-4 md:px-16 rounded-b-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
          <div className="flex-1 min-w-[260px]">
            <h1 className="text-6xl font-black tracking-tight text-white mb-4 leading-tight drop-shadow-xl">
               Welcome, <span className="text-[#22223b]">{user.name.split(' ')[0]}</span>
            </h1>
            <p className="text-2xl text-[#22223b] mb-8 max-w-2xl font-medium">
              Empower your network by referring exceptional talent and monitoring every step of their journey. This professional dashboard provides real-time insights, seamless management, and celebrates your impact on building high-performing teams.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                className="bg-[#22223b] hover:bg-[#4a4e69] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-xl"
                onClick={() => setShowReferralForm(true)}
              >
                +New Referral
              </button>
              <button
                className="bg-white border-2 border-[#22223b] text-[#22223b] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#f2e9e4] transition text-xl"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                View All Candidates
              </button>
            </div>
          </div>
          <div className="hidden md:block flex-1 text-center">
            <img src="/Student-3-512.webp" alt="Student" className="w-96 h-70 object-cover rounded-2xl mx-auto drop-shadow-2xl" />
          </div>
        </header>
        <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mb-12 px-4">
          {/* Analytics Cards */}
          <div className="flex-1 flex flex-row md:flex-col gap-6 justify-between">
            <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-[#f4845f]">
              <div className="text-5xl font-black text-[#f27059]">{candidates.length}</div>
              <div className="text-[#22223b] mt-2 text-lg font-semibold">Total Referrals</div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-[#43aa8b]">
              <div className="text-5xl font-black text-[#43aa8b]">{candidates.filter(c=>c.status==='Hired').length}</div>
              <div className="text-[#22223b] mt-2 text-lg font-semibold">Selected</div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-2 border-[#f7b267]">
              <div className="text-5xl font-black text-[#f7b267]">{candidates.filter(c=>c.status==='Reviewed').length}</div>
              <div className="text-[#22223b] mt-2 text-lg font-semibold">In Interview</div>
            </div>
          </div>
          {/* Fun/Extra Functionality */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-[#4a4e69] flex flex-col gap-4">
              <h2 className="text-2xl font-extrabold text-[#22223b] mb-2">Quick Actions</h2>
              <button className="bg-[#43aa8b] hover:bg-[#2d6a4f] text-white font-bold px-6 py-3 rounded-lg transition text-lg" onClick={() => setShowReferralForm(true)}>
                Refer a Friend
              </button>
              <button className="bg-[#f27059] hover:bg-[#f4845f] text-white font-bold px-6 py-3 rounded-lg transition text-lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to Top
              </button>
              <button className="bg-[#22223b] hover:bg-[#4a4e69] text-white font-bold px-6 py-3 rounded-lg transition text-lg" onClick={() => window.location.reload()}>
                Refresh Dashboard
              </button>
            </div>
            <div className="bg-gradient-to-r from-[#43aa8b] via-[#f7b267] to-[#f27059] rounded-2xl shadow-xl p-8 text-white text-center text-xl font-semibold">
              <span>Keep referring and help your network grow! Every successful hire brings you closer to exclusive rewards.</span>
            </div>
          </div>
        </section>
        {/* Referral Form Modal */}
        {showReferralForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all">
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl animate-fadeInUp">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold px-2 focus:outline-none"
                onClick={() => setShowReferralForm(false)}
                aria-label="Close"
              >
                ×
              </button>
              <h3 className="text-3xl font-black mb-6 text-[#22223b] text-center">Refer a Candidate</h3>
              <ReferralForm onSubmit={handleReferralSubmit} loading={loading} />
            </div>
          </div>
        )}
        {/* Search and List */}
        <section id="candidates" className="w-full max-w-7xl mx-auto bg-white/90 backdrop-blur rounded-2xl p-10 shadow-2xl border-2 border-[#f4845f] overflow-x-auto mt-8 mb-16">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-4xl font-black text-[#22223b]">All Candidates</h2>
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {filtered.length === 0 ? (
            <div className="text-gray-400 text-center py-12 text-2xl font-semibold">No candidates found. Start referring!</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map(candidate => (
                <div className="break-words min-w-0">
                  <CandidateCard
                    key={candidate._id}
                    candidate={candidate}
                    onStatusChange={handleStatusChange}
                  />
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Floating New Referral Button for mobile */}
        <button
          className="md:hidden fixed bottom-8 right-8 z-50 bg-[#22223b] hover:bg-[#4a4e69] text-white rounded-full shadow-lg px-8 py-5 text-2xl font-black transition flex items-center gap-2"
          onClick={() => setShowReferralForm(true)}
        >
          <span className="text-3xl">+</span> Refer
        </button>
      </main>
    </div>
  );
}

