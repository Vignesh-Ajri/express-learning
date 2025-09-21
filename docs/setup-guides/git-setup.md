# Git Setup Guide

###  Install Git

- **Windows / macOS / Linux**: [https://git-scm.com/downloads](https://git-scm.com/downloads)
- Verify installation:

```bash
git --version
```

###  Basic Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
git config --global core.editor "code --wait"
```

###  Initialize Git Repository

```bash
cd your-project-folder
git init
```

###  Common Commands

- **Check status**: `git status`
- **Add files**: `git add .`
- **Commit changes**: `git commit -m "Initial commit"`
- **Link remote repo**:

```bash
git remote add origin https://github.com/username/repo.git
```

- **Push to GitHub**: `git push -u origin main`

###  Tips

- Use **.gitignore** to ignore `node_modules`, logs, env files:

```
node_modules
*.log
.env
```

- Always **commit small, logical changes**.
- Pull before pushing: `git pull origin main --rebase`
