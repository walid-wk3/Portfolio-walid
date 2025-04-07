import React from 'react';

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-sky-400/20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-400 text-lg">
          © {new Date().getFullYear()} - Walid Kherchouch
        </p>
      </div>
    </footer>
  );
}