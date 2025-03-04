'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface Section {
  id: string;
  title: string;
  type: 'personal' | 'experience' | 'education' | 'skills';
  content: any;
}

export default function ResumeEditor() {
  const [sections, setSections] = useState<Section[]>([
    {
      id: 'personal',
      title: 'Personal Information',
      type: 'personal',
      content: {
        name: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
      },
    },
    {
      id: 'experience',
      title: 'Work Experience',
      type: 'experience',
      content: [],
    },
    {
      id: 'education',
      title: 'Education',
      type: 'education',
      content: [],
    },
    {
      id: 'skills',
      title: 'Skills',
      type: 'skills',
      content: [],
    },
  ]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSections(items);
  };

  return (
    <div className="p-6">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="resume-sections">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-6"
            >
              {sections.map((section, index) => (
                <Draggable
                  key={section.id}
                  draggableId={section.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                      <div
                        {...provided.dragHandleProps}
                        className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between"
                      >
                        <h3 className="text-lg font-semibold">{section.title}</h3>
                        <span className="text-gray-400">⋮⋮</span>
                      </div>
                      <div className="p-4">
                        {/* Section content will be rendered here based on type */}
                        {section.type === 'personal' && (
                          <PersonalInfoSection data={section.content} />
                        )}
                        {/* Add other section types here */}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

function PersonalInfoSection({ data }: { data: any }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="input-field"
          value={data.name}
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          value={data.email}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="input-field"
          value={data.phone}
        />
        <input
          type="text"
          placeholder="Location"
          className="input-field"
          value={data.location}
        />
      </div>
      <textarea
        placeholder="Professional Summary"
        className="input-field w-full h-32"
        value={data.summary}
      />
    </div>
  );
} 