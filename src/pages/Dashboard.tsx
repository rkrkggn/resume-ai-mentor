
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { getUserResumes, deleteResume, SavedResume } from "@/services/resumeService";
import { getCurrentUser } from "@/services/authService";
import { toast } from "@/components/ui/use-toast";
import { FileText, Plus, Trash2, Eye, Download, Loader2, X } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import ModernTemplate from "@/components/templates/ModernTemplate";
import ClassicTemplate from "@/components/templates/ClassicTemplate";
import CreativeTemplate from "@/components/templates/CreativeTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Dashboard = () => {
  const [resumes, setResumes] = useState<SavedResume[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [viewingResume, setViewingResume] = useState<SavedResume | null>(null);
  const [downloadLoading, setDownloadLoading] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const user = getCurrentUser();
  
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const data = await getUserResumes();
        setResumes(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load resumes",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchResumes();
  }, []);
  
  const handleDeleteResume = async (id: string) => {
    setDeleteLoading(id);
    
    try {
      await deleteResume(id);
      setResumes(resumes.filter(resume => resume.id !== id));
      
      toast({
        title: "Success",
        description: "Resume deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete resume",
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(null);
    }
  };

  const handleDownloadPDF = async (resume: SavedResume) => {
    const resumeContainer = document.getElementById(`resume-view-${resume.id}`);
    if (!resumeContainer) return;
    
    setDownloadLoading(resume.id);
    
    try {
      const canvas = await html2canvas(resumeContainer, {
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
      
      // Generate filename
      const fileName = `${resume.name || "Resume"}.pdf`;
      
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
      setDownloadLoading(null);
    }
  };
  
  const renderTemplate = (resume: SavedResume) => {
    switch (resume.template) {
      case "modern":
        return <ModernTemplate data={resume.data} />;
      case "classic":
        return <ClassicTemplate data={resume.data} />;
      case "creative":
        return <CreativeTemplate data={resume.data} />;
      default:
        return <ModernTemplate data={resume.data} />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Resumes</h1>
            <p className="text-gray-500">
              Welcome to Resume Rocket, {user?.name || "User"}! Manage your resumes here.
            </p>
          </div>
          
          <Button asChild className="mt-4 md:mt-0 bg-resume-primary hover:bg-resume-accent">
            <Link to="/builder">
              <Plus className="h-4 w-4 mr-2" />
              Create New Resume
            </Link>
          </Button>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 text-resume-primary animate-spin" />
          </div>
        ) : resumes.length === 0 ? (
          <Card className="bg-white shadow-sm">
            <CardContent className="flex flex-col items-center py-12">
              <div className="bg-resume-secondary rounded-full p-6 mb-6">
                <FileText className="h-12 w-12 text-resume-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No resumes yet</h2>
              <p className="text-gray-500 text-center max-w-md mb-6">
                You haven't created any resumes yet. Create your first resume to get started with Resume Rocket.
              </p>
              <Button asChild className="bg-resume-primary hover:bg-resume-accent">
                <Link to="/builder">
                  <Plus className="h-4 w-4 mr-2" />
                  Create First Resume
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resumes.map((resume) => (
              <Card key={resume.id} className="bg-white hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="truncate text-xl">{resume.name}</CardTitle>
                  <CardDescription>
                    Created: {new Date(resume.createdAt).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-40 overflow-hidden">
                  <div className="rounded-md border bg-white h-full flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                      <div className="scale-[0.2] origin-center w-[500%] h-[500%] pointer-events-none">
                        {renderTemplate(resume)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-resume-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm" className="mx-1" onClick={() => setViewingResume(resume)}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-resume-secondary"
                    onClick={() => setViewingResume(resume)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <div className="flex space-x-2">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="bg-resume-secondary hover:bg-resume-secondary/80"
                      onClick={() => handleDownloadPDF(resume)}
                      disabled={downloadLoading === resume.id}
                    >
                      {downloadLoading === resume.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </>
                      )}
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive border-destructive hover:bg-destructive/10">
                          {deleteLoading === resume.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the resume.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90" onClick={() => handleDeleteResume(resume.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Resume View Dialog */}
      <Dialog open={!!viewingResume} onOpenChange={(open) => !open && setViewingResume(null)}>
        <DialogContent className="max-w-4xl h-[90vh]">
          <DialogHeader>
            <DialogTitle className="flex justify-between items-center">
              <span>{viewingResume?.name}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-7 w-7 rounded-full" 
                onClick={() => setViewingResume(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex-1 overflow-auto p-4">
            {viewingResume && (
              <div className="flex justify-center">
                <div id={`resume-view-${viewingResume.id}`} className="w-full max-w-[800px] mx-auto">
                  {renderTemplate(viewingResume)}
                </div>
              </div>
            )}
          </div>
          
          <DialogFooter>
            {viewingResume && (
              <Button 
                onClick={() => handleDownloadPDF(viewingResume)}
                disabled={downloadLoading === viewingResume.id}
                className="bg-resume-primary hover:bg-resume-accent"
              >
                {downloadLoading === viewingResume.id ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
