import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ResumeSection {
  id: string;
  type: string;
  title: string;
  content: any;
  order: number;
}

interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  links: { type: string; url: string }[];
}

interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

interface Education {
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description: string[];
}

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  startDate: string;
  endDate?: string;
}

interface ResumeState {
  selectedTemplate: string;
  personalInfo: PersonalInfo;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  sections: ResumeSection[];
  activeSection: string | null;
  
  // Actions
  setTemplate: (template: string) => void;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
  addExperience: (experience: Experience) => void;
  updateExperience: (index: number, experience: Experience) => void;
  removeExperience: (index: number) => void;
  addEducation: (education: Education) => void;
  updateEducation: (index: number, education: Education) => void;
  removeEducation: (index: number) => void;
  addSkill: (skill: Skill) => void;
  updateSkill: (index: number, skill: Skill) => void;
  removeSkill: (index: number) => void;
  addProject: (project: Project) => void;
  updateProject: (index: number, project: Project) => void;
  removeProject: (index: number) => void;
  reorderSections: (sections: ResumeSection[]) => void;
  setActiveSection: (sectionId: string | null) => void;
}

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      selectedTemplate: 'modern',
      personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
        links: [],
      },
      experiences: [],
      education: [],
      skills: [],
      projects: [],
      sections: [],
      activeSection: null,

      setTemplate: (template) => set({ selectedTemplate: template }),
      
      updatePersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info },
        })),

      addExperience: (experience) =>
        set((state) => ({
          experiences: [...state.experiences, experience],
        })),

      updateExperience: (index, experience) =>
        set((state) => ({
          experiences: state.experiences.map((exp, i) =>
            i === index ? experience : exp
          ),
        })),

      removeExperience: (index) =>
        set((state) => ({
          experiences: state.experiences.filter((_, i) => i !== index),
        })),

      addEducation: (education) =>
        set((state) => ({
          education: [...state.education, education],
        })),

      updateEducation: (index, education) =>
        set((state) => ({
          education: state.education.map((edu, i) =>
            i === index ? education : edu
          ),
        })),

      removeEducation: (index) =>
        set((state) => ({
          education: state.education.filter((_, i) => i !== index),
        })),

      addSkill: (skill) =>
        set((state) => ({
          skills: [...state.skills, skill],
        })),

      updateSkill: (index, skill) =>
        set((state) => ({
          skills: state.skills.map((s, i) => (i === index ? skill : s)),
        })),

      removeSkill: (index) =>
        set((state) => ({
          skills: state.skills.filter((_, i) => i !== index),
        })),

      addProject: (project) =>
        set((state) => ({
          projects: [...state.projects, project],
        })),

      updateProject: (index, project) =>
        set((state) => ({
          projects: state.projects.map((p, i) => (i === index ? project : p)),
        })),

      removeProject: (index) =>
        set((state) => ({
          projects: state.projects.filter((_, i) => i !== index),
        })),

      reorderSections: (sections) => set({ sections }),
      
      setActiveSection: (sectionId) => set({ activeSection: sectionId }),
    }),
    {
      name: 'resume-storage',
    }
  )
); 