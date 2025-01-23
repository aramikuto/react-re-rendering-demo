import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ReactCompilerConfig = {
  target: '18',
  // Apply only to the ComponentForCompiler.tsx
  sources: (filename: string) => filename.indexOf('components-compiler-pt') !== -1
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig]
        ]
      }
    })
  ],
})
