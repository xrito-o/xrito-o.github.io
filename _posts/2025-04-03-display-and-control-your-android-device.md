---
title: "Display and control your Android device"
date: 2025-04-03-10:46:19
categories: [Util]
tags: [Android]
image:
  path: https://fabrikbrands.com/wp-content/uploads/Android-Logo-History-1.png
---

# [scrcpy](https://github.com/Genymobile/scrcpy)

This application mirrors Android devices (video and audio) connected via USB or
TCP/IP and allows control using the
computer's keyboard and mouse. It does not require _root_ access or an app
installed on the device. It works on _Linux_, _Windows_, and _macOS_.

![screenshot](https://github.com/Genymobile/scrcpy/raw/master/assets/screenshot-debian-600.jpg)

It focuses on:

- **lightness**: native, displays only the device screen
- **performance**: 30~120fps, depending on the device
- **quality**: 1920×1080 or above
- **low latency**: 35~70ms
- **low startup time**: ~1 second to display the first image
- **non-intrusiveness**: nothing is left installed on the Android device
- **user benefits**: no account, no ads, no internet required
- **freedom**: free and open source software

[lowlatency]: https://github.com/Genymobile/scrcpy/pull/646

Its features include:

- [audio forwarding](https://github.com/Genymobile/scrcpy/blob/master/doc/audio.md) (Android 11+)
- [recording](https://github.com/Genymobile/scrcpy/blob/master/doc/recording.md)
- [virtual display](https://github.com/Genymobile/scrcpy/blob/master/doc/virtual_display.md)
- mirroring with [Android device screen off](https://github.com/Genymobile/scrcpy/blob/master/doc/device.md#turn-screen-off)
- [copy-paste](https://github.com/Genymobile/scrcpy/blob/master/doc/control.md#copy-paste) in both directions
- [configurable quality](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md)
- [camera mirroring](https://github.com/Genymobile/scrcpy/blob/master/doc/camera.md) (Android 12+)
- [mirroring as a webcam (V4L2)](https://github.com/Genymobile/scrcpy/blob/master/doc/v4l2.md) (Linux-only)
- physical [keyboard][hid-keyboard] and [mouse][hid-mouse] simulation (HID)
- [gamepad](https://github.com/Genymobile/scrcpy/blob/master/doc/gamepad.md) support
- [OTG mode](https://github.com/Genymobile/scrcpy/blob/master/doc/otg.md)
- and more…

[hid-keyboard]: https://github.com/Genymobile/scrcpy/blob/master/doc/keyboard.md#physical-keyboard-simulation
[hid-mouse]: https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md#physical-mouse-simulation

## Prerequisites

The Android device requires at least API 21 (Android 5.0).

[Audio forwarding](https://github.com/Genymobile/scrcpy/blob/master/doc/audio.md) is supported for API >= 30 (Android 11+).

Make sure you [enabled USB debugging][enable-adb] on your device(s).

[enable-adb]: https://developer.android.com/studio/debug/dev-options#enable

On some devices (especially Xiaomi), you might get the following error:

```
java.lang.SecurityException: Injecting input events requires the caller (or the source of the instrumentation, if any) to have the INJECT_EVENTS permission.
```

In that case, you need to enable [an additional option][control] `USB debugging
(Security Settings)` (this is an item different from `USB debugging`) to control
it using a keyboard and mouse. Rebooting the device is necessary once this
option is set.

[control]: https://github.com/Genymobile/scrcpy/issues/70#issuecomment-373286323

Note that USB debugging is not required to run scrcpy in [OTG mode](doc/otg.md).

## Get the app

- [Linux](https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md)
- [Windows](doc/windows.md) (read [how to run](https://github.com/Genymobile/scrcpy/blob/master/doc/windows.md#run))
- [macOS](https://github.com/Genymobile/scrcpy/blob/master/doc/macos.md)

## Must-know tips

- [Reducing resolution](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md#size) may greatly improve performance
  (`scrcpy -m1024`)
- [_Right-click_](https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md#mouse-bindings) triggers `BACK`
- [_Middle-click_](https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md#mouse-bindings) triggers `HOME`
- <kbd>Alt</kbd>+<kbd>f</kbd> toggles [fullscreen](https://github.com/Genymobile/scrcpy/blob/master/doc/window.md#fullscreen)
- There are many other [shortcuts](https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md)

## Usage examples

There are a lot of options, [documented](https://github.com/Genymobile/scrcpy/blob/master/#user-documentation) in separate pages.
Here are just some common examples.

- Capture the screen in H.265 (better quality), limit the size to 1920, limit
  the frame rate to 60fps, disable audio, and control the device by simulating
  a physical keyboard:

  ```bash
  scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid
  scrcpy --video-codec=h265 -m1920 --max-fps=60 --no-audio -K  # short version
  ```

- Start VLC in a new virtual display (separate from the device display):

  ```bash
  scrcpy --new-display=1920x1080 --start-app=org.videolan.vlc
  ```

- Record the device camera in H.265 at 1920x1080 (and microphone) to an MP4
  file:

  ```bash
  scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4
  ```

- Capture the device front camera and expose it as a webcam on the computer (on
  Linux):

  ```bash
  scrcpy --video-source=camera --camera-size=1920x1080 --camera-facing=front --v4l2-sink=/dev/video2 --no-playback
  ```

- Control the device without mirroring by simulating a physical keyboard and
  mouse (USB debugging not required):

  ```bash
  scrcpy --otg
  ```

- Control the device using gamepad controllers plugged into the computer:

  ```bash
  scrcpy --gamepad=uhid
  scrcpy -G  # short version
  ```

## User documentation

The application provides a lot of features and configuration options. They are
documented in the following pages:

- [Connection](https://github.com/Genymobile/scrcpy/blob/master/doc/connection.md)
- [Video](https://github.com/Genymobile/scrcpy/blob/master/doc/video.md)
- [Audio](https://github.com/Genymobile/scrcpy/blob/master/doc/audio.md)
- [Control](https://github.com/Genymobile/scrcpy/blob/master/doc/control.md)
- [Keyboard](https://github.com/Genymobile/scrcpy/blob/master/doc/keyboard.md)
- [Mouse](https://github.com/Genymobile/scrcpy/blob/master/doc/mouse.md)
- [Gamepad](https://github.com/Genymobile/scrcpy/blob/master/doc/gamepad.md)
- [Device](https://github.com/Genymobile/scrcpy/blob/master/doc/device.md)
- [Window](https://github.com/Genymobile/scrcpy/blob/master/doc/window.md)
- [Recording](https://github.com/Genymobile/scrcpy/blob/master/doc/recording.md)
- [Virtual display](https://github.com/Genymobile/scrcpy/blob/master/doc/virtual_display.md)
- [Tunnels](https://github.com/Genymobile/scrcpy/blob/master/doc/tunnels.md)
- [OTG](https://github.com/Genymobile/scrcpy/blob/master/doc/otg.md)
- [Camera](https://github.com/Genymobile/scrcpy/blob/master/doc/camera.md)
- [Video4Linux](https://github.com/Genymobile/scrcpy/blob/master/doc/v4l2.md)
- [Shortcuts](https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md)

## Resources

- [FAQ](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md)
- [Translations][wiki] (not necessarily up to date)
- [Build instructions](https://github.com/Genymobile/scrcpy/blob/master/doc/build.md)
- [Developers](https://github.com/Genymobile/scrcpy/blob/master/doc/develop.md)

[wiki]: https://github.com/Genymobile/scrcpy/wiki

## Articles

- [Introducing scrcpy][article-intro]
- [Scrcpy now works wirelessly][article-tcpip]
- [Scrcpy 2.0, with audio][article-scrcpy2]

[article-intro]: https://blog.rom1v.com/2018/03/introducing-scrcpy/
[article-tcpip]: https://www.genymotion.com/blog/open-source-project-scrcpy-now-works-wirelessly/
[article-scrcpy2]: https://blog.rom1v.com/2023/03/scrcpy-2-0-with-audio/
