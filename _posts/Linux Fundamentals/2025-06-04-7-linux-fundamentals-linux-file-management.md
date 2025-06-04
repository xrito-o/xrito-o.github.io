---
title: "Basic Linux File Management "
date: 2025-06-04-15:12:05
categories: [Linux Fundamentals]
tags: [Linux,Linux Fundamentals]
hidden: true
---

Here is a concise guide on **Basic Linux File Management**, including archiving, directory and file manipulation, and file-searching tools:

---

## 📁 Basic Linux File Management

---

### 1. **📦 Common Archiving Tools**

| Tool              | Command Example                                     | Description                        |
| ----------------- | --------------------------------------------------- | ---------------------------------- |
| `tar`             | `tar -czvf archive.tar.gz folder/`                  | Archive and compress files (gzip). |
| `gzip` / `gunzip` | `gzip file.txt` / `gunzip file.txt.gz`              | Compress/decompress single files.  |
| `zip` / `unzip`   | `zip archive.zip file1 file2` / `unzip archive.zip` | Create/extract ZIP archives.       |
| `xz` / `unxz`     | `xz file` / `unxz file.xz`                          | High compression ratio.            |
| `7z`              | `7z a archive.7z file`                              | 7-Zip format (install `p7zip`).    |

---

### 2. **📂 Making Directories**

```bash
mkdir newdir               # Create a directory
mkdir -p dir/subdir        # Create nested directories
```

---

### 3. **📄 Copy, Move, Delete Files and Directories**

#### Copy

```bash
cp file1.txt file2.txt              # Copy a file
cp -r dir1/ dir2/                   # Copy directory recursively
```

#### Move (or Rename)

```bash
mv oldname.txt newname.txt         # Rename or move file
mv file.txt /path/to/destination/  # Move file
```

#### Delete

```bash
rm file.txt                        # Delete file
rm -r folder/                      # Delete directory and contents
rm -rf folder/                     # Force delete (use with caution)
```

---

### 4. **🔍 Finding and Locating Files**

| Command    | Description                                     | Example                    |
| ---------- | ----------------------------------------------- | -------------------------- |
| `find`     | Searches files by name, size, type, etc.        | `find /home -name "*.txt"` |
| `locate`   | Uses a database to quickly find files           | `locate firefox`           |
| `updatedb` | Updates the `locate` database (needs `mlocate`) | `sudo updatedb`            |
| `whereis`  | Locates binary, source, and man pages           | `whereis ls`               |
| `which`    | Shows the path of a command                     | `which python3`            |
| `type`     | Shows how a command is interpreted              | `type cd`                  |

> Config file for `updatedb`:
> 📄 **`/etc/updatedb.conf`** — Exclude specific paths from `locate` indexing.

---
