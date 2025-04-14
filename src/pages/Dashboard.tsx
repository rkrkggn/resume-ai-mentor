
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserResumes, deleteResume, SavedResume } from "@/services/resumeService";
import { getCurrentUser } from "@/services/authService";
import { toast } from "@/components/ui/use-toast";
import { FileText, Plus, Trash2, Eye, Download, Loader2 } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const [resumes, setResumes] = useState<SavedResume[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  
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
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <div className="container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back, {user?.name || "User"}! Manage your resumes here.
            </p>
          </div>
          
          <Button asChild className="mt-4 md:mt-0">
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
          <Card>
            <CardContent className="flex flex-col items-center py-12">
              <FileText className="h-16 w-16 text-gray-300 mb-4" />
              <h2 className="text-xl font-semibold mb-2">No resumes yet</h2>
              <p className="text-gray-500 text-center max-w-md mb-6">
                You haven't created any resumes yet. Create your first resume to get started.
              </p>
              <Button asChild>
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
              <Card key={resume.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="truncate">{resume.name}</CardTitle>
                  <CardDescription>
                    Created: {new Date(resume.createdAt).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-40 overflow-hidden">
                  {/* Resume preview thumbnail would go here */}
                  <div className="rounded-md border bg-gray-100 h-full flex items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-3">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive border-destructive">
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
    </div>
  );
};

export default Dashboard;
