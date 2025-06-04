---
title: "The Linux Terminal / Command Line "
date: 2025-06-04-14:10:37
categories: [Linux Fundamentals]
tags: [Linux,Linux Fundamentals]
hidden: true
---

Here’s a concise guide covering the basics of **The Linux Terminal / Command Line** and the topics you listed:

---

## 1. **🖥️ The Linux Terminal / Command Line**

### 🔓 Opening the Terminal

* **GUI Desktop** (e.g., GNOME, XFCE):

  * Press `Ctrl + Alt + T` or search "Terminal" in your applications menu.
* **TTY Console (CLI only systems):**

  * Use `Ctrl + Alt + F1` to `F6` to switch to a terminal session.

---

### 2. **⚙️ Terminal Settings**

Terminal settings depend on the emulator you're using (e.g., GNOME Terminal, Kitty, Alacritty):

* **Font / Color scheme:** Usually in Preferences → Appearance.
* **Scrollback / History Size:** Preferences → Scrolling.
* **Shell configuration file:** Typically `~/.bashrc` or `~/.zshrc`.

---

### 3. **🔁 Common Terminal Commands**

| Command               | Description                                                |
| --------------------- | ---------------------------------------------------------- |
| `bash`                | Starts a new Bash shell session.                           |
| `echo`                | Prints text or variables: `echo $HOME`.                    |
| `env`                 | Shows current environment variables.                       |
| `export VAR=value`    | Sets environment variables: `export PATH=$PATH:/new/path`. |
| `pwd`                 | Prints current working directory.                          |
| `set`                 | Shows or sets shell options and variables.                 |
| `unset`               | Removes shell variables: `unset VAR`.                      |
| `man command`         | Shows manual for a command: `man ls`.                      |
| `uname -a`            | Displays system information.                               |
| `history`             | Lists previously run commands.                             |
| `cat ~/.bash_history` | Shows command history from file.                           |

---

### 4. **🎨 Customizing the Shell Prompt & Environment**

* **PS1** is the variable that defines your prompt:

  ```bash
  export PS1="\u@\h:\w\$ "
  ```

  * `\u` – Username
  * `\h` – Hostname
  * `\w` – Working directory
  * `$` – Dollar sign (or `#` for root)

* Example: Colorful Prompt

  ```bash
  export PS1="\[\e[1;32m\]\u@\h\[\e[0m\]:\[\e[1;34m\]\w\[\e[0m\]\$ "
  ```

* To make permanent, add to `~/.bashrc`.

---

### 5. **⚡ Creating Aliases**

* Temporarily create an alias:

  ```bash
  alias ll='ls -alF'
  ```

* Permanently add to `~/.bashrc` or `~/.bash_aliases`:

  ```bash
  echo "alias update='sudo pacman -Syu'" >> ~/.bashrc
  source ~/.bashrc
  ```

---

