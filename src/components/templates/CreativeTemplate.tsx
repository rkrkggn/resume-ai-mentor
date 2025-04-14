
import { ResumeData } from "@/context/ResumeContext";

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate = ({ data }: CreativeTemplateProps) => {
  const { personalInfo, experience, education, skills } = data;
  
  // Function to generate color based on skill level
  const getSkillLevelColor = (level: number) => {
    switch (level) {
      case 1: return "bg-red-200";
      case 2: return "bg-yellow-200";
      case 3: return "bg-blue-200";
      case 4: return "bg-green-200";
      case 5: return "bg-purple-200";
      default: return "bg-gray-200";
    }
  };
  
  return (
    <div className="resume-creative bg-white resume-paper">
      <div className="grid grid-cols-3">
        {/* Left sidebar */}
        <div className="col-span-1 bg-resume-accent text-white p-6">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center text-resume-accent text-4xl font-bold mb-4">
              {personalInfo.firstName.charAt(0)}{personalInfo.lastName.charAt(0)}
            </div>
            <h1 className="text-xl font-bold">
              {personalInfo.firstName} {personalInfo.lastName}
            </h1>
            <p className="text-sm opacity-90">{personalInfo.jobTitle}</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-white pb-1">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              {personalInfo.email && <p>{personalInfo.email}</p>}
              {personalInfo.phone && <p>{personalInfo.phone}</p>}
              {(personalInfo.city || personalInfo.state) && (
                <p>
                  {personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}
                </p>
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-white pb-1">
              Skills
            </h3>
            <div className="space-y-3">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{skill.name}</span>
                  </div>
                  <div className="h-2 w-full bg-blue-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white" 
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-3 border-b border-white pb-1">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="text-sm font-semibold">{edu.degree}</p>
                  <p className="text-xs">{edu.school}</p>
                  <p className="text-xs opacity-75">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="col-span-2 p-6">
          {personalInfo.professionalSummary && (
            <section className="mb-8">
              <h3 className="text-lg font-bold text-resume-accent border-b-2 border-resume-accent pb-1 mb-3">
                Professional Summary
              </h3>
              <p className="text-sm leading-relaxed">{personalInfo.professionalSummary}</p>
            </section>
          )}
          
          {experience.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-resume-accent border-b-2 border-resume-accent pb-1 mb-3">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-resume-accent">
                    <div className="absolute top-0 left-[-9px] w-4 h-4 bg-resume-accent rounded-full"></div>
                    <h4 className="font-bold">{exp.position}</h4>
                    <div className="flex justify-between mb-2">
                      <h5 className="text-sm font-medium">{exp.company}</h5>
                      <span className="text-xs text-gray-500">
                        {exp.startDate} - {exp.endDate || 'Present'}
                      </span>
                    </div>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
