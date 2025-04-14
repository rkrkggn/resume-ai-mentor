
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "@/services/authService";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authenticated = isAuthenticated();
  
  useEffect(() => {
    if (!authenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to access this page",
        variant: "destructive",
      });
    }
  }, [authenticated]);
  
  if (!authenticated) {
    return <Navigate to="/signin" />;
  }
  
  return children;
};

export default ProtectedRoute;
