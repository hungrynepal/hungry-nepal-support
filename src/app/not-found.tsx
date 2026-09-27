import Link from "next/link";
import { Home } from "lucide-react";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-stone-50/40">
      <Container size="narrow">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-14 text-center shadow-xs">
          <div className="inline-flex items-center justify-center rounded-2xl bg-red-50 border border-red-200/80 px-4 py-2 font-mono text-sm font-bold text-red-700 mb-6">
            Error 404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Page Not Found
          </h1>

          <p className="text-stone-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
            The page you are looking for doesn&apos;t exist or may have been moved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-red-700 transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-6 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
            >
              <span>Explore About Us</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
