from app.services.embedding_service import EmbeddingService
from app.services.vector_store import VectorStore
from app.services.gemini_service import generate_answer


class RAGService:

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.vector_store = VectorStore()

    def ask(self, question: str, top_k: int = 5):

        # Convert question into embedding
        query_embedding = self.embedding_service.embed_text(question)

        # Search ChromaDB
        results = self.vector_store.search(
            query_embedding=query_embedding,
            top_k=top_k
        )

        # Get retrieved documents
        documents = results.get("documents", [[]])[0]

        # Get metadata
        metadatas = results.get("metadatas", [[]])[0]

        if not documents:
            return {
                "answer": "I could not find relevant information in the provided documents.",
                "sources": []
            }

        # Combine retrieved chunks
        context_parts = []

        for document in documents:
            context_parts.append(document)

        context = "\n\n---\n\n".join(context_parts)

        # Generate answer using Gemini
        answer = generate_answer(
            question=question,
            context=context
        )

        # Prepare sources
        sources = []

        for metadata in metadatas:
            sources.append({
                "page_number": metadata.get("page_number"),
                "chunk_id": metadata.get("chunk_id")
            })

        return {
            "answer": answer,
            "sources": sources
        }