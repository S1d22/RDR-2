import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file from the current directory
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    base: '/', 
    define: {
      // This fix replaces 'process.env' references so the browser doesn't crash
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY),
      'process.env': env,
    },
    resolve: {
      alias: {
        // This ensures that '@' refers to your root folder
        '@': path.resolve(__dirname, './'),
      },
    },
    build: {
      // This ensures your build doesn't fail if there are small typescript warnings
      outDir: 'dist',
    }
  };
});
