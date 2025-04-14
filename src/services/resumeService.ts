
import { ResumeData, TemplateType } from "@/context/ResumeContext";
import { toast } from "@/components/ui/use-toast";
import { getCurrentUser, addResumeToUser } from "./authService";

// Types
export interface SavedResume {
  id: string;
  userId: string;
  name: string;
  data: ResumeData;
  template: TemplateType;
  createdAt: string;
  updatedAt: string;
}

// Local storage key
const RESUMES_KEY = 'saved_resumes';

// Get all resumes from localStorage
const getAllResumes = (): SavedResume[] => {
  const resumesJson = localStorage.getItem(RESUMES_KEY);
  return resumesJson ? JSON.parse(resumesJson) : [];
};

// Save resumes to localStorage
const saveAllResumes = (resumes: SavedResume[]): void => {
  localStorage.setItem(RESUMES_KEY, JSON.stringify(resumes));
};

// Save resume
export const saveResume = async (
  name: string,
  data: ResumeData,
  template: TemplateType
): Promise<SavedResume> => {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      try {
        const currentUser = getCurrentUser();
        
        if (!currentUser) {
          throw new Error('You must be logged in to save a resume');
        }
        
        const allResumes = getAllResumes();
        
        const now = new Date().toISOString();
        const newResume: SavedResume = {
          id: Date.now().toString(),
          userId: currentUser.id,
          name,
          data,
          template,
          createdAt: now,
          updatedAt: now,
        };
        
        saveAllResumes([...allResumes, newResume]);
        addResumeToUser(newResume.id);
        
        toast({
          title: "Success",
          description: "Resume saved successfully",
        });
        
        resolve(newResume);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          reject(error);
        }
      }
    }, 500);
  });
};

// Get user's resumes
export const getUserResumes = async (): Promise<SavedResume[]> => {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      try {
        const currentUser = getCurrentUser();
        
        if (!currentUser) {
          throw new Error('You must be logged in to view your resumes');
        }
        
        const allResumes = getAllResumes();
        const userResumes = allResumes.filter(resume => resume.userId === currentUser.id);
        
        resolve(userResumes);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          reject(error);
        }
      }
    }, 500);
  });
};

// Get resume by ID
export const getResumeById = async (id: string): Promise<SavedResume | null> => {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      try {
        const currentUser = getCurrentUser();
        
        if (!currentUser) {
          throw new Error('You must be logged in to view a resume');
        }
        
        const allResumes = getAllResumes();
        const resume = allResumes.find(r => r.id === id && r.userId === currentUser.id) || null;
        
        resolve(resume);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          reject(error);
        }
      }
    }, 500);
  });
};

// Delete resume
export const deleteResume = async (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    // Simulate API call delay
    setTimeout(() => {
      try {
        const currentUser = getCurrentUser();
        
        if (!currentUser) {
          throw new Error('You must be logged in to delete a resume');
        }
        
        const allResumes = getAllResumes();
        const updatedResumes = allResumes.filter(r => !(r.id === id && r.userId === currentUser.id));
        
        if (allResumes.length === updatedResumes.length) {
          throw new Error('Resume not found or you do not have permission to delete it');
        }
        
        saveAllResumes(updatedResumes);
        
        toast({
          title: "Success",
          description: "Resume deleted successfully",
        });
        
        resolve();
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          reject(error);
        }
      }
    }, 500);
  });
};
