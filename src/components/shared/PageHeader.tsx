import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  badges?: Array<{ label: string; value: string }>;
  className?: string;
  size?: "default" | "legal" | "narrow";
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  badges,
  className,
  size = "legal",
}: PageHeaderProps) {
  return (
    <header className={cn("border-b border-stone-200/80 bg-gradient-to-b from-red-500/5 via-stone-50/50 to-stone-50/20 py-8 sm:py-12", className)}>
      <Container size={size}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 leading-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}

        {badges && badges.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs">
            {badges.map((b, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-medium text-stone-700 shadow-2xs border border-stone-200"
              >
                <span className="text-stone-400 font-normal">{b.label}:</span>
                <span className="font-semibold text-stone-900">{b.value}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </header>
  );
}
