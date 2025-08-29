class Message(BaseModel):
    role: Literal["user", "assistant"]
    content: str
    type: Literal["text", "image"]
    timestamp: int



class ChatRequest(BaseModel):
    message: str
    timestamp: int
    history: List[Message]
    preferences: Optional[Dict[str, Any]] = None
    request_id: Optional[str] = None  # Optional request ID from frontend
    integration_in_progress: bool = False
    image_url: Optional[str] = None