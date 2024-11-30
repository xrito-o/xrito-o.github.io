---
title: "WireGuard Installation on Arch Linux"
date: 2024-12-01
categories: [Linux Documentations]
tags: [Linux,Arch,Tips,VPN]
description: Short summary of the post.
---


## Step-by-Step Guide to Install WireGuard on Arch Linux

### 1. Update Your System

Make sure your system is up-to-date:

```bash
sudo pacman -Syu
```

### 2. Install WireGuard

Install the WireGuard tools:

```bash
sudo pacman -S wireguard-tools
```

### 3. Install OpenResolv

Install `openresolv` to manage DNS for your WireGuard connection:

```bash
sudo pacman -S openresolv
```

### 4. Generate Keys

Generate a private and public key for your WireGuard configuration:

```bash
wg genkey | tee privatekey | wg pubkey > publickey
```

### 5. Create the WireGuard Configuration

Create a configuration file for the WireGuard interface (e.g., `wg0.conf`):

```bash
sudo mkdir /etc/wireguard
sudo nano /etc/wireguard/wg0.conf
```

Add the following configuration (adjust the `Address`, `PublicKey`, and `Endpoint`):

```ini
[Interface]
PrivateKey = <Your_Private_Key>
Address = 192.168.6.165/32
DNS = 1.1.1.1, 8.8.8.8  # Optional, can be commented out if using systemd-resolved

[Peer]
PublicKey = <Peer_Public_Key>
Endpoint = <Peer_Endpoint>:<Port>
AllowedIPs = 0.0.0.0/0, ::/0
```

Replace `<Your_Private_Key>`, `<Peer_Public_Key>`, and `<Peer_Endpoint>:<Port>` with your actual keys and the server's details.

### 6. Start the WireGuard Connection

To bring up the WireGuard interface, use:

```bash
sudo wg-quick up wg0
```

### 7. Enable WireGuard on Boot

To ensure the WireGuard connection starts automatically on boot:

```bash
sudo systemctl enable wg-quick@wg0
```

### 8. Turn Off the WireGuard Connection

To bring down the WireGuard interface, use:

```bash
sudo wg-quick down wg0
```

## Summary of Commands

- **Update System:** `sudo pacman -Syu`
- **Install WireGuard:** `sudo pacman -S wireguard-tools`
- **Install OpenResolv:** `sudo pacman -S openresolv`
- **Generate Keys:** `wg genkey | tee privatekey | wg pubkey > publickey`
- **Start Connection:** `sudo wg-quick up wg0`
- **Enable on Boot:** `sudo systemctl enable wg-quick@wg0`
- **Turn Off Connection:** `sudo wg-quick down wg0`
