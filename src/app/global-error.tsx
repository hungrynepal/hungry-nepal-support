"use client";

import { AlertCircle, RotateCcw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 flex items-center justify-center p-4 font-sans text-stone-900">
        <div className="max-w-md w-full rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 text-center shadow-xs">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6">
            <AlertCircle className="w-7 h-7" aria-hidden="true" />
          </div>

          <h1 className="text-2xl font-bold text-stone-900 tracking-tight mb-2">
            System Error
          </h1>

          <p className="text-stone-600 text-sm leading-relaxed mb-6">
            A critical error occurred while displaying the application.
          </p>

          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-red-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Reload Application</span>
          </button>
        </div>
      </body>
    </html>
  );
}
