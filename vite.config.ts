import react from "@vitejs/plugin-react-swc";
// @ts-expect-error - no TS types yet for beta test.
import reactCompiler from "babel-plugin-react-compiler";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactCompiler, react(), tsconfigPaths()],
});
