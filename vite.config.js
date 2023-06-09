import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  return {
    define: {
      __APP_ENV__: env,
    },
    plugins: [react()],
    build: {
      outDir: "build",
      sourcemap: true,
    },
    server: {
      port: env.VITE_PORT,
      sourcemap: true,
    },
  };
});
