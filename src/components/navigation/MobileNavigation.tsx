"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ShieldCheck, FileText, UserX, Info, Phone, Mail } from "lucide-react";
import { NAV_ITEMS, SUPPORT_EMAIL, SUPPORT_PHONE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ICONS = {
  "/about": Info,
  "/terms": FileText,
  "/privacy": ShieldCheck,
  "/delete-account": UserX,
};

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Handle ESC key to close
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex items-center justify-center p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-red-500 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu Panel */}
      <div
        id="mobile-navigation-menu"
        className={cn(
          "fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between p-6",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-stone-200">
            <span className="font-bold text-stone-900 text-lg">Menu</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = NAV_ICONS[item.href as keyof typeof NAV_ICONS] || FileText;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3.5 py-3 rounded-xl text-base font-semibold transition-colors",
                    isActive
                      ? "bg-red-50 text-red-600 border border-red-200"
                      : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon
                    className={cn("w-5 h-5 shrink-0", isActive ? "text-red-600" : "text-stone-400")}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer in Drawer */}
        <div className="border-t border-stone-200 pt-6 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">Need support?</p>
          <a
            href={`tel:${SUPPORT_PHONE.replace(/[^+\d]/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-stone-800 hover:text-red-600"
          >
            <Phone className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true" />
            <span>{SUPPORT_PHONE}</span>
          </a>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline"
          >
            <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{SUPPORT_EMAIL}</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
