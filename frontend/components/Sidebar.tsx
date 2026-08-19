"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: "⌂" },
  { name: "Documents", href: "/documents", icon: "▤" },
  { name: "AI Chat", href: "/chat", icon: "◌" },
  { name: "Summaries", href: "/summary", icon: "≡" },
  { name: "Compare", href: "/compare", icon: "⇄" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-[#d6a0ae]/10 bg-[#0f0b0d] lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center border-b border-[#d6a0ae]/10 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6a0ae]/30 bg-[#b9788a]/20 text-lg">
            ⚖
          </div>

          <div>
            <p className="font-semibold tracking-tight text-white">
              LegalAI
            </p>

            <p className="text-[9px] uppercase tracking-[0.18em] text-[#d6a0ae]/60">
              Intelligence System
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ead6dc]/30">
          Workspace
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                  isActive
                    ? "bg-[#b9788a]/15 font-medium text-[#f4e7eb]"
                    : "text-[#ead6dc]/55 hover:bg-[#1d1418] hover:text-white"
                }`}
              >
                <span
                  className={
                    isActive
                      ? "text-[#d6a0ae]"
                      : "text-[#ead6dc]/45"
                  }
                >
                  {item.icon}
                </span>

                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Account */}
        <p className="mb-3 mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ead6dc]/30">
          Account
        </p>

        <div className="space-y-1">
          <Link
            href="#"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
          >
            <span>⚙</span>
            Settings
          </Link>

          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
          >
            <span>↪</span>
            Sign out
          </Link>
        </div>
      </nav>

      {/* Bottom information card */}
      <div className="border-t border-[#d6a0ae]/10 p-4">
        <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#171014] p-4">
          <p className="text-xs font-medium text-[#f4e7eb]">
            Document Intelligence
          </p>

          <p className="mt-1 text-[11px] leading-5 text-[#ead6dc]/40">
            Analyze, search and compare your legal documents
            with AI assistance.
          </p>
        </div>
      </div>
    </aside>
  );
}