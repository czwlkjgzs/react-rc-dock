import React from 'react';
import { Play } from 'lucide-react';

export const Preview: React.FC = () => {
  return (
    <div className="h-full w-full bg-white">
      <div className="border-b p-2 flex items-center gap-2">
        <Play className="w-4 h-4" />
        <span>Preview</span>
      </div>
      <div className="p-4">
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">Preview will appear here</p>
        </div>
      </div>
    </div>
  );
};