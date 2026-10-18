import { ContactFormData } from "./validation";

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
  isSimulated: boolean;
  timestamp: string;
}

/**
 * Handles project inquiry submissions.
 * When `VITE_CONTACT_API_URL` is set, makes a POST request to that endpoint.
 * When not set, runs a development simulation that demonstrates validation and loading,
 * but clearly identifies itself as a simulation so that no false claims of delivery are made.
 */
export async function submitContactInquiry(
  data: ContactFormData
): Promise<ContactSubmissionResult> {
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

  // Real backend submission if configured
  if (apiUrl && apiUrl.trim() !== "") {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          submittedAt: new Date().toISOString(),
          source: "Bharat Intelli Tech Systems Website",
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      return {
        success: true,
        message: "Thank you! Your project inquiry has been received. Our team will review your requirements and respond shortly.",
        isSimulated: false,
        timestamp: new Date().toISOString(),
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to connect to contact server";
      return {
        success: false,
        message: `Submission error: ${errorMsg}. Please try again later or contact us directly.`,
        isSimulated: false,
        timestamp: new Date().toISOString(),
      };
    }
  }

  // Development simulation when endpoint is unconfigured
  await new Promise((resolve) => setTimeout(resolve, 1400));

  return {
    success: true,
    message: "Development Mode Simulation: Form validation succeeded and payload was validated. Note: VITE_CONTACT_API_URL is unconfigured, so no real email or database record was sent.",
    isSimulated: true,
    timestamp: new Date().toISOString(),
  };
}
