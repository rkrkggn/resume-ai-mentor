
import { useResume } from "@/context/ResumeContext";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ModernTemplate from "./templates/ModernTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

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
        "Experienced software engineer with a passion for building innovative web applications."
    }
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Choose a Template</h2>
      
      <RadioGroup
        value={selectedTemplate}
        onValueChange={(value) => setSelectedTemplate(value as "modern" | "classic" | "creative")}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem id="modern" value="modern" />
            <Label htmlFor="modern">Modern</Label>
          </div>
          <Card className="overflow-hidden h-40 cursor-pointer hover:border-resume-primary transition-colors"
              onClick={() => setSelectedTemplate("modern")}>
            <CardContent className="p-0">
              <div className="scale-[0.25] origin-top-left h-[400%] w-[400%] pointer-events-none">
                <ModernTemplate data={previewData} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem id="classic" value="classic" />
            <Label htmlFor="classic">Classic</Label>
          </div>
          <Card className="overflow-hidden h-40 cursor-pointer hover:border-resume-primary transition-colors"
              onClick={() => setSelectedTemplate("classic")}>
            <CardContent className="p-0">
              <div className="scale-[0.25] origin-top-left h-[400%] w-[400%] pointer-events-none">
                <ClassicTemplate data={previewData} />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem id="creative" value="creative" />
            <Label htmlFor="creative">Creative</Label>
          </div>
          <Card className="overflow-hidden h-40 cursor-pointer hover:border-resume-primary transition-colors"
              onClick={() => setSelectedTemplate("creative")}>
            <CardContent className="p-0">
              <div className="scale-[0.25] origin-top-left h-[400%] w-[400%] pointer-events-none">
                <CreativeTemplate data={previewData} />
              </div>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>
    </div>
  );
};

export default TemplateSelector;
