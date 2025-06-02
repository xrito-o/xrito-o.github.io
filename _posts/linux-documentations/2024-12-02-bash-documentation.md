---
title: "Bash Documentation"
date: 2024-12-03-08:48:39
categories: [Linux Documentations]
tags: [Linux,Shell,Tips]
image:
  path: /assets/img/headers/Bash.jpg
---


# Bash Documentation

## What is Bash?
{% include embed/youtube.html id='I4EWvMFj37g' %}

Bash (Bourne Again Shell) is a Unix shell and command language written as a free software replacement for the Bourne shell. It is widely used as the default login shell for Linux distributions and macOS. Bash combines features from the Korn shell (ksh) and the C shell (csh).

## Key Features
- **Command Execution**: Execute commands interactively or from scripts.
- **Variables**: Support for user-defined and environment variables.
- **Control Structures**: Includes `if`, `for`, `while`, and `case` statements for scripting.
- **Functions**: Define reusable code blocks.
- **I/O Redirection**: Redirect input, output, and error streams.
- **Command History**: Navigate and reuse previously executed commands.
- **Globbing**: File pattern matching using wildcards like `*`, `?`, and `[]`.

## Basic Commands
Here are some essential Bash commands to get started:

### File and Directory Operations
- `ls`: List directory contents.
- `cd`: Change the current directory.
- `pwd`: Print the current working directory.
- `mkdir`: Create a new directory.
- `rm`: Remove files or directories.

### File Viewing
- `cat`: Concatenate and display file contents.
- `less`: View file contents one screen at a time.
- `head`: Display the first few lines of a file.
- `tail`: Display the last few lines of a file.

### Process Management
- `ps`: Display active processes.
- `kill`: Terminate processes by PID.
- `top`: Monitor system processes in real time.

## Bash Scripting Basics
Bash scripts are plain text files containing a series of commands.

### Creating a Script
1. Create a file with a `.sh` extension, e.g., `myscript.sh`.
2. Add the shebang at the top: `#!/bin/bash`.
3. Write your script below the shebang.

### Example Script
```bash
#!/bin/bash
# A simple Bash script

echo "Hello, World!"
name="Bash User"
echo "Welcome, $name!"
```

### Using the `while` Loop
A `while` loop in Bash allows you to execute commands repeatedly as long as a specified condition evaluates to true.

#### Syntax
```bash
while [ condition ]
do
  commands
done
```

#### Example
```bash
#!/bin/bash
# Using a while loop to count down

count=5

while [ $count -gt 0 ]; do
  echo "Countdown: $count"
  count=$((count - 1))
done

echo "Liftoff!"
```

### Using the `if` Statement
The `if` statement in Bash is used to perform conditional checks.

#### Syntax
```bash
if [ condition ]; then
  commands
elif [ another_condition ]; then
  commands
else
  commands
fi
```

#### Example
```bash
#!/bin/bash
# Using an if statement to check a number

number=5

if [ $number -gt 10 ]; then
  echo "The number is greater than 10."
elif [ $number -eq 10 ]; then
  echo "The number is exactly 10."
else
  echo "The number is less than 10."
fi
```

### Running the Script
Make the script executable:
```bash
chmod +x myscript.sh
```
Run it:
```bash
./myscript.sh
```

## Useful Tips
- Use `man bash` to access the Bash manual.
- Use tab completion to speed up typing commands and filenames.
- Combine commands using `&&` (run next if successful) or `||` (run next if failed).

## Resources
- [GNU Bash Manual](https://www.gnu.org/software/bash/manual/)
- [Bash Reference Guide](https://tldp.org/LDP/abs/html/)

---

Thank you for exploring Bash! Happy scripting!
