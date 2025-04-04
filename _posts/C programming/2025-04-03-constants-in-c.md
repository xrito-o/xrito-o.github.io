---
title: "Constants in C"
date: 2025-04-03-14:24:45
categories: [C programming]
tags: [C programming]
image:
    path: /assets/img/headers/c-programming.png
---

Constants are fixed values that do not change during the execution of a program. They are used to define values that remain constant throughout the program, ensuring better readability, maintainability, and security of the code.

---

### **Types of Constants**

Constants in C are broadly classified into two categories:

1. **Primary Constants**
2. **Secondary Constants**

---

## **Comparison Table: Primary vs. Secondary Constants**
---


|                   **Category**                   | **Type**                                                     | **Example**                     |
| :-------------------------------------------------: | -------------------------------------------------------------- | --------------------------------- |
|   [**Primary Constants**](#1-primary-constants)   | [Integer Constant](#11-integer-constants)                    | `10`, `-3`, `0xA`               |
|                                                   | [Real Constant](#12-real-constants-floating-point-constants) | `3.14`, `-5.6`                  |
|                                                   | [Character Constant](#13-character-constants)                | `'A'`, `'9'`                    |
| [**Secondary Constants**](#2-secondary-constants) | [String Constant](#21-string-constants)                      | `"Hello"`                       |
|                                                   | [Array Constant](#22-array-constants)                        | `{1, 2, 3}`                     |
|                                                   | [Pointer Constant](#23-pointer-constants)                    | `int *const p;`                 |
|                                                   | [Enumeration (`enum`)](#24-enumeration-constants-enum)       | `enum Colors {RED, GREEN};`     |
|                                                   | [Structure Constant](#25-structure-constants-struct)         | `struct Point { const int x; }` |
|                                                   | [Macro Constant](#26-macro-constants-definehttps:/)          | `#define MAX 100`               |

---

# **1. Primary Constants**
---

Primary constants are fundamental values that remain unchanged. These include:

#### **1.1 Integer Constants**

---

- An integer constant contains only digits and does not include any decimal point.
- It can be positive, negative, or zero.
- It can be represented in different number systems:
  - **Decimal (Base 10):** Example: `1`, `-43`, `500`
  - **Octal (Base 8):** Starts with `0`. Example: `077` (equals 63 in decimal)
  - **Hexadecimal (Base 16):** Starts with `0x`. Example: `0x1A` (equals 26 in decimal)

##### **Example in C:**

```c
#include <stdio.h>

int main() {
    const int age = 25;
    printf("Age: %d\n", age);
    return 0;
}
```

---

#### **1.2 Real Constants (Floating Point Constants)**
---

- A real constant (or floating-point constant) contains digits and must have a decimal point.
- It can be expressed in:
  - **Fractional form:** Example: `3.1416`, `-54.5`
  - **Exponential form:** Example: `2.5e3` (equals `2500`), `3.2E-4` (equals `0.00032`)

##### **Example in C:**

```c
#include <stdio.h>

int main() {
    const float PI = 3.1416;
    printf("Value of PI: %f\n", PI);
    return 0;
}
```

---

#### **1.3 Character Constants**
---

- A character constant is a single character enclosed in single quotes (`' '`).
- Examples: `'A'`, `'1'`, `'%'`, `'z'`
- Each character constant is internally stored as an integer (ASCII value).

##### **Example in C:**

```c
#include <stdio.h>

int main() {
    const char grade = 'A';
    printf("Grade: %c\n", grade);
    return 0;
}
```

---

# **2. Secondary Constants**


Secondary constants are derived from primary constants. These include:

### **2.1 String Constants**
---

- A string constant is a sequence of characters enclosed in double quotes (`" "`).
- It automatically ends with a null character (`\0`).

#### **Example in C:**

```c
#include <stdio.h>

int main() {
    const char message[] = "Hello, World!";
    printf("%s\n", message);
    return 0;
}
```

---

### **2.2 Array Constants**
---

- An array constant is a fixed collection of values stored in contiguous memory locations.

#### **Example in C:**

```c
#include <stdio.h>

int main() {
    const int numbers[] = {10, 20, 30};
    printf("First Element: %d\n", numbers[0]);
    return 0;
}
```

---

### **2.3 Pointer Constants**
---

- A pointer constant is a pointer whose memory address cannot be changed.

#### **Example in C:**

```c
#include <stdio.h>

int main() {
    int value = 50;
    int *const ptr = &value;
    *ptr = 100;  // Allowed
    // ptr = &new_value;  // Not Allowed
    printf("Value: %d\n", value);
    return 0;
}
```

---

### **2.4 Enumeration Constants (`enum`)**
---

- An enumeration is a set of named integer constants.

#### **Example in C:**

```c
#include <stdio.h>

enum Days { MON = 1, TUE, WED, THU, FRI, SAT, SUN };

int main() {
    enum Days today = WED;
    printf("Today is day number: %d\n", today);
    return 0;
}
```

---

### **2.5 Structure Constants (`struct`)**
---

- A structure constant allows defining immutable fields inside a struct.

#### **Example in C:**

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

### **2.6 Macro Constants (`#define`)**
---

- A preprocessor directive to define constants before compilation.
  {% include embed/youtube.html id='BVnNg20AuYU?start=25&end=143tOQZlD-0Sc' %}

#### **Example in C:**

```c
#include <stdio.h>

#define PI 3.1416

int main() {
    printf("PI: %f\n", PI);
    return 0;
}
```

---
