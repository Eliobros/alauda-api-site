// components/CodeBlock.tsx
// Componente para exibir código com syntax highlight e copy

'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4">
      {title && (
        <div className="bg-gray-800 px-4 py-2 rounded-t-lg border border-gray-700 border-b-0">
          <span className="text-sm text-gray-400">{title}</span>
        </div>
      )}
      <div className={`bg-gray-900 border border-gray-700 ${title ? 'rounded-b-lg' : 'rounded-lg'} overflow-hidden`}>
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
          <span className="text-xs text-gray-500 uppercase font-mono">{language}</span>
          <button
            onClick={handleCopy}
            className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition"
          >
            {copied ? '✓ Copiado!' : 'Copiar'}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-gray-300 font-mono whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
}
