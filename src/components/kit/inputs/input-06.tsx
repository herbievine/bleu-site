import React from 'react';

export default function Input06() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-06">Input with prefix</label>
      <div className="group w-full flex border border-slate-300 hover:border-slate-400 transition-colors duration-200 has-[:focus-visible]outline-none has-[:focus-visible]:ring-1 ring-offset-2 ring-slate-500">
        <span className="px-3 py-1.5 text-slate-500 bg-slate-50">https://</span>
        <input
          id="input-06"
          placeholder="example.com"
          type="text"
          className="w-full px-3 py-1.5 outline-none"
        />
      </div>
    </div>
  );
}
