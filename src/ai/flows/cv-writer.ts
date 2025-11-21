'use server';

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { CvWriterInputSchema, CvWriterOutputSchema } from './schemas';
import type { CvWriterInput, CvWriterOutput } from './schemas';

const cvWriterFlow = ai.defineFlow(
  {
    name: 'cvWriterFlow',
    inputSchema: CvWriterInputSchema,
    outputSchema: CvWriterOutputSchema,
  },
  async input => {
    const prompt = ai.definePrompt({
      name: 'cvWriterPrompt',
      input: { schema: CvWriterInputSchema },
      output: { schema: CvWriterOutputSchema },
      prompt: `You are a professional resume writer. Create a clean, well-formatted CV in Markdown based on the following information. Ensure the output is professional and easy to read.

## Personal Information
- **Full Name:** {{{fullName}}}
- **Email:** {{{email}}}
- **Phone:** {{{phone}}}
- **Address:** {{{address}}}

## Professional Summary
{{{summary}}}

## Work Experience
{{#each experience}}
- **{{role}}** at {{company}} ({{duration}})
  - {{responsibilities}}
{{/each}}

## Education
{{#each education}}
- **{{degree}}**, {{institution}} ({{year}})
{{/each}}

## Skills
- {{{skills}}}
`,
    });

    const { output } = await prompt(input);
    return output!;
  }
);

export async function generateCv(input: CvWriterInput): Promise<CvWriterOutput> {
  return cvWriterFlow(input);
}
