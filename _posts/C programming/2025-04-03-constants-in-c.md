---
title: "Constants in C"
date: 2025-04-03-14:24:45
categories: [C programming]
tags: [C programming]
hidden: true
image:
    path: /assets/img/headers/c-programming.png
---

# **C Constants – Complete Guide**

## **1. What is a Constant?**

A **constant** in C is a value that cannot be changed during program execution.
Constants make programs **more readable, maintainable, and safe**.

---

## **2. Types of Constants**

Constants are broadly classified into:

1. **Primary Constants** – Basic, fundamental constants.
2. **Secondary Constants** – Derived from primary constants.

---

## **3. Primary vs. Secondary Constants – Quick Table**

| Category                | Type                           | Example                         |
| ----------------------- | ------------------------------ | ------------------------------- |
| **Primary Constants**   | Integer Constant               | `10`, `-3`, `0xA`               |
|                         | Real Constant (Floating Point) | `3.14`, `-5.6`, `2.5e3`         |
|                         | Character Constant             | `'A'`, `'9'`, `'%'`             |
| **Secondary Constants** | String Constant                | `"Hello"`                       |
|                         | Array Constant                 | `{1, 2, 3}`                     |
|                         | Pointer Constant               | `int *const p;`                 |
|                         | Enumeration Constant (`enum`)  | `enum Colors { RED, GREEN };`   |
|                         | Structure Constant (`struct`)  | `struct Point { const int x; }` |
|                         | Macro Constant (`#define`)     | `#define MAX 100`               |

---

## **4. Primary Constants**

### **4.1 Integer Constants**

* Whole numbers without a decimal point.
* Can be positive, negative, or zero.
* Number systems:

  * **Decimal (Base 10)** → `1`, `-43`, `500`
  * **Octal (Base 8)** → Starts with `0` → `077` (63 in decimal)
  * **Hexadecimal (Base 16)** → Starts with `0x` → `0x1A` (26 in decimal)

**Example:**

```c
#include <stdio.h>
int main() {
    const int age = 25;
    printf("Age: %d\n", age);
    return 0;
}
```

---

### **4.2 Real Constants (Floating-Point)**

* Contain digits **and** a decimal point.
* Can be in:

  * **Fractional form** → `3.14`, `-54.5`
  * **Exponential form** → `2.5e3` (2500), `3.2E-4` (0.00032)

**Example:**

```c
#include <stdio.h>
int main() {
    const float PI = 3.1416;
    printf("Value of PI: %.4f\n", PI);
    return 0;
}
```

---

### **4.3 Character Constants**

* A single character in single quotes (`' '`).
* Stored internally as an **ASCII integer value**.

**Example:**

```c
#include <stdio.h>
int main() {
    const char grade = 'A';
    printf("Grade: %c\n", grade);
    return 0;
}
```

---

## **5. Secondary Constants**

### **5.1 String Constants**

* A sequence of characters in double quotes (`" "`).
* Automatically ends with `\0` (null character).

**Example:**

```c
#include <stdio.h>
int main() {
    const char message[] = "Hello, World!";
    printf("%s\n", message);
    return 0;
}
```

---

### **5.2 Array Constants**

* A fixed collection of constant values.

**Example:**

```c
#include <stdio.h>
int main() {
    const int numbers[] = {10, 20, 30};
    printf("First element: %d\n", numbers[0]);
    return 0;
}
```

---

### **5.3 Pointer Constants**

* A pointer whose **address cannot change** after initialization.

**Example:**

```c
#include <stdio.h>
int main() {
    int value = 50;
    int *const ptr = &value;
    *ptr = 100; // Allowed (change value)
    printf("Value: %d\n", value);
    return 0;
}
```

---

### **5.4 Enumeration Constants (`enum`)**

* Named integer constants for better readability.

**Example:**

```c
#include <stdio.h>
enum Days { MON = 1, TUE, WED, THU, FRI, SAT, SUN };
int main() {
    enum Days today = WED;
    printf("Day number: %d\n", today);
    return 0;
}
```

---

### **5.5 Structure Constants (`struct`)**

* Immutable structure members using `const`.

**Example:**

```c
#include <stdio.h>
struct Point {
    const int x;
    const int y;
};
int main() {
    struct Point p = {10, 20};
    printf("Point: (%d, %d)\n", p.x, p.y);
    return 0;
}
```

---

### **5.6 Macro Constants (`#define`)**

* Defined **before compilation** using the preprocessor.

**Example:**

```c
#include <stdio.h>
#define PI 3.1416
int main() {
    printf("PI: %.4f\n", PI);
    return 0;
}
```

