import { defineConfig } from "vite";

export default defineConfig({
  base: "/kws2100-lecture-05",
  server: {
    proxy: {
      "/kws2100-lecture-05/api": "http://localhost:3000",
    },
  },
});
