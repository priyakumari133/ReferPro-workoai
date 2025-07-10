import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12 pt-10 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-10 border-b border-gray-800 pb-8">
        <div className="flex flex-col gap-3 md:w-1/3">
          <div className="flex items-center gap-2 mb-2">
            <svg width="36" height="36" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="#6366f1"/><text x="20" y="26" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">R</text></svg>
            <span className="font-bold text-xl tracking-tight font-serif">ReferPro</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">Empowering your network, one referral at a time.</p>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-white">Platform</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li><a href="/about" className="hover:underline text-gray-300">About</a></li>
              <li><a href="/metrics" className="hover:underline text-gray-300">Stories</a></li>
              <li><a href="/signup" className="hover:underline text-gray-300">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Resources</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li><a href="mailto:support@referpro.com" className="hover:underline text-gray-300">Contact Support</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Help Center</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Connect</h4>
            <ul className="flex flex-col gap-1 text-sm">
              <li><a href="#" className="hover:underline text-gray-300">Community</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Blog</a></li>
              <li><a href="#" className="hover:underline text-gray-300">Events</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8">
        <div className="text-xs text-gray-400 font-mono">&copy; {new Date().getFullYear()} ReferPro. All rights reserved.</div>
        <div className="text-xs text-gray-500">Made with <span className="text-pink-400">♥</span> by the ReferPro Team</div>
      </div>
    </footer>
  );
}
