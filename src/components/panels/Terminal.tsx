import React from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Terminal: React.FC = () => {
  return (
    <div className="h-full w-full p-4 bg-black text-green-400 font-mono">
      <div className="flex items-center gap-2 mb-4">
        <TerminalIcon className="w-5 h-5" />
        <span>Terminal</span>
      </div>
      <div className="text-sm">
        <p>$ npm install</p>
        <p>Installing dependencies...</p>
        <p className="text-gray-500">Done in 3.45s</p>
        <p>$ _</p>
      </div>
    </div>
  );
};