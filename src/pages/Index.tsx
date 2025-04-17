
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, FileText, FileCheck, Users, Target } from "lucide-react";
import Navbar from '@/components/Navbar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section with Background Effect */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute -top-40 -left-20 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 -right-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <Sparkles className="w-4 h-4 mr-1.5" />
                AI-Powered Resume Builder
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Craft the Perfect Resume <span className="text-primary">with AI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stand out from the crowd with professionally designed resumes tailored to your industry. Land your dream job faster.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button asChild size="lg" className="text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 rounded-lg border-2">
                <Link to="/templates">View Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How Resume Rocket Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Create a professional resume in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Add Your Information</h3>
              <p className="text-muted-foreground">
                Fill in your details or import from LinkedIn. Our AI will help optimize your content.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose a Template</h3>
              <p className="text-muted-foreground">
                Select from professionally designed templates that stand out and pass ATS systems.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border/50 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Download & Apply</h3>
              <p className="text-muted-foreground">
                Download your resume as PDF, share online, or apply directly to job openings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-4">
              Premium Features
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our powerful tools help you build winning resumes that get noticed by employers and pass ATS systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards */}
            <FeatureCard 
              title="AI-Powered Content" 
              description="Our AI suggests the best content based on your experience and the job description."
              icon={<Sparkles className="h-5 w-5" />}
            />
            <FeatureCard 
              title="Professional Templates" 
              description="Choose from a variety of modern and classic templates to make your resume stand out."
              icon={<FileText className="h-5 w-5" />}
            />
            <FeatureCard 
              title="ATS Optimization" 
              description="Ensure your resume passes through Applicant Tracking Systems with our optimization tools."
              icon={<Target className="h-5 w-5" />}
            />
            <FeatureCard 
              title="Real-Time Feedback" 
              description="Get instant feedback on your resume's content, structure, and formatting."
              icon={<CheckCircle2 className="h-5 w-5" />}
            />
            <FeatureCard 
              title="Customizable Sections" 
              description="Add, remove, and reorder sections to tailor your resume to specific job requirements."
              icon={<FileCheck className="h-5 w-5" />}
            />
            <FeatureCard 
              title="Multiple Formats" 
              description="Download your resume in PDF, DOCX, or TXT formats for easy sharing."
              icon={<ArrowRight className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              <Users className="w-4 h-4 mr-1.5" />
              Success Stories
            </span>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thousands of job seekers have found success with Resume Rocket
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <TestimonialCard
                    quote="I was struggling to create a professional resume, but this tool made it so easy. I got more interviews than ever before!"
                    name="Sarah Johnson"
                    position="Marketing Manager"
                    rating={5}
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    quote="The AI suggestions were incredibly helpful. I didn't know how to phrase my experience, but the AI gave me great ideas that sounded professional."
                    name="Michael Kim"
                    position="Software Developer"
                    rating={5}
                  />
                </CarouselItem>
                <CarouselItem>
                  <TestimonialCard
                    quote="As someone changing careers, I was worried my resume wouldn't stand out. This tool helped me highlight my transferable skills perfectly."
                    name="Jessica Martinez"
                    position="Career Changer"
                    rating={5}
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="static mx-2 translate-y-0" />
                <CarouselNext className="static mx-2 translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 -z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 mx-auto">
              Join thousands of successful job seekers who have landed their dream jobs with Resume Rocket.
            </p>
            <Button asChild size="lg" className="text-base px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <Link to="/signup">
                Create Your Resume <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free plan available
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <span className="text-xl font-bold text-foreground">Resume Rocket</span>
              <span className="text-sm text-muted-foreground ml-3">© 2025 All Rights Reserved</span>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow border border-border/50">
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, name, position, rating }) => {
  return (
    <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-lg italic text-foreground mb-6">"{quote}"</p>
      <div>
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{position}</p>
      </div>
    </div>
  );
};

export default Index;
