import uuid

import chromadb


class VectorStore:

    def __init__(self, db_path: str = "backend/chroma_db"):
        self.client = chromadb.PersistentClient(path=db_path)

        self.collection = self.client.get_or_create_collection(
            name="legal_documents"
        )

    def add_chunks(
        self,
        chunks: list[dict],
        embeddings: list[list[float]],
        document_id: str | None = None
    ):
        """
        Store document chunks and embeddings in ChromaDB.

        Each document gets a unique ID so multiple documents
        can be stored without duplicate chunk IDs.
        """

        if document_id is None:
            document_id = str(uuid.uuid4())

        ids = []
        documents = []
        metadatas = []

        for chunk in chunks:

            chunk_id = str(chunk["chunk_id"])

            # Unique ID for this document's chunk
            unique_id = f"{document_id}_chunk_{chunk_id}"

            ids.append(unique_id)
            documents.append(chunk["text"])

            metadatas.append({
                "document_id": document_id,
                "page_number": chunk.get("page_number"),
                "chunk_id": chunk_id
            })

        self.collection.add(
            ids=ids,
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas
        )

        return document_id

    def search(
        self,
        query_embedding: list[float],
        top_k: int = 5
    ):
        """
        Search the vector database for the most
        semantically relevant chunks.
        """

        results = self.collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k
        )

        return results