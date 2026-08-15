"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const recentDocuments = [
  {
    name: "Rental Agreement.pdf",
    type: "PDF",
    pages: 18,
    status: "Processed",
    time: "2 hours ago",
  },
  {
    name: "Employment Contract.pdf",
    type: "PDF",
    pages: 24,
    status: "Processed",
    time: "Yesterday",
  },
  {
    name: "Service Agreement.docx",
    type: "DOCX",
    pages: 12,
    status: "Processed",
    time: "2 days ago",
  },
  {
    name: "NDA Agreement.pdf",
    type: "PDF",
    pages: 8,
    status: "Processing",
    time: "3 days ago",
  },
];

const stats = [
  {
    label: "Documents",
    value: "12",
    description: "Uploaded documents",
    icon: "▤",
  },
  {
    label: "AI Questions",
    value: "28",
    description: "Questions asked",
    icon: "◌",
  },
  {
    label: "Summaries",
    value: "9",
    description: "Generated summaries",
    icon: "≡",
  },
  {
    label: "Comparisons",
    value: "4",
    description: "Document comparisons",
    icon: "⇄",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#120d10] text-white">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-64 transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-[#d6a0ae]/10 bg-[#120d10]/90 px-5 backdrop-blur-xl sm:px-8">
          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d6a0ae]/15 bg-[#171014] text-[#ead6dc]/70 lg:hidden"
            aria-label="Open navigation"
          >
            ☰
          </button>

          {/* Search */}
          <div className="hidden max-w-md flex-1 lg:block">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#ead6dc]/30">
                ⌕
              </span>

              <input
                type="search"
                placeholder="Search documents..."
                className="w-full rounded-xl border border-[#d6a0ae]/10 bg-[#171014] py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#ead6dc]/25 focus:border-[#b9788a]/50"
              />
            </div>
          </div>

          {/* User */}
          <div className="ml-auto flex items-center gap-3">
            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6a0ae]/10 bg-[#171014] text-[#ead6dc]/60"
              aria-label="Notifications"
            >
              ♢
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#b9788a]" />
            </button>

            <div className="hidden h-7 w-px bg-[#d6a0ae]/10 sm:block" />

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b9788a]/20 text-xs font-semibold text-[#e5b5c1]">
                RR
              </div>

              <div className="hidden sm:block">
                <p className="text-xs font-medium text-[#f4e7eb]">
                  Riyana
                </p>

                <p className="text-[10px] text-[#ead6dc]/35">
                  Researcher
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
          {/* Welcome */}
          <section className="relative overflow-hidden rounded-3xl border border-[#d6a0ae]/15 bg-gradient-to-br from-[#b9788a]/15 via-[#1a1115] to-[#171014] p-7 sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#b9788a]/10 blur-3xl" />

            <div className="relative max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d6a0ae]/20 bg-[#b9788a]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#d6a0ae]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6a0ae]" />
                AI workspace
              </div>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Good morning, Riyana.
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#ead6dc]/55 sm:text-base">
                Understand your legal documents, ask questions, generate
                summaries, and compare agreements from one workspace.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/documents"
                  className="rounded-xl bg-[#b9788a] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#b9788a]/20 transition hover:bg-[#c48798]"
                >
                  Upload document
                </a>

                <a
                  href="/chat"
                  className="rounded-xl border border-[#d6a0ae]/20 bg-[#171014]/70 px-5 py-3 text-center text-sm font-semibold text-[#f4e7eb] transition hover:border-[#d6a0ae]/40 hover:bg-[#21151a]"
                >
                  Ask AI a question
                </a>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5 transition hover:border-[#d6a0ae]/25"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-[#ead6dc]/40">
                      {stat.label}
                    </p>

                    <p className="mt-2 text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b9788a]/10 text-lg text-[#d6a0ae]">
                    {stat.icon}
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-[#ead6dc]/35">
                  {stat.description}
                </p>
              </div>
            ))}
          </section>

          {/* Recent documents */}
          <section className="mt-10">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                  Your workspace
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  Recent documents
                </h2>
              </div>

              <a
                href="/documents"
                className="text-xs font-medium text-[#d6a0ae] transition hover:text-white"
              >
                View all →
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]">
              <div className="hidden grid-cols-[1fr_100px_100px_120px] gap-4 border-b border-[#d6a0ae]/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-[#ead6dc]/30 sm:grid">
                <span>Document</span>
                <span>Pages</span>
                <span>Status</span>
                <span>Updated</span>
              </div>

              {recentDocuments.map((document) => (
                <a
                  href="/documents"
                  key={document.name}
                  className="grid grid-cols-1 gap-3 border-b border-[#d6a0ae]/10 px-5 py-4 transition last:border-b-0 hover:bg-[#21151a] sm:grid-cols-[1fr_100px_100px_120px] sm:items-center sm:gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#b9788a]/10 text-[10px] font-bold text-[#d6a0ae]">
                      {document.type}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-[#f4e7eb]">
                        {document.name}
                      </p>

                      <p className="mt-1 text-[10px] text-[#ead6dc]/30">
                        Legal document
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-[#ead6dc]/45">
                    {document.pages} pages
                  </div>

                  <div>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium ${
                        document.status === "Processed"
                          ? "bg-emerald-400/10 text-emerald-300"
                          : "bg-amber-400/10 text-amber-300"
                      }`}
                    >
                      {document.status}
                    </span>
                  </div>

                  <div className="text-xs text-[#ead6dc]/35">
                    {document.time}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Quick actions */}
          <section className="mt-10">
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                Quick actions
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                What would you like to do?
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="/documents"
                className="group rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5 transition hover:-translate-y-1 hover:border-[#d6a0ae]/30 hover:bg-[#21151a]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b9788a]/10 text-xl text-[#d6a0ae]">
                  +
                </div>

                <h3 className="mt-5 font-semibold">
                  Upload a document
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#ead6dc]/40">
                  Upload a PDF or DOCX and prepare it for AI-powered analysis.
                </p>

                <span className="mt-4 block text-xs font-medium text-[#d6a0ae]">
                  Upload →
                </span>
              </a>

              <a
                href="/chat"
                className="group rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5 transition hover:-translate-y-1 hover:border-[#d6a0ae]/30 hover:bg-[#21151a]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b9788a]/10 text-xl text-[#d6a0ae]">
                  ◌
                </div>

                <h3 className="mt-5 font-semibold">
                  Ask your documents
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#ead6dc]/40">
                  Ask natural-language questions and receive document-grounded
                  answers.
                </p>

                <span className="mt-4 block text-xs font-medium text-[#d6a0ae]">
                  Open AI Chat →
                </span>
              </a>

              <a
                href="/compare"
                className="group rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5 transition hover:-translate-y-1 hover:border-[#d6a0ae]/30 hover:bg-[#21151a]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b9788a]/10 text-xl text-[#d6a0ae]">
                  ⇄
                </div>

                <h3 className="mt-5 font-semibold">
                  Compare documents
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#ead6dc]/40">
                  Compare two agreements and identify meaningful differences.
                </p>

                <span className="mt-4 block text-xs font-medium text-[#d6a0ae]">
                  Compare →
                </span>
              </a>
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-10 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]/60 p-5">
            <div className="flex gap-3">
              <span className="mt-0.5 text-sm text-[#d6a0ae]">
                ⓘ
              </span>

              <div>
                <p className="text-xs font-medium text-[#f4e7eb]">
                  Important
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#ead6dc]/35">
                  LegalAI is designed to assist with understanding uploaded
                  documents. AI-generated responses may contain errors and
                  should not be considered professional legal advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}