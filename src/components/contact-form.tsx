"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the type for our form data
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Define the type for form errors
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Define the status type for form submission
type FormStatus = "idle" | "submitting" | "success" | "error";

const ContactForm: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for form submission status
  const [status, setStatus] = useState<FormStatus>("idle");

  // State for error message from server
  const [serverError, setServerError] = useState<string>("");

  // State for form validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle input changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email with regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    // Update errors state
    setErrors(newErrors);

    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    // Set status to submitting
    setStatus("submitting");
    setServerError("");

    try {
      // Send the form data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Reset form data on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setStatus("success");
      } else {
        // Handle server errors
        const errorData = await response.json();
        setServerError(
          errorData.message || "Something went wrong. Please try again later."
        );
        setStatus("error");
      }
    } catch (error) {
      // Handle network errors
      setServerError(
        "Failed to send message. Please check your network connection."
      );
      setStatus("error");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mb-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 opacity-90">
        Get In Touch
      </h2>

      {/* Success message */}
      {status === "success" && (
        <div className="border border-green-400 text-green-700 px-4 py-3 rounded mb-4 opacity-70">
          <p>
            Thank you for your message! I will get back to you as soon as
            possible.
          </p>
        </div>
      )}

      {/* Error message */}
      {status === "error" && (
        <div className="border border-red-400 text-red-700 px-4 py-3 rounded mb-4 opacity-70">
          <p>{serverError || "Something went wrong. Please try again."}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name field */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold text-theme mb-1 opacity-50"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border text-theme text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500 opacity-70" : "border-theme"
            }`}
            placeholder="Your name"
            disabled={status === "submitting"}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 opacity-70">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold text-theme mb-1 opacity-50"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border text-theme text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-gray-500 ${
              errors.email ? "border-red-500 opacity-70" : "border-theme"
            }`}
            placeholder="your.email@example.com"
            disabled={status === "submitting"}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 opacity-70">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-xs font-bold text-theme mb-1 opacity-50"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 border text-theme text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? "border-red-500 opacity-70" : "border-theme"
            }`}
            placeholder="What is the purpose of your messgae?"
            disabled={status === "submitting"}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 opacity-70">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold text-theme mb-1 opacity-50"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-3 py-2 border text-theme text-sm rounded-xs focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message ? "border-red-500 opacity-70" : "border-theme"
            }`}
            placeholder="Your message here..."
            disabled={status === "submitting"}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 opacity-70">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full md:w-auto px-6 py-3 text-theme text-xs tracking-wider rounded-xs uppercase cursor-pointer focus:outline-none focus:ring-0 focus:ring-theme focus:ring-offset-2 transition-transform duration-300 transform hover:scale-102 disabled:bg-grey-400 disabled:cursor-not-allowed border border-theme opacity-70"
          >
            {status === "submitting" ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-theme"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
