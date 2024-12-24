#!/bin/bash

# Check if a commit message was provided
if [ -z "$1" ]; then
  echo "Error: No commit message provided."
  echo "Usage: ./script.sh \"Your commit message\""
  exit 1
fi

# Run the build process
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
  echo "Error: Build failed."
  exit 1
fi

# Add all changes
git add .

# Commit with the provided message
git commit -m "$1"

# Get the current branch name
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Push to all remotes
for remote in $(git remote); do
  git push $remote $current_branch
done