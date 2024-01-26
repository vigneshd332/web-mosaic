import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

let adapter = vercel();

if (process.argv[3] === "--node") {
  adapter = node({ mode: "standalone" });
}

console.log("Using adapter:", adapter.name);
// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  adapter: adapter,
});
