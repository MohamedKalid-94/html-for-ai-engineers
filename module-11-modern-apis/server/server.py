import asyncio
import os

from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse

app = FastAPI()

@app.get("/")
async def root():
    return {"status": "ok", "endpoints": ["/api/hello", "/stream", "/ws", "/docs"]}

# Set ALLOW_CORS=0 before starting the server to see the CORS error in demo 09
if os.getenv("ALLOW_CORS", "1") == "1":
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://127.0.0.1:5500", "http://localhost:5500"],  # Live Server origins
        allow_methods=["*"],
        allow_headers=["*"],
    )


@app.get("/api/hello")
async def hello():
    return {"message": "Hello from FastAPI"}


@app.get("/stream")
async def stream(prompt: str = "What is RAG?"):
    """Server-Sent Events: sends a fake 'LLM answer' one word at a time."""

    async def event_generator():
        text = (
            f"You asked: {prompt} "
            "Retrieval-Augmented Generation finds relevant documents first, "
            "then gives them to a language model so the answer is grounded in your data."
        )
        for word in text.split():
            yield f"data: {word}\n\n"
            await asyncio.sleep(0.15)
        yield "event: done\ndata: [DONE]\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache"},
    )


@app.websocket("/ws")
async def websocket_endpoint(ws: WebSocket):
    await ws.accept()
    try:
        while True:
            text = await ws.receive_text()
            await ws.send_text(f"Echo: {text}")
    except WebSocketDisconnect:
        pass