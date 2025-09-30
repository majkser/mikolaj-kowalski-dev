'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy } from 'lucide-react';
import { CodeViewerProps } from '@/types/codeViewer';

export function CodeViewer({
  code,
  language,
  fileName,
  showLineNumbers = true,
}: CodeViewerProps) {
  return (
    <div className="rounded-md overflow-hidden border border-border my-4">
      {fileName && (
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
          <span className="font-medium text-secondary-foreground/50">
            {fileName}
          </span>
          <button
            className="hover:cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText(code);
            }}
          >
            <Copy className="h-4 w-4 text-secondary-foreground/50 hover:text-secondary-foreground/75 hover:scale-105" />
          </button>
        </div>
      )}
      <div className="overflow-auto">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          wrapLines={true}
          customStyle={{
            margin: 0,
            padding: '1rem',
            fontSize: '0.9rem',
            backgroundColor: '#1E1E1E',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
