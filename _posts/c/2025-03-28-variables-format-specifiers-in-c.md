---
title: "Variables, Format Specifiers Of C"
date: 2025-03-28-01:55:58
categories: [C programming]
tags: [C programming, Variables, Format Specifiers]
image:
  path: /assets/img/headers/c-programming.png
---

In C, variables are used to store data values. A variable has a **data type**, a **name**, and a **value**. Here’s a breakdown of variables in C:

---

## **1.Declaring and Initializing Variables**

To declare a variable:

```c
data_type variable_name;
```

```c
    int x;            //declaration
```

To declare and initialize:

```c
data_type variable_name = value;
```

```c
    int x;            //declaration
    x = 123;       //initialization
```

Example:

```c
int age = 25;   // Integer variable
float gpa = 2.05;       //floating point number
char grade = 'C';        //single character
char name[] = "Bro"; //array of characters
float pi = 3.14;  // Floating-point variable
```

---

## **2.C Format Specifiers**

Format specifiers in C are used with functions like `printf()` and `scanf()` to specify the **type** of data being printed or read.

#### **1. Integer Format Specifiers**

| Specifier    | Description              | Example                    |
| ------------ | ------------------------ | -------------------------- |
| `%d` or `%i` | Signed integer (decimal) | `printf("%d", 42);`        |
| `%u`         | Unsigned integer         | `printf("%u", 42);`        |
| `%o`         | Octal integer            | `printf("%o", 42);` → `52` |
| `%x`         | Hexadecimal (lowercase)  | `printf("%x", 42);` → `2a` |
| `%X`         | Hexadecimal (uppercase)  | `printf("%X", 42);` → `2A` |

---

#### **2. Floating-Point Format Specifiers**

| Specifier    | Description                            | Example                                   |
| ------------ | -------------------------------------- | ----------------------------------------- |
| `%f`         | Floating-point (decimal notation)      | `printf("%f", 3.14159);` → `3.141590`     |
| `%.nf`       | Fixed decimal places (`n` digits)      | `printf("%.2f", 3.14159);` → `3.14`       |
| `%e` or `%E` | Scientific notation                    | `printf("%e", 3.14159);` → `3.141590e+00` |
| `%g` or `%G` | Shortest representation (`%f` or `%e`) | `printf("%g", 3.14159);` → `3.14159`      |

---

#### **3. Character & String Format Specifiers**

| Specifier | Description | Example                            |
| --------- | ----------- | ---------------------------------- |
| `%c`      | Character   | `printf("%c", 'A');` → `A`         |
| `%s`      | String      | `printf("%s", "Hello");` → `Hello` |

---

#### **4. Pointer Format Specifier**

| Specifier | Description           | Example              |
| --------- | --------------------- | -------------------- |
| `%p`      | Prints memory address | `printf("%p", ptr);` |

---

#### **5. Miscellaneous**

| Specifier | Description | Example               |
| --------- | ----------- | --------------------- |
| `%%`      | Prints`%`   | `printf("%%");` → `%` |

---

#### **6. Width & Precision Modifiers**

You can control the **width** and **precision** of output.

- **Width (`%mX`)**: Specifies **minimum** width.
- **Precision (`%.nX`)**: Controls decimal places for floating points.

#### Example:

```c
printf("%10d", 42);   // Output: "        42" (right-aligned)
printf("%-10d", 42);  // Output: "42        " (left-aligned)
printf("%.2f", 3.14159); // Output: "3.14"
```

---

#### **7. Example Program**

```c
#include <stdio.h>

int main() {
    int num = 42;
    float pi = 3.14159;
    char ch = 'A';
    char str[] = "Hello";
    char name[] = "Bro"; //array of characters
    char grade = 'C';        //single character
    float gpa = 2.05;       //floating point number

    printf("Integer: %d\n", num);
    printf("Float: %.2f\n", pi);
    printf("Character: %c\n", ch);
    printf("String: %s\n", str);
    printf("Hexadecimal: %x\n", num);
    printf("Pointer: %p\n", (void*)&num);
    printf("Hello %s\n", name);
    printf("Your average grade is %c\n", grade);
    printf("Your gpa is %f\n", gpa);

    return 0;
}
```
