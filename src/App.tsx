import React from 'react';
import { DockLayout, LayoutData } from 'rc-dock';
import "rc-dock/dist/rc-dock.css";
import { CodeEditor } from './components/panels/CodeEditor';
import { FileExplorer } from './components/panels/FileExplorer';
import { Terminal } from './components/panels/Terminal';
import { Preview } from './components/panels/Preview';

function App() {
  const layout: LayoutData = {
    dockbox: {
      mode: 'horizontal',
      children: [
        {
          mode: 'vertical',
          size: 200,
          children: [
            {
              tabs: [
                {
                  id: 'file-explorer',
                  title: 'Files',
                  content: <FileExplorer />,
                  closable: false,
                },
              ],
            },
          ],
        },
        {
          mode: 'vertical',
          size: 800,
          children: [
            {
              mode: 'horizontal',
              children: [
                {
                  tabs: [
                    {
                      id: 'editor-1',
                      title: 'index.tsx',
                      content: <CodeEditor id="1" />,
                    },
                    {
                      id: 'editor-2',
                      title: 'App.tsx',
                      content: <CodeEditor id="2" />,
                    },
                  ],
                },
                {
                  size: 400,
                  tabs: [
                    {
                      id: 'preview',
                      title: 'Preview',
                      content: <Preview />,
                      closable: false,
                    },
                  ],
                },
              ],
            },
            {
              size: 200,
              tabs: [
                {
                  id: 'terminal',
                  title: 'Terminal',
                  content: <Terminal />,
                  closable: false,
                },
              ],
            },
          ],
        },
      ],
    },
  };

  return (
    <div className="h-screen w-screen">
      <DockLayout
        defaultLayout={layout}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

export default App;