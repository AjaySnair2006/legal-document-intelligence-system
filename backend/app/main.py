from fastapi import FastAPI

app = FastAPI(
    title="Legal Document Intelligence System",
    description="AI-powered legal document analysis using RAG",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "message": "Legal Document Intelligence System API is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }