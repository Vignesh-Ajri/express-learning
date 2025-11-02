# NPM Basics

NPM (Node Package Manager) is a package manager for Node.js that helps you install, manage, and share packages/modules.

---

## 1. Check Node and NPM Versions

```bash
node -v
npm -v
```

## 2. Initialize a Project

```bash
npm init
# or for default options
npm init -y
```

This creates a `package.json` file which stores project info and dependencies.

## 3. Install Packages

### Local Installation (for project)

```bash
npm install <package-name>
```

Example:

```bash
npm install express
```

### Global Installation (system-wide)

```bash
npm install -g <package-name>
```

## 4. Uninstall Packages

```bash
npm uninstall <package-name>
```

## 5. Update Packages

```bash
npm update <package-name>
```

## 6. Check Installed Packages

```bash
npm list        # local
npm list -g     # global
```

## 7. Run Scripts

Scripts defined in `package.json` can be run with:

```bash
npm run <script-name>
```

Example `package.json` snippet:

```json
"scripts": {
  "start": "node index.js",
  "test": "echo \"No tests defined\""
}
```

Run:

```bash
npm run start
```

## 8. Package.json Key Fields

- `name`: Project name
- `version`: Project version
- `description`: Short description
- `main`: Entry file (default: `index.js`)
- `scripts`: Commands to run scripts
- `dependencies`: Packages required to run the app
- `devDependencies`: Packages only for development