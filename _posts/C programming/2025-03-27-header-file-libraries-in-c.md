---
title: "Header File Libraries In C"
date: 2025-03-27-16:50:21
categories: [C programming]
tags: [C programming, Header File Libraries]
hidden: true
image:
  path: /assets/img/headers/c-programming.png
---

## **Header File Libraries**

A header file in C is a file that contains function declarations, macros, and definitions. It helps you use built-in functions without writing them yourself.

💡 Think of a header file like a toolbox—it gives you ready-made tools (functions) so you don’t have to build them from scratch.

#### **Common C Header Files & Their Uses**

| **Header File**   | **What It Does**                                  |
| ----------------- | ------------------------------------------------- |
| **`<stdio.h>`**   | Input & output (e.g.,`printf`, `scanf`)           |
| **`<stdlib.h>`**  | Memory management (`malloc`, `free`), conversions |
| **`<string.h>`**  | String handling (`strlen`, `strcpy`, `strcmp`)    |
| **`<math.h>`**    | Math operations (`sqrt`, `pow`, `sin`, `cos`)     |
| **`<ctype.h>`**   | Character handling (`toupper`, `isdigit`)         |
| **`<time.h>`**    | Date & time functions (`time`, `clock`)           |
| **`<stdbool.h>`** | Boolean values (`true`, `false`)                  |

## **Making A Custom Header File Libraries**

{% include embed/youtube.html id='tOQZlD-0Scc' %}

**Create a file named** `myheader.h`

```c
#ifndef MYHEADER_H  // This makes sure the spellbook isn't loaded twice
#define MYHEADER_H

void sayHello();  // Just telling the program: "I have a spell called sayHello!"

#endif

```

**Create another file named** `myheader.c`

```c
#include <stdio.h>   // We need this to use printf
#include "myheader.h"  // Import the spellbook

void sayHello() {
    printf("Hello! I am your magic spell!\n");
}
```

**Create a third file named** `main.c`

```c
#include <stdio.h>
#include "myheader.h"  // Load the spellbook!

int main() {
    sayHello();  // Use the magic spell
    return 0;
}
```

**Run this in the terminal:**

```bash
gcc main.c myheader.c -o main
./main
```
