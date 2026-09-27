"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ListFilter } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
}

interface LegalTableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export function LegalTableOfContents({
  items,
  className,
}: LegalTableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const headings = items
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      const scrollPosition = window.scrollY + 140;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          return;
        }
      }

      if (headings.length > 0 && headings[0]) {
        setActiveId(headings[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsMobileOpen(false);
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className={className}>
      {/* Mobile Collapsible TOC */}
      <div className="lg:hidden mb-8 rounded-xl border border-stone-200 bg-white p-4 shadow-xs">
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-toc-list"
          className="flex w-full items-center justify-between text-left font-semibold text-stone-900"
        >
          <div className="flex items-center gap-2 text-sm">
            <ListFilter className="w-4 h-4 text-red-600" aria-hidden="true" />
            <span>Table of Contents ({items.length} sections)</span>
          </div>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-stone-500 transition-transform duration-200",
              isMobileOpen && "rotate-180"
            )}
            aria-hidden="true"
          />
        </button>

        {isMobileOpen && (
          <div id="mobile-toc-list" className="mt-3 max-h-72 overflow-y-auto border-t border-stone-100 pt-3">
            <ul className="space-y-1.5 text-xs">
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={cn(
                        "block rounded-md px-2.5 py-1.5 transition-colors",
                        isActive
                          ? "bg-red-50 font-bold text-red-600"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      )}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Sticky TOC */}
      <aside className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-stone-200/90 bg-white p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-stone-100 text-xs font-bold uppercase tracking-wider text-stone-500">
          <ListFilter className="w-4 h-4 text-red-600" aria-hidden="true" />
          <span>Table of Contents</span>
        </div>

        <nav aria-label="Table of Contents">
          <ul className="space-y-1 text-xs">
            {items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={cn(
                      "block rounded-lg px-3 py-1.5 leading-snug transition-all",
                      isActive
                        ? "bg-red-50 font-bold text-red-600 pl-4 border-l-2 border-red-600"
                        : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                    )}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
