---
title: "File Permissions and Ownership in Linux "
date: 2025-06-04-16:51:23
categories: [Linux Fundamentals]
tags: [Linux,Linux Fundamentals]
hidden: true
---

## 🔐 File Permissions and Ownership in Linux

---

### 1. **📄 Default File Permissions & umask**

* **Default permissions:**

  * Files: `666` (read & write for all)
  * Directories: `777` (read, write, execute for all)

* **Actual permissions = Default - `umask`**

  * View current umask:

    ```bash
    umask
    ```
  * Example:
    If `umask` is `022`, new file permission becomes `644` (`666 - 022`)
    and directory permission becomes `755` (`777 - 022`)

---

### 2. **📜 Reading `ls -l` Output**

```bash
ls -l file.txt
```

Example output:

```
-rw-r--r-- 1 user group 1234 Jun 5 10:00 file.txt
```

| Part          | Meaning                                                |
| ------------- | ------------------------------------------------------ |
| `-`           | File type (`-` = file, `d` = directory, `l` = symlink) |
| `rw-r--r--`   | Permissions: owner (rw-), group (r--), others (r--)    |
| `user`        | File owner                                             |
| `group`       | Group owner                                            |
| `1234`        | File size                                              |
| `Jun 5 10:00` | Last modified date                                     |
| `file.txt`    | File name                                              |

---

### 3. **🧮 Managing Permissions**

#### a. Numeric (Octal) Permissions

| Digit | Meaning |
| ----- | ------- |
| `7`   | `rwx`   |
| `6`   | `rw-`   |
| `5`   | `r-x`   |
| `4`   | `r--`   |
| `0`   | `---`   |

```bash
chmod 755 myscript.sh  # rwxr-xr-x
```

#### b. Symbolic (Text) Permissions

```bash
chmod u+x file.txt     # Add execute for user
chmod g-w file.txt     # Remove write for group
chmod o=r file.txt     # Set read-only for others
```

#### c. Group Ownership and Permissions

* Change owner:

  ```bash
  chown username file.txt
  ```

* Change group:

  ```bash
  chgrp groupname file.txt
  ```

* Set group and owner:

  ```bash
  chown user:group file.txt
  ```

---

### 4. **⚙️ Customizing File Creation Mask (`umask`)**

* View current umask:

  ```bash
  umask
  ```

* Temporarily set umask:

  ```bash
  umask 027
  ```

* Permanently set:

  * Add to `~/.bashrc` or `/etc/profile`:

    ```bash
    umask 027
    ```

---