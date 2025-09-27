"use server";

import fs from "fs/promises";
import path from "path";
import { z } from "zod";

const emailSchema = z.string().email({ message: "Invalid email address." });

export async function subscribeToNewsletter(
  email: string
): Promise<{ success: boolean; error?: string }> {
  const validation = emailSchema.safeParse(email);
  if (!validation.success) {
    return { success: false, error: validation.error.errors[0].message };
  }

  // This approach has limitations and is not recommended for production.
  // It writes to the local filesystem, which won't work in most serverless/edge hosting environments.
  // The file path is relative to the project root.
  const filePath = path.join(process.cwd(), "email_addresses.txt");

  try {
    // We use a flag 'a' to append to the file if it exists, or create it if it doesn't.
    await fs.appendFile(filePath, `${email}\n`, "utf-8");
    return { success: true };
  } catch (error) {
    console.error("Failed to write to newsletter file:", error);
    // In a real app, you'd want more specific error handling.
    return {
      success: false,
      error: "Could not subscribe at this time. Please try again later.",
    };
  }
}
