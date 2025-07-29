---
title: "Header File Libraries In C"
date: 2025-03-27-16:50:21
categories: [C programming]
tags: [C programming, Header File Libraries]
hidden: true
image:
  path: /assets/img/headers/c-programming.png
---

# **C Header File Libraries – Complete Guide**

## **1. What is a Header File?**

A **header file** in C contains:

* Function **declarations** (prototypes)
* **Macros** and constants
* **Type definitions**

They allow you to use pre-written code without rewriting it.

💡 **Think of it as a toolbox** — it gives you ready-made tools (functions) so you don’t have to build them yourself.

---

## **2. Common C Header Files**

| Header File   | Purpose & Common Functions                                           |
| ------------- | -------------------------------------------------------------------- |
| `<stdio.h>`   | Standard input/output → `printf()`, `scanf()`, `fopen()`, `fclose()` |
| `<stdlib.h>`  | Memory management → `malloc()`, `free()`, `exit()`                   |
| `<string.h>`  | String handling → `strlen()`, `strcpy()`, `strcmp()`                 |
| `<math.h>`    | Math functions → `sqrt()`, `pow()`, `sin()`, `cos()`                 |
| `<ctype.h>`   | Character handling → `toupper()`, `isdigit()`, `isalpha()`           |
| `<time.h>`    | Date & time → `time()`, `clock()`, `difftime()`                      |
| `<stdbool.h>` | Boolean type → `true`, `false`                                       |

---

## **3. Creating a Custom Header File**

You can make your own header file to organize code better.

{% include embed/youtube.html id='tOQZlD-0Scc' %}

### **Step 1 – Create a header file (`myheader.h`)**

```c
#ifndef MYHEADER_H   // Prevents multiple inclusion
#define MYHEADER_H

void sayHello();     // Function prototype

#endif
```

---

### **Step 2 – Create the implementation file (`myheader.c`)**

```c
#include <stdio.h>
#include "myheader.h" // Include your custom header

void sayHello() {
    printf("Hello! I am your custom function!\n");
}
```

---

### **Step 3 – Create the main program (`main.c`)**

```c
#include <stdio.h>
#include "myheader.h" // Use the custom header

int main() {
    sayHello(); // Call the function
    return 0;
}
```

---

### **Step 4 – Compile and Run**

```bash
gcc main.c myheader.c -o main
./main
```

✅ Output:

```
Hello! I am your custom function!
```

---
