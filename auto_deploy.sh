#!/bin/bash

bundle exec jekyll build
# Check if the current directory is a Git repository
if [ ! -d ".git" ]; then
    git init
fi

# Add all changes
git add .

# Commit with a provided message or default message
commit_message=${1:-"Update deployment"}
git commit -a -m "$commit_message"

# Push to the main branch
git push origin main
