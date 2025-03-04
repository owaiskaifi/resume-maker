'use client';

import { useState } from 'react';

export default function EditorToolbar() {
  const [saving, setSaving] = useState(false);

  const handleExport = async (format: 'pdf' | 'docx') => {
    // Implementation for export functionality will go here
    console.log(`Exporting as ${format}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSaving(true)}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
            <button
              onClick={() => handleExport('pdf')}
              className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition-colors"
            >
              Export PDF
            </button>
            <button
              onClick={() => handleExport('docx')}
              className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition-colors"
            >
              Export DOCX
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition-colors"
            >
              Preview
            </button>
            <button
              className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-md transition-colors"
            >
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 