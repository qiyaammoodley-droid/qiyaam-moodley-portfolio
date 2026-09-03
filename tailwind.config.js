export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
        mono: ["JetBrains Mono", "monospace"]
      },
      colors: {
        ink: "#080808",
        smoke: "#111111",
        ember: "#ff5a36",
        violet: "#7657ff",
        aqua: "#31d6c2",
        paper: "#f2efe8"
      },
      boxShadow: {
        glow: "0 0 80px rgba(255,90,54,.18)"
      }
    }
  },
  plugins: []
};
