import React, { useRef, useState } from "react";

export default function ReferralForm({ onSubmit, loading }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    jobTitle: "",
    resume: null,
  });
  const [error, setError] = useState("");
  const fileInput = useRef();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm(f => ({ ...f, resume: files[0] }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.phone || !form.jobTitle) {
      setError("All fields except resume are required.");
      return;
    }
    if (form.resume && form.resume.type !== "application/pdf") {
      setError("Resume must be a PDF file.");
      return;
    }
    onSubmit(form, () => {
      setForm({ name: "", email: "", phone: "", jobTitle: "", resume: null });
      if (fileInput.current) fileInput.current.value = "";
    });
  };

  return (
    <form className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-6 border-2 border-[#f4845f] w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-black mb-2 tracking-tight text-[#22223b] text-center">🚀 Refer a Candidate</h2>
      {error && <div className="text-red-500 text-base font-semibold bg-red-50 rounded px-3 py-2 border border-red-200 text-center">{error}</div>}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="flex-1 bg-[#f7f7fa] border-2 border-[#f4845f] rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f4845f] placeholder-gray-400 transition"
          name="name"
          placeholder="Candidate Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="flex-1 bg-[#f7f7fa] border-2 border-[#f4845f] rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f4845f] placeholder-gray-400 transition"
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <input
          className="flex-1 bg-[#f7f7fa] border-2 border-[#f4845f] rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f4845f] placeholder-gray-400 transition"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className="flex-1 bg-[#f7f7fa] border-2 border-[#f4845f] rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f4845f] placeholder-gray-400 transition"
          name="jobTitle"
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-4">
        <input
          className="bg-[#f7f7fa] border-2 border-[#f4845f] rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#f4845f] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#f4845f] file:text-white hover:file:bg-[#f27059] transition"
          name="resume"
          type="file"
          accept="application/pdf"
          ref={fileInput}
          onChange={handleChange}
        />
        <button
          className="bg-gradient-to-r from-[#f4845f] to-[#f27059] hover:from-[#f27059] hover:to-[#f4845f] text-white rounded-xl px-8 py-3 font-bold text-lg shadow-lg transition disabled:opacity-50 w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Referral"}
        </button>
      </div>
    </form>
  );
}
