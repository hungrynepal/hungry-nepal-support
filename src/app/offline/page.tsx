import Link from "next/link";
import { WifiOff, Home } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Offline | Hungry Hetauda",
  description: "You are currently offline. Please reconnect to access updated information.",
  path: "/offline",
});

export default function OfflinePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 bg-stone-50/40">
      <Container size="narrow">
        <div className="rounded-3xl border border-stone-200 bg-white p-8 sm:p-12 text-center shadow-xs">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mb-6">
            <WifiOff className="w-8 h-8" aria-hidden="true" />
          </div>

          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mb-3">
            You are Offline
          </h1>

          <p className="text-stone-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
            It looks like your internet connection is unavailable. Cached content is accessible, but please reconnect to view the latest real-time information and policy updates.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-xs hover:bg-red-700 transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Go to Homepage</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
            >
              <span>View Cached About Page</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
