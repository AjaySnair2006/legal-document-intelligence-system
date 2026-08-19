import os

from pypdf import PdfReader
from docx import Document


def extract_pdf_text(file_path: str) -> list[dict]:
    """
    Extract text from a PDF while keeping page numbers.
    """

    reader = PdfReader(file_path)

    pages = []

    for page_number, page in enumerate(reader.pages, start=1):

        try:
            text = page.extract_text() or ""

        except Exception as e:
            print(
                f"Warning: Could not extract page "
                f"{page_number}: {e}"
            )
            text = ""

        pages.append({
            "page_number": page_number,
            "text": text.strip()
        })

    return pages


def extract_docx_text(file_path: str) -> list[dict]:
    """
    Extract text from a DOCX document.
    """

    document = Document(file_path)

    text_parts = []

    for paragraph in document.paragraphs:

        text = paragraph.text.strip()

        if text:
            text_parts.append(text)

    text = "\n".join(text_parts)

    return [{
        "page_number": 1,
        "text": text
    }]


def extract_text(file_path: str) -> list[dict]:
    """
    Extract text from a supported document.
    """

    extension = os.path.splitext(file_path)[1].lower()

    if extension == ".pdf":
        return extract_pdf_text(file_path)

    elif extension == ".docx":
        return extract_docx_text(file_path)

    else:
        raise ValueError(
            f"Unsupported file type: {extension}. "
            "Only PDF and DOCX files are supported."
        )