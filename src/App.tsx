/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative pb-20 selection:bg-brand-peach-dark selection:text-white">
        
        {/* Background Decorative Dots */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="floating-dot w-4 h-4 bg-brand-peach-dark/30 top-[15%] left-[10%]" />
          <div className="floating-dot w-8 h-8 bg-brand-peach/40 top-[25%] right-[15%]" />
          <div className="floating-dot w-6 h-6 bg-brand-accent/20 bottom-[20%] left-[20%]" />
          <div className="floating-dot w-12 h-12 bg-brand-peach-light/60 top-[60%] right-[10%]" />
        </div>

        {/* Navigation */}
        <nav className="relative z-50 transition-all duration-300 pt-6">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity">
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-text leading-none">
                lalabe
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-muted mt-1">
                your voice, their dreams
              </span>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        {/* === Footer === */}
        <footer className="max-w-7xl mx-auto px-6 text-center pt-16 mt-16 pb-8 border-t border-brand-text/10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            
            <Link to="/" className="flex flex-col items-center md:items-start hover:opacity-80 transition-opacity">
              <span className="font-serif text-2xl font-bold tracking-tight text-brand-text leading-none">
                lalabe
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-muted mt-1">
                your voice, their dreams
              </span>
            </Link>

            <div className="flex items-center gap-4">
              <button className="flex flex-col items-center justify-center bg-white border border-brand-text/10 w-40 h-14 rounded-xl text-brand-text hover:bg-brand-peach-light/20 transition-colors cursor-default shadow-sm opacity-80 hover:opacity-100">
                <span className="font-semibold">App Store</span>
                <span className="text-[9px] uppercase tracking-widest mt-0.5 text-brand-muted font-medium">Coming Soon</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-white border border-brand-text/10 w-40 h-14 rounded-xl text-brand-text hover:bg-brand-peach-light/20 transition-colors cursor-default shadow-sm opacity-80 hover:opacity-100">
                <span className="font-semibold">Google Play</span>
                <span className="text-[9px] uppercase tracking-widest mt-0.5 text-brand-muted font-medium">Coming Soon</span>
              </button>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-muted font-medium pt-8 border-t border-brand-text/5">
            <p>© {new Date().getFullYear()} Lalabe Voice Inc. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <Link to="/privacy" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
              <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
