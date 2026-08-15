"use client";

import { useState } from "react";

type SummaryData = {
  document: string;
  type: string;
  pages: number;
  uploaded: string;
  overview: string;
  keyPoints: string[];
  clauses: {
    title: string;
    description: string;
    page: number;
  }[];
};

const documents: Record<string, SummaryData> = {
  "Rental Agreement.pdf": {
    document: "Rental Agreement.pdf",
    type: "Residential Lease Agreement",
    pages: 8,
    uploaded: "15 Aug 2026",
    overview:
      "This rental agreement establishes the terms and conditions between the landlord and tenant for the use of a residential property. It covers rent payments, maintenance responsibilities, security deposit requirements, permitted use of the premises, and conditions for ending the tenancy.",
    keyPoints: [
      "The tenant must pay the agreed monthly rent according to the payment schedule specified in the agreement.",
      "The tenant is responsible for keeping the premises in a clean and reasonable condition.",
      "A security deposit is required and is subject to the conditions described in the agreement.",
      "The premises may only be used for the purpose permitted by the rental agreement.",
      "Both parties must follow the notice requirements before terminating the tenancy.",
    ],
    clauses: [
      {
        title: "Rent and Payment",
        description:
          "The tenant is required to pay the agreed rent on or before the specified due date.",
        page: 4,
      },
      {
        title: "Maintenance and Repairs",
        description:
          "The agreement describes the responsibilities of the tenant and landlord regarding maintenance of the premises.",
        page: 5,
      },
      {
        title: "Security Deposit",
        description:
          "The security deposit is subject to the conditions and deductions specified in the agreement.",
        page: 6,
      },
      {
        title: "Termination",
        description:
          "The agreement specifies notice requirements and conditions for ending the tenancy.",
        page: 7,
      },
    ],
  },

  "Employment Contract.pdf": {
    document: "Employment Contract.pdf",
    type: "Employment Agreement",
    pages: 12,
    uploaded: "14 Aug 2026",
    overview:
      "This employment agreement defines the relationship between an employer and employee, including the employee's role, compensation, working responsibilities, confidentiality requirements, and conditions relating to termination.",
    keyPoints: [
      "The employee is expected to perform the responsibilities associated with the assigned role.",
      "Compensation is governed by the terms specified in the agreement.",
      "Confidential business information must be protected.",
      "The employee must comply with applicable workplace policies.",
      "The agreement specifies conditions under which employment may be terminated.",
    ],
    clauses: [
      {
        title: "Position and Duties",
        description:
          "The agreement describes the employee's role and expected professional responsibilities.",
        page: 2,
      },
      {
        title: "Compensation",
        description:
          "The employee's compensation and payment terms are described in this section.",
        page: 4,
      },
      {
        title: "Confidentiality",
        description:
          "Confidential information obtained during employment must be protected.",
        page: 7,
      },
      {
        title: "Termination",
        description:
          "The contract defines circumstances and notice requirements relating to termination.",
        page: 10,
      },
    ],
  },

  "Non-Disclosure Agreement.pdf": {
    document: "Non-Disclosure Agreement.pdf",
    type: "Confidentiality Agreement",
    pages: 6,
    uploaded: "13 Aug 2026",
    overview:
      "This non-disclosure agreement establishes obligations relating to confidential information shared between the parties. It defines confidential information, permitted uses, restrictions on disclosure, and obligations following termination of the agreement.",
    keyPoints: [
      "Confidential information must only be used for the permitted purpose.",
      "The receiving party must take reasonable steps to protect confidential information.",
      "Disclosure to unauthorized third parties is restricted.",
      "Certain categories of information may be excluded from confidentiality obligations.",
      "The agreement specifies obligations that continue after the relationship ends.",
    ],
    clauses: [
      {
        title: "Definition of Confidential Information",
        description:
          "The agreement defines the categories of information considered confidential.",
        page: 2,
      },
      {
        title: "Permitted Use",
        description:
          "Confidential information may only be used for the purposes allowed by the agreement.",
        page: 3,
      },
      {
        title: "Non-Disclosure Obligations",
        description:
          "The receiving party must protect confidential information from unauthorized disclosure.",
        page: 4,
      },
      {
        title: "Duration",
        description:
          "The agreement describes how long the confidentiality obligations remain effective.",
        page: 5,
      },
    ],
  },
};

export default function SummaryPage() {
  const [selectedDocument, setSelectedDocument] =
    useState("Rental Agreement.pdf");

  const summary = documents[selectedDocument];

  return (
    <main className="min-h-screen bg-[#120d10] text-white">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-[#d6a0ae]/10 bg-[#0f0b0d] lg:flex">
        <div className="flex h-20 items-center border-b border-[#d6a0ae]/10 px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6a0ae]/30 bg-[#b9788a]/20 text-lg">
              ⚖
            </div>

            <div>
              <p className="font-semibold tracking-tight">
                LegalAI
              </p>

              <p className="text-[9px] uppercase tracking-[0.18em] text-[#d6a0ae]/60">
                Intelligence System
              </p>
            </div>
          </a>
        </div>

        <nav className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ead6dc]/30">
            Workspace
          </p>

          <div className="space-y-1">
            <a
              href="/dashboard"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>⌂</span>
              Dashboard
            </a>

            <a
              href="/documents"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>▤</span>
              Documents
            </a>

            <a
              href="/chat"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>◌</span>
              AI Chat
            </a>

            <a
              href="/summary"
              className="flex items-center gap-3 rounded-xl bg-[#b9788a]/15 px-3 py-3 text-sm font-medium text-[#f4e7eb]"
            >
              <span className="text-[#d6a0ae]">≡</span>
              Summaries
            </a>

            <a
              href="/compare"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>⇄</span>
              Compare
            </a>
          </div>

          <p className="mb-3 mt-10 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ead6dc]/30">
            Account
          </p>

          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>⚙</span>
              Settings
            </a>

            <a
              href="/"
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>↪</span>
              Sign out
            </a>
          </div>
        </nav>

        <div className="border-t border-[#d6a0ae]/10 p-4">
          <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#171014] p-4">
            <p className="text-xs font-medium text-[#f4e7eb]">
              Document Intelligence
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#ead6dc]/40">
              Quickly understand important information from
              your legal documents.
            </p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="lg:pl-64">
        {/* Header */}

        <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between gap-4 border-b border-[#d6a0ae]/10 bg-[#120d10]/95 px-5 py-3 backdrop-blur-xl sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#d6a0ae]/60">
              Workspace
            </p>

            <h1 className="mt-1 text-lg font-semibold">
              Document Summary
            </h1>
          </div>

          <a
            href={`/documents`}
            className="rounded-lg border border-[#d6a0ae]/15 bg-[#171014] px-3 py-2 text-xs font-medium text-[#ead6dc]/55 transition hover:border-[#d6a0ae]/30 hover:text-white"
          >
            View documents
          </a>
        </header>

        <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8">
          {/* =================================================
              DOCUMENT SELECTOR
          ================================================== */}

          <section className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5 sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                  AI-powered analysis
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Understand your document faster.
                </h2>

                <p className="mt-2 max-w-2xl text-xs leading-6 text-[#ead6dc]/35">
                  Generate a concise overview of the selected legal
                  document, identify important points, and locate
                  significant clauses.
                </p>
              </div>

              <div className="w-full lg:w-80">
                <label
                  htmlFor="summary-document"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#ead6dc]/35"
                >
                  Document
                </label>

                <select
                  id="summary-document"
                  value={selectedDocument}
                  onChange={(event) =>
                    setSelectedDocument(event.target.value)
                  }
                  className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#21151a] px-4 py-3 text-xs text-[#ead6dc]/75 outline-none transition focus:border-[#b9788a]/50"
                >
                  {Object.keys(documents).map((document) => (
                    <option key={document} value={document}>
                      {document}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* =================================================
              DOCUMENT INFORMATION
          ================================================== */}

          <section className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#ead6dc]/25">
                Document
              </p>

              <p className="mt-2 truncate text-xs font-semibold text-[#ead6dc]/75">
                {summary.document}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#ead6dc]/25">
                Type
              </p>

              <p className="mt-2 text-xs font-semibold text-[#ead6dc]/75">
                {summary.type}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#ead6dc]/25">
                Pages
              </p>

              <p className="mt-2 text-xs font-semibold text-[#ead6dc]/75">
                {summary.pages} pages
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-[9px] uppercase tracking-[0.15em] text-[#ead6dc]/25">
                Uploaded
              </p>

              <p className="mt-2 text-xs font-semibold text-[#ead6dc]/75">
                {summary.uploaded}
              </p>
            </div>
          </section>

          {/* =================================================
              SUMMARY + KEY POINTS
          ================================================== */}

          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Overview */}

            <section className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b9788a]/15 text-[#d6a0ae]">
                  ✦
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    AI-generated overview
                  </p>

                  <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                    High-level understanding of the document
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-5">
                <p className="text-xs leading-7 text-[#ead6dc]/60">
                  {summary.overview}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <span className="rounded-full bg-[#b9788a]/10 px-3 py-1.5 text-[8px] font-medium text-[#d6a0ae]">
                  AI generated
                </span>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-[8px] font-medium text-emerald-300">
                  Document grounded
                </span>
              </div>
            </section>

            {/* Key points */}

            <section className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
              <div>
                <p className="text-xs font-semibold">
                  Key points
                </p>

                <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                  Important information identified
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {summary.keyPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-4"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#b9788a]/10 text-[9px] font-semibold text-[#d6a0ae]">
                      {index + 1}
                    </div>

                    <p className="text-[10px] leading-5 text-[#ead6dc]/50">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* =================================================
              IMPORTANT CLAUSES
          ================================================== */}

          <section className="mt-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold">
                  Important clauses
                </p>

                <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                  Sections that may require closer review
                </p>
              </div>

              <span className="text-[9px] text-[#d6a0ae]/60">
                {summary.clauses.length} clauses identified
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {summary.clauses.map((clause, index) => (
                <div
                  key={clause.title}
                  className="group rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-5 transition hover:border-[#d6a0ae]/25"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#b9788a]/10 text-[9px] font-semibold text-[#d6a0ae]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-[#ead6dc]/75">
                          {clause.title}
                        </h3>

                        <p className="mt-1 text-[8px] text-[#d6a0ae]/60">
                          Page {clause.page}
                        </p>
                      </div>
                    </div>

                    <span className="text-[#ead6dc]/20 transition group-hover:text-[#d6a0ae]">
                      ↗
                    </span>
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-[#ead6dc]/35">
                    {clause.description}
                  </p>

                  <a
                    href={`/documents/${clause.page}`}
                    className="mt-4 inline-block text-[9px] font-medium text-[#d6a0ae] transition hover:text-[#e6b7c3]"
                  >
                    View source page →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* =================================================
              LEGAL DISCLAIMER
          ================================================== */}

          <section className="mt-5 rounded-xl border border-[#d6a0ae]/10 bg-[#171014] px-5 py-4">
            <div className="flex gap-3">
              <div className="shrink-0 text-sm text-[#d6a0ae]/60">
                ⓘ
              </div>

              <p className="text-[9px] leading-5 text-[#ead6dc]/20">
                This summary is generated for informational
                purposes and is not legal advice. Users should
                review the original document before making legal,
                financial, or contractual decisions. This
                prototype currently uses mock AI-generated data.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}