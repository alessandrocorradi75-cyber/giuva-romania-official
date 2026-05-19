import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        giuva: {
          bg: "#050b14",
          panel: "#0f1e31",
          cyan: "#38bdf8",
          red: "#ef233c",
          muted: "#b6c3d1"
        }
      }
    },
  },
  plugins: [],
};
export default config;
