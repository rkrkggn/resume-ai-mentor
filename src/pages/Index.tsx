
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { FileText, Sparkles, Users, Award, Rocket, Clock, CheckCircle, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-resume-secondary/20 to-white">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-5">
                <div className="inline-block rounded-lg bg-resume-primary/10 px-3 py-1 text-sm text-resume-primary flex items-center space-x-2">
                  <Rocket className="h-4 w-4" />
                  <span>Launch Your Career with Resume Rocket</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl leading-tight">
                  Supercharge Your 
                  <span className="text-resume-primary"> Resume </span> 
                  with AI
                </h1>
                <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                  Stand out from the crowd with beautifully designed resumes and personalized AI feedback from your career coach.
                </p>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-resume-primary hover:bg-resume-accent shadow-lg hover:shadow-xl transition-all">
                    <Link to="/builder">
                      <Rocket className="h-4 w-4 mr-2" />
                      Create Resume Now
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="hover:bg-resume-secondary border-2">
                    <Link to="/signin">
                      Sign In
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 pt-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                    <span>Free to try</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                    <span>AI-powered</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                    <span>ATS-friendly</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto max-w-[600px] lg:mr-0">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-resume-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-resume-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-4 left-20 w-72 h-72 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="p-4 bg-white shadow-xl rounded-lg transform rotate-3 transition-transform hover:rotate-0 duration-500 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Resume on computer" 
                    className="rounded-md w-full object-cover"
                  />
                </div>
                <div className="p-4 bg-white shadow-xl rounded-lg transform -rotate-3 -mt-32 ml-32 transition-transform hover:rotate-0 duration-500 relative z-20">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Person using laptop" 
                    className="rounded-md w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-resume-primary/10 px-3 py-1 text-sm text-resume-primary">
                How It Works
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Three Simple Steps
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Create a professional resume in minutes with Resume Rocket
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-resume-secondary/20 transition-colors">
                <div className="relative">
                  <div className="w-16 h-16 bg-resume-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-resume-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-resume-primary rounded-full text-white flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold">Fill Your Details</h3>
                <p className="text-gray-500">
                  Enter your information or import from LinkedIn. Our intuitive form makes it easy.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-resume-secondary/20 transition-colors">
                <div className="relative">
                  <div className="w-16 h-16 bg-resume-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-resume-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-resume-primary rounded-full text-white flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold">Get AI Feedback</h3>
                <p className="text-gray-500">
                  Our AI career coach analyzes your resume and provides personalized suggestions.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl hover:bg-resume-secondary/20 transition-colors">
                <div className="relative">
                  <div className="w-16 h-16 bg-resume-primary/10 rounded-full flex items-center justify-center">
                    <FileText className="h-8 w-8 text-resume-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-resume-primary rounded-full text-white flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold">Download & Apply</h3>
                <p className="text-gray-500">
                  Choose from stunning templates and download your ATS-optimized resume in PDF format.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-12 md:py-20 bg-resume-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-resume-primary/10 px-3 py-1 text-sm text-resume-primary">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose Resume Rocket?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Our AI-powered tools help you create resumes that get noticed by recruiters and pass ATS systems.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-resume-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Beautiful Templates</h3>
                <p className="text-gray-500">
                  Choose from multiple professionally designed templates to make your resume stand out.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-resume-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI Career Coach</h3>
                <p className="text-gray-500">
                  Get personalized feedback and suggestions to improve your resume from our AI coach.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-resume-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">ATS-Optimized</h3>
                <p className="text-gray-500">
                  Our resumes are optimized to pass through Applicant Tracking Systems that companies use.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-resume-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Save Time</h3>
                <p className="text-gray-500">
                  Create and update your resume in minutes, not hours. Our intuitive editor makes it simple.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-resume-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Job-Targeted</h3>
                <p className="text-gray-500">
                  Customize your resume for specific job postings with AI suggestions tailored to the role.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="rounded-full bg-resume-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-resume-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert-Backed</h3>
                <p className="text-gray-500">
                  Our templates and advice are created with input from hiring managers and recruiters.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-resume-primary/10 px-3 py-1 text-sm text-resume-primary">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Success Stories
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                See how Resume Rocket has helped job seekers land their dream jobs.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <div className="absolute top-6 right-6 text-resume-primary">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 16H4L12 4V16H9.33333Z" fill="currentColor"/>
                    <path d="M23.3333 16H18L26 4V16H23.3333Z" fill="currentColor"/>
                    <path d="M12 16L12 28L4 16H12Z" fill="currentColor"/>
                    <path d="M26 16L26 28L18 16H26Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 pt-6">
                  "The AI feedback was incredibly helpful! It pointed out areas I needed to improve that I hadn't even considered. I got interviews from 3 out of 5 companies I applied to!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">Software Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <div className="absolute top-6 right-6 text-resume-primary">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 16H4L12 4V16H9.33333Z" fill="currentColor"/>
                    <path d="M23.3333 16H18L26 4V16H23.3333Z" fill="currentColor"/>
                    <path d="M12 16L12 28L4 16H12Z" fill="currentColor"/>
                    <path d="M26 16L26 28L18 16H26Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 pt-6">
                  "I was struggling to make my resume stand out. The templates and AI suggestions helped me create a professional resume that highlighted my strengths. Highly recommend!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Michael Chen</h3>
                    <p className="text-sm text-gray-500">Marketing Specialist</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <div className="absolute top-6 right-6 text-resume-primary">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 16H4L12 4V16H9.33333Z" fill="currentColor"/>
                    <path d="M23.3333 16H18L26 4V16H23.3333Z" fill="currentColor"/>
                    <path d="M12 16L12 28L4 16H12Z" fill="currentColor"/>
                    <path d="M26 16L26 28L18 16H26Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 pt-6">
                  "After months of job searching with no responses, I used Resume Rocket and immediately noticed a difference. Within two weeks, I had three interview offers!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jessica Taylor" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Jessica Taylor</h3>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-resume-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="none" />
              <g fill="none" stroke="white" stroke-width="2">
                <circle cx="400" cy="400" r="100" />
                <circle cx="400" cy="400" r="200" />
                <circle cx="400" cy="400" r="300" />
                <circle cx="400" cy="400" r="400" />
              </g>
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto">
              <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm">
                <Rocket className="h-4 w-4 inline mr-2" />
                Ready For Liftoff?
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Launch Your Career With Resume Rocket Today!
              </h2>
              <p className="max-w-[600px] text-resume-primary-foreground/90 md:text-xl/relaxed">
                Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered resume builder.
              </p>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="hover:shadow-lg transition-all">
                  <Link to="/signup">
                    Create Free Account
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link to="/builder">
                    Try Without Account
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t bg-white">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-resume-primary" />
                <span className="text-xl font-bold">Resume Rocket</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Your AI-powered career acceleration platform. Build professional resumes, get expert feedback, and land your dream job.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-resume-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-resume-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-resume-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-resume-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">AI Resume Builder</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Resume Templates</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Career Coach</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">ATS Optimization</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Cover Letters</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Career Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Resume Examples</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Job Interview Tips</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Career Advice</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
            <p className="text-center md:text-left text-sm text-gray-500 mt-4 md:mt-0">
              © 2025 Resume Rocket. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-resume-primary transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add Tailwind animation classes */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Index;
