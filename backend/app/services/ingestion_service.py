from backend.app.services.document_processor import extract_text
from backend.app.services.chunker import chunk_text
from backend.app.services.embedding_service import EmbeddingService
from backend.app.services.vector_store import VectorStore


class IngestionService:

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()

    def ingest_document(self, file_path: str):

        # 1. Extract text from PDF/DOCX
        pages = extract_text(file_path)

        # 2. Split text into chunks
        chunks = chunk_text(pages)

        if not chunks:
            raise ValueError("No readable text found in the document.")

        # 3. Create embeddings
        texts = [chunk["text"] for chunk in chunks]

        embeddings = self.embedding_service.embed_documents(texts)

        # 4. Store chunks and embeddings
        document_id = self.vector_store.add_chunks(
            chunks=chunks,
            embeddings=embeddings
        )

        return {
            "message": "Document processed successfully.",
            "document_id": document_id,
            "chunks_created": len(chunks)
        }