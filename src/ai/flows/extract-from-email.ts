'use server';
/**
 * @fileOverview An AI agent for extracting structured job application data from raw email text.
 *
 * - extractApplicationFromEmail - A function that handles the email parsing process.
 * - ExtractApplicationInput - The input type for the function.
 * - ExtractApplicationOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { ExtractApplicationInputSchema, ExtractApplicationOutputSchema } from './schemas';

export type ExtractApplicationInput = z.infer<typeof ExtractApplicationInputSchema>;
export type ExtractApplicationOutput = z.infer<
  typeof ExtractApplicationOutputSchema
>;

const extractApplicationFromEmailFlow = ai.defineFlow(
  {
    name: 'extractApplicationFromEmailFlow',
    inputSchema: ExtractApplicationInputSchema,
    outputSchema: ExtractApplicationOutputSchema,
  },
  async (input) => {
    const prompt = ai.definePrompt({
      name: 'extractApplicationPrompt',
      input: { schema: ExtractApplicationInputSchema },
      output: { schema: ExtractApplicationOutputSchema },
      prompt: `You are an intelligent assistant that extracts job application details from the body of an email. Analyze the following email content and extract the company name, job role, location, status, and job posting URL.

If the email seems to be a job application confirmation, set the status to "Applied". If it looks like a job alert or suggestion, set the status to "Viewed".

Email Content:
{{{emailContent}}}
`,
    });

    const { output } = await prompt(input);
    return output!;
  }
);

export async function extractApplicationFromEmail(
  input: ExtractApplicationInput
): Promise<ExtractApplicationOutput> {
  return extractApplicationFromEmailFlow(input);
}
