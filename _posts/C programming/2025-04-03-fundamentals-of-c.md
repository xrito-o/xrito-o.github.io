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

## **What is C?**

C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972.It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.C is strongly associated with UNIX, as it was developed to write the UNIX operating system.

## [**Constants**](/posts/constants-in-c/)

constants are the values which will never change during the execution of program.

 **There are two type of Constants**

1. Primary constants
2. Secondary constants

**Primary constants are of three types.**

1. Integer Constants 
2. Real Constant or Floating Point Constant
3. Character Constant

## [**Variables**](/posts/variables-format-specifiers-in-c/)

Variables are nothing but the name of the locations or addresses of memory which is
given by programmer.

In Variables we can store any [constants](#constants) like integer, character or Real.

- `int` - stores integers (whole numbers), without decimals, such as `123` or `-123`
- `float` - stores floating point numbers, with decimals, such as `19.99` or `-19.99`
- `char` - stores single characters, such as `'a'` or `'B'`. Characters are surrounded by **single quotes**

To create a variable, specify the **type** and assign it a **value**:

```c
type variableName = value;
```

## [**Data Types**](/posts/data-types-of-c/)

The data type specifies the size and type of information the variable will store.


| Data Type | Size (bytes) | Description                               |
| ----------- | -------------- | ------------------------------------------- |
| `int`     | 4            | Stores integers (whole numbers)           |
| `float`   | 4            | Stores decimal numbers (single precision) |
| `double`  | 8            | Stores decimal numbers (double precision) |
| `char`    | 1            | Stores a single character                 |
| `void`    | 0            | Represents "no type" (used for functions) |

## [**Operators**](/posts/operators-in-c/)

Operators in C are symbols that perform operations on variables and values. They are categorized into different types:

1. Arithmetic Operators.
2. Augmented Assignment Operators.
3. Comparison Operators.
4. Logical operators.


## [**Header File Libraries**](/posts/header-file-libraries-in-c/)

A header file in C is a file that contains function declarations, macros, and definitions. It helps you use built-in functions without writing them yourself.

💡 Think of a header file like a toolbox—it gives you ready-made tools (functions) so you don’t have to build them from scratch.

#### **Common C Header Files & Their Uses**


| **Header File**   | **What It Does**                                  |
| ------------------- | --------------------------------------------------- |
| **`<stdio.h>`**   | Input & output (e.g.,`printf`, `scanf`)           |
| **`<stdlib.h>`**  | Memory management (`malloc`, `free`), conversions |
| **`<string.h>`**  | String handling (`strlen`, `strcpy`, `strcmp`)    |
| **`<math.h>`**    | Math operations (`sqrt`, `pow`, `sin`, `cos`)     |
| **`<ctype.h>`**   | Character handling (`toupper`, `isdigit`)         |
| **`<time.h>`**    | Date & time functions (`time`, `clock`)           |
| **`<stdbool.h>`** | Boolean values (`true`, `false`)                  |

## **hello-world.c**

```c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```
