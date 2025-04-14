
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { isAuthenticated, signOut, getCurrentUser } from "@/services/authService";
import { Rocket, User, LogOut } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const authenticated = isAuthenticated();
  const currentUser = getCurrentUser();
  
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };
  
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <Rocket className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">Resume Rocket</span>
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          
          {authenticated && (
            <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </Link>
          )}
          
          {authenticated ? (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{currentUser?.name}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center space-x-1"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
