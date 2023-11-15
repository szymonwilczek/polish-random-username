import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "dist/index.js",
  output: [
    {
      file: "dist/random-username.cjs.development.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/random-username.cjs.production.min.js",
      format: "cjs",
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: "dist/random-username.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [typescript()],
};
