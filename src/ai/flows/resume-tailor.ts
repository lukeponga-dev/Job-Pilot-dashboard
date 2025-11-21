'use server';
/**
 * @fileOverview A resume tailoring AI agent.
 *
 * - tailorResume - A function that handles the resume tailoring process.
 * - ResumeTailorInput - The input type for the tailorResume function.
 * - ResumeTailorOutput - The return type for the tailorResume function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ResumeTailorInputSchema = z.object({
  resumeText: z.string().min(1, 'Original resume text is required.'),
  jobDescription: z.string().min(1, 'Job description is required.'),
});
export type ResumeTailorInput = z.infer<typeof ResumeTailorInputSchema>;

const ResumeTailorOutputSchema = z.object({
  tailoredResumeText: z.string().describe('The full, tailored resume text in Markdown format.'),
});
export type ResumeTailorOutput = z.infer<typeof ResumeTailorOutputSchema>;

const resumeTailorFlow = ai.defineFlow(
  {
    name: 'resumeTailorFlow',
    inputSchema: ResumeTailorInputSchema,
    outputSchema: ResumeTailorOutputSchema,
  },
  async (input) => {
    const prompt = ai.definePrompt({
      name: 'resumeTailorPrompt',
      input: { schema: ResumeTailorInputSchema },
      output: { schema: ResumeTailorOutputSchema },
      prompt: `You are an expert resume writer and career coach. Your task is to tailor the provided resume to perfectly match the given job description.

Analyze the job description to identify key skills, qualifications, and keywords. Then, rewrite the resume to highlight the most relevant experiences and skills. Rephrase bullet points to reflect the language of the job description and ensure the summary is tailored to the specific role.

The output should be a complete, professional resume in Markdown format.

## Original Resume
{{{resumeText}}}

## Job Description
{{{jobDescription}}}
`,
    });

    const { output } = await prompt(input);
    return output!;
  }
);

export async function tailorResume(input: ResumeTailorInput): Promise<ResumeTailorOutput> {
  return resumeTailorFlow(input);
}
