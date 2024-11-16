import React from 'react';

export default function Input01() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-01">Simple input</label>
      <input
        id="input-01"
        placeholder="hello@example.com"
        type="text"
        className="w-full px-3 py-1.5 border border-slate-300 hover:border-slate-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-slate-500"
      />
    </div>
  );
}
