"""
parse_publications.py  – v2
Scrapes "Scientific Articles and Papers" from the KUK publication list PDF text.

Entry boundaries: separated by blank lines (which contain just whitespace).
Each entry consists of:
  - Citation text (authors, year, title, journal)
  - A URL, sometimes on its own line, sometimes after "Link:" or "link:"
"""

import re
import csv

TEXT_FILE  = r"C:\tmp\pdf_full_text.txt"
OUTPUT_CSV = r"D:\KUK Website-new_CKP\scientific_articles.csv"

# ── 1. Load & normalise ───────────────────────────────────────────────────────
with open(TEXT_FILE, "r", encoding="utf-8") as f:
    raw = f.read()

raw = raw.replace("\r\n", "\n").replace("\r", "\n")

# Re-join URLs that were broken across PDF lines.
# Pattern: a line ending in a URL fragment followed by a continuation line
# that starts with lowercase+underscore content (rest of the URL path).
def rejoin_broken_urls(text):
    lines = text.split("\n")
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # If this line ends with a URL fragment that looks cut off,
        # and the next line starts with a lowercase path continuation
        if i + 1 < len(lines):
            next_line = lines[i + 1].strip()
            # URL continuation: next line is all lowercase/digits/underscores/hyphens
            # and the current line ends mid-URL (ends in a letter/digit, no space after)
            url_in_line = re.search(r"[Hh]ttps?://\S+$", line.rstrip())
            if url_in_line and re.match(r"^[a-z0-9_\-]+$", next_line):
                line = line.rstrip() + next_line
                i += 2
                result.append(line)
                continue
        result.append(line)
        i += 1
    return "\n".join(result)

raw = rejoin_broken_urls(raw)

# ── 2. Isolate the "Scientific Articles" section ─────────────────────────────
start = re.search(r"Scientific Articles and Papers", raw)
if not start:
    raise ValueError("Section not found")
section = raw[start.start():]

# Remove standalone page numbers like "\n 9 \n" or "\n 12 \n"
section = re.sub(r"\n[ \t]*\d{1,3}[ \t]*\n", "\n", section)

# ── 3. Split into blocks separated by blank lines (may contain spaces) ───────
# A blank separator line = a line that has only whitespace
blocks = re.split(r"\n[ \t]*\n", section)
blocks = [b.strip() for b in blocks]
blocks = [b for b in blocks if b and not b.startswith("Scientific Articles")]

# ── 3b. Merge orphan URL-only blocks into the preceding block ─────────────────
# Some entries have the URL in a separate paragraph block.
def is_url_only_block(b):
    """True if the block contains nothing but a URL (plus optional 'Link:' prefix)."""
    stripped = re.sub(r"(?i)^link\s*:?\s*", "", b.replace("\n", " ").strip())
    return bool(re.match(r"[Hh]ttps?://\S+$", stripped.strip()))

merged = []
for b in blocks:
    if merged and is_url_only_block(b):
        merged[-1] = merged[-1] + "\n" + b
    else:
        merged.append(b)
blocks = merged

# ── 4. Helper functions ───────────────────────────────────────────────────────
def find_url(text):
    m = re.search(r"[Hh]ttps?://\S+", text)
    return m.group(0).rstrip(".,; )") if m else ""

def find_year(text):
    # Prefer parenthesised: (2020)
    m = re.search(r"\((\d{4})\)", text)
    if m:
        return m.group(1)
    # Old format: Authors 1998. Title…  — year between spaces/dots
    m = re.search(r"(?<=[^(])\b(19\d{2}|20\d{2})\b", text)
    if m:
        return m.group(1)
    return ""

def split_citation(text, year):
    """Return (authors, title, other_info) from clean citation text."""
    if not year:
        return "", "", text

    # Find the split point: year marker
    for marker in [f"({year}).", f"({year})", f" {year}."]:
        idx = text.find(marker)
        if idx != -1:
            authors    = text[:idx].strip().rstrip(",.")
            after_year = text[idx + len(marker):].lstrip(" .")
            break
    else:
        return "", "", text

    # Title ends at first ". " followed by a capital or digit
    title_end = re.search(r"\.\s+(?=[A-Z\d])", after_year)
    if title_end:
        title      = after_year[:title_end.start()].strip()
        other_info = after_year[title_end.end():].strip()
    else:
        title      = after_year.strip()
        other_info = ""

    return authors, title, other_info

def remove_url_fragments(s):
    """Remove URLs, link-label tokens, and broken URL tail fragments from a string."""
    s = re.sub(r"(?i)\blink\s*:?\s*", "", s)
    s = re.sub(r"[Hh]ttps?://\S+", "", s)
    # Remove broken URL tail fragments: underscore-joined words
    s = re.sub(r"\b\w+(?:_\w+){2,}\b", "", s)
    # Remove trailing hyphen fragments (e.g. 'vore_photo-' leftover from split URL)
    s = re.sub(r"\b\w+(?:_\w+)*-\s*$", "", s.rstrip())
    s = re.sub(r"\s+\w+(?:_\w+)*-\b", " ", s)
    return re.sub(r"\s+", " ", s).strip().rstrip(":.,;")

# ── 5. Process blocks ─────────────────────────────────────────────────────────
records = []

for block in blocks:
    # Collapse internal newlines → spaces
    flat = re.sub(r"\n+", " ", block)
    flat = re.sub(r"\s+", " ", flat).strip()

    if len(flat) < 30:
        continue

    link  = find_url(flat)
    year  = find_year(flat)

    # Remove URL portion from text before parsing
    clean = re.sub(r"(?i)\blink\s*:?\s*[Hh]ttps?://\S*", "", flat)
    clean = re.sub(r"[Hh]ttps?://\S+", "", clean)
    clean = re.sub(r"\s+", " ", clean).strip()

    authors, title, other_info = split_citation(clean, year)

    # Skip blocks that look like they have no real article (e.g. stray URLs)
    if not title and not authors:
        continue

    records.append({
        "Authors":    remove_url_fragments(authors),
        "Year":       year,
        "Title":      title,
        "Other_Info": remove_url_fragments(other_info),
        "Link":       link,
    })

# ── 6. Write CSV ──────────────────────────────────────────────────────────────
fieldnames = ["Authors", "Year", "Title", "Other_Info", "Link"]
with open(OUTPUT_CSV, "w", newline="", encoding="utf-8-sig") as f:
    w = csv.DictWriter(f, fieldnames=fieldnames)
    w.writeheader()
    w.writerows(records)

print(f"Done! {len(records)} records -> {OUTPUT_CSV}")

# ── 7. Quality report ─────────────────────────────────────────────────────────
no_year  = [r for r in records if not r["Year"]]
no_link  = [r for r in records if not r["Link"]]
no_title = [r for r in records if not r["Title"]]

print(f"\nQuality check:")
print(f"  Total records : {len(records)}")
print(f"  No year       : {len(no_year)}")
print(f"  No title      : {len(no_title)}")
print(f"  No link       : {len(no_link)}")

print("\nFirst 5 records:\n" + "-"*70)
for r in records[:5]:
    for k, v in r.items():
        print(f"  {k:10}: {str(v)[:90]}")
    print()
