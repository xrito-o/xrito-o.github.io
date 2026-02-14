@echo off
set "commit_message=%~1"
if "%commit_message%"=="" set "commit_message=Update deployment"

if not exist .git (
    git init
)

git add .
git commit -a -m "%commit_message%"
git push origin main

echo Changes have been pushed to the main branch.
pause
