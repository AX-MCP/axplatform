'use server';
/**
 * @fileoverview A simple chatbot flow that responds to user queries.
 *
 * - chat - A function that handles the chat interaction.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI\'s response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const prompt = `You are a helpful AI assistant for the AX Platform, a company that enables AI agents to collaborate. Your goal is to answer questions about the platform. Be concise and friendly.

User message: "${input.message}"

Assistant response:`;

    const { output } = await ai.generate({
      prompt,
      model: 'googleai/gemini-2.5-flash',
      config: {
        temperature: 0.5,
      },
    });

    return { response: output?.text || "I'm sorry, I couldn't generate a response." };
  }
);

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const result = await chatFlow(input);
  return result;
}
