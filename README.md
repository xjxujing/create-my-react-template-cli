# Create Koko React App

A simple CLI tool for quickly creating new projects from custom React templates.

## Language Switch

**English Version:** [README.md](README.md) (Current version)
**Chinese Version:** [README-zh.md](README-zh.md)

---

## Features

- 🚀 Quickly create projects based on React + TypeScript + Vite
- 📦 Built-in Tailwind CSS 4.x and Shadcn UI component library
- 🔧 Automatically initialize Git repository
- 📝 Provides interactive command-line interface
- 🛠️ Supports specifying project name via command-line arguments
- 🎯 Includes complete development toolchain (ESLint, Prettier, Husky, etc.)

## Installation

You can use npx directly without installation:

```bash
npx create-koko-react-app
```

Or install globally:

```bash
npm install -g create-koko-react-app
```

## Usage

### Interactive Mode

Run the command without arguments, and the CLI will prompt you to enter a project name:

```bash
npx create-koko-react-app
```

### Directly Specify Project Name

You can also specify the project name directly on the command line:

```bash
npx create-koko-react-app my-react-app
```

## Project Structure

The created project will include the following features:

- **React 19** - Latest version of React
- **TypeScript 5.9** - Type-safe development experience
- **Vite 7** - Fast development server and build tool
- **Tailwind CSS 4.x** - Utility-first CSS framework
- **ESLint & Prettier** - Code quality and formatting tools
- **Husky & Commitlint** - Git hooks and commit specifications

## Project Configuration Files

### package.json Scripts

The created project includes the following npm scripts:

```json
{
  "scripts": {
    "dev": "vite",                    // Start development server
    "build": "tsc -b && vite build",  // Build for production
    "lint": "eslint .",              // Run ESLint
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,css,scss,json}\"",  // Format code
    "format:check": "prettier --check \"src/**/*.{ts,tsx,js,jsx,css,scss,json}\"", // Check code format
    "preview": "vite preview",       // Preview production build
    "lint:staged": "lint-staged",    // Check staged files
    "spell:check": "cspell lint --dot --gitignore --color --cache --show-suggestions \"(packages|apps)/**/*.@(html|js|cjs|mjs|ts|tsx|css|scss|md)\"", // Spell check
    "commit": "git-cz",              // Interactive commit
    "prepare": "husky"              // Initialize Husky hooks
  }
}
```

## Development Instructions

### Local Development

If you want to modify and develop this CLI tool:

```bash
# Clone the repository
git clone https://github.com/xjxujing/create-my-react-template-cli.git

# Enter the project directory
cd create-my-react-template-cli

# Install dependencies
npm install

# Link to global
npm link

# Now you can use the locally modified version
create-koko-react-app my-test-project
```

### Publishing

The project is configured with automatic version updates. Use the following command to publish a new version:

```bash
npm publish
```

This will automatically increment the patch version number and publish to npm.

## Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Development language
- **DeGit** - Git history-free repository cloning tool
- **Readline** - Interactive command-line interface

## License

MIT

## Author

xjxujing
