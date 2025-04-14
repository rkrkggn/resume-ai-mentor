import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Craft the Perfect Resume with AI
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Create professional resumes effortlessly. Land your dream job faster.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild size="lg">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/templates">View Templates</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-foreground mb-2">
                AI-Powered Resume Builder
              </h3>
              <p className="text-muted-foreground">
                Our AI suggests the best content based on your experience and the job description.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Professionally Designed Templates
              </h3>
              <p className="text-muted-foreground">
                Choose from a variety of modern and classic templates to make your resume stand out.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-foreground mb-2">
                ATS Optimization
              </h3>
              <p className="text-muted-foreground">
                Ensure your resume passes through Applicant Tracking Systems with our optimization tools.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Real-Time Feedback
              </h3>
              <p className="text-muted-foreground">
                Get instant feedback on your resume's content, structure, and formatting.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Customizable Sections
              </h3>
              <p className="text-muted-foreground">
                Add, remove, and reorder sections to tailor your resume to specific job requirements.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-medium text-foreground mb-2">
                Multiple Formats
              </h3>
              <p className="text-muted-foreground">
                Download your resume in PDF, DOCX, or TXT formats for easy sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-foreground text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-card rounded-lg shadow-md">
              <p className="text-muted-foreground italic mb-4">
                "I was struggling to create a professional resume, but this tool made it so easy. I got more interviews than ever before!"
              </p>
              <p className="text-foreground font-medium">- Sarah J.</p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-card rounded-lg shadow-md">
              <p className="text-muted-foreground italic mb-4">
                "The AI suggestions were incredibly helpful. I didn't know how to phrase my experience, but the AI gave me great ideas."
              </p>
              <p className="text-foreground font-medium">- Michael K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-accent-foreground mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-accent-foreground text-lg mb-8">
            Sign up today and start building your professional resume.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/signup">
              Create Your Resume <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Global styles for fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Georgia:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');
        `}
      </style>
    </div>
  );
};

export default Index;
