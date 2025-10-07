# JDK Installation Guide (Latest Version)

### Prerequisites

- **Operating System**: Windows, macOS, or Linux
- **Administrator Access**: Required for system-wide installation
- **Internet Connection**: To download JDK packages

---

### Step 1: Download JDK Installer

Visit the official JDK download page:

👉 [Download JDK (Java Development Kit)](https://jdk.java.net/)

You will find two main types of releases:

- **LTS (Long-Term Support)**: Recommended for most users (e.g., Java 21 LTS)
- **Latest Release**: Includes the newest features, suitable for testing and learning

---

### Step 2: Run the Installer

#### For Windows:

1. **Download the Installer**: Choose `.msi` or `.exe` for Windows (x64).
2. **Launch Installer**: Double-click the downloaded file.
3. **Follow the Setup Wizard**: Accept license, choose installation path, keep defaults if unsure.
4. **Finish Installation**: Click “Install” → “Finish” once complete.

#### For macOS:

1. **Download the `.pkg` File**: Choose the macOS package from the site.
2. **Run the Installer**: Double-click `.pkg` and follow on-screen steps.
3. **Install Location**: By default, the JDK is installed in `/Library/Java/JavaVirtualMachines/`.

#### For Linux:

- **Using Default Package Manager (may not be the latest)**:

  ```bash
  sudo apt update
  sudo apt install default-jdk
  ```

- **Install a Specific Version (example: OpenJDK 21)**:

  ```bash
  sudo apt update
  sudo apt install openjdk-21-jdk
  ```

- **Using Tarball (Manual Install)**:

  1. Download `.tar.gz` from [Adoptium](https://adoptium.net) or Oracle.
  2. Extract and move to `/usr/lib/jvm/`.
  3. Update environment variables (see below).

---

### Step 3: Set Environment Variables

#### Windows:

1. Open **Start → Environment Variables → Edit the system environment variables**.
2. Add a new system variable:

   - **Variable name**: `JAVA_HOME`
   - **Variable value**: e.g., `C:\Program Files\Java\jdk-21`

3. Edit the **Path** variable → Add: `%JAVA_HOME%\bin`
4. Save and restart Command Prompt.

#### macOS / Linux:

Add the following to your shell config file (`~/.zshrc`, `~/.bashrc`, etc.):

```bash
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64   # adjust path if needed
export PATH=$JAVA_HOME/bin:$PATH
```

Then apply changes:

```bash
source ~/.zshrc
```

---

### Step 4: Verify Installation

Run the following commands:

```bash
java -version
javac -version
```

Expected output: Installed version details, e.g.

```
openjdk version "21.0.x" 2025-xx-xx
```

---

### Step 5: Update JDK (if needed)

- **Windows / macOS**:

  - Download the latest `.msi` or `.pkg` from [jdk.java.net](https://jdk.java.net/) or [Adoptium](https://adoptium.net).
  - Install it the same way as before (overwrites older version).

- **Linux (Ubuntu/Debian)**:

  ```bash
  sudo apt update
  sudo apt upgrade openjdk-21-jdk
  ```

- **Managing Multiple Versions (Linux/macOS)**:

  ```bash
  /usr/libexec/java_home -V   # macOS list JDKs
  sudo update-alternatives --config java   # Linux switch JDKs
  ```

---

### Step 6: Test JDK Setup

Create a file `Hello.java`:

```java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hello, JDK is working!");
  }
}
```

Compile and run:

```bash
javac Hello.java
java Hello
```

Output should be:

```
Hello, JDK is working!
```

---

### Additional Resources

- [Official JDK Downloads](https://jdk.java.net/)
- [Adoptium Temurin Builds](https://adoptium.net/)
- [Java Documentation](https://docs.oracle.com/en/java/)
