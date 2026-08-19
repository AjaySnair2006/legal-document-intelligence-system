import os
import shutil
from pathlib import Path

from fastapi import FastAPI, HTTPException, UploadFile, File
from pydantic import BaseModel

from app.services.rag_service import RAGService
from app.services.ingestion_service import IngestionService


app = FastAPI(
    title="Legal Document Intelligence System",
    description="AI-powered legal document analysis using RAG",
    version="1.0.0"
)


class QuestionRequest(BaseModel):
    question: str


UPLOAD_DIR = Path("../data/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


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


@app.post("/ask")
def ask_question(request: QuestionRequest):

    if not request.question.strip():
        raise HTTPException(
            status_code=400,
            detail="Question cannot be empty."
        )

    try:
        rag = RAGService()

        result = rag.ask(request.question)

        return result

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@app.post("/upload")
async def upload_document(file: UploadFile = File(...)):

    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No file selected."
        )

    extension = Path(file.filename).suffix.lower()

    if extension not in [".pdf", ".docx"]:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are supported."
        )

    file_path = UPLOAD_DIR / file.filename

    try:

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        ingestion_service = IngestionService()

        result = ingestion_service.ingest_document(
            str(file_path)
        )

        return {
            "message": "Document uploaded and processed successfully.",
            "filename": file.filename,
            "result": result
        }

    except Exception as e:

        if file_path.exists():
            os.remove(file_path)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

    finally:
        await file.close()