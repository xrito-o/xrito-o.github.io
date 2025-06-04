---
title: "Determining Attached Hardware and Computer Peripherals "
date: 2025-06-04-14:36:52
categories: [Linux Fundamentals]
tags: [Linux,Linux Fundamentals]
hidden: true
---

Here's a concise and structured guide for **Determining Attached Hardware and Computer Peripherals** on Linux, including system components like `sysfs`, `udev`, and hardware management tools:

---

## 🔍 Determining Attached Hardware and Computer Peripherals

---

### 1. **🧠 How Linux Detects Hardware**

Linux uses several key components to detect and manage hardware:

| Component   | Description                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------ |
| **`sysfs`** | A virtual filesystem (usually at `/sys`) exposing kernel device details.                         |
| **`udev`**  | The device manager for the Linux kernel; dynamically handles device nodes in `/dev`.             |
| **`dbus`**  | Message bus system allowing applications and services to communicate, including hardware events. |

> Example: To view a USB device's path:

```bash
ls /sys/bus/usb/devices/
```

---

### 2. **🛠️ Tools to List Hardware Info**

| Command             | Purpose                                                                                            |                                               |
| ------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `lspci`             | Lists PCI devices (e.g., graphics, network cards).                                                 |                                               |
| `lsusb`             | Lists USB devices.                                                                                 |                                               |
| `lsblk`             | Lists block devices (disks, partitions).                                                           |                                               |
| `lscpu`             | Shows CPU architecture details.                                                                    |                                               |
| `lshw`              | Lists all hardware (requires `sudo`).                                                              |                                               |
| `inxi -Fx`          | A comprehensive system/hardware report (install with `sudo pacman -S inxi` or `apt install inxi`). |                                               |
| `hwinfo`            | Detailed hardware information (may need installation).                                             |                                               |
| \`dmesg             | grep\`                                                                                             | Useful for boot-time hardware detection logs. |
| `cat /proc/cpuinfo` | Detailed CPU info.                                                                                 |                                               |
| `cat /proc/meminfo` | RAM info.                                                                                          |                                               |

---

### 3. **🔌 Tools to Manipulate USB Devices**

* **modprobe**: Load or remove kernel modules.

Examples:

```bash
sudo modprobe usb_storage     # Load USB storage module
sudo modprobe -r usb_storage  # Remove it
```

Check modules:

```bash
lsmod | grep usb
```

---

### 4. **💽 Manually Mount and Unmount Filesystems**

1. **List devices:**

```bash
lsblk
```

2. **Mount a device:**

```bash
sudo mount /dev/sdX1 /mnt
```

3. **Unmount:**

```bash
sudo umount /mnt
```

> Make sure the mount point `/mnt` exists, or create it using `mkdir`.

---

### 5. **🔁 Automatically Mount Filesystems on Boot**

Edit `/etc/fstab` — Format:

```
<device>   <mount_point>   <filesystem_type>   <options>   <dump>   <pass>
```

**Example:**

```
UUID=abcd-1234  /mnt/usbdrive  ext4  defaults  0  2
```

* Get UUID:

```bash
blkid
```

> Be careful: Mistakes in `/etc/fstab` can prevent your system from booting. Test with:

```bash
sudo mount -a
```

---

