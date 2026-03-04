"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn, getRole } from "@/lib/auth";

const STATUS_OPTIONS = ["Pending", "In Progress", "Resolved"];

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

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const router = useRouter();

  /* 🔐 AUTH PROTECTION */
  useEffect(() => {
    if (!isLoggedIn() || getRole() !== "admin") {
      router.push("/login");
    }
  }, [router]);

  /* 📥 LOAD COMPLAINTS */
  async function loadComplaints() {
    const res = await fetch("/api/complaints");
    const data = await res.json();
    setComplaints(data);
  }

  /* 🔄 UPDATE STATUS (OPTIMISTIC UI) */
  async function updateStatus(id, status) {
    const original = complaints.find((c) => c.id === id)?.status;

    setComplaints((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );

    try {
      const res = await fetch(`/api/complaints/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      if (data?.updated?.status) {
        setComplaints((prev) =>
          prev.map((c) =>
            c.id === id ? { ...c, status: data.updated.status } : c
          )
        );
      }

      loadComplaints();
    } catch (err) {
      console.error("updateStatus error", err);
      if (original) {
        setComplaints((prev) =>
          prev.map((c) =>
            c.id === id ? { ...c, status: original } : c
          )
        );
      }
      loadComplaints();
    }
  }

  /* ⏱ INITIAL LOAD */
  useEffect(() => {
    loadComplaints();
  }, []);

const pendingCount = complaints.filter(c => c.status === "Pending").length;
  const inProgressCount = complaints.filter(c => c.status === "In Progress").length;
  const resolvedCount = complaints.filter(c => c.status === "Resolved").length;

  // Filter complaints based on selected status
  const filteredComplaints = filterStatus === "All" 
    ? complaints 
    : complaints.filter(c => c.status === filterStatus);

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
        <h2 className="text-3xl font-bold">
          Admin Dashboard
        </h2>
        <p className="text-indigo-100 mt-2">
          Review and manage hostel complaints
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="premium-card-static p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
            </div>
          </div>
        </div>

        <div className="premium-card-static p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{inProgressCount}</p>
            </div>
          </div>
        </div>

        <div className="premium-card-static p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Resolved</p>
              <p className="text-2xl font-bold text-gray-900">{resolvedCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPLAINT LIST */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-900">All Complaints</h3>
          
{/* FILTER DROPDOWN */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 px-6 py-4 rounded-2xl shadow-xl border-2 border-white/30 animate-pulse">
            <div className="relative">
              <svg className="w-7 h-7 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-bounce"></span>
            </div>
            <label className="text-lg font-extrabold text-white tracking-wide">Filter by Status:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="py-3 px-5 text-base min-w-[180px] bg-white text-indigo-900 font-bold rounded-xl border-3 border-white shadow-lg cursor-pointer hover:bg-indigo-50 hover:scale-105 transition-all duration-200"
            >
              <option value="All">All Complaints</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-4">
          {filteredComplaints.length === 0 ? (
            <div className="premium-card-static p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-gray-500">No complaints available.</p>
            </div>
          ) : (
            filteredComplaints.map((c) => (
              <div
                key={c.id}
                className="premium-card p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {c.title}
                    </h4>
                    <p className="text-gray-600 mt-2">
                      {c.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <StatusBadge status={c.status} />

                    <select
                      value={c.status}
                      onChange={(e) =>
                        updateStatus(c.id, e.target.value)
                      }
                      className="premium-select py-2 px-4 text-sm min-w-[140px]"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
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
