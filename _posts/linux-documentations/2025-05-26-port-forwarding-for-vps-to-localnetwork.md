---
title: "Port Forwarding For Vps To Localnetwork"
date: 2025-05-26-01:06:24
categories: [Linux Documentations]
tags: [Linux,Vpn]
image:
  path: /assets/img/headers/wireguard.webp
---

Here's a full documentation based on our conversation, which includes the creation of port forwarding and deletion scripts, as well as the `pretty-nat` script for displaying `iptables` rules in a more readable format.

---

# **Port Forwarding Setup & Automation Documentation**

This documentation covers the following:

1. **Port Forwarding Script**
2. **Port Forward Deletion Script**
3. **`pretty-nat` Script for Displaying `iptables` Rules**
4. **How to Use**

---

## 1. **Port Forwarding Script**

This script automates the process of forwarding a port from your VPS to your local machine, allowing external traffic on your VPS to reach a specific local IP and port.

### **Script: `port-forward.sh`**

```bash
#!/bin/bash

# ================================================
# Port Forwarding Script (Interactive Version)
# ================================================
# This script prompts you for the local port, VPS port, 
# and the local IP to forward traffic to the VPS.

# ================================================
# User Input for Local Port, VPS Port, and Local IP
# ================================================
echo "🔧 Welcome to the Port Forwarding Script"
read -p "Enter the local port to forward (e.g., 8000): " LOCAL_PORT
read -p "Enter the VPS port to forward to (e.g., 8001): " VPS_PORT
read -p "Enter the local IP address (e.g., 10.26.26.3): " LOCAL_IP

# Check if the required arguments are provided
if [ -z "$LOCAL_PORT" ] || [ -z "$VPS_PORT" ] || [ -z "$LOCAL_IP" ]; then
    echo "❌ All fields (local port, VPS port, local IP) are required!"
    exit 1
fi

# ================================================
# Adding iptables Rules
# ================================================
echo "🔧 Adding iptables rules for local port $LOCAL_PORT to VPS port $VPS_PORT (local IP: $LOCAL_IP)..."

# Forward incoming traffic on the local port to the local IP and VPS port
sudo iptables -t nat -A PREROUTING -p tcp --dport "$VPS_PORT" -j DNAT --to-destination "$LOCAL_IP:$LOCAL_PORT"

# Masquerade the source IP so the destination can reply
sudo iptables -t nat -A POSTROUTING -d "$LOCAL_IP" -p tcp --dport "$LOCAL_PORT" -j MASQUERADE

# ================================================
# Success Message
# ================================================
echo "✅ Port forwarding successfully added!"
echo "Incoming traffic on VPS port $VPS_PORT is now forwarded to local IP $LOCAL_IP:$LOCAL_PORT."
```

### **How to Use**:

1. **Create the script**:

   ```bash
   nano ~/port-forward.sh
   ```

   Paste the code into the editor.

2. **Make the script executable**:

   ```bash
   chmod +x ~/port-forward.sh
   ```

3. **Optional: Move it to `/usr/local/bin`**:

   ```bash
   sudo mv ~/port-forward.sh /usr/local/bin/port-forward
   ```

4. **Run the script**:

   ```bash
   sudo port-forward
   ```

The script will prompt you for the local port, VPS port, and local IP and will add the necessary iptables rules.

---

## 2. **Port Forward Deletion Script**

This script allows you to delete previously configured port forwarding rules by providing the local port, VPS port, and local IP.

### **Script: `port-forward-delete.sh`**

```bash
#!/bin/bash

# ================================================
# Port Forward Deletion Script (Interactive Version)
# ================================================
# This script prompts you for the local port, VPS port, 
# and the local IP to delete the corresponding iptables rule.

# ================================================
# User Input for Local Port, VPS Port, and Local IP
# ================================================
echo "🔧 Welcome to the Port Forward Deletion Script"
read -p "Enter the local port to delete (e.g., 8000): " LOCAL_PORT
read -p "Enter the VPS port to delete (e.g., 8001): " VPS_PORT
read -p "Enter the local IP address (e.g., 10.26.26.3): " LOCAL_IP

# Check if the required arguments are provided
if [ -z "$LOCAL_PORT" ] || [ -z "$VPS_PORT" ] || [ -z "$LOCAL_IP" ]; then
    echo "❌ All fields (local port, VPS port, local IP) are required!"
    exit 1
fi

# ================================================
# Deleting iptables Rules
# ================================================
echo "🔧 Deleting iptables rules for local port $LOCAL_PORT to VPS port $VPS_PORT (local IP: $LOCAL_IP)..."

# Delete the PREROUTING rule for the specified local and VPS port
sudo iptables -t nat -D PREROUTING -p tcp --dport "$VPS_PORT" -j DNAT --to-destination "$LOCAL_IP:$LOCAL_PORT"

# Delete the POSTROUTING rule for the specified destination IP and port
sudo iptables -t nat -D POSTROUTING -d "$LOCAL_IP" -p tcp --dport "$LOCAL_PORT" -j MASQUERADE

# ================================================
# Success Message
# ================================================
echo "✅ Port forwarding deleted!"
echo "Port forwarding from VPS port $VPS_PORT to local IP $LOCAL_IP:$LOCAL_PORT has been removed."
```

### **How to Use**:

1. **Create the script**:

   ```bash
   nano ~/port-forward-delete.sh
   ```

   Paste the code into the editor.

2. **Make the script executable**:

   ```bash
   chmod +x ~/port-forward-delete.sh
   ```

3. **Optional: Move it to `/usr/local/bin`**:

   ```bash
   sudo mv ~/port-forward-delete.sh /usr/local/bin/port-forward-delete
   ```

4. **Run the script**:

   ```bash
   sudo port-forward-delete
   ```

This script will prompt you for the local port, VPS port, and local IP, then delete the corresponding iptables rules.

---

## 3. **`pretty-nat` Script**

This script formats the output of the `iptables` command to make it more readable and visually appealing. It adds custom headers and uses emojis for better readability.

### **Script: `pretty-nat.sh`**

```bash
#!/bin/bash

# ================================================
# pretty-nat: Format iptables NAT Rules Output
# ================================================
# This script formats the output of `iptables -t nat -L -n -v --line-numbers` 
# into a more readable and visually appealing format.

echo "============================="
echo "🔥 Chain PREROUTING (policy ACCEPT)"
echo "============================="
sudo iptables -t nat -L PREROUTING -n -v --line-numbers | column -t

echo
echo "==========================="
echo "📥 Chain INPUT (policy ACCEPT)"
echo "==========================="
sudo iptables -t nat -L INPUT -n -v --line-numbers | column -t

echo
echo "==========================="
echo "📤 Chain OUTPUT (policy ACCEPT)"
echo "==========================="
sudo iptables -t nat -L OUTPUT -n -v --line-numbers | column -t

echo
echo "==========================="
echo "🔁 Chain POSTROUTING (policy ACCEPT)"
echo "==========================="
sudo iptables -t nat -L POSTROUTING -n -v --line-numbers | column -t
```

### **How to Use**:

1. **Create the script**:

   ```bash
   nano ~/pretty-nat.sh
   ```

   Paste the code into the editor.

2. **Make the script executable**:

   ```bash
   chmod +x ~/pretty-nat.sh
   ```

3. **Optional: Move it to `/usr/local/bin`**:

   ```bash
   sudo mv ~/pretty-nat.sh /usr/local/bin/pretty-nat
   ```

4. **Run the script**:

   ```bash
   sudo pretty-nat
   ```

The output will be formatted with headings and will display the `iptables` NAT rules in a much more readable format with emojis.

---

## 4. **How to Use All Scripts Together**

### **To Add a Port Forward:**

```bash
sudo port-forward
```

### **To Delete a Port Forward:**

```bash
sudo port-forward-delete
```

### **To View NAT Rules in a Readable Format:**

```bash
sudo pretty-nat
```

---

### 💡 **Conclusion**

Now you have automated scripts to add and delete port forwarding with the option to view iptables NAT rules in a neat, formatted style. You can customize these scripts further based on your needs. Let me know if you need any further assistance!
