from typing import List, Dict


def chunk_text(
    pages: List[Dict],
    chunk_size: int = 1000,
    chunk_overlap: int = 200
) -> List[Dict]:
    """
    Split extracted document text into overlapping chunks.

    Each chunk keeps its source page number when available.
    """

    chunks = []

    for page in pages:

        text = page.get("text", "").strip()
        page_number = page.get("page_number")

        if not text:
            continue

        start = 0

        while start < len(text):

            end = start + chunk_size

            chunk = text[start:end].strip()

            if chunk:
                chunks.append({
                    "chunk_id": len(chunks),
                    "page_number": page_number,
                    "text": chunk
                })

            if end >= len(text):
                break

            start = end - chunk_overlap

    return chunks