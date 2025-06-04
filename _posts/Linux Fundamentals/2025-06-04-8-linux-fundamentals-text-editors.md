---
title: "Text editors, and processing text streams through filters "
date: 2025-06-04-16:48:16
categories: [Linux Fundamentals]
tags: [Linux,Linux Fundamentals]
hidden: true
---

Here's a complete and structured guide for:

---

## 📝 Text Editors, Text Streams, Filters, and Redirection

---

### 1. **🔤 Vi vs Vim**

| Feature      | `vi`             | `vim` (Vi IMproved)                                  |
| ------------ | ---------------- | ---------------------------------------------------- |
| Availability | Always installed | May require install (`sudo apt install vim`)         |
| Features     | Basic editing    | Syntax highlighting, undo, plugins, multi-level undo |
| Usage        | Lightweight      | Powerful and extensible                              |

#### Basic `vi` / `vim` Usage:

| Command       | Action               |
| ------------- | -------------------- |
| `i`           | Insert mode          |
| `Esc`         | Exit to command mode |
| `:w`          | Save                 |
| `:q`          | Quit                 |
| `:wq` or `ZZ` | Save and quit        |
| `:q!`         | Quit without saving  |
| `dd`          | Delete line          |
| `yy`          | Yank (copy) line     |
| `p`           | Paste line           |

---

### 2. **🔁 Output Redirection & GNU Text Utilities**

| Tool            | Example                   | Description                |                   |
| --------------- | ------------------------- | -------------------------- | ----------------- |
| `cat`           | `cat file.txt`            | Print file contents        |                   |
| `cut`           | `cut -d: -f1 /etc/passwd` | Cut fields by delimiter    |                   |
| `sort`          | `sort file.txt`           | Sort lines                 |                   |
| `uniq`          | \`sort file.txt           | uniq\`                     | Remove duplicates |
| `expand`        | `expand file.txt`         | Convert tabs to spaces     |                   |
| `join`          | `join file1 file2`        | Join files by common field |                   |
| `split`         | `split -l 100 file`       | Split into chunks          |                   |
| `wc`            | `wc -l file.txt`          | Line/word/char count       |                   |
| `sed`           | `sed 's/foo/bar/' file`   | Stream edit                |                   |
| `head` / `tail` | `head -n 10 file`         | Show first/last N lines    |                   |

---

### 3. **🔗 Streams, Pipes, and Redirects**

| Symbol  | Description                                     |                                 |
| ------- | ----------------------------------------------- | ------------------------------- |
| `>`     | Redirect output to file (overwrite)             |                                 |
| `>>`    | Redirect output to file (append)                |                                 |
| `<`     | Redirect file to command input                  |                                 |
| \`      | \`                                              | Pipe: output → input of another |
| `tee`   | Output to screen **and** file: \`cmd            | tee file.txt\`                  |
| `xargs` | Pass input as command arguments: \`cat list.txt | xargs rm\`                      |

---

### 4. **🔍 Search with Regular Expressions**

| Tool               | Description                        | Example                      |             |
| ------------------ | ---------------------------------- | ---------------------------- | ----------- |
| `grep`             | Basic search                       | `grep "error" logfile`       |             |
| `egrep`            | Extended regex (same as `grep -E`) | \`egrep "foo                 | bar" file\` |
| `fgrep`            | Fixed string search (no regex)     | `fgrep "text" file`          |             |
| `sed`              | Search and replace                 | `sed 's/old/new/g' file.txt` |             |
| **Regex examples** |                                    |                              |             |
| `.`                | Any character                      |                              |             |
| `*`                | Zero or more                       |                              |             |
| `^`                | Line start                         |                              |             |
| `$`                | Line end                           |                              |             |
| `[abc]`            | Match a, b, or c                   |                              |             |
| `[^abc]`           | Not a, b, or c                     |                              |             |
| `\d`               | Digit (in `grep -P`)               |                              |             |

---
