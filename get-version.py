#!/usr/bin/python
# -*- coding: UTF-8 -*-
import requests
import json
# Github 仓库名，现使用package.json->gh
#repo = "TennousuAthena/tennousuAthena.github.io"

file_handle = open("package.json")
lines = file_handle.read()
package = json.loads(lines)
file_handle.close()

repo = package['gh']

api_base = "https://api.github.com/repos/" + repo

print("[Get-Version]Fetching...")
# 获取所有的commits
res = requests.get(api_base + '/commits').json()[0]
author = res['commit']['author']

# 获取commits数
commits = requests.get(api_base + '/stats/contributors').json()[0]['total']

result = {
    'author': author['name'],
    'date': author['date'],
    'msg': res['commit']['message'],
    'commit_id': res['sha'][0:7],
    'commit_sha': res['sha'],
    'verification': res['commit']['verification']['verified'],
    'total': commits,
    'url': res['html_url']
}
res_json = json.dumps(result)
print(res_json)

print("[Get-Version]Saving...")
file_handle = open('public/version.json', mode='w')
file_handle.write(res_json)
file_handle.close()

print("[Get-Version]Done!")
