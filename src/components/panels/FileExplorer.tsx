import React from 'react';
import { Folder, File } from 'lucide-react';

export const FileExplorer: React.FC = () => {
  return (
    <div className="h-full w-full p-4 bg-gray-800 text-white">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4" />
          <span>src</span>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <File className="w-4 h-4" />
            <span>index.tsx</span>
          </div>
          <div className="flex items-center gap-2">
            <File className="w-4 h-4" />
            <span>App.tsx</span>
          </div>
        </div>
      </div>
    </div>
  );
};