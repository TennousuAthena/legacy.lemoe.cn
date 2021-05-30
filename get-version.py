#!/usr/bin/python
# -*- coding: UTF-8 -*-
import requests
import json
print("[Get-Version]Fetching...")
# 获取所有的commits
res = requests.get('https://api.github.com/repos/TennousuAthena/tennousuAthena.github.io/commits').json()[0]
author = res['commit']['author']
result = {
    'author': author['name'],
    'date': author['date'],
    'msg': res['commit']['message'],
    'commit_id': res['sha'][0:7],
    'commit_sha': res['sha'],
    'verification': res['commit']['verification']['verified'],
    'url': res['html_url']
}
print("[Get-Version]Saving...")
json = json.dumps(result)
file_handle = open('public/version.json', mode='w')
file_handle.write(json)
file_handle.close()

print("[Get-Version]Done!")
