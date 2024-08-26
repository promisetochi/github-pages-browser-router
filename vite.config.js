import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import viteTsconfigPaths from 'vite-tsconfig-paths'
// import svgrPlugin from "vite-plugin-svgr"
// import viteCompression from "vite-plugin-compression"
// const res = require("dotenv").load()
// const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    react({
      // jsxRuntime: "classic",
    }),
  ],
  // define: {
  //   global: {},
  //   process: {
  //     env: res.parsed,
  //   },
  // },
  // assetsInclude: ["**/*.xls", "**./*.md"],
  build: {
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
  // optimizeDeps: {
  //   exclude: ["uuid/v4"],
  // },
  // resolve: {
  //   alias: {
  //     "react-native-fs": path.resolve(__dirname, "./RNFS.js"),
  //     "uuid/v4": path.resolve(__dirname, "./UUIDV4.js"),
  //   },
  // },
})
