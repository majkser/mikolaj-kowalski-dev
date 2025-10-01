'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, CheckCircle2Icon } from 'lucide-react';
import { CodeViewerProps } from '@/types/mdxTypes';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

export function CodeViewer({
  code,
  language,
  fileName,
  showLineNumbers = true,
}: CodeViewerProps) {
  const [copiedAlertOpen, setCopiedAlertOpen] = useState(false);

  function handleCopyClick() {
    navigator.clipboard.writeText(code);
    setCopiedAlertOpen(true);

    setTimeout(() => setCopiedAlertOpen(false), 2000);
  }

  return (
    <div className="rounded-md overflow-hidden border border-border my-4">
      {fileName && (
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
          <span className="font-medium text-secondary-foreground/50">
            {fileName}
          </span>
          <button
            className="hover:cursor-pointer"
            onClick={() => handleCopyClick()}
          >
            <Copy className="h-4 w-4 text-secondary-foreground/50 hover:text-secondary-foreground/75 hover:scale-105 transition-all duration-300" />
          </button>
        </div>
      )}
      <Alert
        className={cn(
          'fixed bottom-8 left-4 m-4 w-44 flex items-center justify-around transition-all duration-500',
          copiedAlertOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        )}
      >
        <CheckCircle2Icon className="h-4 w-4 text-secondary-foreground/50" />
        <AlertTitle>Copied to clipboard!</AlertTitle>
      </Alert>
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
