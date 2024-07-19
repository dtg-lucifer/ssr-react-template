import esbuild from "esbuild";
import cssModulesPlugin from "esbuild-css-modules-plugin";

esbuild
  .build({
    entryPoints: ["./src/index.jsx"],
    bundle: true,
    outfile: "dist/bundle.js",
    minify: true,
    loader: { ".js": "jsx", ".png": "file", ".svg": "file", ".jpg": "file" },
    plugins: [
      cssModulesPlugin(),
    ],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["./server/server.js"],
    minify: true,
    bundle: true,
    outfile: "build/server.js",
    platform: "node",
    target: "node14",
    format: "cjs",
    external: ["react", "react-dom/server", `express`, "fs", "path"],
    plugins: [],
  })
  .catch(() => process.exit(1));
