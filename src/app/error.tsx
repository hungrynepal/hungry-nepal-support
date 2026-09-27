"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";
import { Container } from "@/components/shared/Container";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log minimal error digest without exposing sensitive stack traces to user
    console.error("Application error encountered:", error?.digest || "unknown");
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-stone-50/40">
      <Container size="narrow">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-14 text-center shadow-xs">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
            <AlertCircle className="w-7 h-7" aria-hidden="true" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-3">
            Something went wrong
          </h1>

          <p className="text-stone-600 max-w-md mx-auto text-sm leading-relaxed mb-8">
            An unexpected error occurred while loading this page. Please try again or return to our homepage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-red-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
