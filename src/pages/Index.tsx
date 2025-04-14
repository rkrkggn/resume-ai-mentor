
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { FileText, Sparkles, Users, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-resume-primary/10 px-3 py-1 text-sm text-resume-primary">
                  Powered by AI
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Create professional resumes with AI assistance
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stand out from the crowd with beautifully designed resumes and personalized AI feedback from your career coach.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-resume-primary hover:bg-resume-accent">
                    <Link to="/builder">
                      Create Resume
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/signin">
                      Sign In
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto max-w-[500px] lg:mr-0">
                <div className="p-4 bg-white shadow-lg rounded-lg transform rotate-3 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Resume on computer" 
                    className="rounded-md w-full"
                  />
                </div>
                <div className="p-4 bg-white shadow-lg rounded-lg transform -rotate-3 -mt-16 ml-16 transition-transform">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Person using laptop" 
                    className="rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-resume-primary/10 px-3 py-1 text-sm text-resume-primary">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  All you need to land your dream job
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered resume builder helps you create professional resumes that get noticed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-resume-secondary">
                <div className="rounded-full bg-resume-primary/10 p-4">
                  <FileText className="h-6 w-6 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold">Beautiful Templates</h3>
                <p className="text-center text-gray-500">
                  Choose from multiple professionally designed templates to make your resume stand out.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-resume-secondary">
                <div className="rounded-full bg-resume-primary/10 p-4">
                  <Sparkles className="h-6 w-6 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Career Coach</h3>
                <p className="text-center text-gray-500">
                  Get personalized feedback and suggestions to improve your resume from our AI coach.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition-all hover:bg-resume-secondary">
                <div className="rounded-full bg-resume-primary/10 p-4">
                  <Award className="h-6 w-6 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold">ATS-Optimized</h3>
                <p className="text-center text-gray-500">
                  Our resumes are optimized to pass through Applicant Tracking Systems that companies use.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Trusted by job seekers
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our users have to say about our resume builder.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-8">
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">
                  "The AI feedback was incredibly helpful! It pointed out areas I needed to improve that I hadn't even considered. I got interviews from 3 out of 5 companies I applied to!"
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">Marketing Specialist</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">
                  "I was struggling to make my resume stand out. The templates and AI suggestions helped me create a professional resume that highlighted my strengths. Highly recommend!"
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-resume-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to create your standout resume?
                </h2>
                <p className="max-w-[600px] text-resume-primary-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of job seekers who have successfully landed their dream jobs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/signup">
                    Sign Up Free
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-white">
        <div className="container px-4 py-6 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-resume-primary" />
              <span className="text-lg font-bold">ResumeAI</span>
            </div>
            <p className="text-center text-sm text-gray-500 md:text-left">
              © 2025 ResumeAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
