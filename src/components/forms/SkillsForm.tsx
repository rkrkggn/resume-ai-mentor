
import { useResume, Skill } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Plus, Trash2 } from "lucide-react";

const SkillsForm = () => {
  const { resumeData, setResumeData } = useResume();
  const { skills } = resumeData;
  
  const handleNameChange = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      name: value,
    };
    
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };
  
  const handleLevelChange = (index: number, value: number[]) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      level: value[0],
    };
    
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };
  
  const handleAddSkill = () => {
    const newSkill: Skill = {
      name: "",
      level: 3,
    };
    
    setResumeData({
      ...resumeData,
      skills: [...skills, newSkill],
    });
  };
  
  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="flex-1">
              <Input
                value={skill.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
                placeholder="Skill name"
              />
            </div>
            <div className="w-24 flex-1">
              <Slider
                value={[skill.level]}
                onValueChange={(value) => handleLevelChange(index, value)}
                min={1}
                max={5}
                step={1}
              />
            </div>
            <div className="text-xs w-12 text-center">
              {skill.level}/5
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleRemoveSkill(index)}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        
        {skills.length === 0 && (
          <div className="text-center py-4 text-muted-foreground">
            No skills added yet. Click the button below to add your first skill.
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Button
          variant="outline"
          onClick={handleAddSkill}
          className="w-full"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SkillsForm;
