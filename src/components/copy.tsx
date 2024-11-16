import { useEffect, useRef, useState } from 'react';

type Props = {
  source: string;
};

export function Copy({ source }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const ref = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => clearTimeout(ref.current as NodeJS.Timeout), []);

  return (
    <button
      onClick={() => {
        if (ref.current) {
          return;
        }

        setIsCopied(true);
        navigator.clipboard.writeText(source);

        ref.current = setTimeout(() => {
          setIsCopied(false);
          ref.current = null;
        }, 1500);
      }}
      className="font-bold text-xs hover:underline"
    >
      {isCopied ? 'copied!' : 'copy'}
    </button>
  );
}
