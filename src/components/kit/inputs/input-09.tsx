import React from 'react';

export default function Input09() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-09">Input with suffix</label>
      <div className="group w-full flex rounded-none border border-slate-300 hover:border-slate-400 transition-colors duration-200 has-[:focus-visible]outline-none has-[:focus-visible]:ring-1 ring-offset-2 ring-slate-500">
        <input
          id="input-09"
          placeholder="https://example"
          type="text"
          className="w-full px-3 py-1.5 outline-none"
        />
        <span className="px-3 py-1.5 text-slate-500 bg-slate-50 border-l border-slate-300">
          .com
        </span>
      </div>
    </div>
  );
}
