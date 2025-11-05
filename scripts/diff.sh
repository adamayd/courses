#!/bin/bash

# File names
FILE1="orig.md"
FILE2="proof.md"

# Check if both files exist
if [[ ! -f "$FILE1" ]]; then
  echo "Error: $FILE1 does not exist."
  exit 1
fi

if [[ ! -f "$FILE2" ]]; then
  echo "Error: $FILE2 does not exist."
  exit 1
fi

# Run diff and output results
echo "Comparing $FILE1 and $FILE2..."
diff --unified "$FILE1" "$FILE2"

# Optionally, save the diff to a file
# diff --unified "$FILE1" "$FILE2" > diff_output.patch

