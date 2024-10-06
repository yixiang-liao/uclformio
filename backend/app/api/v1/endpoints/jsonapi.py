import os
from fastapi import APIRouter, HTTPException
import json

router = APIRouter()

# 使用相对路径从当前文件访问 json 目录
projectestimate1_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'projectestimate1.json')
projectestimate2_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'projectestimate2.json')
entrust_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'entrust.json')
companyinfo_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'companyinfo.json')

@router.get("/projectestimate1")
async def get_projectestimate1():
    try:
        with open(projectestimate1_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@router.get("/projectestimate2")
async def get_projectestimate2():
    try:
        with open(projectestimate2_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@router.get("/entrust")
async def get_entrust_file():
    try:
        with open(entrust_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@router.get("/companyinfo")
async def get_companyinfo_file():
    try:
        with open(companyinfo_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")