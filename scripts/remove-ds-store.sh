#!/usr/bin/env bash

set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

declare -a files=()
while IFS= read -r -d '' file; do
  files+=("$file")
done < <(find "$project_root" -type f -name '.DS_Store' -print0)

if [[ ${#files[@]} -eq 0 ]]; then
  echo "No .DS_Store files found in $project_root"
  exit 0
fi

for file in "${files[@]}"; do
  rm -f "$file"
  echo "Deleted: $file"
done

echo "Deleted ${#files[@]} .DS_Store file(s)."
