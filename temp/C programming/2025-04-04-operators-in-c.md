---
title: "Operators in C"
date: 2025-04-04-04:10:36
categories: [C programming]
tags: [C programming]
image:
  path: /assets/img/headers/c-programming.png
---
### **1. Arithmetic Operators in C**

---

Arithmetic operators are used to perform basic mathematical operations.


| **Operator** | **Name**       | **Description**                        | **Example**                |
| -------------- | ---------------- | ---------------------------------------- | ---------------------------- |
| `+`          | Addition       | Adds two values                        | `x + y`                    |
| `-`          | Subtraction    | Subtracts one value from another       | `x - y`                    |
| `*`          | Multiplication | Multiplies two values                  | `x * y`                    |
| `/`          | Division       | Divides one value by another           | `x / y`                    |
| `%`          | Modulus        | Returns the remainder of division      | `x % y`                    |
| `++`         | Increment      | Increases the value of a variable by 1 | `++x` (Pre) / `x++` (Post) |
| `--`         | Decrement      | Decreases the value of a variable by 1 | `--x` (Pre) / `x--` (Post) |

### **Example Code**

```c
#include <stdio.h>

int main() {
    int x = 10, y = 3;

    printf("Addition: %d\n", x + y);
    printf("Subtraction: %d\n", x - y);
    printf("Multiplication: %d\n", x * y);
    printf("Division: %d\n", x / y);  // Integer division
    printf("Modulus: %d\n", x % y);

    x++;  // Increment
    printf("Incremented x: %d\n", x);

    y--;  // Decrement
    printf("Decremented y: %d\n", y);

    return 0;
}
```

🔹 **Output:**

```
Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3
Modulus: 1
Incremented x: 11
Decremented y: 2
```

---

### **2. Augmented Assignment Operators.**

Assignment operators are used to assign values to variables.


| **Operator** | **Example** | **Equivalent To** | **Description**           |
| -------------- | ------------- | ------------------- | --------------------------- |
| `=`          | `x = 5`     | `x = 5`           | Assigns value to variable |
| `+=`         | `x += 3`    | `x = x + 3`       | Adds and assigns          |
| `-=`         | `x -= 3`    | `x = x - 3`       | Subtracts and assigns     |
| `*=`         | `x *= 3`    | `x = x * 3`       | Multiplies and assigns    |
| `/=`         | `x /= 3`    | `x = x / 3`       | Divides and assigns       |
| `%=`         | `x %= 3`    | `x = x % 3`       | Modulus and assigns       |
| `&=`         | `x &= 3`    | `x = x & 3`       | Bitwise AND and assigns   |
| `            | =`          | `x                | = 3`                      |
| `^=`         | `x ^= 3`    | `x = x ^ 3`       | Bitwise XOR and assigns   |
| `>>=`        | `x >>= 3`   | `x = x >> 3`      | Right shift and assigns   |
| `<<=`        | `x <<= 3`   | `x = x << 3`      | Left shift and assigns    |

#### **Example Code**

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

### **3. Comparison Operators**

Comparison operators compare two values and return `1` (true) or `0` (false).


| **Operator** | **Name**                 | **Example** | **Description**                                   |
| -------------- | -------------------------- | ------------- | --------------------------------------------------- |
| `==`         | Equal to                 | `x == y`    | Returns`1` if values are equal                    |
| `!=`         | Not equal                | `x != y`    | Returns`1` if values are not equal                |
| `>`          | Greater than             | `x > y`     | Returns`1` if `x` is greater than `y`             |
| `<`          | Less than                | `x < y`     | Returns`1` if `x` is less than `y`                |
| `>=`         | Greater than or equal to | `x >= y`    | Returns`1` if `x` is greater than or equal to `y` |
| `<=`         | Less than or equal to    | `x <= y`    | Returns`1` if `x` is less than or equal to `y`    |

#### **Example Code**

```c
#include <stdio.h>

int main() {
    int x = 5, y = 3;
    printf("x > y: %d\n", x > y); // Output: 1 (true)
    printf("x < y: %d\n", x < y); // Output: 0 (false)
    return 0;
}
```

---

### **4. Logical Operators**

Logical operators are used to combine multiple conditions.


| **Operator** | **Name** | **Example**          | **Description**                                    |
| -------------- | ---------- | ---------------------- | ---------------------------------------------------- |
| `&&`         | AND      | `x < 5 && x < 10`    | Returns`1` if both conditions are true             |
| `||`         | OR       | `x < 5 || x < 4`     | Returns 1 if one of the statements is true         |
| `!`          | NOT      | `!(x < 5 && x < 10)` | Reverses the result (true → false, false → true) |

#### **Example Code**

```c
#include <stdio.h>

int main() {
    int x = 4, y = 6;

    printf("(x < 5 && y > 5): %d\n", (x < 5 && y > 5)); // Output: 1
    printf("(x > 5 || y > 5): %d\n", (x > 5 || y > 5)); // Output: 1
    printf("!(x == 4): %d\n", !(x == 4)); // Output: 0

    return 0;
}
```

---

Let me know if you want more examples! 🚀

Would you like to see more examples or explanations? 😊
