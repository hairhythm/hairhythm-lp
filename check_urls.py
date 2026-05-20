import json
import requests
from concurrent.futures import ThreadPoolExecutor

def check_url(salon):
    url = salon['url']
    if not url.startswith('http'):
        url = 'https:' + url
    try:
        response = requests.get(url, timeout=10, headers={'User-Agent': 'Mozilla/5.0'})
        salon['is_valid'] = response.status_code < 400
        salon['status'] = response.status_code
    except Exception as e:
        salon['is_valid'] = False
        salon['status'] = str(e)
    return salon

with open('extracted_salons.json', 'r') as f:
    salons = json.load(f)

# Filter out duplicates and non-salon links
unique_salons = {}
for s in salons:
    if s['name'] not in unique_salons:
        unique_salons[s['name']] = s

with ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(check_url, unique_salons.values()))

with open('checked_salons.json', 'w') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
