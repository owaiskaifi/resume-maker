import { Suspense } from 'react';
import ResumeEditor from './components/ResumeEditor';
import EditorSidebar from './components/EditorSidebar';
import EditorToolbar from './components/EditorToolbar';

export default function EditorPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <EditorToolbar />
      <div className="flex">
        <EditorSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-[850px] mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-lg">
            <Suspense fallback={<div className="p-8 text-center">Loading editor...</div>}>
              <ResumeEditor />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
} 