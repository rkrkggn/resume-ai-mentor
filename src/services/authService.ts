
import { toast } from "@/components/ui/use-toast";

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  resumes: string[];
}

// Mock user storage
const USERS_KEY = 'resume_app_users';
const CURRENT_USER_KEY = 'resume_app_current_user';

// Get users from localStorage
const getUsers = (): User[] => {
  const usersJson = localStorage.getItem(USERS_KEY);
  return usersJson ? JSON.parse(usersJson) : [];
};

// Save users to localStorage
const saveUsers = (users: User[]): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Get current user from localStorage
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem(CURRENT_USER_KEY);
  return userJson ? JSON.parse(userJson) : null;
};

// Save current user to localStorage
const saveCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

// Sign up function
export const signUp = async (email: string, password: string, name: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const users = getUsers();
        
        // Check if user already exists
        if (users.some(user => user.email === email)) {
          throw new Error('User with this email already exists');
        }
        
        // Create new user
        const newUser: User = {
          id: Date.now().toString(),
          email,
          name,
          resumes: [],
        };
        
        // Save user
        saveUsers([...users, newUser]);
        saveCurrentUser(newUser);
        
        toast({
          title: "Success",
          description: "Account created successfully",
        });
        
        resolve(newUser);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          reject(error);
        }
      }
    }, 500);
  });
};

// Sign in function
export const signIn = async (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const users = getUsers();
        const user = users.find(u => u.email === email);
        
        if (!user) {
          throw new Error('User not found. Please sign up first.');
        }
        
        // In a real app, we would check the password here
        
        saveCurrentUser(user);
        
        toast({
          title: "Success",
          description: "Signed in successfully",
        });
        
        resolve(user);
      } catch (error) {
        if (error instanceof Error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
          reject(error);
        }
      }
    }, 500);
  });
};

// Sign out function
export const signOut = (): void => {
  saveCurrentUser(null);
  
  toast({
    title: "Signed out",
    description: "You have been signed out successfully",
  });
};

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

// Add resume to user's list
export const addResumeToUser = (resumeId: string): void => {
  const currentUser = getCurrentUser();
  
  if (currentUser) {
    const users = getUsers();
    const updatedUsers = users.map(user => {
      if (user.id === currentUser.id) {
        return {
          ...user,
          resumes: [...user.resumes, resumeId],
        };
      }
      return user;
    });
    
    const updatedUser = updatedUsers.find(user => user.id === currentUser.id)!;
    
    saveUsers(updatedUsers);
    saveCurrentUser(updatedUser);
  }
};
