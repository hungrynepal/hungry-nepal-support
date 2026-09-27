"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-stone-200/80 bg-white/90 backdrop-blur-md transition-shadow">
      <Container className="flex h-16 sm:h-20 items-center justify-between">
        <BrandLogo size="md" />

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-1 lg:space-x-2"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-red-500",
                  isActive
                    ? "bg-red-50 text-red-600 font-bold border border-red-200/60"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Navigation */}
        <MobileNavigation />
      </Container>
    </header>
  );
}
