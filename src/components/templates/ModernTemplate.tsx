
import { ResumeData } from "@/context/ResumeContext";
import { Phone, Mail, MapPin } from "lucide-react";

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate = ({ data }: ModernTemplateProps) => {
  const { personalInfo, experience, education, skills } = data;
  
  return (
    <div className="resume-modern bg-white p-8 text-resume-text resume-paper">
      <header className="border-b border-resume-primary pb-6 mb-6">
        <h1 className="text-3xl font-bold mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-xl text-resume-primary font-medium mb-4">
          {personalInfo.jobTitle}
        </h2>
        
        <div className="text-sm space-y-2">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-resume-primary" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-resume-primary" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-resume-primary" />
            <span>
              {personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}
            </span>
          </div>
        </div>
      </header>
      
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-resume-primary border-b border-gray-200 pb-1 mb-3">
          Professional Summary
        </h3>
        <p className="text-sm">{personalInfo.professionalSummary}</p>
      </section>
      
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-resume-primary border-b border-gray-200 pb-1 mb-3">
          Experience
        </h3>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{exp.position}</h4>
                  <h5 className="text-sm">{exp.company} - {exp.location}</h5>
                </div>
                <div className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate || 'Present'}
                </div>
              </div>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-6">
        <h3 className="text-lg font-semibold text-resume-primary border-b border-gray-200 pb-1 mb-3">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{edu.degree} in {edu.fieldOfStudy}</h4>
                  <h5 className="text-sm">{edu.school}</h5>
                </div>
                <div className="text-sm text-gray-500">
                  {edu.startDate} - {edu.endDate || 'Present'}
                </div>
              </div>
              <p className="text-sm mt-1">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h3 className="text-lg font-semibold text-resume-primary border-b border-gray-200 pb-1 mb-3">
          Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="bg-resume-secondary px-3 py-1 rounded-full text-sm">
              {skill.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModernTemplate;
