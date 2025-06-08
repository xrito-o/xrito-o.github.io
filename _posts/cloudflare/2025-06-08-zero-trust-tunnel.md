---
title: "Zero Trust Tunnel"
date: 2025-06-08-01:43:18
categories: [cloudflare]
tags: [cloudflare]
image:
  path: /assets/img/headers/cloudflare.png
---
Here's a clean, complete documentation for setting up a Cloudflare Tunnel using Docker Compose and exposing a local service like Portainer on a public subdomain (`protainer.xrito.xyz`).

---

# 🌐 Cloudflare Tunnel Setup (Docker Compose)

This guide explains how to expose a local web service (e.g., **Portainer**) to the internet securely using **Cloudflare Tunnel** and **Docker Compose**.

---

## 🛠️ Prerequisites

* A **Cloudflare** account
* Your domain (e.g., `xrito.xyz`) added to Cloudflare
* Docker + Docker Compose installed on your machine
* A web service running locally (e.g., Portainer on `http://192.168.0.100:9000`)

---

## 🔧 Step 1: Create Tunnel in Cloudflare Zero Trust

1. Go to [Cloudflare Zero Trust dashboard](https://one.dash.cloudflare.com).
2. Navigate to:

   ```
   Access > Tunnels > Create a Tunnel
   ```
3. **Name your tunnel** (e.g., `portainer-tunnel`)
4. Choose **Docker** as the installation method.

---

## 📦 Step 2: Docker Compose Setup

1. Copy the token provided by Cloudflare.
2. Create a `docker-compose.yml` file:

```yaml
version: '3.8'

services:
  cloudflare-tunnel:
    image: cloudflare/cloudflared:latest
    container_name: cloudflare-tunnel
    restart: unless-stopped
    command: tunnel --no-autoupdate run --token <your-token>
```

> 🔁 Replace `<your-token>` with the actual token from Cloudflare.

3. Start the tunnel:

```bash
docker compose up -d
```

---

## 🌍 Step 3: Public Hostname Configuration

1. Go back to the **Tunnel configuration page** in Cloudflare.

2. Add a **Public Hostname**:

   * **Subdomain**: `protainer`
   * **Domain**: `xrito.xyz`
   * **Type**: `HTTP`
   * **URL**: `http://192.168.0.100:9000` (replace with your local IP and service port)

3. Click **Save hostname** and complete the setup.

---

## ✅ Result

You can now access your local service from anywhere using:

```
https://protainer.xrito.xyz
```

Cloudflare will securely route the request to your local Portainer server through the tunnel.

---

## 📄 Notes

* Make sure your local service (e.g., Portainer) is **reachable on the specified IP and port**.
* If using a firewall or NAT, ensure local access is possible.
* No need to open ports on your router — Cloudflare Tunnel takes care of the secure connection.

---

Let me know if you want this as a downloadable `.md` or `.pdf` file.
