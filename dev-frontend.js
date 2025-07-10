#!/usr/bin/env node

// Simple script to run Vite development server for frontend-only development
import { spawn } from 'child_process';

console.log('🚀 Starting frontend development server...');

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5173'], {
  stdio: 'inherit',
  shell: true
});

vite.on('close', (code) => {
  console.log(`Vite process exited with code ${code}`);
});

vite.on('error', (err) => {
  console.error('Failed to start Vite:', err);
});