
import { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Sparkles, Loader2, RefreshCw, ThumbsUp, ThumbsDown } from "lucide-react";
import { getAiFeedback, getAiSuggestion } from "@/services/aiService";
import { toast } from "@/components/ui/use-toast";

const AiFeedback = () => {
  const { resumeData, aiSuggestions, setAiSuggestions, aiLoading, setAiLoading, aiError, setAiError } = useResume();
  const [feedbackLoaded, setFeedbackLoaded] = useState(false);
  const [sectionSuggestion, setSectionSuggestion] = useState("");
  const [suggestingFor, setSuggestingFor] = useState<string | null>(null);
  
  const handleGetFeedback = async () => {
    setAiLoading(true);
    setAiError(null);
    
    try {
      const feedback = await getAiFeedback(resumeData);
      setAiSuggestions(feedback);
      setFeedbackLoaded(true);
      
      toast({
        title: "AI Feedback Generated",
        description: "Your resume has been analyzed successfully",
      });
    } catch (error) {
      if (error instanceof Error) {
        setAiError(error.message);
        toast({
          title: "Error",
          description: "Failed to generate AI feedback",
          variant: "destructive",
        });
      }
    } finally {
      setAiLoading(false);
    }
  };
  
  const handleSuggestImprovement = async (section: string, content: string) => {
    setSuggestingFor(section);
    
    try {
      const suggestion = await getAiSuggestion(section, content);
      setSectionSuggestion(suggestion);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate suggestion",
        variant: "destructive",
      });
    } finally {
      setSuggestingFor(null);
    }
  };
  
  const renderSuggestionButton = (section: string, content: string) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => handleSuggestImprovement(section, content)}
      disabled={suggestingFor === section}
      className="w-full mt-2"
    >
      {suggestingFor === section ? (
        <>
          <Loader2 className="h-4 w-4 mr-1 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="h-4 w-4 mr-1" />
          Suggest Improvement
        </>
      )}
    </Button>
  );
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-resume-primary" />
          AI Career Coach
        </CardTitle>
        <CardDescription>
          Get professional feedback and suggestions for your resume
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {!feedbackLoaded && !aiLoading && (
          <div className="text-center py-6">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-resume-primary opacity-50" />
            <h3 className="text-lg font-medium mb-2">Ready to Review Your Resume</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our AI can analyze your resume and provide personalized feedback to help you stand out to recruiters.
            </p>
            <Button onClick={handleGetFeedback} className="mx-auto">
              <Sparkles className="h-4 w-4 mr-2" />
              Generate Feedback
            </Button>
          </div>
        )}
        
        {aiLoading && (
          <div className="text-center py-12">
            <Loader2 className="h-12 w-12 mx-auto mb-4 text-resume-primary animate-spin" />
            <p className="text-sm text-muted-foreground">
              Analyzing your resume...
            </p>
          </div>
        )}
        
        {aiError && (
          <div className="text-center py-6">
            <p className="text-sm text-destructive mb-4">{aiError}</p>
            <Button onClick={handleGetFeedback} variant="outline">
              Try Again
            </Button>
          </div>
        )}
        
        {feedbackLoaded && !aiLoading && aiSuggestions.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Feedback</h3>
              <Button variant="ghost" size="sm" onClick={handleGetFeedback}>
                <RefreshCw className="h-4 w-4 mr-1" />
                Refresh
              </Button>
            </div>
            
            <ul className="space-y-3">
              {aiSuggestions.map((suggestion, index) => (
                <li key={index} className="border rounded-md p-3">
                  <p className="text-sm">{suggestion}</p>
                </li>
              ))}
            </ul>
            
            <div className="border-t pt-4 mt-6">
              <h4 className="text-md font-medium mb-3">Need specific improvements?</h4>
              
              <div className="grid gap-4 md:grid-cols-2">
                {resumeData.personalInfo.professionalSummary && (
                  <div className="border rounded-md p-3">
                    <h5 className="font-medium text-sm">Professional Summary</h5>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {resumeData.personalInfo.professionalSummary}
                    </p>
                    {renderSuggestionButton("summary", resumeData.personalInfo.professionalSummary)}
                  </div>
                )}
                
                {resumeData.experience.length > 0 && (
                  <div className="border rounded-md p-3">
                    <h5 className="font-medium text-sm">Experience</h5>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {resumeData.experience[0].description || "No description provided"}
                    </p>
                    {renderSuggestionButton("experience", resumeData.experience[0].description || "")}
                  </div>
                )}
                
                {resumeData.skills.length > 0 && (
                  <div className="border rounded-md p-3">
                    <h5 className="font-medium text-sm">Skills</h5>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {resumeData.skills.map(s => s.name).join(", ") || "No skills listed"}
                    </p>
                    {renderSuggestionButton("skills", resumeData.skills.map(s => s.name).join(", ") || "")}
                  </div>
                )}
              </div>
            </div>
            
            {sectionSuggestion && (
              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="text-sm font-medium mb-2">AI Suggestion</h4>
                <p className="text-sm">{sectionSuggestion}</p>
                <div className="flex justify-end mt-2 space-x-2">
                  <Button size="sm" variant="ghost" className="text-xs">
                    <ThumbsDown className="h-3 w-3 mr-1" />
                    Not Helpful
                  </Button>
                  <Button size="sm" variant="ghost" className="text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Helpful
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="text-xs text-muted-foreground">
        AI suggestions are meant to guide you but use your judgment for the final content.
      </CardFooter>
    </Card>
  );
};

export default AiFeedback;
