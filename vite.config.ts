import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
// import mkcert from 'vite-plugin-mkcert';
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    // Allows using React dev server along with building a React application with Vite.
    // https://npmjs.com/package/@vitejs/plugin-react-swc
    react(),
    // Allows using the compilerOptions.paths property in tsconfig.json.
    // https://www.npmjs.com/package/vite-tsconfig-paths
    tsconfigPaths(),
    // Create a custom SSL certificate valid for the local machine.
    // https://www.npmjs.com/package/vite-plugin-mkcert
    // mkcert(),
    inject({
      Buffer: ["buffer", "Buffer"], // Polyfill Buffer
    }),
  ],
  publicDir: './public',
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true,
    port: 4173, // Optional: Ensures the server binds to the right port
  },
  preview: {
    host: '0.0.0.0', // Required to allow Render to access the preview server
    port: 4173,      // Matches Render's detected port
  },
});

