import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className=" border-t border-slate-100 dark:border-white/5 bg-white/50 dark:bg-[#0a0a0c]/50 py-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Section - Navbar style logo */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-icons-outlined text-[#2563eb] text-3xl">auto_awesome</span>
              <span className="font-serif text-2xl font-bold tracking-tight dark:text-white">MegaBlog</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-md">
              A modern publishing platform for creative minds and digital storytellers. Empowering voices worldwide.
            </p>
           
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-icons-outlined text-[#2563eb] text-lg">business</span>
              Company
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">rocket_launch</span>
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">attach_money</span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">diversity_3</span>
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">newspaper</span>
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-icons-outlined text-[#2563eb] text-lg">support_agent</span>
              Support
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">account_circle</span>
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">help_center</span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">contact_support</span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">headset_mic</span>
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-icons-outlined text-[#2563eb] text-lg">gavel</span>
              Legals
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">description</span>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">privacy_tip</span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">copyright</span>
                  Licensing
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#2563eb] transition-colors flex items-center gap-2" to="#">
                  <span className="material-icons-outlined text-base">security</span>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2026 MegaBlog. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <Link className="hover:text-[#2563eb] transition-colors" to="#">Sitemap</Link>
            <Link className="hover:text-[#2563eb] transition-colors" to="#">Status</Link>
            <Link className="hover:text-[#2563eb] transition-colors" to="#">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer