import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 根據部署環境設定 base
  base: mode === 'production' ? process.env.BASE_URL || '/Marketing-web/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
          charts: ['recharts'],
          forms: ['react-hook-form', '@hookform/resolvers', 'zod'],
          router: ['react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // 啟用 CSS 程式碼分割
    cssCodeSplit: true,
    // 啟用來源映射（開發時）
    sourcemap: mode === 'development',
    // 使用 esbuild 壓縮（預設）
    minify: 'esbuild',
  },
  // 預建置選項
  preview: {
    port: 4173,
    host: true,
  },
}));
