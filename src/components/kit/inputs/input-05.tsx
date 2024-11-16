import React from 'react';

export default function Input05() {
  return (
    <div className="w-full flex flex-col space-y-2">
      <label htmlFor="input-05">Input with error</label>
      <input
        id="input-05"
        placeholder="hello@example.com"
        defaultValue="hello@example"
        type="text"
        className="w-full px-3 py-1.5 text-red-500 rounded-none border border-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-red-300"
      />
      <span className="text-red-500 text-xs">Invalid email address</span>
    </div>
  );
}
