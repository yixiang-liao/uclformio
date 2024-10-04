from fastapi import APIRouter, HTTPException
from typing import List, Dict
import os
import json

router = APIRouter()

# 導入 JSON 數據並解析為字典
def load_json_data(filepath: str) -> dict:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail=f"File {filepath} not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Error parsing JSON file")

# 導入 備品更新 數據
project1_1 = load_json_data(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_1.json'))

# 導入 委外發包(含運輸及人工) 數據
project1_2 = load_json_data(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_2.json'))

# 導入 備品整修 數據
project1_3 = load_json_data(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_3.json'))

# 導入 零配件五金更新 數據
project1_4 = load_json_data(os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_4.json'))


# 全部資料
@router.get("/project1_1")
async def get_project1_1():
    return project1_1

# 全部資料
@router.get("/project1_2")
async def get_project1_2():
    return project1_2

# 全部資料
@router.get("/project1_3")
async def get_project1_3():
    return project1_3

# 全部資料
@router.get("/project1_4")
async def get_project1_4():
    return project1_4

# 品項＿選項（key , value）
@router.get("/project1_1_value")
async def get_project1_1():
    key_values = [{"key": key, "value": value["value"]} for key, value in project1_1.items()]
    return key_values

# 廠商＿選項（key , value）
@router.get("/project1_1_vendor/{key}")
async def get_project1_1_vendor(key: str):
    if key not in project1_1:
        raise HTTPException(status_code=404, detail="Vendor not found")
    vendors = project1_1[key]["vendors"]
    # 返回类似于项目名称和缩写的格式
    return [
        {"name": p["name"], "id": p["id"]}
        for p in vendors
    ]

# 金額 (只回傳數字)
@router.get("/project1_1_vendor/{key}/{vendor_id}")
async def get_project1_1_amount(key: str, vendor_id: int):
    if key not in project1_1:
        raise HTTPException(status_code=404, detail="Item not found")
    
    vendors = project1_1[key]["vendors"]
    for vendor in vendors:
        if vendor["id"] == vendor_id:
            return vendor["price"]

    raise HTTPException(status_code=404, detail="Vendor not found")

# 品項＿選項（key , value）
@router.get("/project1_2_value")
async def get_project1_2():
    key_values = [{"key": key, "value": value["value"]} for key, value in project1_2.items()]
    return key_values

# 廠商＿選項（key , value）
@router.get("/project1_2_vendor/{key}")
async def get_project1_2_vendor(key: str):
    if key not in project1_2:
        raise HTTPException(status_code=404, detail="Vendor not found")
    vendors = project1_2[key]["vendors"]
    # 返回类似于项目名称和缩写的格式
    return [
        {"name": p["name"], "id": p["id"]}
        for p in vendors
    ]

# 金額 (只回傳數字)
@router.get("/project1_2_vendor/{key}/{vendor_id}")
async def get_project1_2_amount(key: str, vendor_id: int):
    if key not in project1_2:
        raise HTTPException(status_code=404, detail="Item not found")
    
    vendors = project1_2[key]["vendors"]
    for vendor in vendors:
        if vendor["id"] == vendor_id:
            return vendor["price"]

    raise HTTPException(status_code=404, detail="Vendor not found")

# 品項＿選項（key , value）
@router.get("/project1_3_value")
async def get_project1_3():
    key_values = [{"key": key, "value": value["value"]} for key, value in project1_3.items()]
    return key_values

# 廠商＿選項（key , value）
@router.get("/project1_3_vendor/{key}")
async def get_project1_3_vendor(key: str):
    if key not in project1_3:
        raise HTTPException(status_code=404, detail="Vendor not found")
    vendors = project1_3[key]["vendors"]
    # 返回类似于项目名称和缩写的格式
    return [
        {"name": p["name"], "id": p["id"]}
        for p in vendors
    ]

# 金額 (只回傳數字)
@router.get("/project1_3_vendor/{key}/{vendor_id}")
async def get_project1_3_amount(key: str, vendor_id: int):
    if key not in project1_3:
        raise HTTPException(status_code=404, detail="Item not found")
    
    vendors = project1_3[key]["vendors"]
    for vendor in vendors:
        if vendor["id"] == vendor_id:
            return vendor["price"]

    raise HTTPException(status_code=404, detail="Vendor not found")

# 品項＿選項（key , value）
@router.get("/project1_4_value")
async def get_project1_4():
    key_values = [{"key": key, "value": value["value"]} for key, value in project1_4.items()]
    return key_values

# 廠商＿選項（key , value）
@router.get("/project1_4_vendor/{key}")
async def get_project1_4_vendor(key: str):
    if key not in project1_4:
        raise HTTPException(status_code=404, detail="Vendor not found")
    vendors = project1_4[key]["vendors"]
    # 返回类似于项目名称和缩写的格式
    return [
        {"name": p["name"], "id": p["id"]}
        for p in vendors
    ]

# 金額 (只回傳數字)
@router.get("/project1_4_vendor/{key}/{vendor_id}")
async def get_project1_4_amount(key: str, vendor_id: int):
    if key not in project1_4:
        raise HTTPException(status_code=404, detail="Item not found")
    
    vendors = project1_4[key]["vendors"]
    for vendor in vendors:
        if vendor["id"] == vendor_id:
            return vendor["price"]

    raise HTTPException(status_code=404, detail="Vendor not found")