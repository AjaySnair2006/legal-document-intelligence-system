"use client";

import { useState } from "react";

type ComparisonData = {
  overview: string;
  commonClauses: string[];
  differences: {
    title: string;
    documentA: string;
    documentB: string;
    impact: "High" | "Medium" | "Low";
    pageA: number;
    pageB: number;
  }[];
  recommendation: string;
};

const comparisonData: ComparisonData = {
  overview:
    "The two rental agreements contain similar core provisions covering rent, security deposits, maintenance, permitted use, and termination. The main differences relate to the monthly rent, security deposit amount, notice period, and maintenance responsibilities.",

  commonClauses: [
    "Both agreements establish a landlord-tenant relationship for residential use.",
    "Both require the tenant to pay rent according to an agreed schedule.",
    "Both contain provisions relating to a security deposit.",
    "Both restrict the use of the premises to permitted residential purposes.",
    "Both include conditions governing termination of the tenancy.",
  ],

  differences: [
    {
      title: "Monthly Rent",
      documentA: "₹25,000 per month",
      documentB: "₹30,000 per month",
      impact: "High",
      pageA: 4,
      pageB: 4,
    },
    {
      title: "Security Deposit",
      documentA: "₹50,000",
      documentB: "₹75,000",
      impact: "High",
      pageA: 5,
      pageB: 5,
    },
    {
      title: "Termination Notice",
      documentA: "30 days written notice",
      documentB: "60 days written notice",
      impact: "Medium",
      pageA: 7,
      pageB: 7,
    },
    {
      title: "Minor Repairs",
      documentA: "Tenant responsible for minor repairs.",
      documentB: "Landlord responsible for repairs below the specified threshold.",
      impact: "Medium",
      pageA: 6,
      pageB: 6,
    },
    {
      title: "Permitted Use",
      documentA: "Residential use only.",
      documentB: "Residential use with limited home-office activity permitted.",
      impact: "Low",
      pageA: 3,
      pageB: 3,
    },
  ],

  recommendation:
    "The most significant differences are the higher rent and security deposit in Document B and its longer termination notice period. These provisions should be reviewed carefully before selecting one agreement over the other.",
};

const documents = [
  "Rental Agreement.pdf",
  "Employment Contract.pdf",
  "Non-Disclosure Agreement.pdf",
];

export default function ComparePage() {
  const [documentA, setDocumentA] =
    useState("Rental Agreement.pdf");

  const [documentB, setDocumentB] =
    useState("Rental Agreement - Updated.pdf");

  const [hasCompared, setHasCompared] = useState(true);

  const handleCompare = () => {
    setHasCompared(true);
  };

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
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>≡</span>
              Summaries
            </a>

            <a
              href="/compare"
              className="flex items-center gap-3 rounded-xl bg-[#b9788a]/15 px-3 py-3 text-sm font-medium text-[#f4e7eb]"
            >
              <span className="text-[#d6a0ae]">⇄</span>
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
              Compare legal documents and quickly identify
              important changes.
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
              Compare Documents
            </h1>
          </div>

          <a
            href="/documents"
            className="rounded-lg border border-[#d6a0ae]/15 bg-[#171014] px-3 py-2 text-xs font-medium text-[#ead6dc]/55 transition hover:border-[#d6a0ae]/30 hover:text-white"
          >
            View documents
          </a>
        </header>

        <div className="mx-auto max-w-6xl px-5 py-7 sm:px-8">
          {/* =================================================
              INTRO
          ================================================== */}

          <section className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                AI-powered comparison
              </p>

              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Find important differences faster.
              </h2>

              <p className="mt-2 max-w-2xl text-xs leading-6 text-[#ead6dc]/35">
                Select two legal documents and compare their
                clauses, terms, obligations, and other important
                provisions.
              </p>
            </div>

            {/* Document selectors */}

            <div className="mt-7 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
              <div>
                <label
                  htmlFor="document-a"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#ead6dc]/35"
                >
                  Document A
                </label>

                <select
                  id="document-a"
                  value={documentA}
                  onChange={(event) =>
                    setDocumentA(event.target.value)
                  }
                  className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#21151a] px-4 py-3 text-xs text-[#ead6dc]/75 outline-none transition focus:border-[#b9788a]/50"
                >
                  {documents.map((document) => (
                    <option key={document} value={document}>
                      {document}
                    </option>
                  ))}
                </select>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#d6a0ae]/15 bg-[#21151a] text-sm text-[#d6a0ae] md:flex">
                ⇄
              </div>

              <div>
                <label
                  htmlFor="document-b"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#ead6dc]/35"
                >
                  Document B
                </label>

                <select
                  id="document-b"
                  value={documentB}
                  onChange={(event) =>
                    setDocumentB(event.target.value)
                  }
                  className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#21151a] px-4 py-3 text-xs text-[#ead6dc]/75 outline-none transition focus:border-[#b9788a]/50"
                >
                  <option value="Rental Agreement - Updated.pdf">
                    Rental Agreement - Updated.pdf
                  </option>

                  {documents.map((document) => (
                    <option key={document} value={document}>
                      {document}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5 flex justify-center md:justify-end">
              <button
                onClick={handleCompare}
                className="rounded-xl bg-[#c78396] px-6 py-3 text-xs font-semibold text-[#1a0d12] shadow-lg shadow-[#c78396]/10 transition hover:bg-[#d994a7] active:scale-[0.98]"
              >
                Compare Documents →
              </button>
            </div>
          </section>

          {/* =================================================
              RESULTS
          ================================================== */}

          {hasCompared && (
            <>
              {/* Comparison header */}

              <section className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#ead6dc]/25">
                    Document A
                  </p>

                  <p className="mt-2 text-xs font-semibold text-[#ead6dc]/75">
                    {documentA}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#ead6dc]/25">
                    Document B
                  </p>

                  <p className="mt-2 text-xs font-semibold text-[#ead6dc]/75">
                    {documentB}
                  </p>
                </div>
              </section>

              {/* AI overview */}

              <section className="mt-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b9788a]/15 text-[#d6a0ae]">
                    ✦
                  </div>

                  <div>
                    <p className="text-xs font-semibold">
                      AI comparison overview
                    </p>

                    <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                      High-level analysis of the two documents
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-5">
                  <p className="text-xs leading-7 text-[#ead6dc]/60">
                    {comparisonData.overview}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#b9788a]/10 px-3 py-1.5 text-[8px] font-medium text-[#d6a0ae]">
                    AI generated
                  </span>

                  <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-[8px] font-medium text-emerald-300">
                    Document grounded
                  </span>

                  <span className="rounded-full bg-amber-400/10 px-3 py-1.5 text-[8px] font-medium text-amber-300">
                    5 differences found
                  </span>
                </div>
              </section>

              {/* =================================================
                  DIFFERENCES
              ================================================== */}

              <section className="mt-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold">
                      Important differences
                    </p>

                    <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                      Terms that differ between the selected
                      documents
                    </p>
                  </div>

                  <span className="text-[9px] text-[#d6a0ae]/60">
                    {comparisonData.differences.length} differences
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {comparisonData.differences.map((difference, index) => (
                    <div
                      key={difference.title}
                      className="rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-5"
                    >
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#b9788a]/10 text-[9px] font-semibold text-[#d6a0ae]">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div>
                            <h3 className="text-xs font-semibold text-[#ead6dc]/75">
                              {difference.title}
                            </h3>

                            <p className="mt-1 text-[8px] text-[#ead6dc]/25">
                              Different provision detected
                            </p>
                          </div>
                        </div>

                        <span
                          className={`w-fit rounded-full px-3 py-1.5 text-[8px] font-semibold ${
                            difference.impact === "High"
                              ? "bg-red-400/10 text-red-300"
                              : difference.impact === "Medium"
                                ? "bg-amber-400/10 text-amber-300"
                                : "bg-emerald-400/10 text-emerald-300"
                          }`}
                        >
                          {difference.impact} impact
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3 md:grid-cols-2">
                        <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#171014] p-4">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#d6a0ae]/50">
                            {documentA}
                          </p>

                          <p className="mt-2 text-[10px] leading-5 text-[#ead6dc]/55">
                            {difference.documentA}
                          </p>

                          <p className="mt-3 text-[8px] text-[#ead6dc]/25">
                            Source: Page {difference.pageA}
                          </p>
                        </div>

                        <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#171014] p-4">
                          <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#d6a0ae]/50">
                            {documentB}
                          </p>

                          <p className="mt-2 text-[10px] leading-5 text-[#ead6dc]/55">
                            {difference.documentB}
                          </p>

                          <p className="mt-3 text-[8px] text-[#ead6dc]/25">
                            Source: Page {difference.pageB}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-3">
                        <a
                          href={`/documents/${difference.pageA}`}
                          className="text-[9px] font-medium text-[#d6a0ae] transition hover:text-[#e6b7c3]"
                        >
                          View Document A →
                        </a>

                        <a
                          href={`/documents/${difference.pageB}`}
                          className="text-[9px] font-medium text-[#d6a0ae] transition hover:text-[#e6b7c3]"
                        >
                          View Document B →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  COMMON CLAUSES
              ================================================== */}

              <section className="mt-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
                <div>
                  <p className="text-xs font-semibold">
                    Common clauses
                  </p>

                  <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                    Provisions shared by both documents
                  </p>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {comparisonData.commonClauses.map((clause) => (
                    <div
                      key={clause}
                      className="flex gap-3 rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-4"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-[10px] text-emerald-300">
                        ✓
                      </div>

                      <p className="text-[10px] leading-5 text-[#ead6dc]/45">
                        {clause}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* =================================================
                  RECOMMENDATION
              ================================================== */}

              <section className="mt-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b9788a]/15 text-[#d6a0ae]">
                    !
                  </div>

                  <div>
                    <p className="text-xs font-semibold">
                      Review recommendation
                    </p>

                    <p className="mt-2 text-xs leading-6 text-[#ead6dc]/45">
                      {comparisonData.recommendation}
                    </p>
                  </div>
                </div>
              </section>

              {/* =================================================
                  DISCLAIMER
              ================================================== */}

              <section className="mt-5 rounded-xl border border-[#d6a0ae]/10 bg-[#171014] px-5 py-4">
                <div className="flex gap-3">
                  <div className="shrink-0 text-sm text-[#d6a0ae]/60">
                    ⓘ
                  </div>

                  <p className="text-[9px] leading-5 text-[#ead6dc]/20">
                    This comparison is generated for
                    informational purposes and is not legal
                    advice. Users should review the original
                    documents before making legal, financial, or
                    contractual decisions. This prototype
                    currently uses mock comparison data.
                  </p>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </main>
  );
}