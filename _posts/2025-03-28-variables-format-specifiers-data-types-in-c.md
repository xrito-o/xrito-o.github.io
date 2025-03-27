---
title: "Variables, Format Specifiers, Data Types In C"
date: 2025-03-28-01:55:58
categories: [Programming]
tags: [c,Variables,Format Specifiers,Data Types]
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


| Specifier    | Description              | Example                     |
| -------------- | -------------------------- | ----------------------------- |
| `%d` or `%i` | Signed integer (decimal) | `printf("%d", 42);`         |
| `%u`         | Unsigned integer         | `printf("%u", 42);`         |
| `%o`         | Octal integer            | `printf("%o", 42);` → `52` |
| `%x`         | Hexadecimal (lowercase)  | `printf("%x", 42);` → `2a` |
| `%X`         | Hexadecimal (uppercase)  | `printf("%X", 42);` → `2A` |

---

#### **2. Floating-Point Format Specifiers**


| Specifier    | Description                            | Example                                    |
| -------------- | ---------------------------------------- | -------------------------------------------- |
| `%f`         | Floating-point (decimal notation)      | `printf("%f", 3.14159);` → `3.141590`     |
| `%.nf`       | Fixed decimal places (`n` digits)      | `printf("%.2f", 3.14159);` → `3.14`       |
| `%e` or `%E` | Scientific notation                    | `printf("%e", 3.14159);` → `3.141590e+00` |
| `%g` or `%G` | Shortest representation (`%f` or `%e`) | `printf("%g", 3.14159);` → `3.14159`      |

---

#### **3. Character & String Format Specifiers**


| Specifier | Description | Example                             |
| ----------- | ------------- | ------------------------------------- |
| `%c`      | Character   | `printf("%c", 'A');` → `A`         |
| `%s`      | String      | `printf("%s", "Hello");` → `Hello` |

---

#### **4. Pointer Format Specifier**


| Specifier | Description           | Example              |
| ----------- | ----------------------- | ---------------------- |
| `%p`      | Prints memory address | `printf("%p", ptr);` |

---

#### **5. Miscellaneous**


| Specifier | Description | Example                |
| ----------- | ------------- | ------------------------ |
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

## **3. Data Types in C**

The data type specifies the size and type of information the variable will store.

{% include embed/youtube.html id='1eyf1-RU_eg' %}


| Data Type | Size (bytes) | Description                               |
| ----------- | -------------- | ------------------------------------------- |
| `int`     | 4            | Stores integers (whole numbers)           |
| `float`   | 4            | Stores decimal numbers (single precision) |
| `double`  | 8            | Stores decimal numbers (double precision) |
| `char`    | 1            | Stores a single character                 |
| `void`    | 0            | Represents "no type" (used for functions) |

```c
    char a = 'C';                   // single character    %c
    char b[] = "Bro";            // array of characters %s  

    float c = 3.141592;                          // 4 bytes (32 bits of precision) 6 - 7 digits %f
    double d = 3.141592653589793; // 8 bytes (64 bits of precision) 15 - 16 digits %lf

    bool e = true;                         // 1 byte (true or false) %d
  
    char f = 120;                          // 1 byte (-128 to +127) %d or %c
    unsigned char g = 255;       // 1 byte (0 to +255) %d or %c

    short h = 32767;                   // 2 bytes (−32,768 to +32,767) %d
    unsigned short i = 65535;  // 2 bytes (0 to +65,535) %d

    int j = 2147483647;                     // 4 bytes (-2,147,483,648 to +2,147,483,647) %d
    unsigned int k = 4294967295;  // 4 bytes (0 to +4,294,967,295) %u
    long long int l = 9223372036854775807; // 8 bytes (-9 quintillion to +9 quintillion) %lld
    unsigned long long int m = 18446744073709551615U; // 8 bytes (0 to +18 quintillion) %llu

    sprintf("%c\n", a);  // char
    printf("%s\n", b);  // character array
    printf("%f\n", c);  // float
    printf("%lf\n", d); // double
    printf("%d\n", e);  // bool
    printf("%d\n", f);  // char as numeric value
    printf("%d\n", g);  // unsigned char as numeric value
    printf("%d\n", h);  // short
    printf("%d\n", i);  // unsigned short
    printf("%d\n", j);  // int
    printf("%u\n", k);  // unsigned int
    printf("%lld\n", l);  // long long int
    printf("%llu\n", m);  // unsigned long long int

```

## 4. Constants in C**

To create a constant variable (unchangeable value), use `const`:

```c
const float PI = 3.1416;
```

or `#define` (preprocessor directive):

```sc
#define MAX_SIZE 100
```
