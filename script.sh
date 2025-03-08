#!/bin/bash

# Define variables
FILE="index.html"  # Change this to the file you want to modify
COMMIT_MSG="Updated file: $FILE"

# Modify the file (Example: Appending text)
echo "This is an automated update." >> "$FILE"

# Git commands
git add "$FILE"
git commit -m "$COMMIT_MSG"
git push  # Change 'main' to your branch name if needed

echo "Changes pushed successfully!"