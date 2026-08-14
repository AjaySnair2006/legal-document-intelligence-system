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
        embeddings: list[list[float]]
    ):
        """
        Store document chunks and their embeddings in ChromaDB.
        """

        ids = []
        documents = []
        metadatas = []

        for i, chunk in enumerate(chunks):

            chunk_id = str(chunk["chunk_id"])

            ids.append(chunk_id)
            documents.append(chunk["text"])

            metadatas.append({
                "page_number": chunk.get("page_number"),
                "chunk_id": chunk_id
            })

        self.collection.add(
            ids=ids,
            documents=documents,
            embeddings=embeddings,
            metadatas=metadatas
        )

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