from fastapi import APIRouter, HTTPException
from typing import List, Dict
import os
import json

router = APIRouter()

# 導入 備品更新 數據
project1_1 = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_1.json')

# 導入 委外發包(含運輸及人工) 數據
project1_2 = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_2.json')

# 導入 備品整修 數據
project1_3 = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_3.json')

# 導入 零配件五金更新 數據
project1_4 = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'json', 'project1_4.json')
