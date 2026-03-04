"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn, getRole } from "@/lib/auth";

/* 🔵 STATUS BADGE */
function StatusBadge({ status }) {
  const styles = {
    Pending: "badge-pending",
    "In Progress": "badge-progress",
    Resolved: "badge-resolved",
  };

  return (
    <span className={styles[status] || "badge-pending"}>
      {status}
    </span>
  );
}

export default function StudentDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complaints, setComplaints] = useState([]);
  const router = useRouter();

  /* 🔐 AUTH PROTECTION */
  useEffect(() => {
    if (!isLoggedIn() || getRole() !== "student") {
      router.push("/login");
    }
  }, [router]);

  /* 📥 LOAD COMPLAINTS */
  async function loadComplaints() {
    const res = await fetch("/api/complaints");
    const data = await res.json();
    setComplaints(data);
  }

  /* 📝 SUBMIT COMPLAINT */
  async function submitComplaint() {
    if (!title || !description) {
      alert("Please fill all fields");
      return;
    }

    await fetch("/api/complaints", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    loadComplaints();
  }

  /* 🔄 AUTO REFRESH (EVERY 3 SECONDS) */
  useEffect(() => {
    loadComplaints();
    const interval = setInterval(loadComplaints, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
        <h2 className="text-3xl font-bold">
          Student Dashboard
        </h2>
        <p className="text-indigo-100 mt-2">
          Submit and track your complaints
        </p>
      </div>

      {/* NEW COMPLAINT */}
      <div className="premium-card-static p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            Submit New Complaint
          </h3>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Complaint Title</label>
            <input
              className="premium-input"
              placeholder="Enter a brief title for your complaint"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              rows={4}
              className="premium-input resize-none"
              placeholder="Describe the issue in detail"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            onClick={submitComplaint}
            className="btn-primary flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Submit Complaint
          </button>
        </div>
      </div>

      {/* COMPLAINT LIST */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Your Complaints</h3>
          <span className="text-sm text-gray-500">{complaints.length} total</span>
        </div>
        
        <div className="space-y-4">
          {complaints.length === 0 ? (
            <div className="premium-card-static p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500">No complaints submitted yet.</p>
              <p className="text-sm text-gray-400 mt-1">Submit your first complaint using the form above.</p>
            </div>
          ) : (
            complaints.map((c) => (
              <div
                key={c.id}
                className="premium-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {c.title}
                    </h4>
                    <p className="text-gray-600 mt-2">
                      {c.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <StatusBadge status={c.status} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
