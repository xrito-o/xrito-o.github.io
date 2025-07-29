---
title: "Data Types Of C"
date: 2025-03-28-01:55:58
categories: [C programming]
tags: [C programming, Data Types]
hidden: true
image:
  path: /assets/img/headers/c-programming.png
---


# **C Data Types – Complete Guide**

{% include embed/youtube.html id='1eyf1-RU_eg' %}

## **1. What is a Data Type?**

A **data type** in C defines:

* The **type** of data a variable can store.
* The **size** (in bytes) of that data.
* The **range** of values it can hold.
* The **format specifier** to use when printing or reading it.

---

## **2. Basic Data Types Table**

| Data Type | Size\*  | Description                              |
| --------- | ------- | ---------------------------------------- |
| `int`     | 4 bytes | Whole numbers (integers)                 |
| `float`   | 4 bytes | Decimal numbers (single precision)       |
| `double`  | 8 bytes | Decimal numbers (double precision)       |
| `char`    | 1 byte  | Single character                         |
| `void`    | 0 bytes | Represents “no type” (used in functions) |

> \*Sizes may vary depending on the compiler and system.

---

## **3. Extended Data Types and Ranges**

| Data Type                   | Size\*  | Range                                | Format Specifier |
| --------------------------- | ------- | ------------------------------------ | ---------------- |
| `bool` (from `<stdbool.h>`) | 1 byte  | `true` / `false`                     | `%d`             |
| `char`                      | 1 byte  | `-128` to `127`                      | `%c` / `%d`      |
| `unsigned char`             | 1 byte  | `0` to `255`                         | `%c` / `%d`      |
| `short`                     | 2 bytes | `-32,768` to `32,767`                | `%d`             |
| `unsigned short`            | 2 bytes | `0` to `65,535`                      | `%d`             |
| `int`                       | 4 bytes | `-2,147,483,648` to `2,147,483,647`  | `%d`             |
| `unsigned int`              | 4 bytes | `0` to `4,294,967,295`               | `%u`             |
| `long long int`             | 8 bytes | `-9 quintillion` to `+9 quintillion` | `%lld`           |
| `unsigned long long int`    | 8 bytes | `0` to `18 quintillion`              | `%llu`           |
| `float`                     | 4 bytes | \~6–7 decimal digits precision       | `%f`             |
| `double`                    | 8 bytes | \~15–16 decimal digits precision     | `%lf`            |

---

## **4. Example Usage**

```c
#include <stdio.h>
#include <stdbool.h> // for bool

int main() {
    char a = 'C';                   // single character
    char b[] = "Bro";               // string (array of chars)

    float c = 3.141592;              // single precision
    double d = 3.141592653589793;    // double precision

    bool e = true;                   // boolean

    char f = 120;                    // char as number
    unsigned char g = 255;           // unsigned char

    short h = 32767;                 // short integer
    unsigned short i = 65535;        // unsigned short

    int j = 2147483647;              // int
    unsigned int k = 4294967295;     // unsigned int

    long long int l = 9223372036854775807LL; // long long
    unsigned long long int m = 18446744073709551615ULL; // unsigned long long

    printf("%c\n", a);    // char
    printf("%s\n", b);    // string
    printf("%f\n", c);    // float
    printf("%lf\n", d);   // double
    printf("%d\n", e);    // bool
    printf("%d\n", f);    // char as number
    printf("%d\n", g);    // unsigned char as number
    printf("%d\n", h);    // short
    printf("%d\n", i);    // unsigned short
    printf("%d\n", j);    // int
    printf("%u\n", k);    // unsigned int
    printf("%lld\n", l);  // long long int
    printf("%llu\n", m);  // unsigned long long int

    return 0;
}
```
