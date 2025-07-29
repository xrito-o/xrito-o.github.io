---
title: "Fundamentals of C"
date: 2025-04-03-11:20:37
categories: [C programming]
tags: [C programming]
image:
  path: /assets/img/headers/c-programming.png
---
<!--[**1.What is C?**](#what-is-c)

[**2.constants**](#constants)

[**3.Variables**](#variables)

[**Data Types in C**](#data-types-in-c)

[**4.Header File Libraries**](#header-file-libraries)

[**5.hello-world.c**](#hello-worldc)-->


# **C Programming**

## **What is C?**

C is a general-purpose programming language created by **Dennis Ritchie** in 1972 at Bell Labs. It is fast, powerful, and forms the foundation of many modern languages. C is closely tied to the development of **UNIX**.

---

## **[Constants](/posts/constants-in-c/)**

Constants are fixed values that **do not change** during program execution.
They can be **Primary** (integer, floating-point, character) or **Secondary** (string, array, pointer, enum, struct, macro).

---

## **[Variables](/posts/variables-format-specifiers-in-c/)**

Variables are named memory locations used to store data.
They can hold constants such as integers, characters, or floating-point numbers.
Example:

```c
int age = 25;
```

---

## **[Data Types](/posts/data-types-of-c/)**

Data types define the **type** and **size** of data a variable can store.
Examples: `int` (4 bytes), `float` (4 bytes), `double` (8 bytes), `char` (1 byte), `void` (no value).

---

## **[Operators](/posts/operators-in-c/)**

Operators are symbols that perform operations on variables and values.
Main categories include:

* Arithmetic
* Assignment
* Comparison
* Logical

---

## **[Header File Libraries](/posts/header-file-libraries-in-c/)**

Header files contain **function declarations**, **macros**, and **definitions**.
They allow you to use built-in functions like `printf()` without writing them yourself.
Example: `<stdio.h>` for input/output functions.

---

## **Hello World Program**

```c
#include <stdio.h>

int main() {
    printf("Hello World!");
    return 0;
}
```

---

If you want, I can now make this **front page match the style of your other cleaned docs** so your whole C programming guide feels like one polished book.
Do you want me to do that?









