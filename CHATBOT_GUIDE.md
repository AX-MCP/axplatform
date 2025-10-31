# Managing Your AI Chatbot

This guide explains how to configure and customize the AI chatbot on your website.

---

## How the Chatbot Works

The chatbot consists of two main parts:

1.  **Frontend Component (`src/components/chatbot/Chatbot.tsx`)**: This is the user interface that you see on the website—the chat bubble, the window, and the messages.
2.  **Backend AI Flow (`src/ai/flows/chatFlow.ts`)**: This is a Genkit flow that runs on the server. It takes the user's message, sends it to a Google AI model (Gemini), and returns the generated response.

---

## 1. Setting Up Your API Key (Required)

The chatbot cannot generate responses without an API key to access Google's Gemini model.

### Steps to Add Your API Key:

1.  **Get a Gemini API Key**:
    *   Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   Sign in with your Google account.
    *   Click **"Create API key"** to generate a new key.
    *   Copy the key to your clipboard.

2.  **Create an Environment File**:
    *   In the root directory of your project, create a new file named `.env`.
    *   If the file already exists, just open it.

3.  **Add the API Key to the File**:
    *   Add the following line to your `.env` file, replacing `YOUR_API_KEY_HERE` with the key you copied:

    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Restart Your Development Server**:
    *   Stop your `npm run dev` process.
    *   Run `npm run dev` again to load the new environment variable.

After these steps, your chatbot should be able to generate responses successfully.

---

## 2. Customizing the Chatbot's Knowledge and Personality

You can change what the chatbot knows and how it behaves by editing its "system prompt."

1.  **Open the Chat Flow File**:
    *   Navigate to `src/ai/flows/chatFlow.ts`.

2.  **Find the Prompt**:
    *   Inside the `chatFlow` function, you will find a `prompt` variable. It looks like this:

    ```javascript
    const prompt = `You are a helpful AI assistant for the AX Platform, a company that enables AI agents to collaborate. Your goal is to answer questions about the platform. Be concise and friendly.

    User message: "${input.message}"

    Assistant response:`;
    ```

3.  **Edit the Prompt**:
    *   You can change the text within the backticks (`` ` ``) to give the chatbot new instructions, a different personality, or more information about your company. For example, you could add details about your products, contact information, or specific FAQs.

    **Example (Adding more knowledge):**

    ```javascript
    const prompt = `You are a friendly and enthusiastic AI assistant for the AX Platform.
    
    **About AX Platform:**
    - We are a company that enables AI agents to collaborate.
    - Our main product is a unified workspace for AI systems.
    - Our website is ax-platform.com.
    - For sales, contact enterprise@ax-platform.com.

    Your goal is to answer questions based on this information. Keep your answers helpful and brief.

    User message: "${input.message}"

    Assistant response:`;
    ```

4.  **Save the File**:
    *   Your changes will be applied automatically the next time the chatbot is used.

---

## 3. Troubleshooting

*   **Chatbot isn't responding**: The most common reason is a missing or incorrect `GEMINI_API_KEY`. Double-check your `.env` file and ensure you have restarted the development server.
*   **Responses are not accurate**: The AI's knowledge is limited to what's in its prompt. Edit `src/ai/flows/chatFlow.ts` to provide it with more detailed and accurate information.
