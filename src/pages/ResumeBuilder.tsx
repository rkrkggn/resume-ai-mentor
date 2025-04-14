
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, Download, Save, FileText, User, BookOpen, Lightbulb, FileCheck, CheckCircle2, Rocket } from "lucide-react";
import { useResume } from "@/context/ResumeContext";
import { useToast } from "@/components/ui/use-toast";
import { saveResume } from "@/services/resumeService";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import PersonalInfoForm from "@/components/forms/PersonalInfoForm";
import ExperienceForm from "@/components/forms/ExperienceForm";
import EducationForm from "@/components/forms/EducationForm";
import SkillsForm from "@/components/forms/SkillsForm";
import TemplateSelector from "@/components/TemplateSelector";
import ModernTemplate from "@/components/templates/ModernTemplate";
import ClassicTemplate from "@/components/templates/ClassicTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";
import AiFeedback from "@/components/AiFeedback";

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [resumeName, setResumeName] = useState("");
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const resumeRef = useRef<HTMLDivElement>(null);
  const { resumeData, selectedTemplate } = useResume();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSaveResume = async () => {
    if (!resumeName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for your resume",
        variant: "destructive",
      });
      return;
    }
    
    setSaving(true);
    
    try {
      await saveResume(resumeName, resumeData, selectedTemplate);
      setSaveSuccess(true);
      setTimeout(() => {
        setSaveDialogOpen(false);
        setSaveSuccess(false);
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      setSaving(false);
    }
  };
  
  const handleDownloadPDF = async () => {
    if (!resumeRef.current) return;
    
    setDownloading(true);
    
    try {
      const resumeElement = resumeRef.current;
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // A4 dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate proper scaling to fit on A4
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      
      // Center the image
      const xPos = (pdfWidth - imgWidth * ratio) / 2;
      const yPos = 0;
      
      pdf.addImage(imgData, 'PNG', xPos, yPos, imgWidth * ratio, imgHeight * ratio);
      
      // Generate a good file name
      const lastName = resumeData.personalInfo.lastName || "Resume";
      const firstName = resumeData.personalInfo.firstName || "";
      const fileName = `${firstName}_${lastName}_Resume.pdf`;
      
      pdf.save(fileName);
      
      toast({
        title: "Success",
        description: "Resume downloaded successfully",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDownloading(false);
    }
  };
  
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate data={resumeData} />;
      case "classic":
        return <ClassicTemplate data={resumeData} />;
      case "creative":
        return <CreativeTemplate data={resumeData} />;
      default:
        return <ModernTemplate data={resumeData} />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Rocket className="h-7 w-7 text-resume-primary mr-2" />
              Resume Builder
            </h1>
            <p className="text-gray-500">
              Create a professional resume with Resume Rocket
            </p>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-resume-primary hover:bg-resume-accent">
                  <Save className="h-4 w-4 mr-2" />
                  Save Resume
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center">
                    <Save className="h-5 w-5 mr-2 text-resume-primary" />
                    Save Resume
                  </DialogTitle>
                  <DialogDescription>
                    Give your resume a name to save it to your account.
                  </DialogDescription>
                </DialogHeader>
                
                {saveSuccess ? (
                  <div className="py-8 flex flex-col items-center justify-center text-center">
                    <div className="bg-green-100 rounded-full p-4 mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Resume Saved!</h3>
                    <p className="text-gray-500">Redirecting to your dashboard...</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="resumeName">Resume Name</Label>
                        <Input
                          id="resumeName"
                          placeholder="My Professional Resume"
                          value={resumeName}
                          onChange={(e) => setResumeName(e.target.value)}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveResume} disabled={saving} className="bg-resume-primary hover:bg-resume-accent">
                        {saving ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save
                          </>
                        )}
                      </Button>
                    </DialogFooter>
                  </>
                )}
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" onClick={handleDownloadPDF} disabled={downloading}>
              {downloading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left column - Forms */}
          <div className="md:col-span-7 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-5">
                <TabsTrigger value="personal" className="flex items-center">
                  <User className="h-4 w-4 mr-2 md:hidden lg:block" />
                  <span className="hidden md:inline">Personal</span>
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 md:hidden lg:block" />
                  <span className="hidden md:inline">Experience</span>
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 md:hidden lg:block" />
                  <span className="hidden md:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger value="skills" className="flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 md:hidden lg:block" />
                  <span className="hidden md:inline">Skills</span>
                </TabsTrigger>
                <TabsTrigger value="template" className="flex items-center">
                  <FileCheck className="h-4 w-4 mr-2 md:hidden lg:block" />
                  <span className="hidden md:inline">Template</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="mt-6">
                <PersonalInfoForm />
              </TabsContent>
              
              <TabsContent value="experience" className="mt-6">
                <ExperienceForm />
              </TabsContent>
              
              <TabsContent value="education" className="mt-6">
                <EducationForm />
              </TabsContent>
              
              <TabsContent value="skills" className="mt-6">
                <SkillsForm />
              </TabsContent>
              
              <TabsContent value="template" className="mt-6">
                <TemplateSelector />
              </TabsContent>
            </Tabs>
            
            <div className="flex space-x-2 justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  const tabs = ["personal", "experience", "education", "skills", "template"];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex > 0) {
                    setActiveTab(tabs[currentIndex - 1]);
                  }
                }}
                disabled={activeTab === "personal"}
              >
                Previous
              </Button>
              
              <Button
                onClick={() => {
                  const tabs = ["personal", "experience", "education", "skills", "template"];
                  const currentIndex = tabs.indexOf(activeTab);
                  if (currentIndex < tabs.length - 1) {
                    setActiveTab(tabs[currentIndex + 1]);
                  }
                }}
                disabled={activeTab === "template"}
                className="bg-resume-primary hover:bg-resume-accent"
              >
                Next
              </Button>
            </div>
            
            <AiFeedback />
          </div>
          
          {/* Right column - Preview */}
          <div className="md:col-span-5">
            <div className="sticky top-6">
              <Card className="p-4 mb-4 border-0 shadow-md">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-resume-primary" />
                  Resume Preview
                </h2>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="w-full shadow-lg border border-gray-100 rounded overflow-hidden" ref={resumeRef}>
                    {renderTemplate()}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
