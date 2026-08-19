"use client";

import { useState } from "react";

const mockPages = [
  {
    page: 1,
    title: "RENTAL AGREEMENT",
    paragraphs: [
      "This Rental Agreement is entered into between the Landlord and the Tenant for the rental of the premises described in this agreement.",
      "The parties agree that the Tenant shall occupy the premises subject to the terms and conditions contained herein.",
    ],
  },
  {
    page: 2,
    title: "1. PARTIES AND PREMISES",
    paragraphs: [
      "The Landlord agrees to rent the premises to the Tenant for residential purposes only.",
      "The Tenant agrees to maintain the premises in a clean and reasonable condition throughout the tenancy.",
      "The premises shall not be used for any unlawful purpose or activity.",
    ],
  },
  {
    page: 3,
    title: "2. TERM OF TENANCY",
    paragraphs: [
      "The term of this agreement shall commence on the commencement date specified by the parties.",
      "Unless otherwise agreed in writing, the tenancy shall continue according to the duration specified in the agreement.",
    ],
  },
  {
    page: 4,
    title: "3. RENT AND PAYMENT",
    paragraphs: [
      "The Tenant shall pay the agreed monthly rent to the Landlord on or before the due date.",
      "Any applicable late payment charges shall be governed by the terms of this agreement.",
      "The Landlord shall provide reasonable notice for any changes to the payment arrangements.",
    ],
  },
  {
    page: 5,
    title: "4. SECURITY DEPOSIT",
    paragraphs: [
      "The Tenant shall provide a security deposit as specified by the parties.",
      "The security deposit may be used in accordance with applicable law for unpaid amounts or damage beyond ordinary wear and tear.",
    ],
  },
];

const mockCitations = [
  {
    page: 1,
    section: "Introduction",
    text: "The agreement establishes the relationship between the Landlord and Tenant.",
  },
  {
    page: 2,
    section: "Parties and Premises",
    text: "The tenant may use the premises for residential purposes.",
  },
  {
    page: 4,
    section: "Rent and Payment",
    text: "Monthly rent must be paid according to the agreed payment schedule.",
  },
];

export default function DocumentViewerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [question, setQuestion] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    {
      role: "user" | "ai";
      message: string;
    }[]
  >([]);

  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const page = mockPages[currentPage - 1];

  const handleAskQuestion = () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion) {
      return;
    }

    setChatMessages((messages) => [
      ...messages,
      {
        role: "user",
        message: trimmedQuestion,
      },
      {
        role: "ai",
        message:
          "Based on the uploaded document, the relevant information appears in the rental terms. In the real system, this response will come from the RAG pipeline and will include source and page citations.",
      },
    ]);

    setQuestion("");
    setIsChatOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#120d10] text-white">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 flex-col border-r border-[#d6a0ae]/10 bg-[#0f0b0d] lg:flex">
        {/* Logo */}
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

        {/* Navigation */}
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
              className="flex items-center gap-3 rounded-xl bg-[#b9788a]/15 px-3 py-3 text-sm font-medium text-[#f4e7eb]"
            >
              <span className="text-[#d6a0ae]">▤</span>
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
              AI-ready document
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#ead6dc]/40">
              Ask questions about this document or generate a
              summary.
            </p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between gap-4 border-b border-[#d6a0ae]/10 bg-[#120d10]/95 px-5 py-3 backdrop-blur-xl sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <a
              href="/documents"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#d6a0ae]/10 bg-[#171014] text-[#ead6dc]/60 transition hover:border-[#d6a0ae]/30 hover:text-white"
              title="Back to documents"
            >
              ←
            </a>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                Rental Agreement.pdf
              </p>

              <p className="mt-0.5 text-[10px] text-[#ead6dc]/35">
                PDF · 18 pages · Processed
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSummaryOpen(true)}
              className="hidden rounded-lg border border-[#d6a0ae]/15 bg-[#171014] px-3 py-2 text-xs font-medium text-[#ead6dc]/65 transition hover:border-[#d6a0ae]/30 hover:text-white sm:block"
            >
              Summary
            </button>

            <a
              href="/compare"
              className="hidden rounded-lg border border-[#d6a0ae]/15 bg-[#171014] px-3 py-2 text-xs font-medium text-[#ead6dc]/65 transition hover:border-[#d6a0ae]/30 hover:text-white sm:block"
            >
              Compare
            </a>
          </div>
        </header>

        {/* =================================================
            VIEWER LAYOUT
        ================================================== */}
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          {/* Document information */}
          <section className="mb-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b9788a]/10 text-xs font-bold text-[#d6a0ae]">
                  PDF
                </div>

                <div>
                  <h1 className="text-sm font-semibold">
                    Rental Agreement
                  </h1>

                  <p className="mt-1 text-[11px] text-[#ead6dc]/35">
                    Uploaded document · Ready for AI analysis
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-[10px] font-medium text-emerald-300">
                  ● Processed
                </span>

                <span className="rounded-full bg-[#b9788a]/10 px-3 py-1.5 text-[10px] font-medium text-[#d6a0ae]">
                  18 pages
                </span>

                <span className="rounded-full bg-[#b9788a]/10 px-3 py-1.5 text-[10px] font-medium text-[#d6a0ae]">
                  2.4 MB
                </span>
              </div>
            </div>
          </section>

          {/* Viewer */}
          <div className="grid gap-5 xl:grid-cols-[220px_minmax(0,1fr)_280px]">
            {/* =================================================
                LEFT: PAGE NAVIGATION
            ================================================== */}
            <aside className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold">
                  Pages
                </p>

                <span className="text-[10px] text-[#ead6dc]/30">
                  18 total
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {mockPages.map((item) => (
                  <button
                    type="button"
                    key={item.page}
                    onClick={() =>
                      setCurrentPage(item.page)
                    }
                    className={`flex w-full items-center gap-3 rounded-xl border p-2 text-left transition ${
                      currentPage === item.page
                        ? "border-[#d6a0ae]/30 bg-[#b9788a]/15"
                        : "border-transparent hover:border-[#d6a0ae]/10 hover:bg-[#21151a]"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-9 shrink-0 items-center justify-center rounded-md border text-[9px] font-bold ${
                        currentPage === item.page
                          ? "border-[#d6a0ae]/30 bg-[#b9788a]/10 text-[#d6a0ae]"
                          : "border-[#d6a0ae]/10 bg-[#0f0b0d] text-[#ead6dc]/30"
                      }`}
                    >
                      {item.page}
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`text-[10px] font-medium ${
                          currentPage === item.page
                            ? "text-[#f4e7eb]"
                            : "text-[#ead6dc]/45"
                        }`}
                      >
                        Page {item.page}
                      </p>

                      <p className="mt-1 truncate text-[9px] text-[#ead6dc]/25">
                        {item.title}
                      </p>
                    </div>
                  </button>
                ))}

                {/* Remaining pages */}
                <div className="rounded-xl border border-dashed border-[#d6a0ae]/10 px-3 py-3 text-center">
                  <p className="text-[10px] text-[#ead6dc]/25">
                    Pages 6–18
                  </p>

                  <p className="mt-1 text-[9px] text-[#ead6dc]/15">
                    Available in the full document viewer
                  </p>
                </div>
              </div>
            </aside>

            {/* =================================================
                CENTER: DOCUMENT
            ================================================== */}
            <section className="min-w-0 rounded-2xl border border-[#d6a0ae]/10 bg-[#0f0b0d]">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#d6a0ae]/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(1, page - 1),
                      )
                    }
                    disabled={currentPage === 1}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d6a0ae]/10 bg-[#171014] text-xs text-[#ead6dc]/60 transition hover:border-[#d6a0ae]/25 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ←
                  </button>

                  <span className="rounded-lg bg-[#171014] px-3 py-2 text-[10px] text-[#ead6dc]/50">
                    Page {currentPage} of 18
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(5, page + 1),
                      )
                    }
                    disabled={currentPage === 5}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d6a0ae]/10 bg-[#171014] text-xs text-[#ead6dc]/60 transition hover:border-[#d6a0ae]/25 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    →
                  </button>
                </div>

                <div className="text-[10px] text-[#ead6dc]/25">
                  Document preview
                </div>
              </div>

              {/* Paper */}
              <div className="max-h-[720px] overflow-y-auto p-5 sm:p-8">
                <article className="mx-auto min-h-[850px] max-w-2xl bg-[#f5f0ec] px-8 py-12 text-[#282023] shadow-2xl sm:px-14">
                  <div className="border-b border-[#282023]/20 pb-5">
                    <p className="text-center text-[9px] uppercase tracking-[0.25em] text-[#282023]/50">
                      Legal Document
                    </p>

                    <h2 className="mt-4 text-center text-xl font-bold tracking-wide">
                      {page.title}
                    </h2>

                    <p className="mt-2 text-center text-[9px] text-[#282023]/45">
                      Page {page.page}
                    </p>
                  </div>

                  <div className="mt-10 space-y-6">
                    {page.paragraphs.map(
                      (paragraph, index) => (
                        <p
                          key={index}
                          className="text-sm leading-8 text-[#282023]/80"
                        >
                          {paragraph}
                        </p>
                      ),
                    )}
                  </div>

                  <div className="mt-20 border-t border-[#282023]/10 pt-4">
                    <p className="text-center text-[9px] text-[#282023]/40">
                      Rental Agreement · Page {page.page}
                    </p>
                  </div>
                </article>
              </div>
            </section>

            {/* =================================================
                RIGHT: AI PANEL
            ================================================== */}
            <aside className="flex min-h-[500px] flex-col rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]">
              <div className="border-b border-[#d6a0ae]/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#b9788a]/15 text-lg text-[#d6a0ae]">
                    ✦
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      AI Assistant
                    </p>

                    <p className="text-[10px] text-[#ead6dc]/30">
                      Ask about this document
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat */}
              <div className="flex-1 overflow-y-auto p-5">
                {chatMessages.length === 0 ? (
                  <div>
                    <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-4">
                      <p className="text-xs font-medium text-[#f4e7eb]">
                        What can I ask?
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-[#ead6dc]/40">
                        Ask questions about rent, parties,
                        obligations, termination, or any other
                        part of the document.
                      </p>
                    </div>

                    <div className="mt-4 space-y-2">
                      <button
                        type="button"
                        onClick={() =>
                          setQuestion(
                            "What is the monthly rent?",
                          )
                        }
                        className="w-full rounded-lg border border-[#d6a0ae]/10 px-3 py-2.5 text-left text-[10px] text-[#ead6dc]/45 transition hover:bg-[#21151a] hover:text-white"
                      >
                        What is the monthly rent?
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setQuestion(
                            "What are the tenant's obligations?",
                          )
                        }
                        className="w-full rounded-lg border border-[#d6a0ae]/10 px-3 py-2.5 text-left text-[10px] text-[#ead6dc]/45 transition hover:bg-[#21151a] hover:text-white"
                      >
                        What are the tenant&apos;s obligations?
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setQuestion(
                            "What does the agreement say about the security deposit?",
                          )
                        }
                        className="w-full rounded-lg border border-[#d6a0ae]/10 px-3 py-2.5 text-left text-[10px] text-[#ead6dc]/45 transition hover:bg-[#21151a] hover:text-white"
                      >
                        Explain the security deposit.
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {chatMessages.map(
                      (message, index) => (
                        <div
                          key={index}
                          className={
                            message.role === "user"
                              ? "ml-5"
                              : "mr-5"
                          }
                        >
                          <div
                            className={`rounded-xl p-3 ${
                              message.role === "user"
                                ? "bg-[#b9788a]/15"
                                : "bg-[#21151a]"
                            }`}
                          >
                            <p className="text-[11px] leading-5 text-[#ead6dc]/70">
                              {message.message}
                            </p>
                          </div>

                          {message.role === "ai" && (
                            <div className="mt-2 flex gap-2">
                              <span className="rounded-full bg-[#b9788a]/10 px-2 py-1 text-[8px] text-[#d6a0ae]">
                                Source
                              </span>

                              <span className="rounded-full bg-[#b9788a]/10 px-2 py-1 text-[8px] text-[#d6a0ae]">
                                Page {currentPage}
                              </span>
                            </div>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>

              {/* Ask input */}
              <div className="border-t border-[#d6a0ae]/10 p-4">
                <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#0f0b0d] p-2 focus-within:border-[#b9788a]/40">
                  <textarea
                    value={question}
                    onChange={(event) =>
                      setQuestion(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" &&
                        !event.shiftKey
                      ) {
                        event.preventDefault();
                        handleAskQuestion();
                      }
                    }}
                    placeholder="Ask a question..."
                    rows={2}
                    className="w-full resize-none bg-transparent px-2 py-1 text-[11px] leading-5 text-white outline-none placeholder:text-[#ead6dc]/25"
                  />

                  <div className="flex items-center justify-between px-1 pt-2">
                    <span className="text-[8px] text-[#ead6dc]/20">
                      Enter to send
                    </span>

                    <button
                      type="button"
                      onClick={handleAskQuestion}
                      disabled={!question.trim()}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b9788a] text-xs font-bold text-white transition hover:bg-[#c48798] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      ↑
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* =================================================
              CITATIONS
          ================================================== */}
          <section className="mt-6 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                  Sources
                </p>

                <h2 className="mt-2 text-lg font-semibold">
                  Document references
                </h2>
              </div>

              <span className="text-[10px] text-[#ead6dc]/25">
                Mock RAG citations
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {mockCitations.map((citation) => (
                <button
                  type="button"
                  key={`${citation.page}-${citation.section}`}
                  onClick={() =>
                    setCurrentPage(citation.page)
                  }
                  className="rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-4 text-left transition hover:border-[#d6a0ae]/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#d6a0ae]">
                      Page {citation.page}
                    </span>

                    <span className="text-[9px] text-[#ead6dc]/25">
                      Open →
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-medium">
                    {citation.section}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-[#ead6dc]/35">
                    {citation.text}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* =================================================
              MOBILE ACTIONS
          ================================================== */}
          <section className="mt-6 grid gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => setIsSummaryOpen(true)}
              className="rounded-xl border border-[#d6a0ae]/15 bg-[#171014] px-4 py-3 text-xs font-medium text-[#ead6dc]/65"
            >
              Generate summary
            </button>

            <a
              href="/compare"
              className="rounded-xl border border-[#d6a0ae]/15 bg-[#171014] px-4 py-3 text-center text-xs font-medium text-[#ead6dc]/65"
            >
              Compare documents
            </a>
          </section>
        </div>
      </div>

      {/* =====================================================
          SUMMARY MODAL
      ====================================================== */}
      {isSummaryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm">
          <div className="max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-[#d6a0ae]/15 bg-[#171014] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                  AI Summary
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  Rental Agreement
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsSummaryOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#21151a] text-[#ead6dc]/50 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs font-semibold">
                  Overview
                </p>

                <p className="mt-2 text-[11px] leading-6 text-[#ead6dc]/45">
                  This rental agreement defines the
                  relationship between a landlord and tenant,
                  including the use of the premises, rental
                  obligations, payment terms, and security
                  deposit conditions.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Key points
                </p>

                <ul className="mt-3 space-y-2 text-[11px] leading-5 text-[#ead6dc]/45">
                  <li>
                    • The premises are intended for
                    residential use.
                  </li>

                  <li>
                    • Rent must be paid according to the
                    agreed schedule.
                  </li>

                  <li>
                    • A security deposit applies according
                    to the agreement.
                  </li>

                  <li>
                    • The tenant has obligations concerning
                    the maintenance and use of the premises.
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-4">
                <p className="text-[10px] font-medium text-[#d6a0ae]">
                  AI-generated summary
                </p>

                <p className="mt-1 text-[9px] leading-5 text-[#ead6dc]/30">
                  This is currently mock data. Later, this
                  section will display a summary generated by
                  your RAG/LLM backend.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSummaryOpen(false)}
              className="mt-6 w-full rounded-xl bg-[#b9788a] py-3 text-xs font-semibold text-white transition hover:bg-[#c48798]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}