---
title: "Package Management "
date: 2025-06-04-14:52:44
categories: [Linux Fundamentals]
tags: [Linux,Linux Fundamentals]
hidden: true
---
Here’s a clear and structured guide for **Package Management** and related Linux system topics:

---

## 📦 Linux Package Management & File System Structure

---

### 1. **📁 The Linux File System Structure (Simplified)**

| Directory        | Purpose                                              |
| ---------------- | ---------------------------------------------------- |
| `/`              | Root of the file system.                             |
| `/bin`           | Essential binary programs (e.g. `ls`, `cp`, `bash`). |
| `/sbin`          | System binaries (e.g. `reboot`, `mount`).            |
| `/etc`           | Configuration files.                                 |
| `/dev`           | Device files.                                        |
| `/home`          | User directories.                                    |
| `/lib`           | Essential shared libraries.                          |
| `/opt`           | Optional software.                                   |
| `/usr`           | User-installed software and libraries.               |
| `/var`           | Variable files (e.g., logs, spools).                 |
| `/tmp`           | Temporary files.                                     |
| `/mnt`, `/media` | Mount points for removable storage.                  |

---

### 2. **📚 Managing Shared Libraries**

| Tool / File       | Description                                                         |
| ----------------- | ------------------------------------------------------------------- |
| `ldd binary`      | Lists shared libraries required by a binary.                        |
| `ldconfig`        | Updates the dynamic linker runtime bindings.                        |
| `/etc/ld.so.conf` | File listing directories for shared libraries.                      |
| `LD_LIBRARY_PATH` | Temporary environment variable to specify additional library paths. |

> Example:

```bash
export LD_LIBRARY_PATH=/custom/lib:$LD_LIBRARY_PATH
```

---

### 3. **📦 Debian Package Management**

#### a. `/etc/apt/sources.list`

Defines package sources:

```plaintext
deb http://deb.debian.org/debian stable main contrib non-free
```

#### b. `apt-get` – Basic commands:

```bash
sudo apt-get update        # Update package list
sudo apt-get upgrade       # Upgrade installed packages
sudo apt-get install pkg   # Install a package
sudo apt-get remove pkg    # Remove a package
```

#### c. `dpkg`

Low-level package tool:

```bash
sudo dpkg -i package.deb    # Install .deb file
sudo dpkg -r package         # Remove package
dpkg -l | grep pkgname       # List package info
```

#### d. `apt-cache`

Query APT package cache:

```bash
apt-cache search firefox
apt-cache show firefox
```

#### e. `aptitude` (TUI tool, optional)

```bash
sudo aptitude        # Launch UI
sudo aptitude install pkgname
```

---

### 4. **📦 RPM and YUM Package Management**

#### f. `/etc/yum.conf` and `/etc/yum.repos.d/`

* `yum.conf`: Main configuration.
* `.repo` files in `/etc/yum.repos.d/` define repository sources.

#### g. `yumdownloader`

Download RPMs without installing:

```bash
sudo yum install yum-utils
yumdownloader package
```

#### h. `rpm` and `rpm2cpio`

* Install:

```bash
sudo rpm -ivh package.rpm
```

* Convert `.rpm` to `.cpio` archive:

```bash
rpm2cpio file.rpm | cpio -idmv
```

---

### 5. **🔗 Creating Symbolic and Hard Links**

| Link Type                | Command                 | Description                                              |
| ------------------------ | ----------------------- | -------------------------------------------------------- |
| **Symbolic (soft) link** | `ln -s target linkname` | Points to a file or directory path.                      |
| **Hard link**            | `ln target linkname`    | Points to same inode; works only within same filesystem. |

> Examples:

```bash
ln -s /etc/nginx/nginx.conf ~/nginx.conf_link
ln /bin/ls ~/ls_hardlink
```

---
