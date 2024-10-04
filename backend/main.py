from fastapi import FastAPI , HTTPException
from app.api.v1.endpoints import projectestimate1
from app.api.v1.endpoints import projectestimate2
from app.api.v1.endpoints import jsonapi
from fastapi.middleware.cors import CORSMiddleware
import json
import os
import aiofiles 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允許所有來源
    allow_credentials=True,
    allow_methods=["*"],  # 允許所有方法
    allow_headers=["*"],  # 允許所有header
)

app.include_router(projectestimate1.router, prefix="/api/v1")
app.include_router(projectestimate2.router, prefix="/api/v1")
app.include_router(jsonapi.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"Hello": "FastAPI"}


companyinfo_file = os.path.join(os.path.dirname(os.path.dirname(__file__)),'backend', 'app', 'api', 'v1', 'json', 'companyinfo.json')

@app.get("/form/66bb1f54d35239ac1a45eff0")
async def get_companyinfo_file():
    async with aiofiles.open(companyinfo_file, 'r', encoding='utf-8') as f:
        data = await f.read()
    return json.loads(data) 

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)