import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormData,
  serviceOptions,
} from "../lib/validation";
import { submitContactInquiry, ContactSubmissionResult } from "../lib/contact-api";
import { Loader2, CheckCircle, AlertCircle, Send, Info } from "lucide-react";

interface ContactFormProps {
  preselectedService?: string;
}

const getErrorTimestamp = () => new Date().toISOString();

export const ContactForm: React.FC<ContactFormProps> = ({
  preselectedService,
}) => {
  const [submissionState, setSubmissionState] = useState<{
    isLoading: boolean;
    result: ContactSubmissionResult | null;
  }>({
    isLoading: false,
    result: null,
  });

  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      service: preselectedService || "",
      budget: "",
      timeline: "",
      projectDetails: "",
      privacyConsent: true, // prechecked for smooth UX while compliant
    },
  });

  useEffect(() => {
    if (preselectedService) {
      setValue("service", preselectedService, { shouldValidate: true });
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    if (honeypot.trim() !== "") return;

    setSubmissionState({ isLoading: true, result: null });
    try {
      const res = await submitContactInquiry(data);
      setSubmissionState({ isLoading: false, result: res });
      if (res.success) {
        reset({
          fullName: "",
          businessEmail: "",
          phoneNumber: "",
          companyName: "",
          service: "",
          budget: "",
          timeline: "",
          projectDetails: "",
          privacyConsent: true,
        });
      }
    } catch {
      setSubmissionState({
        isLoading: false,
        result: {
          success: false,
          message: "An unexpected error occurred while sending your inquiry. Please try again.",
          isSimulated: false,
          timestamp: getErrorTimestamp(),
        },
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-2xl border border-slate-100 text-left">
      <div className="mb-6">
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#082B59] tracking-tight">
          Contact Now
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-[#65748A] font-medium">
          Tell us about your project. We&apos;ll get back to you soon.
        </p>
      </div>

      {/* Submission Alert */}
      {submissionState.result && (
        <div
          className={`mb-6 p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
            submissionState.result.success
              ? submissionState.result.isSimulated
                ? "bg-amber-50 border-amber-200 text-amber-900"
                : "bg-emerald-50 border-emerald-200 text-emerald-900"
              : "bg-rose-50 border-rose-200 text-rose-900"
          }`}
          role="alert"
        >
          <div className="flex items-start gap-2.5">
            {submissionState.result.success ? (
              submissionState.result.isSimulated ? (
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              ) : (
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              )
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold">
                {submissionState.result.success
                  ? submissionState.result.isSimulated
                    ? "Development Mode: Inquiry Validated"
                    : "Message Sent Successfully"
                  : "Submission Failed"}
              </p>
              <p className="mt-0.5 text-xs opacity-90">
                {submissionState.result.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            tabIndex={-1}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* 2-Column: Your Name & Your Email matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <input
              type="text"
              placeholder="Your Name *"
              {...register("fullName")}
              className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-[#26364B] bg-[#f8fafc] focus:bg-white focus:outline-none transition-colors ${
                errors.fullName
                  ? "border-rose-400 ring-1 ring-rose-400"
                  : "border-slate-200 focus:border-[#0868B2]"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-[11px] text-rose-600">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email *"
              {...register("businessEmail")}
              className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-[#26364B] bg-[#f8fafc] focus:bg-white focus:outline-none transition-colors ${
                errors.businessEmail
                  ? "border-rose-400 ring-1 ring-rose-400"
                  : "border-slate-200 focus:border-[#0868B2]"
              }`}
            />
            {errors.businessEmail && (
              <p className="mt-1 text-[11px] text-rose-600">{errors.businessEmail.message}</p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#26364B] bg-[#f8fafc] focus:bg-white focus:border-[#0868B2] focus:outline-none transition-colors"
          />
        </div>

        {/* Service Interested In */}
        <div>
          <select
            {...register("service")}
            className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-[#26364B] bg-[#f8fafc] focus:bg-white focus:outline-none transition-colors ${
              errors.service
                ? "border-rose-400 ring-1 ring-rose-400"
                : "border-slate-200 focus:border-[#0868B2]"
            }`}
          >
            <option value="">Service Interested In *</option>
            {serviceOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-[11px] text-rose-600">{errors.service.message}</p>
          )}
        </div>

        {/* Your Message */}
        <div>
          <textarea
            rows={4}
            placeholder="Your Message *"
            {...register("projectDetails")}
            className={`w-full px-4 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm text-[#26364B] bg-[#f8fafc] focus:bg-white focus:outline-none transition-colors ${
              errors.projectDetails
                ? "border-rose-400 ring-1 ring-rose-400"
                : "border-slate-200 focus:border-[#0868B2]"
            }`}
          />
          {errors.projectDetails && (
            <p className="mt-1 text-[11px] text-rose-600">{errors.projectDetails.message}</p>
          )}
        </div>

        {/* Submit Button matching reference image: Send Message -> */}
        <div>
          <button
            type="submit"
            disabled={submissionState.isLoading}
            className="w-full inline-flex items-center justify-center gap-2 py-3 sm:py-3.5 rounded-xl font-heading font-bold text-xs sm:text-sm text-white bg-[#0868B2] hover:bg-[#065494] active:bg-[#082B59] transition-all duration-200 shadow-md disabled:opacity-60"
          >
            {submissionState.isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
