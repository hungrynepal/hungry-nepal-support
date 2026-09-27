import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-red-500 rounded-md p-1 -m-1",
        className
      )}
      aria-label="Hungry Hetauda Homepage"
    >
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-red-700 p-1.5 shadow-sm shrink-0",
          iconSizes[size]
        )}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Chef Cloche with Heart/Smile */}
          <path
            d="M6 22h20c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1z"
            fill="#FFFFFF"
          />
          <path
            d="M8 18c0-4.42 3.58-8 8-8s8 3.58 8 8H8z"
            fill="#FFE4E6"
          />
          <circle cx="16" cy="8" r="2" fill="#FFFFFF" />
          <path
            d="M13 15c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5"
            stroke="#DC2626"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Steam spark */}
          <circle cx="11" cy="5" r="1" fill="#FFFFFF" opacity="0.8" />
          <circle cx="21" cy="5" r="1" fill="#FFFFFF" opacity="0.8" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={cn(
            "font-extrabold tracking-tight leading-none text-stone-900 font-sans",
            textSizes[size]
          )}
        >
          Hungry{" "}
          <span className="text-red-600 font-extrabold">Hetauda</span>
        </span>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-500 mt-0.5">
          Official Support Portal
        </span>
      </div>
    </Link>
  );
}
