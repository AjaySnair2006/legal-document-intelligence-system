"use client";

import { useState } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

type Citation = {
  document: string;
  page: number;
  section: string;
  excerpt: string;
};

const mockDocuments = [
  "Rental Agreement.pdf",
  "Employment Contract.pdf",
  "Non-Disclosure Agreement.pdf",
];

const mockCitations: Citation[] = [
  {
    document: "Rental Agreement.pdf",
    page: 2,
    section: "Parties and Premises",
    excerpt:
      "The Tenant agrees to maintain the premises in a clean and reasonable condition throughout the tenancy.",
  },
  {
    document: "Rental Agreement.pdf",
    page: 4,
    section: "Rent and Payment",
    excerpt:
      "The Tenant shall pay the agreed monthly rent to the Landlord on or before the due date.",
  },
];

const suggestedQuestions = [
  "What are the tenant's obligations?",
  "What is the payment schedule?",
  "What does the agreement say about the security deposit?",
];

export default function ChatPage() {
  const [selectedDocument, setSelectedDocument] = useState(
    "Rental Agreement.pdf",
  );

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState<Message[]>([]);

  const [citations, setCitations] = useState<Citation[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = (questionText: string) => {
    const trimmedQuestion = questionText.trim();

    if (!trimmedQuestion || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      text: trimmedQuestion,
    };

    setMessages((current) => [...current, userMessage]);
    setQuestion("");
    setIsLoading(true);

    /*
     * MOCK RESPONSE
     *
     * Later this section will be replaced with a real
     * fetch() request to Ajay's FastAPI/RAG backend.
     */
    setTimeout(() => {
      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        text:
          "Based on the selected document, the tenant is responsible for following the terms of the rental agreement, maintaining the premises in a reasonable condition, paying rent according to the agreed schedule, and complying with the conditions specified in the agreement.",
      };

      setMessages((current) => [...current, assistantMessage]);
      setCitations(mockCitations);
      setIsLoading(false);
    }, 900);
  };

  const handleSubmit = () => {
    askQuestion(question);
  };

  const clearChat = () => {
    setMessages([]);
    setCitations([]);
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
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#ead6dc]/55 transition hover:bg-[#1d1418] hover:text-white"
            >
              <span>▤</span>
              Documents
            </a>

            <a
              href="/chat"
              className="flex items-center gap-3 rounded-xl bg-[#b9788a]/15 px-3 py-3 text-sm font-medium text-[#f4e7eb]"
            >
              <span className="text-[#d6a0ae]">◌</span>
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

        {/* Sidebar bottom */}

        <div className="border-t border-[#d6a0ae]/10 p-4">
          <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#171014] p-4">
            <p className="text-xs font-medium text-[#f4e7eb]">
              RAG Assistant
            </p>

            <p className="mt-1 text-[11px] leading-5 text-[#ead6dc]/40">
              Ask questions and receive answers with document
              citations.
            </p>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN AREA
      ====================================================== */}

      <div className="lg:pl-64">
        {/* Header */}

        <header className="sticky top-0 z-30 flex min-h-20 items-center justify-between gap-4 border-b border-[#d6a0ae]/10 bg-[#120d10]/95 px-5 py-3 backdrop-blur-xl sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#d6a0ae]/60">
              Workspace
            </p>

            <h1 className="mt-1 text-lg font-semibold">
              AI Legal Assistant
            </h1>
          </div>

          <button
            type="button"
            onClick={clearChat}
            disabled={messages.length === 0}
            className="rounded-lg border border-[#d6a0ae]/15 bg-[#171014] px-3 py-2 text-xs font-medium text-[#ead6dc]/55 transition hover:border-[#d6a0ae]/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            Clear chat
          </button>
        </header>

        {/* Content */}

        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">
          {/* =================================================
              DOCUMENT SELECTOR
          ================================================== */}

          <section className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                  Ask your documents
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  What would you like to know?
                </h2>

                <p className="mt-2 max-w-xl text-xs leading-5 text-[#ead6dc]/35">
                  Select a legal document and ask questions about
                  its contents. The AI will provide an answer along
                  with supporting document references.
                </p>
              </div>

              <div className="w-full lg:w-72">
                <label
                  htmlFor="document"
                  className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-[#ead6dc]/35"
                >
                  Selected document
                </label>

                <select
                  id="document"
                  value={selectedDocument}
                  onChange={(event) =>
                    setSelectedDocument(event.target.value)
                  }
                  className="w-full rounded-xl border border-[#d6a0ae]/15 bg-[#21151a] px-4 py-3 text-xs text-[#ead6dc]/75 outline-none transition focus:border-[#b9788a]/50"
                >
                  {mockDocuments.map((document) => (
                    <option key={document} value={document}>
                      {document}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* =================================================
              CHAT + SOURCES
          ================================================== */}

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
            {/* Chat panel */}

            <section className="flex min-h-[650px] flex-col overflow-hidden rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]">
              {/* Chat header */}

              <div className="flex items-center justify-between border-b border-[#d6a0ae]/10 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b9788a]/15 text-[#d6a0ae]">
                    ✦
                  </div>

                  <div>
                    <p className="text-xs font-semibold">
                      LegalAI Assistant
                    </p>

                    <p className="mt-0.5 text-[9px] text-[#ead6dc]/25">
                      Document-grounded answers
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-[9px] font-medium text-emerald-300">
                  ● Ready
                </span>
              </div>

              {/* Messages */}

              <div className="flex-1 overflow-y-auto p-5">
                {messages.length === 0 ? (
                  <div className="flex min-h-[480px] items-center justify-center">
                    <div className="max-w-md text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#d6a0ae]/10 bg-[#21151a] text-2xl text-[#d6a0ae]">
                        ✦
                      </div>

                      <h3 className="mt-5 text-lg font-semibold">
                        Ask your first question
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#ead6dc]/30">
                        Ask something about{" "}
                        <span className="text-[#d6a0ae]">
                          {selectedDocument}
                        </span>{" "}
                        and the assistant will provide a
                        document-grounded answer.
                      </p>

                      <div className="mt-6 space-y-2">
                        {suggestedQuestions.map(
                          (suggestion) => (
                            <button
                              key={suggestion}
                              type="button"
                              onClick={() =>
                                askQuestion(suggestion)
                              }
                              className="block w-full rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] px-4 py-3 text-left text-[10px] text-[#ead6dc]/45 transition hover:border-[#d6a0ae]/25 hover:bg-[#28191f] hover:text-[#f4e7eb]"
                            >
                              {suggestion}
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#b9788a]/15 text-sm text-[#d6a0ae]">
                            ✦
                          </div>
                        )}

                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                            message.role === "user"
                              ? "bg-[#b9788a] text-white"
                              : "border border-[#d6a0ae]/10 bg-[#21151a] text-[#ead6dc]/70"
                          }`}
                        >
                          <p className="text-xs leading-6">
                            {message.text}
                          </p>

                          {message.role === "assistant" && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              <span className="rounded-full bg-[#b9788a]/10 px-2.5 py-1 text-[8px] text-[#d6a0ae]">
                                AI generated
                              </span>

                              <span className="rounded-full bg-[#b9788a]/10 px-2.5 py-1 text-[8px] text-[#d6a0ae]">
                                Sources available
                              </span>
                            </div>
                          )}
                        </div>

                        {message.role === "user" && (
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#282024] text-xs text-[#ead6dc]/60">
                            R
                          </div>
                        )}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#b9788a]/15 text-sm text-[#d6a0ae]">
                          ✦
                        </div>

                        <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#21151a] px-4 py-3">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d6a0ae]" />
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d6a0ae] [animation-delay:150ms]" />
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d6a0ae] [animation-delay:300ms]" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Input */}

              <div className="border-t border-[#d6a0ae]/10 p-4">
                <div className="rounded-2xl border border-[#d6a0ae]/15 bg-[#0f0b0d] p-2 transition focus-within:border-[#b9788a]/40">
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
                        handleSubmit();
                      }
                    }}
                    placeholder={`Ask something about ${selectedDocument}...`}
                    rows={3}
                    className="w-full resize-none bg-transparent px-3 py-2 text-xs leading-6 text-white outline-none placeholder:text-[#ead6dc]/20"
                  />

                  <div className="flex items-center justify-between px-2 pb-1 pt-2">
                    <span className="text-[9px] text-[#ead6dc]/20">
                      Enter to send · Shift + Enter for new line
                    </span>

                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!question.trim() || isLoading}
                      className="rounded-xl bg-[#b9788a] px-4 py-2.5 text-[10px] font-semibold text-white transition hover:bg-[#c48798] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      {isLoading ? "Thinking..." : "Send ↑"}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                SOURCES PANEL
            ================================================== */}

            <aside className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]">
              <div className="border-b border-[#d6a0ae]/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">
                      Sources
                    </p>

                    <p className="mt-1 text-[9px] text-[#ead6dc]/25">
                      Supporting document references
                    </p>
                  </div>

                  {citations.length > 0 && (
                    <span className="rounded-full bg-[#b9788a]/10 px-2.5 py-1 text-[8px] text-[#d6a0ae]">
                      {citations.length} found
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                {citations.length === 0 ? (
                  <div className="flex min-h-[420px] items-center justify-center text-center">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#21151a] text-lg text-[#d6a0ae]/50">
                        ◇
                      </div>

                      <p className="mt-4 text-xs font-medium text-[#ead6dc]/50">
                        No sources yet
                      </p>

                      <p className="mt-2 text-[10px] leading-5 text-[#ead6dc]/20">
                        Ask a question to see the document
                        pages supporting the AI answer.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {citations.map((citation, index) => (
                      <a
                        href={`/documents/${citation.page}`}
                        key={`${citation.page}-${index}`}
                        className="block rounded-xl border border-[#d6a0ae]/10 bg-[#21151a] p-4 transition hover:border-[#d6a0ae]/30 hover:bg-[#28191f]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b9788a]/10 text-[9px] font-bold text-[#d6a0ae]">
                              PDF
                            </div>

                            <div>
                              <p className="max-w-[150px] truncate text-[9px] font-medium text-[#ead6dc]/60">
                                {citation.document}
                              </p>

                              <p className="mt-0.5 text-[8px] text-[#d6a0ae]">
                                Page {citation.page}
                              </p>
                            </div>
                          </div>

                          <span className="text-[9px] text-[#ead6dc]/25">
                            ↗
                          </span>
                        </div>

                        <p className="mt-3 text-[10px] font-medium text-[#ead6dc]/60">
                          {citation.section}
                        </p>

                        <p className="mt-2 text-[9px] leading-5 text-[#ead6dc]/25">
                          {citation.excerpt}
                        </p>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          </div>

          {/* =================================================
              DISCLAIMER
          ================================================== */}

          <div className="mt-5 rounded-xl border border-[#d6a0ae]/10 bg-[#171014] px-4 py-3">
            <p className="text-center text-[9px] leading-5 text-[#ead6dc]/20">
              AI-generated responses are for informational
              purposes and should be reviewed against the
              original legal document. This prototype currently
              uses mock AI responses.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}