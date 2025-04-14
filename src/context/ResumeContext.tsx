
import React, { createContext, useState, useContext } from 'react';

export type Education = {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type ResumeData = {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    professionalSummary: string;
    jobTitle: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
};

export type TemplateType = 'modern' | 'classic' | 'creative';

type ResumeContextType = {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  selectedTemplate: TemplateType;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<TemplateType>>;
  aiSuggestions: string[];
  setAiSuggestions: React.Dispatch<React.SetStateAction<string[]>>;
  aiLoading: boolean;
  setAiLoading: React.Dispatch<React.SetStateAction<boolean>>;
  aiError: string | null;
  setAiError: React.Dispatch<React.SetStateAction<string | null>>;
};

const defaultResumeData: ResumeData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    professionalSummary: '',
    jobTitle: '',
  },
  experience: [{
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    location: '',
  }],
  education: [{
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    description: '',
  }],
  skills: [{
    name: '',
    level: 3,
  }],
};

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        selectedTemplate,
        setSelectedTemplate,
        aiSuggestions,
        setAiSuggestions,
        aiLoading,
        setAiLoading,
        aiError,
        setAiError,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};
