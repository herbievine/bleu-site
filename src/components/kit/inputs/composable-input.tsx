import React from "react";
import { cn } from "../../../utils/cn";

type Props = {
	label?: string;
	isError?: boolean;
	errorMessage?: string;
}

export default function Input({
	label,
	isError,
	errorMessage
}: Props) {
	return (
		<div className="w-full flex flex-col space-y-2">
			<label htmlFor="input-05">{label || "Input"}</label>
			<input id="input-05" placeholder="hello@example.com" value="hello@example" type="text" className="w-full px-3 py-1.5 text-red-500 border border-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-2 ring-red-300" />
			{isError ? <span className="text-red-500 text-xs">{errorMessage || "Invalid input"}</span> : null}
		</div>
	)
}
