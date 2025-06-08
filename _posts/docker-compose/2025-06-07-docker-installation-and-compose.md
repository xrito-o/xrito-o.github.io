---
title: "Docker Installation And Compose"
date: 2025-06-07-18:15:41
categories: [Docker-compose]
tags: [Docker]
image:
  path: /assets/img/headers/docker.jpg
---

<h3 align="center">🔧 <a href="https://github.com/xrito-o/docker-compose"><strong>My Docker Compose</strong></a> 🔧</h3>

---

# 🐳 Docker Installation (Debian 10/11/12)

To install **Docker** on **Debian**, follow these steps:

---

### 🔹 Step 1: Update Your System

```bash
sudo apt update && sudo apt upgrade -y
````

---

### 🔹 Step 2: Install Required Packages

```bash
sudo apt install ca-certificates curl gnupg lsb-release -y
```

---

### 🔹 Step 3: Add Docker’s Official GPG Key

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

---

### 🔹 Step 4: Set Up the Docker Repository

> Replace `$(lsb_release -cs)` with your Debian codename if necessary (e.g., `bullseye`).

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

---

### 🔹 Step 5: Update Package List

```bash
sudo apt update
```

---

### 🔹 Step 6: Install Docker Engine

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

---

### 🔹 Step 7: Enable and Start Docker

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

---

### 🔹 Step 8: Test Docker

```bash
sudo docker run hello-world
```

✅ You should see a message confirming Docker is installed correctly.

---

### 🔸 (Optional) Run Docker as Non-Root User

```bash
sudo usermod -aG docker $USER
```

> Log out and back in to apply group changes.

---

# ⚙️ Docker Compose Setup

Docker Compose lets you define and run multi-container Docker apps with a single command.

---

### 📝 Step 1: Create a File Named `docker-compose.yml`

This file defines your services and configurations.

---

### 🧱 Step 2: Basic Structure

```yaml
version: '3.8'

services:
  service_name:  # e.g., web, db
    image: image_name:tag
    ports:
      - "8080:80"
    volumes:
      - ./host_path:/container_path
    environment:
      - VAR_NAME=value
    restart: unless-stopped
```

---

### 🌐 Step 3: Example — Nginx + MySQL Stack

```yaml
version: '3.8'

services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    restart: unless-stopped

  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: examplepassword
    volumes:
      - db-data:/var/lib/mysql
    restart: unless-stopped

volumes:
  db-data:
```

---

### ▶️ Step 4: Run Docker Compose

```bash
docker-compose up -d
```

* `up` — starts services.
* `-d` — runs in detached/background mode.

To stop the stack:

```bash
docker-compose down
```

---

### 💡 Tips

* YAML is indentation-sensitive — use spaces, not tabs!
* Keep your `docker-compose.yml` in the project root.
* For advanced setups, define custom **networks** and **volumes** at the bottom.
* Official reference: [Docker Compose File Reference](https://docs.docker.com/compose/compose-file/)

---
