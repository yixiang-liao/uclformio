from fastapi import FastAPI
from app.api.v1.endpoints import projectestimate2
from app.api.v1.endpoints import jsonapi
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允許所有來源
    allow_credentials=True,
    allow_methods=["*"],  # 允許所有方法
    allow_headers=["*"],  # 允許所有header
)

app.include_router(projectestimate2.router, prefix="/api/v1")
app.include_router(jsonapi.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"Hello": "FastAPI"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)