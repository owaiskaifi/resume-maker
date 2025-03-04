'use client';

import { useState } from 'react';

const templates = [
  { id: 'modern', name: 'Modern', thumbnail: '/templates/modern.png' },
  { id: 'professional', name: 'Professional', thumbnail: '/templates/professional.png' },
  { id: 'creative', name: 'Creative', thumbnail: '/templates/creative.png' },
  { id: 'minimal', name: 'Minimal', thumbnail: '/templates/minimal.png' },
];

const sections = [
  { id: 'work', name: 'Work Experience', icon: '💼' },
  { id: 'education', name: 'Education', icon: '🎓' },
  { id: 'skills', name: 'Skills', icon: '⚡' },
  { id: 'projects', name: 'Projects', icon: '🚀' },
  { id: 'certifications', name: 'Certifications', icon: '📜' },
  { id: 'languages', name: 'Languages', icon: '🌐' },
  { id: 'interests', name: 'Interests', icon: '⭐' },
];

export default function EditorSidebar() {
  const [activeTab, setActiveTab] = useState<'templates' | 'sections'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  return (
    <div className="w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-[calc(100vh-4rem)]">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('templates')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'templates'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          Templates
        </button>
        <button
          onClick={() => setActiveTab('sections')}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === 'sections'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 dark:text-gray-300'
          }`}
        >
          Sections
        </button>
      </div>

      <div className="p-4">
        {activeTab === 'templates' ? (
          <div className="space-y-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`w-full p-3 rounded-lg border ${
                  selectedTemplate === template.id
                    ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700'
                } transition-colors`}
              >
                <div className="aspect-[1.4] mb-2 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                  {/* Template preview image would go here */}
                </div>
                <div className="text-sm font-medium">{template.name}</div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                className="w-full flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="mr-3 text-xl">{section.icon}</span>
                <span className="text-sm">{section.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 