
import { ResumeData } from "@/context/ResumeContext";

// Mock AI feedback responses
const feedbackResponses = [
  "Your resume lacks specific achievements. Try to quantify your accomplishments with numbers and metrics.",
  "Consider adding more industry-specific keywords to help your resume pass through ATS systems.",
  "Your professional summary could be more concise and impactful. Focus on your unique selling points.",
  "The experience section should highlight results, not just responsibilities. Show how you made an impact.",
  "Your skills section is strong, but consider organizing them in categories for better readability.",
  "Education section looks great! Consider adding relevant coursework or academic achievements.",
  "The formatting is clean and professional, making it easy for recruiters to scan quickly.",
  "Use active voice and action verbs to make your accomplishments more powerful.",
  "Consider adding a section for certifications or professional development.",
  "Your contact information is complete and well-presented at the top of the resume."
];

// Function to get AI feedback for a resume
export const getAiFeedback = async (resumeData: ResumeData): Promise<string[]> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // Generate AI feedback based on resume content
      const feedback: string[] = [];
      
      // Check personal info
      if (!resumeData.personalInfo.professionalSummary || resumeData.personalInfo.professionalSummary.length < 50) {
        feedback.push("Your professional summary is too short or missing. This is a critical section that highlights your value proposition.");
      }
      
      // Check experience
      if (resumeData.experience.length <= 0) {
        feedback.push("You should add at least one work experience entry to your resume.");
      } else {
        const hasEmptyDescription = resumeData.experience.some(exp => !exp.description || exp.description.trim() === '');
        if (hasEmptyDescription) {
          feedback.push("One or more of your work experiences lacks a description. Add specific achievements and responsibilities.");
        }
      }
      
      // Check skills
      if (resumeData.skills.length < 3) {
        feedback.push("Consider adding more skills to showcase your diverse abilities.");
      }
      
      // Add some random general feedback
      const randomFeedback = [];
      const count = Math.floor(Math.random() * 3) + 2; // 2-4 random feedback items
      
      const usedIndices = new Set();
      while (randomFeedback.length < count && usedIndices.size < feedbackResponses.length) {
        const index = Math.floor(Math.random() * feedbackResponses.length);
        if (!usedIndices.has(index)) {
          usedIndices.add(index);
          randomFeedback.push(feedbackResponses[index]);
        }
      }
      
      resolve([...feedback, ...randomFeedback]);
    }, 1500);
  });
};

// Function to get AI suggestions for improving specific sections
export const getAiSuggestion = async (sectionType: string, content: string): Promise<string> => {
  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      let suggestion = "";
      
      switch (sectionType) {
        case "summary":
          suggestion = `Your summary could be improved to: "Dedicated ${content.includes("developer") ? "developer" : "professional"} with a passion for delivering high-quality results. Proven track record of ${content.includes("team") ? "leading teams" : "working collaboratively"} to achieve business objectives. Skilled in problem-solving and ${content.includes("technical") ? "technical innovation" : "process improvement"}."`; 
          break;
        case "experience":
          suggestion = `Consider enhancing this job description with more specific achievements. For example: "Increased team productivity by 20% through implementation of agile methodologies. Led cross-functional teams to deliver projects on time and under budget."`;
          break;
        case "skills":
          suggestion = `Consider adding these relevant skills to strengthen your profile: Project Management, Data Analysis, ${content.includes("develop") ? "React, Node.js" : "Strategic Planning, Team Leadership"}.`;
          break;
        default:
          suggestion = "To improve this section, be more specific and use quantifiable achievements where possible.";
      }
      
      resolve(suggestion);
    }, 1000);
  });
};
