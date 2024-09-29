from fastapi import APIRouter, HTTPException
from typing import List, Dict

router = APIRouter()

# 測試數據
owners = {
    "業主1": [
        {"project_name": "Project A", "project_id": 1, "amount": 1000},
        {"project_name": "Project B", "project_id": 2, "amount": 2000},
    ],
    "業主2": [
        {"project_name": "Project C", "project_id": 3, "amount": 1500},
        {"project_name": "Project D", "project_id": 4, "amount": 2500},
    ],
}


@router.get("/projectestimate2")
def read_project_estimate():
    return {"message": "Hello from project estimate!"}

# 获取业主列表
@router.get("/owners")
def get_owners():
    return {"owners": list(owners.keys())}

# 根据业主获取工案名称
@router.get("/projects/{owner_name}")
def get_projects(owner_name: str):
    if owner_name not in owners:
        raise HTTPException(status_code=404, detail="Owner not found")
    
    projects = owners[owner_name]
    return {"projects": [{"project_name": p["project_name"], "project_id": p["project_id"]} for p in projects]}

# 根据工案编号获取金额
@router.get("/project/{project_id}")
def get_project_details(project_id: int):
    for projects in owners.values():
        for project in projects:
            if project["project_id"] == project_id:
                return {"project_id": project_id, "amount": project["amount"]}
    
    raise HTTPException(status_code=404, detail="Project not found")