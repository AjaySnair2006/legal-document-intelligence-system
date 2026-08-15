const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      errorText || `API request failed: ${response.status}`,
    );
  }

  return response.json();
}

/*
 * ============================================================
 * DOCUMENTS
 * ============================================================
 *
 * These functions are prepared for Ajay's backend.
 * The endpoint names can be changed once his API is finalized.
 */

export async function getDocuments() {
  return apiRequest("/documents");
}

export async function uploadDocument(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch(
    `${API_BASE_URL}/documents/upload`,
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    const errorText = await response.text();

    throw new Error(
      errorText || `Upload failed: ${response.status}`,
    );
  }

  return response.json();
}

export async function getDocument(documentId: string) {
  return apiRequest(`/documents/${documentId}`);
}

export async function deleteDocument(documentId: string) {
  return apiRequest(`/documents/${documentId}`, {
    method: "DELETE",
  });
}

/*
 * ============================================================
 * AI CHAT
 * ============================================================
 */

export async function askAI(
  documentId: string,
  question: string,
) {
  return apiRequest("/chat", {
    method: "POST",
    body: JSON.stringify({
      document_id: documentId,
      question,
    }),
  });
}

/*
 * ============================================================
 * SUMMARY
 * ============================================================
 */

export async function getSummary(documentId: string) {
  return apiRequest(`/documents/${documentId}/summary`);
}

/*
 * ============================================================
 * HEALTH CHECK
 * ============================================================
 */

export async function checkBackend() {
  return apiRequest("/health");
}