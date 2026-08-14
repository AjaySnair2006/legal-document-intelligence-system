import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=api_key)


def generate_answer(question: str, context: str) -> str:
    prompt = f"""
You are a legal document assistant.

Answer the user's question using ONLY the information provided
in the retrieved legal document context.

If the answer cannot be found in the context, say:
"I could not find this information in the provided document."

Do not invent legal facts.

Retrieved context:
{context}

User question:
{question}

Provide a clear and concise answer.
"""

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=prompt
    )

    return response.text