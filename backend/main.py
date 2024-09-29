from fastapi import FastAPI
from app.api.v1.endpoints import projectestimate2

app = FastAPI()

app.include_router(projectestimate2.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"Hello": "FastAPI"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)