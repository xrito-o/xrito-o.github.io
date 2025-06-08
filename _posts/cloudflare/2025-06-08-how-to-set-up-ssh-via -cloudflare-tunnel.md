---
title: "How to Set Up SSH via Cloudflare Tunnel"
date: 2025-06-08-02:51:52
categories: [cloudflare]
tags: [cloudflare]
image:
  path: /assets/img/headers/cloudflare.png
---

complete guide to **Set Up SSH via Cloudflare Tunnel** using the `cloudflared` tool:

---

### ✅ Step-by-Step: SSH via Cloudflare Tunnel

---

### **1. Add a Public Hostname in Cloudflare Zero Trust**

Go to the **Cloudflare Zero Trust dashboard** → **Access** → **Tunnels** → Your tunnel → **Public Hostname** → **Add a Public Hostname**:

* **Subdomain**: `ssh1`
* **Domain**: `xrito.xyz`
* **Type**: `SSH`
* **URL**: `192.168.0.xxx:22` *(replace with your internal IP and SSH port)*

Make sure `cloudflared` is installed and running as a service on the server at `192.168.0.xxx`.

---

### **2. Install `cloudflared`**

**On Windows:**

Download the latest `.exe` from GitHub:
👉 [https://github.com/cloudflare/cloudflared/releases](https://github.com/cloudflare/cloudflared/releases)

Place it somewhere in your system `PATH`, e.g., `C:\Windows\System32\`.

**On Linux:**

```bash
wget https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64.deb
sudo dpkg -i cloudflared-linux-amd64.deb
```

Or with curl (alternative):

```bash
sudo mkdir -p /usr/local/bin
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
sudo mv cloudflared /usr/local/bin/
sudo chmod +x /usr/local/bin/cloudflared
```

---

### **3. SSH Command via Cloudflare Tunnel**

From the **client machine**, use this format to SSH into the server behind the tunnel:

```bash
ssh -o ProxyCommand="cloudflared access ssh --hostname %h" root@ssh1.xrito.xyz
```

🔒 This will securely tunnel the SSH traffic through Cloudflare Access, which provides additional access control and DDoS protection.

---

### ✅ Tips

* Make sure your SSH server (`sshd`) is running and accessible on `192.168.0.100:22` on your internal network.
* If Access policies are enabled, log in once via browser to authorize your SSH session (`cloudflared access login`).

---

