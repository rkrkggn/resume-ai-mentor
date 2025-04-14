
import { ResumeData } from "@/context/ResumeContext";

interface ClassicTemplateProps {
  data: ResumeData;
}

const ClassicTemplate = ({ data }: ClassicTemplateProps) => {
  const { personalInfo, experience, education, skills } = data;
  
  return (
    <div className="resume-classic bg-white p-8 text-resume-text resume-paper">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-wide mb-1">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-xl text-gray-600 mb-3">
          {personalInfo.jobTitle}
        </h2>
        
        <div className="text-sm flex justify-center space-x-4">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && (
            <>
              <span className="text-gray-400">|</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {(personalInfo.city || personalInfo.state) && (
            <>
              <span className="text-gray-400">|</span>
              <span>
                {personalInfo.city}, {personalInfo.state} {personalInfo.zipCode}
              </span>
            </>
          )}
        </div>
      </header>
      
      {personalInfo.professionalSummary && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wide border-b-2 border-black pb-1 mb-3">
            Professional Summary
          </h3>
          <p className="text-sm leading-relaxed">{personalInfo.professionalSummary}</p>
        </section>
      )}
      
      {experience.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wide border-b-2 border-black pb-1 mb-3">
            Professional Experience
          </h3>
          <div className="space-y-5">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">{exp.position}</h4>
                  <span className="text-sm italic">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </span>
                </div>
                <h5 className="font-semibold mb-1">{exp.company}, {exp.location}</h5>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {education.length > 0 && (
        <section className="mb-6">
          <h3 className="text-lg font-bold uppercase tracking-wide border-b-2 border-black pb-1 mb-3">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">{edu.degree} in {edu.fieldOfStudy}</h4>
                  <span className="text-sm italic">
                    {edu.startDate} - {edu.endDate || 'Present'}
                  </span>
                </div>
                <h5 className="font-semibold mb-1">{edu.school}</h5>
                <p className="text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      
      {skills.length > 0 && (
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wide border-b-2 border-black pb-1 mb-3">
            Skills
          </h3>
          <div className="text-sm">
            {skills.map((skill, index) => (
              <span key={index} className="inline-block mr-6 mb-2">
                • {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
