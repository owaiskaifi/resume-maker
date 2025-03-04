"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function EditorPage() {
  const params = useParams();
  const templateId = params.templateId as string;
  
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: ""
    },
    summary: "",
    experience: [
      { 
        company: "", 
        position: "", 
        startDate: "", 
        endDate: "", 
        description: "",
        highlights: [""]
      }
    ],
    education: [
      {
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        gpa: ""
      }
    ],
    skills: [""],
    projects: [
      {
        name: "",
        description: "",
        technologies: [""],
        link: ""
      }
    ]
  });

  const [activeSection, setActiveSection] = useState("personalInfo");
  const [atsScore, setAtsScore] = useState(0);

  // Mock function to generate AI suggestions
  const generateSuggestion = (field) => {
    // In a real app, this would call OpenRouter API
    alert(`Generating AI suggestion for ${field}...`);
  };

  // Mock function to check ATS compatibility
  const checkAtsCompatibility = () => {
    // In a real app, this would analyze the resume
    const mockScore = Math.floor(Math.random() * 40) + 60;
    setAtsScore(mockScore);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">ResumeBuilder Pro</Link>
          <div className="flex gap-4">
            <button 
              onClick={checkAtsCompatibility}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Check ATS Score
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              Export PDF
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Resume Sections</h2>
            <ul className="space-y-2">
              {["Personal Info", "Summary", "Experience", "Education", "Skills", "Projects"].map((section) => {
                const sectionKey = section.toLowerCase().replace(/\s/g, "");
                return (
                  <li 
                    key={section} 
                    className={`p-2 rounded-md cursor-pointer ${activeSection === sectionKey ? 'bg-blue-100 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setActiveSection(sectionKey)}
                  >
                    {section}
                  </li>
                );
              })}
            </ul>
            
            {atsScore > 0 && (
              <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <h3 className="font-bold mb-2">ATS Compatibility Score</h3>
                <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4">
                  <div 
                    className={`h-4 rounded-full ${atsScore >= 80 ? 'bg-green-500' : atsScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${atsScore}%` }}
                  ></div>
                </div>
                <p className="mt-2 text-sm">{atsScore}% - {atsScore >= 80 ? 'Excellent' : atsScore >= 60 ? 'Good' : 'Needs Improvement'}</p>
              </div>
            )}
          </div>
        </div>

        {/* Editor */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-6">
              {activeSection === "personalInfo" ? "Personal Information" : 
               activeSection === "summary" ? "Professional Summary" :
               activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h2>

            {activeSection === "personalInfo" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={resumeData.personalInfo.name}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        name: e.target.value
                      }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={resumeData.personalInfo.email}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        email: e.target.value
                      }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={resumeData.personalInfo.phone}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        phone: e.target.value
                      }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        location: e.target.value
                      }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">LinkedIn</label>
                  <input 
                    type="url" 
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={resumeData.personalInfo.linkedin}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        linkedin: e.target.value
                      }
                    })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Website</label>
                  <input 
                    type="url" 
                    className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                    value={resumeData.personalInfo.website}
                    onChange={(e) => setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        website: e.target.value
                      }
                    })}
                  />
                </div>
              </div>
            )}

            {activeSection === "summary" && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium">Professional Summary</label>
                  <button 
                    onClick={() => generateSuggestion("summary")}
                    className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <span>AI Suggestion</span>
                    <span>✨</span>
                  </button>
                </div>
                <textarea 
                  className="w-full p-2 border rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
                  value={resumeData.summary}
                  onChange={(e) => setResumeData({
                    ...resumeData,
                    summary: e.target.value
                  })}
                  placeholder="Write a compelling summary of your professional background and key strengths..."
                />
              </div>
            )}

            {activeSection === "experience" && (
              <div>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="mb-8 p-4 border rounded-md dark:border-gray-700">
                    <h3 className="font-bold mb-4">Experience {index + 1}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Company</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                          value={exp.company}
                          onChange={(e) => {
                            const newExperience = [...resumeData.experience];
                            newExperience[index].company = e.target.value;
                            setResumeData({
                              ...resumeData,
                              experience: newExperience
                            });
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Position</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                          value={exp.position}
                          onChange={(e) => {
                            const newExperience = [...resumeData.experience];
                            newExperience[index].position = e.target.value;
                            setResumeData({
                              ...resumeData,
                              experience: newExperience
                            });
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Start Date</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                          placeholder="MM/YYYY"
                          value={exp.startDate}
                          onChange={(e) => {
                            const newExperience = [...resumeData.experience];
                            newExperience[index].startDate = e.target.value;
                            setResumeData({
                              ...resumeData,
                              experience: newExperience
                            });
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">End Date</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                          placeholder="MM/YYYY or Present"
                          value={exp.endDate}
                          onChange={(e) => {
                            const newExperience = [...resumeData.experience];
                            newExperience[index].endDate = e.target.value;
                            setResumeData({
                              ...resumeData,
                              experience: newExperience
                            });
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-sm font-medium">Description</label>
                        <button 
                          onClick={() => generateSuggestion(`experience-${index}`)}
                          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
                        >
                          <span>AI Suggestion</span>
                          <span>✨</span>
                        </button>
                      </div>
                      <textarea 
                        className="w-full p-2 border rounded-md min-h-24 dark:bg-gray-700 dark:border-gray-600"
                        value={exp.description}
                        onChange={(e) => {
                          const newExperience = [...resumeData.experience];
                          newExperience[index].description = e.target.value;
                          setResumeData({
                            ...resumeData,
                            experience: newExperience
                          });
                        }}
                        placeholder="Describe your responsibilities and achievements..."
                      />
                    </div>
                  </div>
                ))}
                
                <button 
                  className="w-full p-2 border border-dashed rounded-md text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    setResumeData({
                      ...resumeData,
                      experience: [
                        ...resumeData.experience,
                        { 
                          company: "", 
                          position: "", 
                          startDate: "", 
                          endDate: "", 
                          description: "",
                          highlights: [""]
                        }
                      ]
                    });
                  }}
                >
                  + Add Another Experience
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 