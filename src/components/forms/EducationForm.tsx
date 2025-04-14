
import { useResume, Education } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

const EducationForm = () => {
  const { resumeData, setResumeData } = useResume();
  const { education } = resumeData;
  
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };
  
  const handleAddEducation = () => {
    const newEducation: Education = {
      school: "",
      degree: "",
      fieldOfStudy: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    
    setResumeData({
      ...resumeData,
      education: [...education, newEducation],
    });
  };
  
  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="space-y-4">
            {index > 0 && <div className="border-t pt-4"></div>}
            
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Education {index + 1}</h3>
              {education.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveEducation(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`school-${index}`}>School</Label>
                <Input
                  id={`school-${index}`}
                  name="school"
                  value={edu.school}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="University of California"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input
                  id={`degree-${index}`}
                  name="degree"
                  value={edu.degree}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Bachelor's"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`fieldOfStudy-${index}`}>Field of Study</Label>
                <Input
                  id={`fieldOfStudy-${index}`}
                  name="fieldOfStudy"
                  value={edu.fieldOfStudy}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Computer Science"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                  <Input
                    id={`startDate-${index}`}
                    name="startDate"
                    value={edu.startDate}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Sep 2016"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${index}`}>End Date</Label>
                  <Input
                    id={`endDate-${index}`}
                    name="endDate"
                    value={edu.endDate}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="May 2020"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                name="description"
                value={edu.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="Describe relevant coursework, achievements, or activities"
                rows={3}
              />
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button
          variant="outline"
          onClick={handleAddEducation}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EducationForm;
