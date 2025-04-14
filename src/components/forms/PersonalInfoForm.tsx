
import { useResume } from "@/context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const PersonalInfoForm = () => {
  const { resumeData, setResumeData } = useResume();
  const { personalInfo } = resumeData;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...personalInfo,
        [name]: value,
      },
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={personalInfo.firstName}
              onChange={handleChange}
              placeholder="John"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={personalInfo.lastName}
              onChange={handleChange}
              placeholder="Doe"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={personalInfo.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input
              id="jobTitle"
              name="jobTitle"
              value={personalInfo.jobTitle}
              onChange={handleChange}
              placeholder="Software Engineer"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={personalInfo.address}
              onChange={handleChange}
              placeholder="123 Main St"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={personalInfo.city}
              onChange={handleChange}
              placeholder="San Francisco"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                value={personalInfo.state}
                onChange={handleChange}
                placeholder="CA"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={personalInfo.zipCode}
                onChange={handleChange}
                placeholder="94103"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <Label htmlFor="professionalSummary">Professional Summary</Label>
          <Textarea
            id="professionalSummary"
            name="professionalSummary"
            value={personalInfo.professionalSummary}
            onChange={handleChange}
            placeholder="Summarize your career, skills, and achievements in a few sentences"
            rows={4}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
