import React from 'react';

export default function Input04() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor="input-04">Input with hint</label>
        <span className="text-xs text-slate-600">optional</span>
      </div>
      <input
        id="input-04"
        placeholder="hello@example.com"
        type="text"
        className="w-full px-3 py-1.5 border border-slate-300 hover:border-slate-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-slate-500"
      />
    </div>
  );
}
