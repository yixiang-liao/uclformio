from fastapi import APIRouter, HTTPException
from typing import List, Dict

router = APIRouter()

# 測試數據，包括每個業主的 id
owners = {
    "1": {  # 業主1
        "name": "業主1",
        "projects": [
            {"project_name": "Project A", "project_id": 1, "amount": 1000},
            {"project_name": "Project B", "project_id": 2, "amount": 2000},
        ]
    },
    "2": {  # 業主2
        "name": "業主2",
        "projects": [
            {"project_name": "Project C", "project_id": 3, "amount": 1500},
            {"project_name": "Project D", "project_id": 4, "amount": 2500},
        ]
    }
}


# 获取业主列表并返回每个业主的 id 和 name
@router.get("/owners")
def get_owners():
    return [
        {"id": owner_id, "name": owner_data["name"]}
        for owner_id, owner_data in owners.items()
    ]

# 根据业主 id 获取工案名称并返回项目名和项目 id
@router.get("/projects/{owner_id}")
def get_projects(owner_id: str):
    if owner_id not in owners:
        raise HTTPException(status_code=404, detail="Owner not found")
    
    projects = owners[owner_id]["projects"]
    
    # 返回类似于项目名称和缩写的格式
    return [
        {"name": p["project_name"], "id": p["project_id"]}
        for p in projects
    ]

# 獲取工案編號與金額
@router.get("/project/{project_id}")
def get_project_details(project_id: int):
    for owner_data in owners.values():
        for project in owner_data["projects"]:
            if project["project_id"] == project_id:
                return {"project_id": project_id, "amount": project["amount"]}
    
    raise HTTPException(status_code=404, detail="Project not found")

# 獲取金額
@router.get("/amount/{project_id}")
def get_amount(project_id: int):
    for owner_data in owners.values():
        for project in owner_data["projects"]:
            if project["project_id"] == project_id:
                return project["amount"]
    
    raise HTTPException(status_code=404, detail="Project not found")
