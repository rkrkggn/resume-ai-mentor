
import { useResume } from "@/context/ResumeContext";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import { CheckCircle2 } from "lucide-react";

const TemplateSelector = () => {
  const { resumeData, selectedTemplate, setSelectedTemplate } = useResume();
  
  // Sample data for preview
  const previewData = {
    ...resumeData,
    personalInfo: {
      ...resumeData.personalInfo,
      firstName: resumeData.personalInfo.firstName || "John",
      lastName: resumeData.personalInfo.lastName || "Doe",
      jobTitle: resumeData.personalInfo.jobTitle || "Software Engineer",
      email: resumeData.personalInfo.email || "john.doe@example.com",
      phone: resumeData.personalInfo.phone || "(123) 456-7890",
      city: resumeData.personalInfo.city || "San Francisco",
      state: resumeData.personalInfo.state || "CA",
      zipCode: resumeData.personalInfo.zipCode || "94103",
      professionalSummary: resumeData.personalInfo.professionalSummary || 
        "Experienced software engineer with a passion for building innovative web applications and solving complex problems. Strong in frontend and backend development with expertise in React, Node.js, and cloud technologies."
    },
    experience: resumeData.experience.length ? resumeData.experience : [
      {
        company: "Tech Innovations Inc.",
        position: "Senior Software Engineer",
        startDate: "2020-01",
        endDate: "Present",
        location: "San Francisco, CA",
        description: "Led development of cloud-based solutions for enterprise clients. Implemented microservice architecture using Node.js and Docker. Reduced system latency by 40%."
      },
      {
        company: "CodeCraft Solutions",
        position: "Software Developer",
        startDate: "2017-06",
        endDate: "2019-12",
        location: "Boston, MA",
        description: "Developed full-stack web applications using React, Redux, and Express. Collaborated with design team to implement responsive UI components."
      }
    ],
    education: resumeData.education.length ? resumeData.education : [
      {
        school: "Massachusetts Institute of Technology",
        degree: "Master of Science",
        fieldOfStudy: "Computer Science",
        startDate: "2015-09",
        endDate: "2017-05",
        description: "Focus on artificial intelligence and distributed systems. Published research on machine learning applications."
      },
      {
        school: "University of California, Berkeley",
        degree: "Bachelor of Science",
        fieldOfStudy: "Computer Engineering",
        startDate: "2011-09",
        endDate: "2015-05",
        description: "Graduated with honors. Active member of the Robotics Club."
      }
    ],
    skills: resumeData.skills.length ? resumeData.skills : [
      { name: "JavaScript", level: 5 },
      { name: "React", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "Docker", level: 3 },
      { name: "AWS", level: 3 },
      { name: "MongoDB", level: 4 },
      { name: "GraphQL", level: 3 }
    ]
  };
  
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and professional with a touch of color",
      Component: ModernTemplate
    },
    {
      id: "classic",
      name: "Classic",
      description: "Traditional layout with elegant typography",
      Component: ClassicTemplate
    },
    {
      id: "creative",
      name: "Creative",
      description: "Stand out with a unique design",
      Component: CreativeTemplate
    }
  ];
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold flex items-center">
        <span className="bg-resume-primary/10 text-resume-primary rounded-full p-1 mr-2">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        Choose a Template
      </h2>
      
      <RadioGroup
        value={selectedTemplate}
        onValueChange={(value) => setSelectedTemplate(value as "modern" | "classic" | "creative")}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {templates.map((template) => (
          <div key={template.id} className="space-y-2">
            <div 
              className={`
                border rounded-lg p-3 transition-all cursor-pointer
                ${selectedTemplate === template.id 
                  ? "bg-resume-primary/5 border-resume-primary" 
                  : "hover:border-resume-primary/50 border-transparent"}
              `}
              onClick={() => setSelectedTemplate(template.id as "modern" | "classic" | "creative")}
            >
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem id={template.id} value={template.id} className="text-resume-primary" />
                <Label htmlFor={template.id} className="font-medium cursor-pointer">
                  {template.name}
                </Label>
                {selectedTemplate === template.id && (
                  <span className="ml-auto text-resume-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-500 mb-3">{template.description}</p>
              
              <Card 
                className={`overflow-hidden h-48 relative transition-all duration-200 border-0 shadow-sm
                ${selectedTemplate === template.id ? "ring-2 ring-resume-primary" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="scale-[0.25] origin-top-left h-[400%] w-[400%] pointer-events-none">
                    <template.Component data={previewData} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default TemplateSelector;
