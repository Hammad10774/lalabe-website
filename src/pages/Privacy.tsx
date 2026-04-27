import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export function Privacy() {
  return (
    <main className="relative z-10 pt-10 sm:pt-20">
      <section className="max-w-4xl mx-auto px-6 mb-32">
        
        {/* Trust Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-8 relative">
            <div className="absolute inset-0 rounded-full badge-green opacity-20 blur-md" />
            <ShieldCheck className="w-10 h-10 text-brand-green-dark" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-6">
            Privacy Policy
          </h1>
          <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed text-lg font-light">
            Last Updated: April 27, 2026
          </p>
        </div>

        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] shadow-[0_20px_80px_rgba(141,77,58,0.12)] p-8 sm:p-12 md:p-16 border border-brand-peach/30 text-brand-text font-light leading-relaxed max-w-none"
        >
          <p className="text-lg font-medium mb-12 text-brand-text text-center max-w-2xl mx-auto">
            At Lalabe (operated under openperp.co.uk), we take your family’s privacy and the security of your voice data with the utmost seriousness. This policy explains how we handle your information.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">1. Information We Collect</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p><strong className="font-semibold">Voice Data:</strong> To provide our core service (AI lullabies), we require access to your microphone to record your voice.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p><strong className="font-semibold">Audio Files:</strong> We collect and process the audio recordings you provide to create a unique AI voice clone.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p><strong className="font-semibold">Device Information:</strong> We collect standard technical data (device model, OS version) to ensure the app runs smoothly.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">2. How We Use Your Voice Data</h2>
              <p className="mb-4">Your voice data is used exclusively for the following:</p>
              <ul className="space-y-4 mb-6">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p>Generating a custom AI voice model to sing lullabies.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p>Processing audio through our secure AI servers to create your requested tracks.</p>
                </li>
              </ul>
              <div className="bg-brand-peach-light/30 p-6 rounded-2xl border border-brand-peach/50 space-y-2">
                <p className="font-medium">⚠️ We do NOT sell, rent, or trade your voice data to third parties.</p>
                <p className="font-medium">⚠️ We do NOT use your voice data for advertising or marketing purposes.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">3. Microphone Permissions</h2>
              <p>
                The app requests the <code className="bg-brand-peach-light/50 px-2 py-1 rounded text-sm text-brand-text font-mono">RECORD_AUDIO</code> permission. This is used solely to capture the sample needed for the AI cloning process. You can revoke this permission at any time in your device settings, though the app will not be able to generate new content without it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">4. Data Storage and Security</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p>All audio data is encrypted during transit (using SSL/TLS) and at rest.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p>Voice models are stored on secure servers with restricted access.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                  <p><strong className="font-semibold">User Control:</strong> You may request the total deletion of your voice model and recordings at any time by contacting us or using the "Delete Account" feature in the app settings.</p>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">5. Children’s Privacy</h2>
              <p>
                Lalabe is a tool for parents. While the end product (lullabies) is intended for children, the app should only be operated by an adult. We do not knowingly collect personal data from children under the age of 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold mb-4">6. Third-Party Services</h2>
              <p>
                We use secure third-party processors (like RevenueCat for subscriptions and secure AI cloud providers) to facilitate our services. These partners are contractually obligated to protect your data and are not permitted to use it for any other purpose.
              </p>
            </section>

            <section className="bg-[#EBF2FF]/50 p-8 rounded-3xl border border-[#CFE1F5]">
              <h2 className="text-2xl font-serif font-bold mb-6 text-brand-blue-text">7. Contact Us</h2>
              <p className="mb-4">If you have questions regarding your data or this policy, please contact us at:</p>
              <div className="space-y-2">
                <p><strong className="font-semibold text-brand-blue-text">Email:</strong> <a href="mailto:hammad@openperp.co.uk" className="text-brand-accent hover:underline">hammad@openperp.co.uk</a></p>
                <p><strong className="font-semibold text-brand-blue-text">Website:</strong> <a href="https://lalabe.openperp.co.uk" className="text-brand-accent hover:underline">https://lalabe.openperp.co.uk</a></p>
              </div>
            </section>

          </div>
        </motion.div>
      </section>
    </main>
  );
}
