"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";
import Sidebar from "@/components/Sidebar";

type DocumentStatus = "Processed" | "Processing" | "Failed";

type DocumentItem = {
  id: number;
  name: string;
  type: "PDF" | "DOCX";
  size: string;
  pages: number;
  status: DocumentStatus;
  updated: string;
};

const initialDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Rental Agreement.pdf",
    type: "PDF",
    size: "2.4 MB",
    pages: 18,
    status: "Processed",
    updated: "2 hours ago",
  },
  {
    id: 2,
    name: "Employment Contract.pdf",
    type: "PDF",
    size: "3.1 MB",
    pages: 24,
    status: "Processed",
    updated: "Yesterday",
  },
  {
    id: 3,
    name: "Service Agreement.docx",
    type: "DOCX",
    size: "1.8 MB",
    pages: 12,
    status: "Processed",
    updated: "2 days ago",
  },
  {
    id: 4,
    name: "Non Disclosure Agreement.pdf",
    type: "PDF",
    size: "1.2 MB",
    pages: 8,
    status: "Processing",
    updated: "3 days ago",
  },
];

export default function DocumentsPage() {
  const [documents, setDocuments] =
    useState<DocumentItem[]>(initialDocuments);

  const [search, setSearch] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleFiles = (files: FileList | File[]) => {
    const fileArray = Array.from(files);

    if (fileArray.length === 0) {
      return;
    }

    const validFiles = fileArray.filter((file) => {
      const extension = file.name.split(".").pop()?.toLowerCase();

      return extension === "pdf" || extension === "docx";
    });

    if (validFiles.length === 0) {
      setUploadMessage("Please upload a PDF or DOCX file.");
      return;
    }

    const newDocuments: DocumentItem[] = validFiles.map(
      (file, index) => {
        const extension =
          file.name.split(".").pop()?.toUpperCase();

        return {
          id: Date.now() + index,
          name: file.name,
          type: extension === "DOCX" ? "DOCX" : "PDF",
          size: formatFileSize(file.size),
          pages: 0,
          status: "Processing",
          updated: "Just now",
        };
      },
    );

    setDocuments((current) => [
      ...newDocuments,
      ...current,
    ]);

    setUploadMessage(
      `${validFiles.length} document${
        validFiles.length > 1 ? "s" : ""
      } added for processing.`,
    );

    /*
      MOCK UPLOAD

      Later this function will send the selected file
      to your teammate's FastAPI backend.

      Future flow:

      Browser
          ↓
      Next.js
          ↓
      FastAPI /upload
          ↓
      Document processing
          ↓
      RAG pipeline
          ↓
      PostgreSQL
    */
  };

  const handleFileInput = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files) {
      handleFiles(event.target.files);
    }

    event.target.value = "";
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    handleFiles(event.dataTransfer.files);
  };

  const deleteDocument = (id: number) => {
    const document = documents.find(
      (item) => item.id === id,
    );

    if (!document) {
      return;
    }

    const confirmed = window.confirm(
      `Delete "${document.name}"?`,
    );

    if (!confirmed) {
      return;
    }

    setDocuments((current) =>
      current.filter((item) => item.id !== id),
    );
  };

  const openDocument = (document: DocumentItem) => {
    alert(
      `Opening ${document.name}\n\nDocument viewer will be connected later.`,
    );
  };

  return (
    <main className="min-h-screen bg-[#120d10] text-white">
      {/* Reusable sidebar */}
      <Sidebar />

      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#d6a0ae]/10 bg-[#120d10]/95 px-5 backdrop-blur-xl lg:hidden">
        <a href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#b9788a]/20">
            ⚖
          </div>

          <span className="font-semibold">
            LegalAI
          </span>
        </a>

        <a
          href="/dashboard"
          className="text-xs text-[#d6a0ae]"
        >
          Dashboard
        </a>
      </header>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:py-10">
          {/* Header */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                Workspace
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight">
                Your documents
              </h1>

              <p className="mt-2 max-w-xl text-sm leading-6 text-[#ead6dc]/45">
                Upload, organize, and prepare your legal
                documents for AI-powered analysis.
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="rounded-xl bg-[#b9788a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b9788a]/20 transition hover:bg-[#c48798]"
            >
              + Upload document
            </button>
          </div>

          {/* Hidden file input */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            multiple
            onChange={handleFileInput}
            className="hidden"
          />

          {/* Upload area */}
          <section className="mt-8">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative overflow-hidden rounded-3xl border-2 border-dashed p-8 text-center transition sm:p-12 ${
                isDragging
                  ? "border-[#d6a0ae] bg-[#b9788a]/15"
                  : "border-[#d6a0ae]/15 bg-[#171014] hover:border-[#d6a0ae]/30"
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#b9788a]/10 text-2xl text-[#d6a0ae]">
                ↑
              </div>

              <h2 className="mt-5 text-lg font-semibold">
                Drop your legal documents here
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#ead6dc]/40">
                Upload PDF or DOCX files to begin analyzing
                contracts, agreements, and other legal
                documents.
              </p>

              <button
                type="button"
                onClick={() =>
                  fileInputRef.current?.click()
                }
                className="mt-6 rounded-xl border border-[#d6a0ae]/20 bg-[#21151a] px-5 py-2.5 text-xs font-semibold text-[#f4e7eb] transition hover:border-[#d6a0ae]/40"
              >
                Choose files
              </button>

              <p className="mt-4 text-[10px] uppercase tracking-wider text-[#ead6dc]/25">
                Supported formats: PDF, DOCX
              </p>
            </div>
          </section>

          {/* Upload message */}
          {uploadMessage && (
            <div className="mt-4 flex items-center justify-between rounded-xl border border-[#d6a0ae]/15 bg-[#b9788a]/10 px-4 py-3">
              <p className="text-xs text-[#e7c2cb]">
                {uploadMessage}
              </p>

              <button
                type="button"
                onClick={() => setUploadMessage("")}
                className="text-xs text-[#ead6dc]/40 hover:text-white"
              >
                Dismiss
              </button>
            </div>
          )}

          {/* Document statistics */}
          <section className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-xs text-[#ead6dc]/35">
                Total documents
              </p>

              <p className="mt-2 text-2xl font-semibold">
                {documents.length}
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-xs text-[#ead6dc]/35">
                Processed
              </p>

              <p className="mt-2 text-2xl font-semibold">
                {
                  documents.filter(
                    (document) =>
                      document.status === "Processed",
                  ).length
                }
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a0ae]/10 bg-[#171014] p-5">
              <p className="text-xs text-[#ead6dc]/35">
                Processing
              </p>

              <p className="mt-2 text-2xl font-semibold">
                {
                  documents.filter(
                    (document) =>
                      document.status === "Processing",
                  ).length
                }
              </p>
            </div>
          </section>

          {/* Document library */}
          <section className="mt-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a0ae]">
                  Library
                </p>

                <h2 className="mt-2 text-xl font-semibold">
                  All documents
                </h2>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-72">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#ead6dc]/30">
                  ⌕
                </span>

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(event.target.value)
                  }
                  placeholder="Search documents..."
                  className="w-full rounded-xl border border-[#d6a0ae]/10 bg-[#171014] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-[#ead6dc]/25 focus:border-[#b9788a]/50"
                />
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]">
              {/* Desktop header */}
              <div className="hidden grid-cols-[1fr_110px_100px_120px_80px] gap-4 border-b border-[#d6a0ae]/10 px-5 py-3 text-[10px] font-semibold uppercase tracking-wider text-[#ead6dc]/30 lg:grid">
                <span>Document</span>
                <span>Size</span>
                <span>Pages</span>
                <span>Status</span>
                <span>Action</span>
              </div>

              {filteredDocuments.length === 0 ? (
                <div className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#b9788a]/10 text-xl text-[#d6a0ae]">
                    ⌕
                  </div>

                  <h3 className="mt-4 text-sm font-semibold">
                    No documents found
                  </h3>

                  <p className="mt-2 text-xs text-[#ead6dc]/35">
                    Try another search term or upload a
                    new document.
                  </p>
                </div>
              ) : (
                filteredDocuments.map((document) => (
                  <div
                    key={document.id}
                    className="border-b border-[#d6a0ae]/10 p-5 last:border-b-0 transition hover:bg-[#21151a]"
                  >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_110px_100px_120px_80px] lg:items-center lg:gap-4">
                      {/* Document */}
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[10px] font-bold ${
                            document.type === "PDF"
                              ? "bg-[#b9788a]/10 text-[#d6a0ae]"
                              : "bg-[#8c7180]/15 text-[#cdb4bd]"
                          }`}
                        >
                          {document.type}
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-[#f4e7eb]">
                            {document.name}
                          </p>

                          <p className="mt-1 text-[10px] text-[#ead6dc]/30">
                            Updated {document.updated}
                          </p>
                        </div>
                      </div>

                      {/* Mobile details */}
                      <div className="grid grid-cols-3 gap-3 lg:contents">
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#ead6dc]/25 lg:hidden">
                            Size
                          </p>

                          <p className="mt-1 text-xs text-[#ead6dc]/45 lg:mt-0">
                            {document.size}
                          </p>
                        </div>

                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#ead6dc]/25 lg:hidden">
                            Pages
                          </p>

                          <p className="mt-1 text-xs text-[#ead6dc]/45 lg:mt-0">
                            {document.pages === 0
                              ? "Processing"
                              : `${document.pages} pages`}
                          </p>
                        </div>

                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-[#ead6dc]/25 lg:hidden">
                            Status
                          </p>

                          <span
                            className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-medium lg:mt-0 ${
                              document.status ===
                              "Processed"
                                ? "bg-emerald-400/10 text-emerald-300"
                                : document.status ===
                                    "Processing"
                                  ? "bg-amber-400/10 text-amber-300"
                                  : "bg-red-400/10 text-red-300"
                            }`}
                          >
                            {document.status}
                          </span>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex items-center gap-2 lg:justify-end">
                        <button
                          type="button"
                          onClick={() =>
                            openDocument(document)
                          }
                          className="rounded-lg border border-[#d6a0ae]/15 bg-[#21151a] px-3 py-2 text-[10px] font-semibold text-[#d6a0ae] transition hover:border-[#d6a0ae]/35 hover:text-white"
                        >
                          Open
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            deleteDocument(document.id)
                          }
                          className="rounded-lg border border-red-300/10 px-3 py-2 text-[10px] font-medium text-red-300/60 transition hover:border-red-300/20 hover:text-red-300"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Information */}
          <section className="mt-10 rounded-2xl border border-[#d6a0ae]/10 bg-[#171014]/60 p-5">
            <div className="flex gap-3">
              <span className="mt-0.5 text-sm text-[#d6a0ae]">
                ⓘ
              </span>

              <div>
                <p className="text-xs font-medium text-[#f4e7eb]">
                  What happens after upload?
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#ead6dc]/35">
                  Your document will eventually be sent to the
                  AI processing service. The system will extract
                  its content, prepare it for retrieval, and
                  make it available for questions, summaries,
                  and document comparison.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <p className="mt-8 text-center text-[10px] leading-5 text-[#ead6dc]/25">
            LegalAI is an academic project designed to assist
            with legal document understanding. AI-generated
            information should not be considered professional
            legal advice.
          </p>
        </div>
      </div>
    </main>
  );
}

function formatFileSize(bytes: number) {
  if (bytes === 0) {
    return "0 Bytes";
  }

  const units = ["Bytes", "KB", "MB", "GB"];

  const index = Math.floor(
    Math.log(bytes) / Math.log(1024),
  );

  const value = bytes / Math.pow(1024, index);

  return `${value.toFixed(index === 0 ? 0 : 1)} ${
    units[index]
  }`;
}