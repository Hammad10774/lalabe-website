/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  Moon, 
  Globe, 
  Heart, 
  ShieldCheck, 
  Music,
  BookOpen,
  ChevronRight,
  Check,
  Home,
  Mic,
  User
} from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulated waveform data for the mockup
  const bars = Array.from({ length: 14 });

  return (
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
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-text leading-none">
              lalabe
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-muted mt-1">
              your voice, their dreams
            </span>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-10 sm:pt-20">
        
        {/* === Hero Section with Interactive App Mockup === */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            
            {/* Value Proposition */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-sm font-medium mb-8"
              >
                <Heart className="w-4 h-4 fill-brand-accent/20" />
                <span>The ultimate bedtime miracle</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl font-serif mb-6 leading-[1.1] text-brand-text max-w-3xl"
              >
                Your Voice, Their Dreams. <br/>
                <span className="italic font-light text-brand-accent/80">Even When You Can’t Be There.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-brand-muted max-w-2xl lg:max-w-lg mb-10 leading-relaxed font-light mx-auto lg:mx-0"
              >
                Clone your voice softly in 60 seconds and let our serene AI sing custom lullabies to your little one. The perfect companion for busy parents.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-text hover:bg-[#733F2E] text-white px-8 py-4 rounded-full font-medium text-lg shadow-soft transition-all">
                  <span>Get Started – First Poem Free</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* App Mockup UI (Replicating Screenshot) */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full max-w-sm mx-auto"
            >
               <div className="bg-[#FDF6EE] rounded-[40px] border-[10px] border-white shadow-[0_30px_60px_rgba(141,77,58,0.15)] p-6 relative overflow-hidden h-auto aspect-[1/2] max-h-[750px] flex flex-col justify-between">
                  {/* Decorative faint dots in the app mockup */}
                  <div className="absolute top-16 left-6 w-2 h-2 rounded-full bg-brand-peach-dark opacity-30"></div>
                  <div className="absolute top-48 right-6 w-3 h-3 rounded-full bg-brand-peach opacity-50"></div>

                  <div>
                     {/* Safe area simulation */}
                     <div className="h-6 w-full flex justify-between items-center px-2 mb-4 text-[#8D4D3A]/40 text-[10px] font-medium">
                        <span>9:41</span>
                        <div className="flex gap-1.5">
                           <div className="w-3 h-2.5 border border-current rounded-[2px]"></div>
                           <div className="w-3 h-2.5 border border-current rounded-[2px]"></div>
                        </div>
                     </div>

                     {/* Logo Area inside App */}
                     <div className="flex flex-col items-center mt-2 mb-8 relative">
                        <div className="w-14 h-14 rounded-full bg-[#F2DEC9] flex items-center justify-center mb-4 transition-transform hover:scale-105 cursor-pointer">
                           <div className="w-5 h-5 rounded-full bg-brand-accent"></div>
                        </div>
                        <h2 className="font-serif text-4xl text-brand-text mb-1 tracking-tight">lalabe</h2>
                        <p className="text-brand-muted text-[10px] uppercase tracking-[0.15em] font-medium">your voice, their dreams</p>
                     </div>

                     {/* Nav Pills */}
                     <div className="flex bg-[#F6EBE0] p-1.5 rounded-full mb-8 shadow-sm">
                       <div className="flex-1 bg-white rounded-full py-2.5 text-center text-xs font-semibold text-brand-text shadow-sm">Home</div>
                       <div className="flex-1 py-2.5 text-center text-xs font-medium text-brand-muted">Record</div>
                       <div className="flex-1 py-2.5 text-center text-xs font-medium text-brand-muted">Sleep</div>
                     </div>

                     {/* Grandma Card */}
                     <div className="text-[10px] text-brand-muted uppercase tracking-[0.15em] mb-3 font-semibold px-2">Your Voice Profile</div>
                     <div className="card-peach-alt p-5 pt-6 rounded-3xl mb-8 relative overflow-hidden shadow-sm group">
                        <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#F4D3BC] rounded-full opacity-50 transition-transform group-hover:scale-110"></div>
                        <div className="flex justify-between items-start mb-6 relative">
                          <div>
                            <h3 className="font-serif text-[22px] font-bold text-brand-text">Grandma</h3>
                            <p className="text-xs text-brand-text/70 mt-1.5">Voice ready · 4 generated</p>
                          </div>
                          <div className="badge-green px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-sm border border-white/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green-dark inline-block"></span> Ready
                          </div>
                        </div>
                        {/* Waveform Fake */}
                        <div className="flex gap-1.5 items-end h-7 px-1 relative">
                           {bars.map((_, i) => (
                              <div key={i} className="flex-1 bg-[#DEB097] rounded-full opacity-80" 
                                   style={{ height: `${20 + Math.random() * 80}%` }} />
                           ))}
                           <button onClick={() => setIsPlaying(!isPlaying)} className="absolute -right-2 -bottom-2 w-12 h-12 bg-[#89A893] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform">
                              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                           </button>
                        </div>
                     </div>

                     {/* What would you like? */}
                     <div className="text-[10px] text-brand-muted uppercase tracking-[0.15em] mb-3 font-semibold px-2">What would you like?</div>
                     <div className="space-y-4">
                       <div className="card-peach-alt p-4 rounded-3xl flex items-center justify-between shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                         <div className="flex items-center gap-4">
                           <div className="w-12 h-12 flex items-center justify-center">
                             <Music className="text-brand-text w-8 h-8"/>
                           </div>
                           <div>
                             <h4 className="font-serif text-[20px] text-brand-text font-bold mb-0.5">Poems</h4>
                             <p className="text-xs text-brand-text/70">4 lullabies · sung in your voice</p>
                           </div>
                         </div>
                         <ChevronRight className="w-5 h-5 text-brand-text/40 mr-2" />
                       </div>
                       
                       <div className="card-blue p-4 rounded-3xl flex items-center justify-between shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                         <div className="flex items-center gap-4">
                           <div className="w-12 h-12 flex items-center justify-center">
                             <BookOpen className="text-brand-blue-text w-8 h-8"/>
                           </div>
                           <div>
                             <h4 className="font-serif text-[20px] text-brand-blue-text font-bold mb-0.5">Story Telling</h4>
                             <p className="text-xs text-brand-blue-text/70">Bedtime stories in your voice</p>
                           </div>
                         </div>
                         <ChevronRight className="w-5 h-5 text-brand-blue-text/40 mr-2" />
                       </div>
                     </div>
                  </div>

                  {/* Bottom Navigation Fake */}
                  <div className="flex justify-between items-center px-4 mt-6 border-t border-brand-text/5 pt-4 pb-2">
                     <div className="flex flex-col items-center gap-1 group cursor-pointer">
                        <Home className="w-6 h-6 text-brand-accent group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-medium text-brand-accent">Home</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 cursor-pointer group transition-opacity">
                        <Mic className="w-6 h-6 text-brand-text group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-medium text-brand-text">Record</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 cursor-pointer group transition-opacity">
                        <Moon className="w-6 h-6 text-brand-text group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-medium text-brand-text">Sleep</span>
                     </div>
                     <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 cursor-pointer group transition-opacity">
                        <User className="w-6 h-6 text-brand-text group-hover:-translate-y-1 transition-transform" />
                        <span className="text-[10px] font-medium text-brand-text">Profile</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* === Problem/Solution Section === */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-brand-text/5">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-brand-text">
              Always comforting. <br className="sm:hidden" />
              <span className="italic font-light text-brand-accent">Always you.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[32px] flex flex-col items-center text-center shadow-soft hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl card-peach flex items-center justify-center mb-6">
                <Moon className="w-8 h-8 text-brand-text" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-text mb-4">The Night Shift</h3>
              <p className="text-brand-muted leading-relaxed font-light">
                Give your partner a break or stay connected through the nursery speakers even if you're stuck at work.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[32px] flex flex-col items-center text-center shadow-soft hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl card-blue flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-brand-blue-text" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-brand-blue-text mb-4">The Travel Parent</h3>
              <p className="text-brand-muted leading-relaxed font-light">
                Send a goodnight song with a familiar voice from across the globe directly to the little one's room.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[32px] flex flex-col items-center text-center shadow-soft hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 rounded-2xl bg-[#E0EBE0] flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#537A5D]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#537A5D] mb-4">The Memory Keeper</h3>
              <p className="text-brand-muted leading-relaxed font-light">
                Preserve your voice for generations, creating a beautiful digital heirloom they'll never outgrow.
              </p>
            </div>
          </div>
        </section>

        {/* === Pricing Tier Section === */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-peach/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="bg-white rounded-[40px] shadow-[0_20px_80px_rgba(141,77,58,0.12)] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-brand-peach/30">
              
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-[11px] font-bold uppercase tracking-widest mb-6">
                  Most Popular
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4">Lullaby Essential</h2>
                <p className="text-brand-muted mb-8 max-w-sm text-lg font-light">
                  Everything you need to create custom, soothing nightly routines.
                </p>
                
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-serif font-bold text-brand-text">$9.95</span>
                  <span className="text-brand-muted font-medium">/month</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    '12,000 Tokens (12 Minutes of Magic)', 
                    'Lifetime Voice Storage', 
                    'Ultra-realistic emotion capture', 
                    'Downloadable audio files'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text/90 font-medium">
                      <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-green-dark" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-brand-text text-white hover:bg-[#733F2E] px-8 py-5 rounded-2xl font-semibold transition-colors shadow-lg">
                  Get Started Now
                </button>
              </div>
              
            </div>
          </div>
        </section>

        {/* === Trust & Safety Section === */}
        <section className="py-24 max-w-3xl mx-auto px-6 text-center border-t border-brand-text/5">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-8 relative">
            <div className="absolute inset-0 rounded-full badge-green opacity-20 blur-md" />
            <ShieldCheck className="w-10 h-10 text-brand-green-dark" />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-text mb-6">
            Your Privacy is Our Priority.
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed text-lg font-light">
            Your voice data is military-grade encrypted and used <strong className="font-semibold text-brand-text">only</strong> for your child's lullabies. We never sell or share biometric data. Rest easy knowing your family's data is secure.
          </p>
        </section>
      </main>

      {/* === Footer === */}
      <footer className="max-w-7xl mx-auto px-6 text-center pt-16 mt-16 pb-8 border-t border-brand-text/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-text leading-none">
              lalabe
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-muted mt-1">
              your voice, their dreams
            </span>
          </div>

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
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
