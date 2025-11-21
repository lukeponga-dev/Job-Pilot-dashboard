'use client';

import { z } from 'zod';

export const ExtractApplicationInputSchema = z.object({
  emailContent: z.string().min(1, 'Email content is required.'),
});

export const ExtractApplicationOutputSchema = z.object({
  company: z.string().describe('The name of the company.'),
  role: z.string().describe('The job title or role.'),
  location: z.string().optional().describe('The location of the job.'),
  status: z
    .string()
    .describe(
      'The current status of the application. Default to "Applied" if a confirmation email, or "Viewed" if it seems like a job suggestion.'
    ),
  url: z.string().optional().describe('The URL for the job posting, if found.'),
});

const ExperienceSchema = z.object({
    role: z.string(),
    company: z.string(),
    duration: z.string(),
    responsibilities: z.string(),
  });
  
  const EducationSchema = z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.string(),
  });
  
  export const CvWriterInputSchema = z.object({
    fullName: z.string().min(1, 'Full name is required.'),
    email: z.string().email('Invalid email address.'),
    phone: z.string().min(1, 'Phone number is required.'),
    address: z.string().min(1, 'Address is required.'),
    summary: z.string().min(1, 'Professional summary is required.'),
    experience: z.array(ExperienceSchema).min(1, 'At least one work experience is required.'),
    education: z.array(EducationSchema).min(1, 'At least one education entry is required.'),
    skills: z.string().min(1, 'Please list your skills.'),
  });
  export type CvWriterInput = z.infer<typeof CvWriterInputSchema>;
  
  export const CvWriterOutputSchema = z.object({
    cvText: z.string().describe('The full, formatted CV text in Markdown format.'),
  });
  export type CvWriterOutput = z.infer<typeof CvWriterOutputSchema>;
  
  export const CoverLetterWriterInputSchema = z.object({
    fullName: z.string().min(1, 'Full name is required.'),
    jobRole: z.string().min(1, 'Job role is required.'),
    companyName: z.string().min(1, 'Company name is required.'),
    jobDescription: z.string().min(1, 'Job description is required.'),
    userExperience: z.string().min(1, 'Please describe your relevant experience.'),
  });
  
  export type CoverLetterWriterInput = z.infer<typeof CoverLetterWriterInputSchema>;
  
  export const CoverLetterWriterOutputSchema = z.object({
    coverLetterText: z.string().describe('The full, formatted cover letter text in Markdown format.'),
  });
  export type CoverLetterWriterOutput = z.infer<typeof CoverLetterWriterOutputSchema>;
