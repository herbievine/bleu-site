import React from 'react';

export default function Input11() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-11">Input with currency</label>
      <div className="group w-full flex rounded-none border border-slate-300 hover:border-slate-400 transition-colors duration-200 has-[:focus-visible]outline-none has-[:focus-visible]:ring-1 ring-offset-2 ring-slate-500">
        <span className="pl-3 pr-1 py-1.5 text-slate-500">£</span>
        <input
          id="input-11"
          placeholder="0.00"
          type="text"
          className="w-full pr-3 pl-1 py-1.5 outline-none"
        />
        <span className="px-3 py-1.5 text-slate-500 bg-slate-50 border-l border-slate-300">
          GBP
        </span>
      </div>
    </div>
  );
}
