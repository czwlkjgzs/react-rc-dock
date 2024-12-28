import React from 'react';
import { Code2 } from 'lucide-react';

export const CodeEditor: React.FC<{ id: string }> = ({ id }) => {
  return (
    <div className="h-full w-full p-4 bg-gray-900 text-white font-mono">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="w-5 h-5" />
        <span>Editor {id}</span>
      </div>
      <pre className="text-sm">
{`function example() {
  console.log("This is a code editor panel");
  // Add your code here
  return true;
}`}
      </pre>
    </div>
  );
};