import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory for the build process
    emptyOutDir: true, // Clear the output directory before building
    base: '/portfolio/', // Set the base path for deployed assets (replace with your desired path)
  },
})
