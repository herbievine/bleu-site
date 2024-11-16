import React from 'react';

export default function Input10() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-10">Input with CTA</label>
      <div className="group w-full flex">
        <input
          id="input-10"
          placeholder="Type your message..."
          type="text"
          className="w-full px-3 py-1.5 outline-none rounded-none border border-slate-300 hover:border-slate-400 transition-colors duration-200 focus-visible:ring-1 ring-offset-2 ring-slate-500 z-10"
        />
        <button className="px-3 py-1.5 text-slate-700 hover:bg-slate-100 border border-l-0 border-slate-300 transition-colors duration-150">
          Send
        </button>
      </div>
    </div>
  );
}
