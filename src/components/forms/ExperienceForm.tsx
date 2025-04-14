
import { useResume, Experience } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

const ExperienceForm = () => {
  const { resumeData, setResumeData } = useResume();
  const { experience } = resumeData;
  
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    const updatedExperience = [...experience];
    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };
  
  const handleAddExperience = () => {
    const newExperience: Experience = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
      location: "",
    };
    
    setResumeData({
      ...resumeData,
      experience: [...experience, newExperience],
    });
  };
  
  const handleRemoveExperience = (index: number) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="space-y-4">
            {index > 0 && <div className="border-t pt-4"></div>}
            
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Experience {index + 1}</h3>
              {experience.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveExperience(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`position-${index}`}>Position</Label>
                <Input
                  id={`position-${index}`}
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Software Engineer"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`company-${index}`}>Company</Label>
                <Input
                  id={`company-${index}`}
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="Company Inc."
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleChange(index, e)}
                  placeholder="San Francisco, CA"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                  <Input
                    id={`startDate-${index}`}
                    name="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Jan 2020"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${index}`}>End Date</Label>
                  <Input
                    id={`endDate-${index}`}
                    name="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Present"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="Describe your role, responsibilities, and achievements"
                rows={4}
              />
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button
          variant="outline"
          onClick={handleAddExperience}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExperienceForm;
