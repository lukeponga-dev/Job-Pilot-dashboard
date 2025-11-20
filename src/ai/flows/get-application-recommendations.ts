'use server';

/**
 * @fileOverview Provides personalized recommendations for improving job application strategy based on past data and industry trends.
 *
 * - getApplicationRecommendations - A function that returns personalized job application recommendations.
 * - GetApplicationRecommendationsInput - The input type for the getApplicationRecommendations function.
 * - GetApplicationRecommendationsOutput - The return type for the getApplicationRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetApplicationRecommendationsInputSchema = z.object({
  pastApplicationData: z
    .string()
    .describe('A summary of the user\'s past job application data, including roles, companies, and outcomes.'),
  industryTrends: z
    .string()
    .describe('A summary of current industry trends and in-demand skills.'),
});
export type GetApplicationRecommendationsInput = z.infer<typeof GetApplicationRecommendationsInputSchema>;

const GetApplicationRecommendationsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of personalized recommendations for improving the application strategy.'),
});
export type GetApplicationRecommendationsOutput = z.infer<typeof GetApplicationRecommendationsOutputSchema>;

export async function getApplicationRecommendations(input: GetApplicationRecommendationsInput): Promise<GetApplicationRecommendationsOutput> {
  return getApplicationRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getApplicationRecommendationsPrompt',
  input: {schema: GetApplicationRecommendationsInputSchema},
  output: {schema: GetApplicationRecommendationsOutputSchema},
  prompt: `You are a career advisor providing personalized recommendations to job seekers.

  Based on the job seeker's past application data and current industry trends, provide specific and actionable recommendations for improving their application strategy.

  Past Application Data: {{{pastApplicationData}}}
  Industry Trends: {{{industryTrends}}}

  Consider suggesting specific skills to highlight, companies to target, or strategies to adopt.

  Format your response as a list of recommendations.
  `,
});

const getApplicationRecommendationsFlow = ai.defineFlow(
  {
    name: 'getApplicationRecommendationsFlow',
    inputSchema: GetApplicationRecommendationsInputSchema,
    outputSchema: GetApplicationRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
