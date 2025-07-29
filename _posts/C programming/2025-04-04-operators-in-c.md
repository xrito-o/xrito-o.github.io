---
title: "Operators in C"
date: 2025-04-04-04:10:35
categories: [C programming]
tags: [C programming]
hidden: true
image:
  path: /assets/img/headers/c-programming.png
---




# **C Operators – Complete Guide**

## **1. Arithmetic Operators**

Arithmetic operators perform basic mathematical calculations.

| Operator | Name           | Description                        | Example       |
| -------- | -------------- | ---------------------------------- | ------------- |
| `+`      | Addition       | Adds two values                    | `x + y`       |
| `-`      | Subtraction    | Subtracts one value from another   | `x - y`       |
| `*`      | Multiplication | Multiplies two values              | `x * y`       |
| `/`      | Division       | Divides one value by another       | `x / y`       |
| `%`      | Modulus        | Remainder of division              | `x % y`       |
| `++`     | Increment      | Increases variable by 1 (Pre/Post) | `++x` / `x++` |
| `--`     | Decrement      | Decreases variable by 1 (Pre/Post) | `--x` / `x--` |

**Example:**

```c
#include <stdio.h>

int main() {
    int x = 10, y = 3;

    printf("Addition: %d\n", x + y);
    printf("Subtraction: %d\n", x - y);
    printf("Multiplication: %d\n", x * y);
    printf("Division: %d\n", x / y);  // Integer division
    printf("Modulus: %d\n", x % y);

    x++; // Increment
    printf("Incremented x: %d\n", x);

    y--; // Decrement
    printf("Decremented y: %d\n", y);

    return 0;
}
```

---

## **2. Assignment & Augmented Assignment Operators**

Used to assign values to variables.
Augmented assignment combines assignment with an operation.

| Operator | Example   | Equivalent To | Description             |
| -------- | --------- | ------------- | ----------------------- |
| `=`      | `x = 5`   | `x = 5`       | Assigns value           |
| `+=`     | `x += 3`  | `x = x + 3`   | Adds and assigns        |
| `-=`     | `x -= 3`  | `x = x - 3`   | Subtracts and assigns   |
| `*=`     | `x *= 3`  | `x = x * 3`   | Multiplies and assigns  |
| `/=`     | `x /= 3`  | `x = x / 3`   | Divides and assigns     |
| `%=`     | `x %= 3`  | `x = x % 3`   | Modulus and assigns     |
| `&=`     | `x &= 3`  | `x = x & 3`   | Bitwise AND and assigns |
| `\|=`    | `x \|= 3` | `x = x \| 3`  | Bitwise OR and assigns  |
| `^=`     | `x ^= 3`  | `x = x ^ 3`   | Bitwise XOR and assigns |
| `>>=`    | `x >>= 3` | `x = x >> 3`  | Right shift and assign  |
| `<<=`    | `x <<= 3` | `x = x << 3`  | Left shift and assign   |

**Example:**

```c
#include <stdio.h>

int main() {
    int x = 10;
    x += 5; // x = x + 5
    printf("Updated x: %d\n", x); // Output: 15
    return 0;
}
```

---

## **3. Comparison Operators**

Compare two values and return `1` (true) or `0` (false).

| Operator | Name                | Example  | Description              |
| -------- | ------------------- | -------- | ------------------------ |
| `==`     | Equal to            | `x == y` | True if equal            |
| `!=`     | Not equal           | `x != y` | True if not equal        |
| `>`      | Greater than        | `x > y`  | True if left is greater  |
| `<`      | Less than           | `x < y`  | True if left is less     |
| `>=`     | Greater or equal to | `x >= y` | True if greater or equal |
| `<=`     | Less or equal to    | `x <= y` | True if less or equal    |

**Example:**

```c
#include <stdio.h>

int main() {
    int x = 5, y = 3;
    printf("x > y: %d\n", x > y); // 1 (true)
    printf("x < y: %d\n", x < y); // 0 (false)
    return 0;
}
```

---

## **4. Logical Operators**

Used to combine conditions.

| Operator | Name | Example            | Description                            |
| -------- | ---- | ------------------ | -------------------------------------- |
| `&&`     | AND  | `x < 5 && y > 2`   | True if both conditions are true       |
| `\|\|`   | OR   | `x < 5 \|\| y > 5` | True if at least one condition is true |
| `!`      | NOT  | `!(x == y)`        | Reverses the result                    |

**Example:**

```c
#include <stdio.h>

int main() {
    int x = 4, y = 6;

    printf("(x < 5 && y > 5): %d\n", (x < 5 && y > 5)); // 1
    printf("(x > 5 || y > 5): %d\n", (x > 5 || y > 5)); // 1
    printf("!(x == 4): %d\n", !(x == 4));               // 0

    return 0;
}
```




