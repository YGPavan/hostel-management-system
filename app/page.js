"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start fade out after animation completes
    const fadeOutTimer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    // Remove loading screen after fade out
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 transition-opacity duration-700 ${showContent ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-center">
            <div className="mb-8">
              <div className="w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl animate-bounce">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
<h1 className="text-4xl font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300">
                HostelFlow
              </span>
            </h1>
            <p className="text-indigo-300 text-sm mt-2">Complaint Management System</p>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className={`space-y-24 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* HERO SECTION - Enhanced with animated gradient */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 px-8 md:px-12 py-16 md:py-24 text-white shadow-2xl">
        {/* Animated decorative blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[60px] animate-blob animation-delay-4000"></div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-300/30 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-indigo-300/40 rounded-full animate-float animation-delay-4000"></div>
        
        <div className="relative max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Hostel Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 animate-gradient-text">System</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-indigo-100 leading-relaxed max-w-2xl">
            A modern web platform designed to streamline hostel complaint 
            management by enabling students to raise issues efficiently and 
            allowing administrators to track and resolve them transparently.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/login"
              className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Login
            </a>

            <a
              href="/register"
              className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Register
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES - Enhanced */}
      <section id="features" className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
Why Choose <span className="text-gradient-animated">HostelFlow?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built to improve transparency, accountability, and response time 
            in hostel maintenance workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="premium-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Easy Complaint Submission
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Students can raise complaints quickly using a simple, 
                user-friendly interface with instant confirmation.
              </p>
            </div>
          </div>

          <div className="premium-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Real-Time Status Tracking
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Students can track complaint progress in real-time while 
                admins update resolution status instantly.
              </p>
            </div>
          </div>

          <div className="premium-card p-8 group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Admin Control Dashboard
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Administrators manage, prioritize, and resolve issues from 
                a centralized dashboard with full visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - New */}
      <section id="benefits" className="premium-card-static p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Additional <span className="text-gradient-animated">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Instant Notifications", desc: "Get notified via email and in-app alerts when your complaint status changes.", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
              { title: "Priority Support", desc: "Premium users get dedicated support with faster response times.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "Analytics Dashboard", desc: "Comprehensive analytics to track complaint patterns and resolution times.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { title: "Category Management", desc: "Organize complaints by categories like electrical, plumbing, cleaning, etc.", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
              { title: "Mobile Responsive", desc: "Access the platform from any device - desktop, tablet, or mobile.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
              { title: "Data Export", desc: "Export reports and data in multiple formats for record keeping.", icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Enhanced */}
      <section id="how-it-works" className="premium-card-static p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-transparent to-purple-50/50"></div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 relative">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -z-10"></div>
          
          <div className="text-center relative group">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
              1
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Student Raises Complaint
            </h4>
            <p className="mt-3 text-gray-600">
              Issues are reported via the student dashboard with detailed descriptions and categories.
            </p>
          </div>

          <div className="text-center relative group">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
              2
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Admin Reviews & Updates
            </h4>
            <p className="mt-3 text-gray-600">
              Admins review complaints and update their status in real-time with priority handling.
            </p>
          </div>

          <div className="text-center relative group">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
              3
            </div>
            <h4 className="text-lg font-semibold text-gray-900">
              Issue Gets Resolved
            </h4>
            <p className="mt-3 text-gray-600">
              Students track resolution progress and get notified instantly of any updates.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Enhanced */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-8 md:px-12 py-16 md:py-24 text-white shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[80px] animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-400/20 rounded-full blur-[60px] animate-blob animation-delay-2000"></div>
        
        <div className="relative text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built for Smart Hostel Administration
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
HostelFlow brings structure, transparency, and efficiency to hostel 
            maintenance management using modern web technologies. Join institutions 
            already using our platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="/register" className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200">
              Get Started
            </a>
            <a href="/login" className="bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
              Sign In
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
