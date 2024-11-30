---
title: "Prevent Laptop from Turning Off the Screen When Lid is Closed"
date: 2024-12-01
categories: [Laptop]
tags: [Linux,Tips,Laptop]
description: Instructions to keep your laptop screen on when closed.
---


This guide explains how to disable the screen from turning off when the laptop lid is closed on a remote machine.
# ⚠️ Important: Do this over SSH! ⚠️

### Step 1: Modify logind configuration

Open the `logind.conf` file with a text editor like `nano`:

```bash
sudo nano /etc/systemd/logind.conf
```

Add or modify the following lines:

```bash
HandleLidSwitch=ignore
HandleLidSwitchDocked=ignore
```

### Step 2: Restart `systemd-logind`

To apply the changes, restart the `systemd-logind` service:

```bash
sudo systemctl restart systemd-logind
```

### Step 3: Install `vbetool`

Install `vbetool` to control the display power management:

```bash
sudo apt install vbetool
```

### Step 4: Manually Turn Off/On the Display

To turn off the display:

```bash
vbetool dpms off
```

To turn it back on:

```bash
vbetool dpms on
```

Now, the display will no longer automatically turn off when the lid is closed.
