import React from 'react';

export default function Input02() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-02">
        Required input <span className="text-red-500">*</span>
      </label>
      <input
        id="input-02"
        placeholder="hello@example.com"
        type="text"
        className="w-full px-3 py-1.5 rounded-none border border-slate-300 hover:border-slate-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-slate-500"
      />
    </div>
  );
}
