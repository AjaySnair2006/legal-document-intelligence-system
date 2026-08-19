from sentence_transformers import SentenceTransformer


class EmbeddingService:
    def __init__(self):
        self.model = SentenceTransformer("all-MiniLM-L6-v2")

    def embed_text(self, text: str) -> list[float]:
        """
        Convert a single piece of text into an embedding vector.
        """
        embedding = self.model.encode(text)

        return embedding.tolist()

    def embed_documents(self, texts: list[str]) -> list[list[float]]:
        """
        Convert multiple text chunks into embedding vectors.
        """
        embeddings = self.model.encode(texts)

        return embeddings.tolist()