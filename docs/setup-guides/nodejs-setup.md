## Node.js Installation Guide (Latest Version)

### Prerequisites

- **Operating System**: Windows, macOS, or Linux
- **Administrator Access**: Required for installing system-wide packages

---

### Step 1: Download Node.js Installer

Visit the official Node.js website to download the installer:

👉 [Download Node.js](https://nodejs.org/en/download/)

You have two options:

- **LTS (Long-Term Support)**: Recommended for most users, ensuring stability and extended support.
- **Current**: Includes the latest features, suitable for testing and development.

---

### Step 2: Run the Installer

#### For Windows:

1. **Run the Installer**: Launch the downloaded `.msi` file.
2. **Follow the Setup Wizard**: Accept the license agreement, choose the installation path, and proceed with the default settings.
3. **Install Tools for Native Modules**: Optionally, check the box to install additional tools for building native modules.
4. **Complete Installation**: Click "Install" and then "Finish" once the process is complete.

#### For macOS:

1. **Run the Installer**: Open the downloaded `.pkg` file.
2. **Follow the Installation Steps**: Follow the on-screen instructions to complete the installation.

#### For Linux:

- **Using Package Manager**:

  ```bash
  sudo apt update
  sudo apt install nodejs npm
  ```

  This installs Node.js and npm from your distribution's package repository.

- **Using NodeSource Repository** (for the latest version):

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

  This method ensures you get the latest version of Node.js.

---

### Step 3: Verify Installation

After installation, verify that Node.js and npm are correctly installed:

```bash
node -v
npm -v
```

You should see version numbers for both Node.js and npm, confirming successful installation.

---

### Step 4: Update Node.js (if needed)

If you need to update Node.js to the latest version:

- **Using Node Version Manager (nvm)**:

  - **Install nvm**:

    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```

  - **Install Latest Node.js Version**:

    ```bash
    nvm install node
    ```

  - **Use the Installed Version**:

    ```bash
    nvm use node
    ```

- **Using NodeSource Repository** (for Linux):

  ```bash
  curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
  sudo apt install -y nodejs
  ```

---

### Step 5: Initialize npm in Your Project

Navigate to your project directory and initialize npm:

```bash
cd your-project-directory
npm init -y
```

This creates a `package.json` file, allowing you to manage project dependencies.

---

### Step 6: Install Project Dependencies

Install necessary packages for your project:

```bash
npm install express
```

Replace `express` with any other package you need.

---

### Additional Resources

For more detailed information and advanced configurations, refer to the official Node.js documentation:

[Node.js Documentation](https://nodejs.org/en/docs/)
