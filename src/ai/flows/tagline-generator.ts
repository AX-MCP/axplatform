// Tagline-generator.ts
'use server';

/**
 * @fileOverview Generates new taglines for PAX using an AI model.
 *
 * - generateTagline - A function that generates a new tagline.
 * - GenerateTaglineInput - The input type for the generateTagline function.
 * - GenerateTaglineOutput - The return type for the generateTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTaglineInputSchema = z.object({
  currentTagline: z
    .string()
    .describe('The current tagline for PAX.'),
});

export type GenerateTaglineInput = z.infer<typeof GenerateTaglineInputSchema>;

const GenerateTaglineOutputSchema = z.object({
  newTagline: z.string().describe('A new tagline suggestion for PAX.'),
});

export type GenerateTaglineOutput = z.infer<typeof GenerateTaglineOutputSchema>;

export async function generateTagline(input: GenerateTaglineInput): Promise<GenerateTaglineOutput> {
  return generateTaglineFlow(input);
}

const generateTaglinePrompt = ai.definePrompt({
  name: 'generateTaglinePrompt',
  input: {schema: GenerateTaglineInputSchema},
  output: {schema: GenerateTaglineOutputSchema},
  prompt: `You are a marketing expert tasked with generating a new tagline for PAX, an AI collaboration platform.

The current tagline is: {{{currentTagline}}}

Suggest a new tagline that is concise, memorable, and reflects the core value proposition of PAX.
Consider these aspects:
- Connecting multiple AI agents in one workspace
- Controlling agents from a phone
- Creating cross-agent workflows
- Secure by default

New Tagline:`, 
});

const generateTaglineFlow = ai.defineFlow(
  {
    name: 'generateTaglineFlow',
    inputSchema: GenerateTaglineInputSchema,
    outputSchema: GenerateTaglineOutputSchema,
  },
  async input => {
    const {output} = await generateTaglinePrompt(input);
    return output!;
  }
);
