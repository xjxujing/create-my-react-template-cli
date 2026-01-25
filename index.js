#!/usr/bin/env node

import degit from 'degit';
import process from 'process';
import readline from 'readline';

// Create readline interface for interactive input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get project name interactively
function getProjectName() {
  return new Promise((resolve) => {
    rl.question('🔍 Please enter a name for your project: ', (name) => {
      const trimmedName = name.trim();
      if (trimmedName) {
        resolve(trimmedName);
      } else {
        console.log('⚠️  Project name cannot be empty. Please try again.');
        resolve(getProjectName());
      }
    });
  });
}

// Main function
async function main() {
  let projectName = process.argv[2];

  // If no project name provided as argument, prompt for it
  if (!projectName || projectName.trim() === '') {
    console.log('👋 Welcome to Create Koko React Template!');
    console.log('=======================================');
    projectName = await getProjectName();
  } else {
    projectName = projectName.trim();
  }

  // Validate project name
  const invalidChars = /[<>:"/\\|?*]/;
  if (invalidChars.test(projectName)) {
    console.error('❌ Invalid project name. Avoid using characters: < > : " / \\ | ? *');
    rl.close();
    process.exit(1);
  }

  console.log(`\n🚀 Initializing project: ${projectName}...`);

  // Check if directory already exists
  const fs = await import('fs');
  if (fs.existsSync(projectName)) {
    console.error(`\n❌ Failed to create project: Directory "${projectName}" already exists.`);
    console.error('ℹ️  Please choose a different project name.');
    rl.close();
    process.exit(1);
  }

  try {
    const emitter = degit('xjxujing/react-template', {
      cache: false,
      verbose: true,
    });

    await emitter.clone(projectName);

    console.log(`\n✅ Project created successfully!`);
    console.log('=================================');
    console.log(`\n📁 To get started: cd ${projectName}`);
    console.log('📦 Install dependencies: pnpm install');
    console.log('🚀 Start development server: pnpm run dev');
    console.log(`\n🎉 Happy coding with your new React app!`);
  } catch (err) {
    console.error(`\n❌ Failed to create project: ${err.message}`);
    if (err.code === 'EEXIST') {
      console.error('ℹ️  The directory already exists. Please choose a different project name.');
    }
  } finally {
    rl.close();
  }
}

// Run the main function
main().catch((err) => {
  console.error('❌ An unexpected error occurred:', err);
  rl.close();
  process.exit(1);
});