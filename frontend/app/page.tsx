const features = [
  {
    icon: "◈",
    title: "Intelligent Analysis",
    description:
      "Understand complex legal documents with AI-powered analysis grounded in the documents you provide.",
  },
  {
    icon: "⌕",
    title: "Ask Your Documents",
    description:
      "Ask natural-language questions and receive answers with supporting document sources and page references.",
  },
  {
    icon: "⇄",
    title: "Compare Documents",
    description:
      "Compare agreements and identify important differences in clauses, payments, obligations, and terms.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload",
    description: "Upload a PDF or DOCX legal document.",
  },
  {
    number: "02",
    title: "Retrieve",
    description: "Relevant document content is retrieved for your question.",
  },
  {
    number: "03",
    title: "Understand",
    description: "The AI generates an answer grounded in the document.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#120d10] text-white">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative isolate overflow-hidden">
        {/* Pink gingham background */}
        <div
          className="absolute inset-0 -z-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/legal-bg.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-20 bg-[#120d10]/75" />

        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#120d10]/95 via-[#120d10]/75 to-[#120d10]/45" />

        {/* Soft pink glow */}
        <div className="pointer-events-none absolute left-1/3 top-[-200px] -z-10 h-[500px] w-[600px] rounded-full bg-[#b9788a]/20 blur-[140px]" />

        {/* Navbar */}
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d6a0ae]/30 bg-[#b9788a]/20 text-xl shadow-lg shadow-[#b9788a]/10">
              ⚖
            </div>

            <div>
              <p className="font-semibold tracking-tight">LegalAI</p>

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#d6a0ae]/70">
                Intelligence System
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm text-[#ead6dc]/70 md:flex">
            <a
              href="#features"
              className="transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-white"
            >
              How it works
            </a>

            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>
          </div>

          {/* Sign in */}
          <a
            href="/login"
            className="rounded-lg border border-[#d6a0ae]/30 bg-[#1d1418]/70 px-4 py-2 text-sm font-medium text-[#f4e7eb] backdrop-blur-sm transition hover:border-[#d6a0ae]/60 hover:bg-[#2a1b20]"
          >
            Sign in
          </a>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-16 lg:grid-cols-2 lg:px-8 lg:pb-36 lg:pt-24">
          {/* Left side */}
          <div>
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6a0ae]/30 bg-[#b9788a]/15 px-4 py-2 text-xs font-medium text-[#f1cbd5] backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d6a0ae]" />

              RAG-powered legal intelligence
            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Understand your

              <span className="block bg-gradient-to-r from-[#f5d5df] via-[#d99aaa] to-[#b9788a] bg-clip-text text-transparent">
                legal documents.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[#ead6dc]/75 sm:text-lg">
              Upload legal documents, ask questions in plain language,
              discover important clauses, and compare agreements with
              AI-assisted document intelligence.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* Primary button */}
              <a
                href="/register"
                className="rounded-xl bg-[#b9788a] px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#b9788a]/25 transition hover:bg-[#c48798] hover:shadow-[#b9788a]/35"
              >
                Start analyzing →
              </a>

              {/* Secondary button */}
              <a
                href="#how-it-works"
                className="rounded-xl border border-[#d6a0ae]/30 bg-[#1d1418]/50 px-6 py-3.5 text-center text-sm font-semibold text-[#f4e7eb] backdrop-blur-sm transition hover:border-[#d6a0ae]/60 hover:bg-[#2a1b20]"
              >
                See how it works
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-[#ead6dc]/55">
              <span>✓ Document-grounded answers</span>

              <span>✓ Source references</span>

              <span>✓ PDF & DOCX</span>
            </div>
          </div>

          {/* =================================================
              AI DOCUMENT PREVIEW
          ================================================== */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-[#b9788a]/20 blur-3xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-2xl border border-[#d6a0ae]/20 bg-[#171014]/90 shadow-2xl shadow-black/50 backdrop-blur-xl">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-[#d6a0ae]/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#b9788a]" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#d6a0ae]/70" />

                  <span className="h-2.5 w-2.5 rounded-full bg-[#e5c0ca]/70" />
                </div>

                <span className="text-xs text-[#ead6dc]/45">
                  AI Document Assistant
                </span>
              </div>

              {/* Document content */}
              <div className="p-6">
                {/* File */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b9788a]/15 text-xs font-bold text-[#e5b5c1]">
                    PDF
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#f4e7eb]">
                      Rental Agreement.pdf
                    </p>

                    <p className="text-xs text-[#ead6dc]/45">
                      18 pages • Processed
                    </p>
                  </div>
                </div>

                {/* Question */}
                <div className="rounded-xl border border-[#d6a0ae]/10 bg-[#0f0b0d]/80 p-5">
                  <p className="mb-3 text-xs uppercase tracking-wider text-[#ead6dc]/35">
                    Your question
                  </p>

                  <p className="text-sm leading-6 text-[#f4e7eb]">
                    What is the security deposit mentioned in this agreement?
                  </p>
                </div>

                {/* Answer */}
                <div className="mt-4 rounded-xl border border-[#d6a0ae]/15 bg-[#b9788a]/[0.06] p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#b9788a]/15 text-xs text-[#e5b5c1]">
                      AI
                    </span>

                    <span className="text-xs font-medium text-[#e5b5c1]">
                      Answer
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-[#ead6dc]/80">
                    The security deposit mentioned in the agreement is{" "}
                    <span className="font-semibold text-white">
                      ₹50,000
                    </span>
                    .
                  </p>

                  {/* Sources */}
                  <div className="mt-5 border-t border-[#d6a0ae]/10 pt-4">
                    <p className="mb-2 text-[10px] uppercase tracking-widest text-[#ead6dc]/35">
                      Sources
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-md border border-[#d6a0ae]/15 bg-[#1b1216] px-2.5 py-1.5 text-xs text-[#ead6dc]/60">
                        📄 Page 7
                      </span>

                      <span className="rounded-md border border-[#d6a0ae]/15 bg-[#1b1216] px-2.5 py-1.5 text-xs text-[#ead6dc]/60">
                        § 4.2 Security Deposit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section
        id="features"
        className="relative z-10 border-y border-[#d6a0ae]/10 bg-[#120d10]/95"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6a0ae]">
              Built for documents
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From lengthy contracts to clear answers.
            </h2>

            <p className="mt-4 leading-7 text-[#ead6dc]/60">
              A focused workspace for understanding, querying, and comparing
              legal documents.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-[#d6a0ae]/10 bg-[#1a1115]/70 p-6 transition hover:-translate-y-1 hover:border-[#d6a0ae]/30 hover:bg-[#21151a]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d6a0ae]/15 bg-[#b9788a]/10 text-lg text-[#d6a0ae]">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#ead6dc]/55">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section
        id="how-it-works"
        className="relative z-10 bg-[#0f0b0d] px-6 py-24 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Heading */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d6a0ae]">
              How it works
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ask questions.
              <br />
              Get grounded answers.
            </h2>

            <p className="mt-5 leading-7 text-[#ead6dc]/60">
              The system uses Retrieval-Augmented Generation to connect your
              questions with relevant information from the documents you
              upload.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 rounded-2xl border border-[#d6a0ae]/10 bg-[#1a1115]/60 p-5 transition hover:border-[#d6a0ae]/25"
              >
                <span className="font-mono text-sm text-[#d6a0ae]">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#ead6dc]/55">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DISCLAIMER / CTA
      ====================================================== */}
      <section
        id="about"
        className="relative z-10 bg-[#120d10] px-6 pb-24 lg:px-8"
      >
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[#d6a0ae]/15 bg-gradient-to-br from-[#b9788a]/15 via-[#1a1115] to-[#8f5c6d]/10 p-8 text-center sm:p-12">
          <p className="mx-auto max-w-2xl text-sm leading-6 text-[#ead6dc]/55">
            LegalAI provides AI-generated information based on uploaded
            documents. It is designed to assist with document understanding
            and is not a substitute for professional legal advice.
          </p>

          <a
            href="/register"
            className="mt-7 inline-flex rounded-xl bg-[#b9788a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#b9788a]/20 transition hover:bg-[#c48798]"
          >
            Create your workspace
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="relative z-10 border-t border-[#d6a0ae]/10 bg-[#0b0809] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#ead6dc]/40 sm:flex-row">
          <p>
            © 2026 Legal Document Intelligence System
          </p>

          <p>
            AI-assisted document understanding • BE AIML Project
          </p>
        </div>
      </footer>
    </main>
  );
}