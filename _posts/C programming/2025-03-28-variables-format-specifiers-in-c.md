---
title: "Variables, Format Specifiers Of C"
date: 2025-03-28-01:55:58
categories: [C programming]
tags: [C programming, Variables, Format Specifiers]
hidden: true
image:
  path: /assets/img/headers/c-programming.png
---



# **C Variables – Complete Guide**

## **1. What is a Variable?**

A **variable** in C is a named memory location used to store data.
A variable has:

* **Data Type** – defines what kind of data it can store.
* **Name** – the identifier.
* **Value** – the stored data.

---

## **2. Declaring and Initializing Variables**

**Declaration** – Reserves memory:

```c
int age;   // no value yet
```

**Initialization** – Assigns a value:

```c
age = 25;
```

**Declaration + Initialization**:

```c
int age = 25;        // integer
float gpa = 3.75;    // floating-point
char grade = 'A';    // single character
char name[] = "Bro"; // string (array of characters)
```

---

## **3. C Data Types (Basic)**

| Data Type | Example | Typical Size\* |
| --------- | ------- | -------------- |
| int       | 42      | 4 bytes        |
| float     | 3.14    | 4 bytes        |
| double    | 3.14159 | 8 bytes        |
| char      | 'A'     | 1 byte         |
| \_Bool    | 0 / 1   | 1 byte         |

> \*Size may vary depending on system and compiler.

---

## **4. Variable Scope**

Scope defines **where** a variable can be accessed.

1. **Local Variables** – Declared inside functions; exist only within that function.

```c
void func() {
    int x = 5; // local
}
```

2. **Global Variables** – Declared outside all functions; accessible from anywhere.

```c
int g = 10; // global
```

3. **Block Scope** – Declared inside `{}`; accessible only inside that block.

```c
if (1) {
    int y = 20; // block scope
}
```

---

## **5. Storage Classes**

Storage classes define **lifetime** and **visibility**.

| Keyword  | Meaning                                           |
| -------- | ------------------------------------------------- |
| auto     | Default for local variables.                      |
| static   | Retains value between function calls.             |
| extern   | Declared in another file.                         |
| register | Suggests storing in CPU register (faster access). |

---

## **6. Constants**

Constants store fixed values that cannot change.

```c
const float PI = 3.14;   // constant variable
#define MAX 100          // preprocessor constant
```

---

## **7. Format Specifiers**

Used with `printf()` / `scanf()` to display or read variables.

### **Integer**

| Specifier   | Meaning          |
| ----------- | ---------------- |
| `%d` / `%i` | Signed integer   |
| `%u`        | Unsigned integer |
| `%o`        | Octal            |
| `%x` / `%X` | Hexadecimal      |

### **Floating-Point**

| Specifier   | Meaning                 |
| ----------- | ----------------------- |
| `%f`        | Decimal notation        |
| `%.nf`      | Fixed decimal places    |
| `%e` / `%E` | Scientific notation     |
| `%g` / `%G` | Shortest representation |

### **Character & String**

| Specifier | Meaning          |
| --------- | ---------------- |
| `%c`      | Single character |
| `%s`      | String           |

### **Pointer**

| Specifier | Meaning        |
| --------- | -------------- |
| `%p`      | Memory address |

### **Special**

| Specifier | Meaning    |
| --------- | ---------- |
| `%%`      | Prints `%` |

---

## **8. Example Program**

```c
#include <stdio.h>

int globalVar = 100; // global variable

int main() {
    int age = 25;           // integer
    float gpa = 3.75;       // float
    char grade = 'A';       // char
    char name[] = "Bro";    // string
    const float PI = 3.14;  // constant

    printf("Name: %s\n", name);
    printf("Age: %d\n", age);
    printf("GPA: %.2f\n", gpa);
    printf("Grade: %c\n", grade);
    printf("PI: %.2f\n", PI);
    printf("Global Var: %d\n", globalVar);
    printf("Memory address of age: %p\n", (void*)&age);

    return 0;
}
```
